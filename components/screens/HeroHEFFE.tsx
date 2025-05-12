'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function HeroHEFFE() {
  return (
    <section className="relative w-full min-h-screen bg-[#4D2171] text-[#f0f0f0] flex items-center justify-center px-6 md:px-12">
      <div className="absolute inset-0 bg-[#4D2171] bg-opacity-80 backdrop-blur-md rounded-none" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl w-full gap-12">
        
        {/* Lado Izquierdo: Texto + Botón */}
        <div className="flex flex-col gap-8">
          <h1 className="text-[#f0f0f0] text-4xl md:text-5xl font-serif leading-tight">
            La nueva forma <br /> de liderar en hostelería.
          </h1>
          <Button
            className={cn(
              'w-fit text-black bg-[#DDD960] hover:bg-[#e6e26f] hover:shadow-md transition font-semibold px-6 py-3 text-base rounded-lg'
            )}
          >
            SUSCRÍBETE AHORA
          </Button>
        </div>

        {/* Lado Derecho: Tarjeta / Video / Dashboard */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-video rounded-2xl bg-[#26282A] shadow-lg overflow-hidden border border-[#9246D0]">
            <div className="absolute inset-0 bg-[#26282A] bg-opacity-60 backdrop-blur-sm rounded-2xl" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-[#DDD960] hover:scale-105 transition shadow-lg">
                ▶
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-6">
        <div className="text-[#DDD960] text-xl font-semibold tracking-wider">HEFFE</div>
        <nav className="hidden md:flex items-center gap-8 text-[#f0f0f0] font-medium">
          <a href="#quienes" className="hover:text-[#DDD960] transition">QUIÉNES SOMOS</a>
          <a href="#servicios" className="hover:text-[#DDD960] transition">SERVICIOS</a>
          <a href="#contacto" className="hover:text-[#DDD960] transition">CONTACTO</a>
          <Button className="bg-[#DDD960] text-black hover:shadow-lg hover:brightness-110 px-4 py-2 rounded-md font-semibold">
            SUSCRÍBETE AHORA
          </Button>
        </nav>
      </div>
    </section>
  )
}
