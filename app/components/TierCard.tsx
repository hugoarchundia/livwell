import Link from 'next/link'
import { type ReactNode } from 'react'

type TierCardProps = {
  level: 'LITE' | 'CORE' | 'PLUS'
  title: string
  description: string
  benefits: string[]
  icon?: ReactNode
  featured?: boolean
  ctaHref?: string
  ctaLabel?: string
}

export function TierCard({
  level,
  title,
  description,
  benefits,
  icon,
  featured,
  ctaHref,
  ctaLabel
}: TierCardProps) {
  const accent =
    level === 'PLUS' ? 'bg-sap' : level === 'CORE' ? 'bg-forest' : 'bg-sage'
  const ring = featured ? 'ring-2 ring-sap' : ''
  return (
    <div className={`group relative rounded-2xl border border-sand bg-white/70 shadow-sm backdrop-blur-sm transition hover:shadow-md ${ring}`}>
      <div
        className={`absolute -top-3 left-4 h-6 w-6 rounded-full ${accent}`}
      ></div>
      <div className='p-6'>
        <div className='flex items-center gap-3'>
          {icon}
          <h3 className='text-lg font-bold text-slate'>{title}</h3>
        </div>
        <p className='mt-2 text-sm text-slate/80'>{description}</p>
        <ul className='mt-4 space-y-2'>
          {benefits.map((b) => (
            <li
              key={b}
              className='flex items-start gap-2 text-sm text-slate/90'
            >
              <span className='mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sap' />
              {b}
            </li>
          ))}
        </ul>
        {ctaHref && ctaLabel && (
          <Link
            href={ctaHref}
            className='mt-5 inline-flex items-center rounded-full border border-sage/50 px-4 py-2 text-xs font-semibold text-forest hover:bg-sand/60'
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </div>
  )
}
