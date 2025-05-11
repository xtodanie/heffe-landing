'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/producto', label: 'Producto' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full bg-heffe-soft text-heffe-white px-4 py-3 flex justify-between items-center shadow-md">
      <Link href="/" className="text-xl font-bold text-heffe-gold">HEFFE</Link>
      <nav className="space-x-4 text-sm font-medium">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${
              pathname === href ? 'underline text-heffe-gold' : 'text-heffe-white'
            } hover:text-heffe-gold transition`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
