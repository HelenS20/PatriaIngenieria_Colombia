"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  return <section className="heroEdge" aria-label="Presentación de Patria Ingeniería">
    <svg className="heroNetwork" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1"><path d="M0 80 96 114 164 53 250 94 343 48 408 106 529 38 600 76M0 261 78 201 163 258 257 194 370 252 465 189 600 230M96 114l-18 87m86-148-1 205m87-164 7 100m86-146 27 204m38-146 57 83m64-151-64 151" /></g>
      <g fill="currentColor"><circle cx="96" cy="114" r="3"/><circle cx="164" cy="53" r="2"/><circle cx="250" cy="94" r="3"/><circle cx="343" cy="48" r="2"/><circle cx="408" cy="106" r="3"/><circle cx="529" cy="38" r="2"/><circle cx="78" cy="201" r="2"/><circle cx="163" cy="258" r="3"/><circle cx="257" cy="194" r="2"/><circle cx="370" cy="252" r="3"/><circle cx="465" cy="189" r="2"/></g>
    </svg>

    <div className="heroEdgeCopy" key={`copy-${active}`}>
      <p className="eyebrow">{slide.eyebrow}</p>
      <h1>{slide.first}<br /><i>{slide.accent}</i></h1>
      <p className="heroEdgeLead">{slide.description}</p>
      <div className="heroEdgeActions"><Link className="heroEdgePrimary" href={slide.href}>Explorar portafolio <span aria-hidden="true">↗</span></Link><Link className="heroEdgeSecondary" href="/contacto">Hablemos de tu proyecto <span aria-hidden="true">→</span></Link></div>
    </div>

    <div className="heroEdgeVisual" key={`image-${active}`}>
      <Image src={slide.image} alt={slide.alt} fill priority={active === 0} sizes="(max-width: 850px) 100vw, 48vw" />
      <div className="heroEdgeVisualTag"><span>0{active + 1} / 0{slides.length}</span><strong>{slide.category}</strong><small>IMAGEN ILUSTRATIVA</small></div>
    </div>

    <div className="heroEdgeControls" aria-label="Controles de la portada">
      <div className="heroEdgeDots">{slides.map((item, index) => <button key={item.category} type="button" aria-label={`Mostrar ${item.category}`} aria-current={active === index ? "true" : undefined} onClick={() => setActive(index)}><span /></button>)}</div>
      <span className="heroEdgeCount">0{active + 1} / 0{slides.length}</span>
      <button className="heroEdgePause" type="button" aria-label={paused ? "Reanudar carrusel" : "Pausar carrusel"} aria-pressed={paused} onClick={() => setPaused((value) => !value)}>{paused ? "▶" : "Ⅱ"}</button>
      <div className="heroEdgeProgress" key={`progress-${active}`}><span className={paused || reducedMotion ? "is-paused" : ""} /></div>
    </div>
  </section>;
}
