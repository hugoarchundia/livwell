import { type ReactNode } from 'react'

type SectionProps = {
  id?: string
  overline?: string
  title?: string
  subtitle?: string
  children?: ReactNode
  className?: string
}

export function Section({
  id,
  overline,
  title,
  subtitle,
  children,
  className = ''
}: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full max-w-6xl mx-auto px-6 sm:px-10 py-12 ${className}`}
    >
      {(overline || title || subtitle) && (
        <header className='flex flex-col gap-3 pb-6'>
          {overline && (
            <p className='text-xs font-semibold tracking-widest text-sap uppercase'>
              {overline}
            </p>
          )}
          {title && (
            <h2 className='text-2xl sm:text-3xl font-extrabold text-slate'>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className='max-w-3xl text-base sm:text-lg text-slate/80'>
              {subtitle}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  )
}
