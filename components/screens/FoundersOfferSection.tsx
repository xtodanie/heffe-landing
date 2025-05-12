// ✅ FoundersOfferSection.tsx (corregido)
import FounderBadge from "@/components/ui/FounderBadge";

export default function FoundersOfferSection() {
  return (
    <section className="py-20 px-6 bg-brand-tekhelet text-brand-white space-y-10">
      <h2 className="text-3xl font-serif font-bold text-brand-straw text-center flex items-center justify-center gap-2">
        🏆 Oferta Fundadores – Solo 100 plazas <FounderBadge />
      </h2>
      <div className="max-w-3xl mx-auto space-y-4 text-sm">
        <p className="text-brand-white/80">
          Forma parte del grupo exclusivo de los primeros 100 negocios que apostaron por HEFFE desde el inicio.
        </p>
        <ul className="list-disc list-inside space-y-1 text-brand-white/90">
          <li><strong>💸 29 €/mes o 300 €/año</strong> — Precio congelado durante 5 años.</li>
          <li>Sin permanencia. Sin sorpresas. Solo ventajas.</li>
        </ul>
        <p className="mt-4 italic text-brand-white/60">
          ❗Recibirás un Certificado de Fundador digital y autenticado, con número de fundador y la fecha de activación.
        </p>
        <h3 className="font-semibold text-brand-straw mt-6 text-lg">🚀 Beneficios exclusivos si HEFFE escala:</h3>
        <ul className="list-disc list-inside space-y-1 text-brand-white/90">
          <li>Acceso vitalicio a funciones premium sin coste adicional</li>
          <li>Descuentos en futuras integraciones</li>
          <li>Invitación a eventos privados</li>
          <li>Prioridad en roadmap de sugerencias</li>
          <li>Visibilidad destacada como "Negocio fundador"</li>
        </ul>
        <p className="text-center font-bold mt-6 text-brand-white">
          🎯 Esto no es solo un plan. Es entrar en la historia del producto que está transformando la hostelería desde dentro.
        </p>
        <p className="text-center text-sm mt-4">
          Solicita acceso a través de <a href="mailto:contacto@heffe.org" className="underline">contacto@heffe.org</a>
        </p>
      </div>
    </section>
  )
}