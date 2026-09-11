'use client'

import { useEffect, useRef } from 'react'

/** Fixed 2px read-through bar. Scroll listener is passive and rAF-throttled. */
export default function ScrollProgress() {
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const el = fillRef.current
        if (!el) return
        const max = document.documentElement.scrollHeight - window.innerHeight
        const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0
        el.style.width = `${pct}%`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 60,
        background: 'rgba(232,232,232,0.08)',
      }}
    >
      <div
        ref={fillRef}
        style={{
          height: '100%',
          width: '0%',
          background: 'var(--accent)',
          boxShadow: '0 0 14px rgba(232,232,232,0.45)',
        }}
      />
    </div>
  )
}
