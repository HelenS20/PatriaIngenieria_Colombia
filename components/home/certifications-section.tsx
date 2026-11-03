"use client";
import { useState } from "react";

const certifications = [
  { code: "ÁREA-001", title: "OBRA CIVIL", detail: "Actividad registrada" },
  { code: "ÁREA-002", title: "CARRETERAS", detail: "Actividad registrada" },
  { code: "ÁREA-003", title: "VÍAS FÉRREAS", detail: "Actividad registrada" },
  { code: "ÁREA-004", title: "MATERIALES", detail: "Actividad registrada" },
  { code: "ÁREA-005", title: "MAQUINARIA", detail: "Actividad registrada" },
  { code: "ÁREA-006", title: "EQUIPOS", detail: "Actividad registrada" },
] as const;

export function CertificationsSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-4">
            Ámbitos de actividad
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-4">
            CAPACIDADES
            <br />
            <span className="text-zinc-600">Y SERVICIOS.</span>
          </h2>
          <p className="max-w-md text-base text-zinc-600 leading-relaxed">
            Un recorrido por las actividades registradas de Patria. El alcance de cada línea debe validarse antes de publicar fichas comerciales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((item, index) => (
            <article
              key={item.code}
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors"
            >
              <div className="mb-4">
                <span className="text-sm font-mono text-zinc-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-mono text-zinc-400">{item.code}</p>
                <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
              </div>
              <small className="block mt-4 text-sm text-zinc-600">{item.detail}</small>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between text-sm text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-zinc-900 rounded-full" />
            <span>CARRUSEL AUTOMÁTICO · {certifications.length} ÁMBITOS</span>
          </div>
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            className="hover:text-zinc-900 transition-colors"
          >
            {paused ? "▶ REANUDAR" : "❚❚ PAUSAR"}
          </button>
        </div>
      </div>
    </section>
  );
}
