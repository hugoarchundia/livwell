import { type ReactNode } from 'react'

type DivProps = React.HTMLAttributes<HTMLDivElement>

export function Card(props: DivProps) {
  const { className = '', ...rest } = props
  return (
    <div
      className={`rounded-2xl border border-sand bg-white/80 text-slate shadow-sm backdrop-blur-sm ${className}`}
      {...rest}
    />
  )
}

export function CardHeader({ className = '', ...rest }: DivProps) {
  return (
    <div
      className={`flex flex-col gap-1 p-6 ${className}`}
      {...rest}
    />
  )
}

export function CardTitle({ className = '', ...rest }: DivProps) {
  return (
    <div
      className={`text-base font-semibold ${className}`}
      {...rest}
    />
  )
}

export function CardDescription({ className = '', ...rest }: DivProps) {
  return (
    <div
      className={`text-sm text-slate/80 ${className}`}
      {...rest}
    />
  )
}

export function CardContent({ className = '', ...rest }: DivProps) {
  return (
    <div
      className={`p-6 pt-0 ${className}`}
      {...rest}
    />
  )
}
