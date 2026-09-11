'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties, ElementType, ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Element to render. Defaults to a div. */
  as?: ElementType
  /** Stagger, in ms — the design uses 0 / 80 / 160 / 240. */
  delay?: number
  className?: string
  style?: CSSProperties
  id?: string
}

/**
 * Entrance wrapper. The design references drive these with
 * `animation-timeline: view()`, which only Chromium implements, so the class
 * is added on first intersection instead — same 700ms curve, same stagger.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className,
  style,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      id={id}
      className={className ? `reveal ${className}` : 'reveal'}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
