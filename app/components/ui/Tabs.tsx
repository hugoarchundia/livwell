import { type ReactNode, useState } from 'react'

type Tab = { value: string; label: string; content: ReactNode }

type TabsProps = {
  tabs: Tab[]
  defaultValue?: string
  className?: string
}

export function Tabs({ tabs, defaultValue, className = '' }: TabsProps) {
  const [active, setActive] = useState(defaultValue ?? tabs[0]?.value)
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className='flex gap-2 rounded-full border border-sand bg-white/70 p-1'>
        {tabs.map((t) => (
          <button
            key={t.value}
            type='button'
            onClick={() => setActive(t.value)}
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
              active === t.value
                ? 'bg-sap text-white'
                : 'text-slate hover:bg-sand/60'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((t) => (
          <div
            key={t.value}
            className={active === t.value ? 'block' : 'hidden'}
          >
            {t.content}
          </div>
        ))}
      </div>
    </div>
  )
}
