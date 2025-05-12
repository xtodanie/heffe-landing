export default function QuienesSomosPage() {
    return (
      <section className="container py-24 space-y-10">
        <h1 className="text-4xl font-serif text-brand-straw">Quiénes Somos</h1>
        <p className="max-w-3xl text-lg text-brand-white/80">
          HEFFE nace con una misión clara: transformar la forma en que se lidera en hostelería. 
          Combinamos tecnología, diseño y conocimiento operativo para modernizar los equipos, procesos y resultados del sector.
        </p>
        <div className="grid md:grid-cols-3 gap-8 pt-8">
          <div>
            <h2 className="text-xl font-semibold text-brand-white">Propósito</h2>
            <p className="text-sm text-brand-white/70">Eliminar el caos operativo en bares, restaurantes y hoteles.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-brand-white">Equipo</h2>
            <p className="text-sm text-brand-white/70">Fundado por expertos en software, data y operaciones de campo.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-brand-white">Visión</h2>
            <p className="text-sm text-brand-white/70">Ser el sistema operativo estándar para la hostelería en Europa.</p>
          </div>
        </div>
      </section>
    )
  }
  