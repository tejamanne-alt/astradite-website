'use client'

import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; z: number; p: number }
type Shot = { x: number; y: number; life: number; len: number }

type StarfieldProps = {
  /** Multiplier on the base density of (w × h / 8200) stars. */
  density?: number
}

const SHOT_VX = -0.16
const SHOT_VY = 0.34

/**
 * The starfield. Stars drift upward and twinkle; a shooting star crosses every
 * 5–11s. Under `prefers-reduced-motion` the drift and the shooting stars stop
 * and the field renders as a still sky.
 *
 * It fills its nearest positioned ancestor. On the home page that is a fixed,
 * viewport-sized backdrop, so the sky holds still while the page scrolls.
 */
export default function Starfield({ density = 1 }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let frame = 0
    let observer: ResizeObserver | null = null
    let reduced = motionQuery.matches

    let w = 0
    let h = 0
    let stars: Star[] = []
    let shot: Shot | null = null
    let nextShot = 2600
    let t = 0
    let last = performance.now()

    const seed = () => {
      const rect = canvas.getBoundingClientRect()
      w = Math.max(1, rect.width)
      h = Math.max(1, rect.height)
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round(((w * h) / 8200) * density)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),
        p: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (now: number) => {
      const dt = Math.min(48, now - last)
      last = now
      t += dt

      ctx.clearRect(0, 0, w, h)

      for (const s of stars) {
        const drift = reduced ? 0 : (t / 1000) * (2.5 + s.z * 9)
        let y = (s.y - drift) % h
        if (y < 0) y += h

        const twinkle = 0.55 + 0.45 * Math.sin(t / 900 + s.p)
        ctx.globalAlpha = Math.max(0, (0.11 + s.z * 0.32) * twinkle)
        ctx.fillStyle = s.z > 0.86 ? '#e8e8e8' : '#d4d4d4'
        ctx.beginPath()
        ctx.arc(s.x, y, 0.4 + s.z * 1.1, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1

      if (!reduced) {
        nextShot -= dt
        if (!shot && nextShot <= 0) {
          shot = {
            x: w * (0.15 + Math.random() * 0.7),
            y: -20,
            life: 0,
            len: 70 + Math.random() * 90,
          }
          nextShot = 5200 + Math.random() * 6000
        }

        if (shot) {
          shot.life += dt
          shot.x += SHOT_VX * dt
          shot.y += SHOT_VY * dt

          const alpha = Math.max(0, 1 - shot.life / 1500)
          const tailX = shot.x - SHOT_VX * shot.len * 3
          const tailY = shot.y - SHOT_VY * shot.len * 3

          const gradient = ctx.createLinearGradient(shot.x, shot.y, tailX, tailY)
          gradient.addColorStop(0, `rgba(232,232,232,${(0.75 * alpha).toFixed(3)})`)
          gradient.addColorStop(1, 'rgba(232,232,232,0)')

          ctx.strokeStyle = gradient
          ctx.lineWidth = 1.4
          ctx.beginPath()
          ctx.moveTo(shot.x, shot.y)
          ctx.lineTo(tailX, tailY)
          ctx.stroke()

          if (shot.y > h + 40 || alpha <= 0) shot = null
        }
      } else {
        shot = null
      }

      frame = requestAnimationFrame(draw)
    }

    const onMotionChange = (event: MediaQueryListEvent) => {
      reduced = event.matches
    }

    seed()
    observer = new ResizeObserver(seed)
    observer.observe(canvas)
    motionQuery.addEventListener('change', onMotionChange)
    frame = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
      motionQuery.removeEventListener('change', onMotionChange)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}
