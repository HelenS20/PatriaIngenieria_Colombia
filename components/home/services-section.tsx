import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/content";

const symbols = ["▦", "⌁", "↗", "◇"];

export function ServicesSection() {
  return (
    <section id="soluciones" className="section dark servicesSection" data-reveal>
      <SectionHeading eyebrow="Áreas registradas" title={<>SOLUCIONES<br /><i>INTEGRALES</i></>} aside={<p className="lede">Una vista clara de las actividades que Patria tiene registradas. El alcance comercial se confirmará con la empresa.</p>} />
      <div className="serviceGrid">
        {services.map((service, index) => (
          <article className="service" key={service.id}>
            <b>0{index + 1}</b>
            <span className="serviceIcon" aria-hidden="true">{symbols[index % symbols.length]}</span>
            <div><h3>{service.title}</h3><p>{service.description}</p></div>
            <span className="serviceArrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
