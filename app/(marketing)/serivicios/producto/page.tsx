export default function ServiciosPage() {
  return (
    <section className="container py-24 space-y-12">
      <h1 className="text-4xl font-serif text-brand-straw">Servicios</h1>
      <p className="max-w-2xl text-lg text-brand-white/80">
        HEFFE centraliza la gestión del equipo, el control operativo y la toma de decisiones en tiempo real.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border border-brand-violet rounded-xl bg-brand-black/40">
          <h2 className="text-xl font-semibold text-brand-white">Gestión de Turnos</h2>
          <p className="text-sm text-brand-white/70">Planificación visual, cambios en tiempo real y control de asistencia geolocalizado.</p>
        </div>
        <div className="p-6 border border-brand-violet rounded-xl bg-brand-black/40">
          <h2 className="text-xl font-semibold text-brand-white">Encuestas de Clima</h2>
          <p className="text-sm text-brand-white/70">Feedback anónimo semanal con análisis automático.</p>
        </div>
        <div className="p-6 border border-brand-violet rounded-xl bg-brand-black/40">
          <h2 className="text-xl font-semibold text-brand-white">Alertas Inteligentes</h2>
          <p className="text-sm text-brand-white/70">Notificaciones por roturas, bajas, ausencias o métricas fuera de rango.</p>
        </div>
        <div className="p-6 border border-brand-violet rounded-xl bg-brand-black/40">
          <h2 className="text-xl font-semibold text-brand-white">Ofertas Automatizadas</h2>
          <p className="text-sm text-brand-white/70">Sugerencias basadas en baja afluencia y patrones históricos.</p>
        </div>
      </div>
    </section>
  )
}
