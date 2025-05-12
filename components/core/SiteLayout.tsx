// ✅ SiteLayout.tsx (versión final con navegación completa)
import Link from "next/link"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-white">
      <header className="w-full px-6 py-4 border-b border-brand-violet flex justify-between items-center sticky top-0 bg-brand-black z-50">
        <Link href="/" className="text-xl font-serif text-brand-straw font-bold">
          HEFFE
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/quienes-somos" className="hover:text-brand-straw">Quiénes Somos</Link>
          <Link href="/producto" className="hover:text-brand-straw">Producto</Link>
          <Link href="/precios" className="hover:text-brand-straw">Precios</Link>
          <Link href="/faq" className="hover:text-brand-straw">FAQ</Link>
          <Link href="/fundadores" className="hover:text-brand-straw">Fundadores</Link>
          <Link
            href="/contacto"
            className="ml-4 bg-brand-straw text-black px-4 py-2 rounded-md font-semibold hover:brightness-110"
          >
            Suscríbete Ahora
          </Link>
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="text-xs text-brand-white/50 py-6 text-center border-t border-brand-violet">
        © {new Date().getFullYear()} HEFFE. Todos los derechos reservados.
      </footer>
    </div>
  )
}
