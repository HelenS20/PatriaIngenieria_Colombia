"use client";

import { useState } from "react";

const certifications = [
  { code: "ÁREA-001", title: "OBRA CIVIL", detail: "Actividad registrada", icon: "seal" },
  { code: "ÁREA-002", title: "CARRETERAS", detail: "Actividad registrada", icon: "road" },
  { code: "ÁREA-003", title: "VÍAS FÉRREAS", detail: "Actividad registrada", icon: "shield" },
  { code: "ÁREA-004", title: "MATERIALES", detail: "Actividad registrada", icon: "leaf" },
  { code: "ÁREA-005", title: "MAQUINARIA", detail: "Actividad registrada", icon: "check" },
  { code: "ÁREA-006", title: "EQUIPOS", detail: "Actividad registrada", icon: "spark" },
] as const;

function CertificationIcon({ icon }: { icon: (typeof certifications)[number]["icon"] }) {
  const common = { viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (icon === "shield") return <svg {...common}><path d="M16 3.5 26 7v7.5c0 6.3-4.3 11.2-10 14-5.7-2.8-10-7.7-10-14V7l10-3.5Z" /><path d="m11.5 15.5 3 3 6-6" /></svg>;
  if (icon === "leaf") return <svg {...common}><path d="M26.5 5.5C16 5.5 7.5 10.2 7.5 20.2c0 3.3 2 6.3 5.2 6.3 8.3 0 13.8-9.3 13.8-21Z" /><path d="M5 27c4.7-5.2 9.4-9 16.5-12.5" /></svg>;
  if (icon === "road") return <svg {...common}><path d="M7 28 13 4h6l6 24" /><path d="M16 7v3M16 14v4M16 23v2" /></svg>;
  if (icon === "check") return <svg {...common}><circle cx="16" cy="16" r="11.5" /><path d="m10.5 16.2 3.7 3.7 7.4-8" /></svg>;
  if (icon === "spark") return <svg {...common}><path d="m16 3 2.2 8.8L27 14l-8.8 2.2L16 25l-2.2-8.8L5 14l8.8-2.2L16 3Z" /><path d="m25.5 23 .8 3.2 3.2.8-3.2.8-.8 3.2-.8-3.2-3.2-.8 3.2-.8.8-3.2Z" /></svg>;
  return <svg {...common}><circle cx="16" cy="16" r="11.5" /><path d="m16 7.5 2.2 4.4 4.8.7-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8-3.5-3.4 4.8-.7L16 7.5Z" /></svg>;
}

function CertificationCards({ duplicate = false }: { duplicate?: boolean }) {
  return certifications.map((item, index) => (
    <article className="certCard" key={`${item.code}-${duplicate ? "repeat" : "main"}`} aria-hidden={duplicate || undefined}>
      <div className="certCardTop"><b>{String(index + 1).padStart(2, "0")}</b><CertificationIcon icon={item.icon} /></div>
      <div><p>{item.code}</p><h3>{item.title}</h3></div>
      <small>{item.detail}</small>
    </article>
  ));
}

export function CertificationsSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section className={`certifications ${paused ? "is-paused" : ""}`} data-reveal>
      <div className="certIntro">
        <p className="eyebrow">Ámbitos de actividad</p>
        <h2>CAPACIDADES<br /><i>Y SERVICIOS.</i></h2>
        <p>Un recorrido por las actividades registradas de Patria. El alcance de cada línea debe validarse antes de publicar fichas comerciales.</p>
      </div>
      <div className="certCarousel">
        <div className="certViewport" role="region" aria-label="Ámbitos de actividad">
          <div className="certMarquee">
            <div className="certGroup"><CertificationCards /></div>
            <div className="certGroup" aria-hidden="true"><CertificationCards duplicate /></div>
          </div>
        </div>
        <div className="certCarouselMeta">
          <p><span aria-hidden="true" /> CARRUSEL AUTOMÁTICO · {certifications.length} ÁMBITOS</p>
          <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>
            {paused ? "▶ REANUDAR" : "Ⅱ PAUSAR"}
          </button>
        </div>
      </div>
    </section>
  );
}
