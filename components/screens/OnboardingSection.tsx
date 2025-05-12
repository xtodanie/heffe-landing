export default function OnboardingSection() {
  return (
    <section className="py-20 px-6 bg-brand-tekhelet text-brand-white">
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        <h2 className="text-3xl font-serif text-brand-straw">3 pasos para activar HEFFE</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            ["1. Registra tu local", "Crea una cuenta, indica nombre, aforo y tipo de negocio."],
            ["2. Añade tu equipo", "Invita a camareros, cocineros y encargados. Ellos reciben acceso inmediato."],
            ["3. Empieza a operar", "Planifica turnos, lanza tu primera encuesta y activa alertas."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-brand-black/40 rounded-xl p-6 border border-brand-violet">
              <h3 className="text-lg font-semibold text-brand-white mb-2">{title}</h3>
              <p className="text-sm text-brand-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}