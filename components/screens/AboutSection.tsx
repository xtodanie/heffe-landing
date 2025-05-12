// ✅ AboutSection.tsx (corregido)
export default function AboutSection() {
  return (
    <section className="bg-brand-black text-brand-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-straw">¿Por qué HEFFE?</h2>
        <p className="text-lg text-brand-white/80">
          Porque liderar un equipo en hostelería no debería depender de WhatsApp ni de improvisaciones.
          HEFFE te da estructura, datos y control real para liderar con inteligencia.
        </p>
        <div className="grid md:grid-cols-3 gap-8 pt-10">
          <div>
            <h3 className="text-xl font-semibold text-brand-white">Operativo</h3>
            <p className="text-sm text-brand-white/70">Turnos, check-ins y tareas en un solo lugar.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-brand-white">Cultural</h3>
            <p className="text-sm text-brand-white/70">Encuestas anónimas y análisis de clima real.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-brand-white">Estratega</h3>
            <p className="text-sm text-brand-white/70">Alertas e insights para anticiparte a los problemas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}