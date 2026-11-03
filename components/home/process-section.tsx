"use client";
import { useState } from "react";

const steps = [
  { number: "01", title: "Conversación", description: "Entendemos el alcance y las necesidades del proyecto." },
  { number: "02", title: "Definición", description: "Precisamos materiales, recursos y condiciones de trabajo." },
  { number: "03", title: "Planeación", description: "Organizamos los pasos técnicos y logísticos." },
  { number: "04", title: "Ejecución", description: "El servicio se realiza según el alcance acordado." },
] as const;

export function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-graphite mb-4">
            Una ruta sencilla
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-black leading-tight mb-4">
            DEL PRIMER
            <br />
            <span className="text-brand-blue">CONTACTO A LA OBRA.</span>
          </h2>
          <p className="max-w-md text-base text-brand-graphite leading-relaxed">
            Secuencia editorial ilustrativa; el proceso operativo definitivo se confirmará con Patria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-brand-silver">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              className={`p-6 text-left border-b md:border-b-0 md:border-r border-brand-silver transition-colors ${
                active === index ? "bg-brand-silver/15" : "hover:bg-brand-silver/10"
              }`}
            >
              <div className="mb-3">
                <span className={`text-sm font-mono ${
                  active === index ? "text-brand-black" : "text-brand-graphite"
                }`}>
                  {step.number}
                </span>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${
                active === index ? "text-brand-black" : "text-brand-graphite"
              }`}>
                {step.title}
              </h3>
              <p className="text-sm text-brand-graphite leading-relaxed">
                {step.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
