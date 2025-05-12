// ✅ layout.tsx – /app/(marketing)/layout.tsx (SEO-ready + favicon)
import "@/styles/globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "HEFFE – Liderazgo inteligente en hostelería",
  description: "HEFFE es el sistema operativo para bares, restaurantes y hoteles. Turnos, clima, alertas y datos reales en una sola plataforma.",
  metadataBase: new URL("https://heffe.org"),
  openGraph: {
    title: "HEFFE – Liderazgo inteligente en hostelería",
    description: "La plataforma todo-en-uno para equipos de hostelería. Sin caos, sin WhatsApp, sin excusas.",
    url: "https://heffe.org",
    siteName: "HEFFE",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "HEFFE App Preview"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
