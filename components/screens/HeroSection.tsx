export default function HeroSection() {
  return (
    <section className="text-center py-20 px-6 bg-brand-black text-brand-white space-y-6">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-straw leading-tight">
        El sistema operativo para hostelería<br />
        que prioriza control, equipo y rentabilidad
      </h1>

      <p className="text-lg max-w-2xl mx-auto text-brand-white/80">
        HEFFE automatiza fichajes, turnos, encuestas y análisis de personal.<br />
        No más caos. Solo decisiones basadas en datos, desde el primer día.
      </p>

      <div>
        <a
          href="#planes"
          className="bg-brand-straw text-black font-semibold py-2 px-6 rounded shadow hover:brightness-90 transition"
        >
          Ver planes
        </a>
      </div>

      <div className="text-sm text-brand-blue mt-2">
        Oferta limitada: los primeros 100 negocios activos tendrán acceso anticipado,<br />
        precio congelado por 5 años y condiciones prioritarias.
      </div>
    </section>
  )
}
