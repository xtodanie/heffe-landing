export default function FAQSection() {
    return (
      <section className="py-12 px-4 bg-heffe-soft text-heffe-white space-y-6">
        <h2 className="text-3xl font-bold text-heffe-gold text-center">❓ Preguntas frecuentes</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-sm">
          <details><summary>¿Qué pasa cuando acaban los 3 meses del Freemium?</summary><p>Tu cuenta pasa a modo lectura y puedes actualizar a Pro sin perder datos.</p></details>
          <details><summary>¿Cuántos usuarios incluye el plan Pro?</summary><p>Usuarios ilimitados. Pagas por negocio, no por persona.</p></details>
          <details><summary>¿Puedo cancelar en cualquier momento?</summary><p>Sí. Mensual sin permanencia. Anual se mantiene hasta vencimiento. No hay reembolsos.</p></details>
          <details><summary>¿La IA realmente ayuda?</summary><p>Analiza encuestas, horarios y equipo. Sugerencias prácticas, no frases vacías.</p></details>
          <details><summary>¿El equipo ve los mismos datos que el propietario?</summary><p>No. Cada rol accede a una vista personalizada.</p></details>
          <details><summary>¿Es obligatorio fichar con geolocalización?</summary><p>No. Se puede activar o desactivar.</p></details>
          <details><summary>¿Mis datos están seguros?</summary><p>100%. Cifrado extremo a extremo. No se venden ni comparten.</p></details>
          <details><summary>¿Se puede integrar con mi TPV o sistema actual?</summary><p>En desarrollo. Fundadores tendrán acceso prioritario.</p></details>
          <details><summary>¿Qué pasa si tengo varios locales?</summary><p>Los gestionas desde un solo panel, cada uno con su estructura.</p></details>
          <details><summary>¿Qué me ofrece Heffe que otras apps no tengan?</summary><p>IA real, transparencia, acción. Nada de humo. Solo resultados.</p></details>
        </div>
      </section>
    )
  }
  