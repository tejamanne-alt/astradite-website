type StarMarkProps = {
  size?: number
  fill?: string
  className?: string
  title?: string
}

/** The Astradite mark at glyph sizes — header, footer, favicons. */
export function StarMark({ size = 20, fill = '#e8e8e8', className }: StarMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      aria-hidden="true"
      className={className}
    >
      <path d="M12 1.8l2.3 7.6 7.6 2.3-7.6 2.3L12 21.6l-2.3-7.6L2.1 11.7l7.6-2.3z" />
    </svg>
  )
}

/** The display mark — the drawn four-point star at the centre of the orbit. */
export function StarMarkLarge({
  size = 116,
  fill = '#e8e8e8',
  className,
  title = 'Astradite',
}: StarMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className={className}
    >
      <path d="M50 3 Q56 44 92 50 Q56 56 50 97 Q44 56 8 50 Q44 44 50 3 Z" fill={fill} />
    </svg>
  )
}
