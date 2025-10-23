import { type SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

export function LeafIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <path
        d='M20 4C12 4 6 10 6 18'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M20 4C20 12 14 18 6 18'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

export function CheckLeafIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <path
        d='M20 4C12 4 6 10 6 18'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M20 4C20 12 14 18 6 18'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M7 13l3 3 7-7'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function CircleIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <circle
        cx='12'
        cy='12'
        r='8.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
