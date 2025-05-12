export default function FAQSection() {
  return (
    <section className="py-20 px-6 bg-brand-black text-brand-white">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-serif text-brand-straw text-center">❓ Preguntas frecuentes</h2>
        <div className="space-y-4 text-base">
          {[
            ["¿Qué pasa cuando acaban los 3 meses del Freemium?", "Tu cuenta pasa a modo lectura y puedes actualizar a Pro sin perder datos."],
            ["¿Cuántos usuarios incluye el plan Pro?", "Usuarios ilimitados. Pagas por negocio, no por persona."],
            ["¿Puedo cancelar en cualquier momento?", "Sí. Mensual sin permanencia. Anual se mantiene hasta vencimiento. No hay reembolsos."],
            ["¿La IA realmente ayuda?", "Analiza encuestas, horarios y equipo. Sugerencias prácticas, no frases vacías."],
            ["¿El equipo ve los mismos datos que el propietario?", "No. Cada rol accede a una vista personalizada."],
            ["¿Es obligatorio fichar con geolocalización?", "No. Se puede activar o desactivar."],
            ["¿Mis datos están seguros?", "100%. Cifrado extremo a extremo. No se venden ni comparten."],
            ["¿Se puede integrar con mi TPV o sistema actual?", "En desarrollo. Fundadores tendrán acceso prioritario."],
            ["¿Qué pasa si tengo varios locales?", "Los gestionas desde un solo panel, cada uno con su estructura."],
            ["¿Qué me ofrece Heffe que otras apps no tengan?", "IA real, transparencia, acción. Nada de humo. Solo resultados."],
          ].map(([q, a]) => (
            <details key={q} className="border border-brand-violet rounded-lg p-4">
              <summary className="cursor-pointer font-semibold text-brand-white">{q}</summary>
              <p className="mt-2 text-sm text-brand-white/80">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
