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
    <section className="relative flex min-h-[700px] items-center bg-brand-black" aria-label="Presentación de Patria Ingeniería">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-silver">
              {slide.eyebrow}
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {slide.first}
              <br />
              <span className="text-brand-silver">{slide.accent}</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-brand-silver">
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={slide.href}
                className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-silver"
              >
                Explorar portafolio
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Hablemos de tu proyecto
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-sm border border-white/15 bg-brand-graphite lg:h-[500px]">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={active === 0}
              sizes="(max-width: 850px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-black/80 p-4">
              <div className="flex items-center justify-between font-mono text-[11px] text-brand-silver">
                <span>0{active + 1} / 0{slides.length}</span>
                <span className="font-medium text-white">{slide.category}</span>
                <span>IMAGEN ILUSTRATIVA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {slides.map((item, index) => (
                <button
                  key={item.category}
                  type="button"
                  aria-label={`Mostrar ${item.category}`}
                  aria-current={active === index ? "true" : undefined}
                  onClick={() => setActive(index)}
                  className={`h-1 w-12 rounded-sm transition-colors ${
                    active === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-[11px] text-brand-silver">
              0{active + 1} / 0{slides.length}
            </span>
            <button
              type="button"
              aria-label={paused ? "Reanudar carrusel" : "Pausar carrusel"}
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
              className="font-mono text-[11px] text-brand-silver transition-colors hover:text-white"
            >
              {paused ? "▶ REANUDAR" : "❚❚ PAUSAR"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
