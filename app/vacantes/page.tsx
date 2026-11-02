import { ApplicationForm } from "@/components/careers/application-form";
import { JobsList } from "@/components/careers/jobs-list";
import { jobs } from "@/lib/content";

export const metadata = { title: "Vacantes | Patria Ingeniería" };
export default function JobsPage() {
  return <><section className="innerHero jobsHero"><p className="eyebrow">Talento / Patria Ingeniería</p><h1>CONSTRUYAMOS<br /><i>FUTURO JUNTOS.</i></h1><p>Explora las convocatorias publicadas o envía tu hoja de vida para futuras oportunidades.</p></section><section className="jobsPage"><div><p className="eyebrow">Oportunidades laborales</p><h2>TRABAJA<br /><i>CON NOSOTROS.</i></h2><JobsList jobs={jobs} /></div><div id="postulacion"><ApplicationForm /></div></section></>;
}
