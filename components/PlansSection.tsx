export default function PlansSection() {
  return (
    <section id="planes" className="py-16 px-4 bg-heffe-dark text-heffe-white text-center space-y-8">
      <h2 className="text-3xl font-bold text-heffe-gold">💸 Planes y precios</h2>
      <p className="max-w-2xl mx-auto text-base">
        Elige el plan que mejor se adapta a tu negocio. HEFFE escala contigo.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
        <div className="border border-heffe-gold p-6 rounded-md w-full md:w-1/2 bg-heffe-soft">
          <h3 className="text-xl font-bold text-heffe-gold mb-2">🆓 Freemium</h3>
          <ul className="text-sm space-y-1 mb-4">
            <li>✓ Hasta 3 usuarios</li>
            <li>✓ Fichajes con geolocalización</li>
            <li>✓ Encuestas y métricas básicas</li>
          </ul>
          <p className="font-bold">0 €/mes</p>
        </div>
        <div className="border border-heffe-gold p-6 rounded-md w-full md:w-1/2 bg-heffe-dark">
          <h3 className="text-xl font-bold text-heffe-gold mb-2">🚀 PRO</h3>
          <ul className="text-sm space-y-1 mb-4">
            <li>✓ Usuarios ilimitados</li>
            <li>✓ Turnos avanzados y alertas</li>
            <li>✓ Dashboards y sugerencias con IA</li>
          </ul>
          <p className="font-bold">29 €/mes por negocio</p>
        </div>
      </div>

      <p className="text-sm italic text-heffe-warning">
        🚧 Los primeros 100 negocios fundadores tendrán precio congelado de por vida y acceso prioritario a funcionalidades nuevas.
      </p>
    </section>
  )
}
