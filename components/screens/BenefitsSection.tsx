// ✅ BenefitsSection.tsx (versión extendida y corregida)
function Benefit({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-brand-black p-6 rounded-lg border border-brand-straw space-y-3">
      <h3 className="text-base font-semibold text-brand-straw">{title}</h3>
      <p className="text-sm text-brand-white/80">{content}</p>
    </div>
  )
}

export default function BenefitsSection() {
  return (
    <section className="py-20 px-4 bg-brand-tekhelet text-brand-white text-center space-y-12">
      <h2 className="text-3xl font-serif font-bold text-brand-straw">🚀 HEFFE resuelve lo que otros ignoran</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left text-sm">
        <Benefit
          title="🛠️ Del caos al control"
          content="Turnos, fichajes, encuestas y métricas automatizadas. Sin tareas manuales. Sin errores. Sin dependencias."
        />
        <Benefit
          title="⏱️ Recuperas tiempo y foco"
          content="Heffe trabaja en segundo plano y te entrega decisiones. No tareas."
        />
        <Benefit
          title="📡 Riesgos detectados antes de explotar"
          content="Fatiga, conflictos y fugas identificadas con IA antes de que impacten tu negocio."
        />
        <Benefit
          title="📈 Acciones, no opiniones"
          content="Reorganiza equipos, ajusta horarios o lanza nuevas ofertas con base en datos reales."
        />
        <Benefit
          title="📬 Información personalizada por rol"
          content="Cada usuario ve solo lo que necesita. Propietario, encargado y equipo operan sin ruido."
        />
        <Benefit
          title="🧠 IA real, no decorativa"
          content="No hay humo. Solo sugerencias aplicables hoy, desde el primer día."
        />
        <Benefit
          title="🚀 Escala sin fricción"
          content="Un bar o 12 locales: Heffe crece contigo sin reentrenar ni reinvertir."
        />
        <Benefit
          title="🔐 Transparencia productiva"
          content="Informes visuales semanales. Todos saben qué pasa y qué mejorar."
        />
        <Benefit
          title="🤝 Un socio, no un proveedor"
          content="Heffe ejecuta contigo. No vende licencias, construye impacto."
        />
      </div>
    </section>
  )
}