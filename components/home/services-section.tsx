import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="soluciones" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Áreas registradas"
          title={<>SOLUCIONES<br /><i>INTEGRALES</i></>}
          aside={<p className="max-w-md text-base text-zinc-600 leading-relaxed">Una vista clara de las actividades que Patria tiene registradas. El alcance comercial se confirmará con la empresa.</p>}
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-zinc-200">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="min-h-[180px] p-6 border-b border-zinc-200 hover:border-zinc-300 transition-colors"
            >
              <div className="mb-4">
                <span className="text-sm font-mono text-zinc-500">0{index + 1}</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
