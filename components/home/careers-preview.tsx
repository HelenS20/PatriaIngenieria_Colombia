"use client";

import Link from "next/link";
import { ApplicationForm } from "@/components/careers/application-form";
import { JobsList } from "@/components/careers/jobs-list";
import { jobs } from "@/lib/content";

export function CareersPreview() {
  return <section id="vacantes" className="careers"><div className="careerCopy"><p className="eyebrow">Oportunidades laborales</p><h2>SUMA TU TALENTO<br /><i>A LA OBRA.</i></h2><p>Si te interesa trabajar con Patria Ingeniería, envía tu hoja de vida. Las convocatorias aparecerán aquí cuando Talento Humano las confirme.</p><JobsList jobs={jobs} /><Link className="textLink lightLink" href="/vacantes">IR A VACANTES ↗</Link></div><ApplicationForm /></section>;
}
