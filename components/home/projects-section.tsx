import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/content";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 bg-brand-silver/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campos de aplicación"
          title={<>ÁREAS<br /><i>DE TRABAJO</i></>}
          aside={
            <Link
              href="/portafolio"
              className="inline-flex items-center gap-2 text-brand-black font-semibold text-sm hover:text-brand-blue transition-colors"
            >
              EXPLORAR PORTAFOLIO
              <span className="text-brand-graphite">→</span>
            </Link>
          }
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="bg-white border border-brand-silver p-6 hover:border-brand-blue transition-colors"
            >
              <div className="mb-4">
                <span className="text-xs font-mono text-brand-graphite">
                  0{index + 1} · {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-brand-black mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-brand-graphite">{project.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
