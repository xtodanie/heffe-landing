export default function OnboardingSection() {
  return (
    <section className="py-12 px-4 bg-heffe-dark text-heffe-white space-y-6">
      <h2 className="text-3xl font-bold text-heffe-gold text-center">🧭 ¿Cómo funciona Heffe?</h2>
      <ol className="max-w-3xl mx-auto space-y-4 list-decimal list-inside text-sm">
        <li>
          <strong>Regístrate gratis:</strong> Crea tu cuenta en minutos y empieza a explorar la versión Freemium sin compromiso.
        </li>
        <li>
          <strong>Configura tu local:</strong> Añade tu equipo, define turnos y ajusta la zona de geofichaje. Todo desde un panel simple.
        </li>
        <li>
          <strong>Empieza a trabajar:</strong> Tu equipo podrá fichar, recibir encuestas y organizar su día. Tú tendrás visibilidad en tiempo real.
        </li>
        <li>
          <strong>Recibe sugerencias reales:</strong> La IA empieza a analizar datos y te propone mejoras, acciones y alertas sin que tú las pidas.
        </li>
        <li>
          <strong>Escala o ajusta:</strong> Cuando lo necesites, puedes pasar a Pro o Anual. Sin bloqueos, sin pérdida de información.
        </li>
      </ol>
    </section>
  )
}