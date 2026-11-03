"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    eyebrow: "PATRIA INGENIERÍA / INFRAESTRUCTURA",
    first: "Ingeniería para",
    accent: "seguir avanzando.",
    description: "Explora una propuesta de sitio para conectar obra civil, infraestructura vial, materiales y equipos.",
    image: "/images/home/hero-road.png",
    alt: "Carretera entre montañas, imagen ilustrativa",
    category: "Infraestructura vial",
    href: "/portafolio?categoria=vial",
  },
  {
    eyebrow: "PATRIA INGENIERÍA / MATERIALES",
    first: "Materiales que",
    accent: "dan forma a la obra.",
    description: "Conoce las líneas de materiales del catálogo de muestra y solicita información para tu proyecto.",
    image: "/images/portfolio/agregados-editorial.webp",
    alt: "Agregados de construcción, imagen ilustrativa",
    category: "Materiales",
    href: "/portafolio?categoria=materiales",
  },
  {
    eyebrow: "PATRIA INGENIERÍA / EQUIPOS",
    first: "Capacidad para",
    accent: "mover cada etapa.",
    description: "Descubre cómo podría presentarse la oferta de maquinaria una vez Patria confirme su inventario.",
    image: "/images/portfolio/maquinaria-editorial.webp",
    alt: "Maquinaria vial, imagen ilustrativa",
    category: "Equipos",
    href: "/portafolio?categoria=equipos",
  },
] as const;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((index) => (index + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [active, paused, reducedMotion]);

  const slide = slides[active];

  return (
    <section className="relative min-h-[700px] flex items-center bg-zinc-900" aria-label="Presentación de Patria Ingeniería">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-400">
              {slide.eyebrow}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              {slide.first}
              <br />
              <span className="text-zinc-300">{slide.accent}</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={slide.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-100 transition-colors border border-zinc-200"
              >
                Explorar portafolio
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold text-sm hover:text-zinc-300 transition-colors border border-zinc-700"
              >
                Hablemos de tu proyecto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] bg-zinc-800 border border-zinc-700">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={active === 0}
              sizes="(max-width: 850px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-zinc-900/90 border-t border-zinc-700">
              <div className="flex justify-between items-center text-zinc-400 text-xs">
                <span>0{active + 1} / 0{slides.length}</span>
                <span className="text-white font-medium">{slide.category}</span>
                <span>IMAGEN ILUSTRATIVA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {slides.map((item, index) => (
                <button
                  key={item.category}
                  type="button"
                  aria-label={`Mostrar ${item.category}`}
                  aria-current={active === index ? "true" : undefined}
                  onClick={() => setActive(index)}
                  className={`w-12 h-1 rounded-sm transition-colors ${
                    active === index ? "bg-white" : "bg-zinc-700 hover:bg-zinc-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-zinc-400 text-xs">
              0{active + 1} / 0{slides.length}
            </span>
            <button
              type="button"
              aria-label={paused ? "Reanudar carrusel" : "Pausar carrusel"}
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
              className="text-zinc-400 text-xs hover:text-white transition-colors"
            >
              {paused ? "▶ REANUDAR" : "❚❚ PAUSAR"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
