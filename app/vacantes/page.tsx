import { ApplicationForm } from "@/components/careers/application-form";
import { JobsList } from "@/components/careers/jobs-list";
import { jobs } from "@/lib/content";

export const metadata = { title: "Vacantes | Patria Ingeniería" };
export default function JobsPage() {
  return (
    <>
      <section className="min-h-[560px] bg-[#102a38]">
        <div className="px-page-gutter py-[100px_0]">
          <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-blue-light font-mono mb-4">
            Talento / Patria Ingeniería
          </p>
          <h1 className="text-[clamp(50px,5.9vw,90px)] font-display font-semibold leading-[0.98] tracking-[-0.08em] text-white mb-6">
            CONSTRUYAMOS
            <br />
            <span className="text-brand-blue-light italic">FUTURO JUNTOS.</span>
          </h1>
          <p className="text-[16px] leading-[1.75] text-white/80 max-w-xl">
            Explora las convocatorias publicadas o envía tu hoja de vida para futuras oportunidades.
          </p>
        </div>
      </section>

      <section className="py-[clamp(76px,8vw,118px)] bg-[#f5f8f9]">
        <div className="px-page-gutter grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-blue font-mono mb-4">
              Oportunidades laborales
            </p>
            <h2 className="text-[clamp(43px,4.6vw,70px)] font-display font-semibold leading-[1.01] tracking-[-0.062em] text-brand-black mb-8">
              TRABAJA
              <br />
              <span className="text-brand-blue italic">CON NOSOTROS.</span>
            </h2>
            <JobsList jobs={jobs} />
          </div>

          <div className="bg-white border border-brand-silver rounded-sm p-8" id="postulacion">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
