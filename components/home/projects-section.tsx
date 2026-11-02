import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/content";

export function ProjectsSection() {
  return <section id="proyectos" className="projects" data-reveal>
    <SectionHeading eyebrow="Campos de aplicación" title={<>ÁREAS<br /><i>DE TRABAJO</i></>} aside={<Link className="textLink" href="/portafolio">EXPLORAR PORTAFOLIO ↗</Link>} />
    <div className="projectGrid">{projects.map((project, index) => <article className={`project ${project.imageClass}`} key={project.id}><span>0{index + 1} · {project.category}</span><h3>{project.title}<br /><small>{project.location}</small></h3></article>)}</div>
  </section>;
}
