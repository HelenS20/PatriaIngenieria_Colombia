"use client";

import Link from "next/link";
import { ApplicationForm } from "@/components/careers/application-form";
import { JobsList } from "@/components/careers/jobs-list";
import { Container } from "@/components/ui/container";
import { buttonClasses } from "@/components/ui/button-styles";
import { jobs } from "@/lib/content";

export function CareersPreview() {
  return (
    <section id="vacantes" className="bg-brand-black py-24 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-brand-silver">
              Oportunidades laborales
            </p>
            <h2 className="font-display text-section-title font-semibold leading-[1.05] tracking-[-0.03em] text-white">
              SUMA TU TALENTO
              <br />
              <span className="text-brand-silver">A LA OBRA.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-brand-silver">
              Si te interesa trabajar con Patria Ingeniería, envía tu hoja de vida. Las convocatorias
              aparecerán aquí cuando Talento Humano las confirme.
            </p>
            <div className="mt-8">
              <JobsList jobs={jobs} />
            </div>
            <Link className={buttonClasses("linkLight", "mt-8")} href="/vacantes">
              IR A VACANTES ↗
            </Link>
          </div>

          <div className="rounded-sm bg-white p-6 sm:p-8 lg:self-start">
            <ApplicationForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
