export default function PlansSection() {
  return (
    <section className="py-20 px-6 bg-brand-black text-brand-white">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        <h2 className="text-3xl font-serif text-brand-straw">Precios simples y sin letra pequeña</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="border border-brand-violet p-8 rounded-xl bg-brand-tekhelet/30">
            <h3 className="text-2xl font-bold text-brand-white">Freemium</h3>
            <p className="text-sm text-brand-white/70">Ideal para negocios pequeños o pruebas sin compromiso.</p>
            <ul className="text-sm text-brand-white/80 mt-4 space-y-1 list-disc list-inside">
              <li>Hasta 3 personas</li>
              <li>Gestión básica de turnos</li>
              <li>Encuestas semanales</li>
              <li>Panel limitado</li>
            </ul>
            <p className="mt-6 font-bold text-brand-straw text-lg">0 €/mes</p>
          </div>
          <div className="border border-brand-violet p-8 rounded-xl bg-brand-tekhelet/30">
            <h3 className="text-2xl font-bold text-brand-white">PRO</h3>
            <p className="text-sm text-brand-white/70">Para equipos grandes o gestión avanzada.</p>
            <ul className="text-sm text-brand-white/80 mt-4 space-y-1 list-disc list-inside">
              <li>Usuarios ilimitados</li>
              <li>Funciones premium</li>
              <li>Dashboard completo</li>
              <li>Alertas personalizadas</li>
            </ul>
            <p className="mt-6 font-bold text-brand-straw text-lg">29 €/mes o 300 €/año</p>
          </div>
        </div>
        <p className="text-sm text-brand-white/60">
          Todos los planes incluyen soporte técnico y acceso desde cualquier dispositivo.
        </p>
      </div>
    </section>
  )
}
