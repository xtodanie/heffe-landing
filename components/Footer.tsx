import { Mail, ShieldCheck, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-heffe-dark text-heffe-white py-10 px-4 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="space-y-1">
          <p>© {new Date().getFullYear()} HEFFE. Todos los derechos reservados.</p>
          <p>Operado por equipo fundador. Facturación formal disponible al alta.</p>
        </div>

        <div className="space-y-2">
          <a
            href="mailto:contacto@heffe.org"
            className="flex items-center justify-center md:justify-start gap-2 hover:underline text-heffe-gold"
          >
            <Mail size={16} />
            contacto@heffe.org
          </a>

          <a
            href="https://wa.me/34601904013?text=Hola%20HEFFE%2C%20quiero%20saber%20más%20sobre%20el%20producto."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 hover:underline text-heffe-gold"
          >
            <MessageCircle size={16} />
            Escríbenos por WhatsApp
          </a>

          <a
            href="/legal/aviso"
            className="flex items-center justify-center md:justify-start gap-2 hover:underline text-heffe-gold"
          >
            <ShieldCheck size={16} />
            Aviso legal
          </a>
        </div>
      </div>
    </footer>
  )
}
