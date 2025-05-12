"use client"

import { Button } from "@/components/ui/button"

export default function HeroHEFFE() {
  return (
    <section className="relative min-h-screen w-full bg-brand-tekhelet text-brand-white flex items-center justify-center px-6 md:px-12">
      {/* Capa oscura de fondo */}
      <div className="absolute inset-0 bg-brand-tekhelet bg-opacity-80 backdrop-blur-md" />

      {/* Contenido principal */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl w-full gap-12">

        {/* Lado izquierdo: texto y CTA */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl font-serif leading-tight">
            La nueva forma <br /> de liderar en hostelería.
          </h1>
          <Button size="lg" className="w-fit font-semibold">
            SUSCRÍBETE AHORA
          </Button>
        </div>

        {/* Lado derecho: bloque visual */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-video rounded-2xl bg-brand-black shadow-lg overflow-hidden border border-brand-violet">
            <div className="absolute inset-0 bg-brand-black bg-opacity-60 backdrop-blur-sm rounded-2xl" />
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <button
                aria-label="Reproducir video"
                className="w-16 h-16 rounded-full bg-brand-gold hover:scale-105 transition shadow-lg"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar fija superpuesta */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-6">
        <div className="text-brand-gold text-xl font-semibold tracking-wider">HEFFE</div>
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#quienes" className="hover:text-brand-gold transition">QUIÉNES SOMOS</a>
          <a href="#servicios" className="hover:text-brand-gold transition">SERVICIOS</a>
          <a href="#contacto" className="hover:text-brand-gold transition">CONTACTO</a>
          <Button variant="default" size="sm" className="rounded-md font-semibold">
            SUSCRÍBETE AHORA
          </Button>
        </nav>
      </div>
    </section>
  )
}
