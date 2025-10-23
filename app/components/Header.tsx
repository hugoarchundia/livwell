import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-sand/80 bg-white/70 backdrop-blur-md'>
      <div className='mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 sm:px-10'>
        <Link
          href='/'
          className='flex items-center gap-3'
        >
          <div className='leading-tight'>
            <span className='block text-sm font-extrabold tracking-wide text-slate'>
              LIV
            </span>
            <span className='block text-[10px] font-medium uppercase tracking-[0.18em] text-sap'>
              Lidera • Inspira • Valora
            </span>
          </div>
        </Link>
        <nav className='hidden items-center gap-6 text-sm text-slate/80 sm:flex'>
          <Link
            href='#sobre'
            className='hover:text-slate'
          >
            Sobre LIV
          </Link>
          <Link
            href='#servicios'
            className='hover:text-slate'
          >
            Servicios
          </Link>
          <Link
            href='#metodologia'
            className='hover:text-slate'
          >
            Metodología
          </Link>
          <Link
            href='#resultados'
            className='hover:text-slate'
          >
            Resultados
          </Link>
          <Link
            href='#productos'
            className='hover:text-slate'
          >
            Productos
          </Link>
          <Link
            href='#contacto'
            className='hover:text-slate'
          >
            Contacto
          </Link>
        </nav>
        <div className='flex items-center gap-3'>
          <Link
            href='#contacto'
            className='hidden rounded-full border border-sage/50 px-4 py-2 text-xs font-semibold text-forest hover:bg-sand/60 sm:inline-flex'
          >
            Solicita diagnóstico
          </Link>
        </div>
      </div>
    </header>
  )
}
