import type { SVGProps } from 'react'

type IconProps = { size?: number } & Omit<SVGProps<SVGSVGElement>, 'width' | 'height'>

/** Arrow icons sit inside links, so they inherit stroke from `currentColor`. */
function Arrow({ size = 16, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    />
  )
}

export function ArrowRight(props: IconProps) {
  return (
    <Arrow {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </Arrow>
  )
}

export function ArrowUpRight({ size = 15, ...rest }: IconProps) {
  return (
    <Arrow size={size} {...rest}>
      <path d="M7 17L17 7M9 7h8v8" />
    </Arrow>
  )
}

/** Feature icons: 24×24 viewBox, 1.6 stroke, round caps and joins. */
function Feature({ size = 22, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e8e8e8"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    />
  )
}

export function QrIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M14 14h3v3h-3zM20 14v3M14 20h6" />
    </Feature>
  )
}

export function TicketListIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M4 6h16M4 12h16M4 18h10" />
      <circle cx="19" cy="18" r="2.2" />
    </Feature>
  )
}

export function BarChartIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M3 20h18M6 20v-6M11 20V8M16 20v-9M21 20V5" />
    </Feature>
  )
}

export function NodeGraphIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="17" r="2.2" />
      <circle cx="19" cy="17" r="2.2" />
      <path d="M10.6 6.8L6.4 15.2M13.4 6.8l4.2 8.4M7.2 17h9.6" />
    </Feature>
  )
}

export function LineChartIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M3 14l4-5 4 3 4-7 6 9" />
      <path d="M3 20h18" />
    </Feature>
  )
}

export function HeartIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M12 21s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10z" />
    </Feature>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M12 3l7.5 3.2v5c0 4.6-3.2 8.3-7.5 9.6-4.3-1.3-7.5-5-7.5-9.6v-5z" />
      <path d="M9.5 12l1.8 1.8 3.4-3.6" />
    </Feature>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.4-4.4" />
    </Feature>
  )
}

export function DocumentIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M4 19V6a2 2 0 0 1 2-2h9l5 5v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M14 4v5h5M8 13h8M8 16.5h5" />
    </Feature>
  )
}
