'use client'

import Link from 'next/link'
import { type ReactNode } from 'react'

type CTAButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  ariaLabel?: string
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
  ariaLabel
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  const styles =
    variant === 'primary'
      ? 'bg-forest text-white hover:bg-[color:oklch(0.36_0.06_170)] focus-visible:ring-forest/30 ring-offset-white dark:ring-offset-black'
      : 'border border-sage/40 text-forest hover:bg-sand/60 bg-white/70 backdrop-blur-sm focus-visible:ring-sage/40 ring-offset-white dark:ring-offset-black'

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  )
}
