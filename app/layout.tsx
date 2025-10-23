import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title:
    'LIV Soluciones en Salud | Bienestar para tu gente, poder para tu empresa',
  description:
    'Consultoría integral en salud ocupacional, bienestar mental y cultura organizacional. Cumplimiento NOM-035/036-1/030 e ISO 45001/45003.',
  metadataBase: new URL('https://example.com'),
  applicationName: 'LIV Soluciones en Salud',
  openGraph: {
    title: 'LIV Soluciones en Salud',
    description:
      'Bienestar para tu gente, poder para tu empresa. Consultoría integral en salud ocupacional, bienestar mental y cultura organizacional.',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='es'
      className='bg-sand'
    >
      <body className={`${inter.variable} ${manrope.variable} antialiased min-h-dvh`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
