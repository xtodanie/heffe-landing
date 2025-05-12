export default function CTASection() {
  return (
    <section className="bg-brand-tekhelet text-brand-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-serif text-brand-straw">Haz que tu equipo funcione con HEFFE</h2>
        <p className="text-base text-brand-white/80">
          Turnos, clima laboral, alertas inteligentes y mucho más. Todo en una sola plataforma diseñada para hostelería.
        </p>
        <a href="/contacto">
          <button className="bg-brand-straw text-black font-semibold px-6 py-3 rounded-md hover:shadow-md hover:brightness-110 transition">
            Quiero empezar
          </button>
        </a>
      </div>
    </section>
  )
}
