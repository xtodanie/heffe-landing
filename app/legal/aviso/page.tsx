export default function LegalPage() {
  return (
    <section className="bg-heffe-dark text-heffe-white min-h-screen py-20 px-6 max-w-4xl mx-auto space-y-8 text-sm">
      <h1 className="text-3xl font-bold text-heffe-gold text-center">🛡️ Aviso legal y política de privacidad</h1>

      <div className="space-y-4">
        <p><strong>Responsable:</strong> El servicio HEFFE está gestionado por su equipo fundador mientras se constituye la sociedad formal. Puedes contactar a través de <a href="mailto:contacto@heffe.org" className="underline text-heffe-gold">contacto@heffe.org</a>.</p>

        <p><strong>Finalidad:</strong> Prestación de servicios digitales para gestión operativa en hostelería. Los datos recogidos (email, nombre, respuestas de encuestas, geolocalización, etc.) se usan exclusivamente para mejorar la operativa del negocio y nunca se ceden a terceros.</p>

        <p><strong>Legitimación:</strong> Consentimiento explícito del usuario al registrarse o utilizar la plataforma.</p>

        <p><strong>Destinatarios:</strong> No se realizan cesiones ni transferencias internacionales. Toda la información se almacena en servidores seguros de Supabase (UE).</p>

        <p><strong>Derechos:</strong> Puedes acceder, rectificar o eliminar tus datos en cualquier momento escribiendo a <a href="mailto:contacto@heffe.org" className="underline text-heffe-gold">contacto@heffe.org</a>.</p>

        <p><strong>Cookies:</strong> HEFFE no utiliza cookies de seguimiento ni terceros. Solo se emplean cookies técnicas estrictamente necesarias.</p>

        <p><strong>Seguridad:</strong> Todos los datos están cifrados en tránsito y en reposo. Se aplican medidas técnicas y organizativas proporcionales al riesgo.</p>

        <p><strong>Condiciones:</strong> HEFFE es un servicio digital en fase de despliegue. Al utilizar la plataforma aceptas estas condiciones. No se garantiza disponibilidad continua ni cobertura total en esta fase inicial.</p>
      </div>
    </section>
  )
}
