export default function HeroSection() {
  return (
    <section className="text-center py-20 px-4 bg-heffe-dark text-heffe-white space-y-6">
      <h1 className="text-4xl font-bold text-heffe-gold leading-tight">
        El sistema operativo para hostelería<br />
        que prioriza control, equipo y rentabilidad
      </h1>

      <p className="text-lg max-w-2xl mx-auto">
        HEFFE automatiza fichajes, turnos, encuestas y análisis de personal.<br />
        No más caos. Solo decisiones basadas en datos, desde el primer día.
      </p>

      <div>
        <a
          href="#planes"
          className="bg-heffe-gold text-heffe-dark font-semibold py-2 px-6 rounded shadow hover:brightness-90 transition"
        >
          Ver planes
        </a>
      </div>

      <div className="text-sm text-heffe-warning mt-2">
        Oferta limitada: los primeros 100 negocios activos tendrán acceso anticipado,<br />
        precio congelado de por vida y condiciones prioritarias.
      </div>
    </section>
  )
}
