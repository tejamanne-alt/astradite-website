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

/* --- Games ---------------------------------------------------------------- */

export function BallIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.2l3.4 2.5-1.3 4h-4.2l-1.3-4z" />
      <path d="M12 3.2v4M19.6 9.7l-3.5 2.5M16.9 19.2l-1.4-4.1M7.1 19.2l1.4-4.1M4.4 9.7l3.5 2.5" />
    </Feature>
  )
}

export function StopwatchIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 10v3.5l2.3 1.6M9.5 2.5h5M12 2.5V6M18.4 7.6l1.6-1.6" />
    </Feature>
  )
}

export function OfflineIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M3 3l18 18" />
      <path d="M8.2 13.4a5.5 5.5 0 0 1 3.2-1.5M4.6 9.8a10.5 10.5 0 0 1 4-2.4M19.4 9.8a10.5 10.5 0 0 0-7.8-2.9" />
      <path d="M15.8 13.4a5.5 5.5 0 0 0-1.4-1" />
      <circle cx="12" cy="17.6" r="0.9" fill="#e8e8e8" stroke="none" />
    </Feature>
  )
}

export function TrophyIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
      <path d="M7 5.5H4.5V7a3.5 3.5 0 0 0 3 3.4M17 5.5h2.5V7a3.5 3.5 0 0 1-3 3.4" />
      <path d="M12 14v3.5M8.5 20.5h7M9.5 20.5c0-1.7 1.1-3 2.5-3s2.5 1.3 2.5 3" />
    </Feature>
  )
}

export function GamepadIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M7.5 7.5h9a4.5 4.5 0 0 1 4.4 3.6l.9 4.6A2.8 2.8 0 0 1 19 19a2.8 2.8 0 0 1-2.2-1.1L15.5 16h-7l-1.3 1.9A2.8 2.8 0 0 1 5 19a2.8 2.8 0 0 1-2.8-3.3l.9-4.6A4.5 4.5 0 0 1 7.5 7.5z" />
      <path d="M7.5 10.6v2.6M6.2 11.9h2.6M15.4 11.2h.01M17.3 13.1h.01" />
    </Feature>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M12 2.8l7.2 2.7v6c0 4.3-2.9 8.2-7.2 9.7-4.3-1.5-7.2-5.4-7.2-9.7v-6z" />
      <path d="M9 12l2.2 2.2L15.4 10" />
    </Feature>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.8 7l7.1 5.2a2 2 0 0 0 2.2 0L20.2 7" />
    </Feature>
  )
}

/* --- Slime Rush ----------------------------------------------------------- */

export function SlimeIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M4.5 17.5C4.5 9.5 7.6 5 12 5s7.5 4.5 7.5 12.5a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5z" />
      <path d="M9.6 12.6h.01M14.4 12.6h.01" />
    </Feature>
  )
}

export function JumpIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M3 19c3.5 0 5.5-11 9-11s6 5.5 9 5.5" />
      <path d="M18.4 9.6l2.8 3.7-4.4 1.2" />
    </Feature>
  )
}

export function GapIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M2.5 15.5h6.5M15 15.5h6.5" />
      <path d="M9 15.5v4M15 15.5v4" />
      <path d="M12 4.5v6M9.6 8.4L12 10.9l2.4-2.5" />
    </Feature>
  )
}

export function SpeedIcon(props: IconProps) {
  return (
    <Feature {...props}>
      <path d="M3 8.5h8M2 12.5h5.5M4 16.5h6" />
      <path d="M13.5 5.5l7 6.5-7 6.5" />
    </Feature>
  )
}
