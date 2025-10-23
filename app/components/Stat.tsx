type StatProps = {
  label: string
  value: string
  hint?: string
}

export function Stat({ label, value, hint }: StatProps) {
  return (
    <div className='flex flex-col gap-1 rounded-xl border border-sand/80 bg-white/70 p-5 text-slate'>
      <div className='text-2xl font-extrabold tracking-tight'>{value}</div>
      <div className='text-xs font-semibold uppercase tracking-widest text-sap'>{label}</div>
      {hint && <div className='text-xs text-slate/70'>{hint}</div>}
    </div>
  )
}


