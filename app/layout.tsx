export const dynamic = 'force-static'

import '@/app/globals.css'
import type { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'HEFFE | Hostelería Eficiente',
  description: 'HEFFE es el sistema operativo de la hostelería ambiciosa. Un gerente ejecutivo digital que impone orden, mejora el ambiente laboral y maximiza el rendimiento del negocio. IA, organización y visión: aquí no venimos a jugar.',
  openGraph: {
    title: 'HEFFE | Hostelería Eficiente',
    description: 'IA, control y visión para la nueva hostelería.',
    url: 'https://heffe.app',
    siteName: 'HEFFE',
    images: [
      {
        url: 'https://heffe.app/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'HEFFE Logo Cover',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-heffe-dark text-heffe-white antialiased">
        <Header />
        <main className="flex-1 px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
