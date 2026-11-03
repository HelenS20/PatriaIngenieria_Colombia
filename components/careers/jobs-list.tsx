import type { Job } from "@/types";
import { ArrowRight, Briefcase, MapPin, Building2 } from "lucide-react";

export function JobsList({ jobs }: { jobs: Job[] }) {
  if (!jobs.length) {
    return (
      <div className="p-8 bg-white border border-brand-silver rounded-sm text-center">
        <Briefcase className="w-12 h-12 text-brand-silver mx-auto mb-4" />
        <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-graphite font-mono block mb-2">
          CONVOCATORIAS
        </span>
        <h3 className="text-[20px] font-display font-semibold text-brand-black mb-2">
          En este momento no hay vacantes publicadas.
        </h3>
        <p className="text-[14px] text-brand-graphite">
          Si te interesa formar parte del equipo, puedes enviar tu hoja de vida mediante el formulario.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job, index) => (
        <div
          key={job.id}
          className="p-6 bg-white border border-brand-silver rounded-sm hover:border-brand-blue hover:shadow-md transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="text-[20px] font-bold font-mono text-brand-blue">
                0{index + 1}
              </span>
              <div className="space-y-2">
                <h3 className="text-[18px] font-display font-semibold text-brand-black">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-[13px] text-brand-graphite">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {job.department}
                  </span>
                </div>
              </div>
            </div>
            <a
              href="#postulacion"
              className="inline-flex items-center gap-2 text-brand-blue text-[12px] font-bold hover:text-brand-blue-deep transition-colors mt-4 md:mt-0"
            >
              POSTULARME
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
