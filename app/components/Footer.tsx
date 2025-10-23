export function Footer() {
  return (
    <footer className='border-t border-sand bg-white/70'>
      <div className='mx-auto max-w-6xl px-6 py-8 sm:px-10'>
        <div className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
          <div className='text-xs text-slate/70'>
            © {new Date().getFullYear()} LIV Soluciones en Salud, S.A. de C.V.
          </div>
          <div className='text-[11px] text-slate/70'>NOM-035 • NOM-036-1 • NOM-030 • ISO 45001/45003</div>
        </div>
      </div>
    </footer>
  )
}


