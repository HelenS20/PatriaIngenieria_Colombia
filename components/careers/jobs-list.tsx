import type { Job } from "@/types";

export function JobsList({ jobs }: { jobs: Job[] }) {
  if (!jobs.length) return <div className="jobsEmpty"><span>CONVOCATORIAS</span><h3>En este momento no hay vacantes publicadas.</h3><p>Si te interesa formar parte del equipo, puedes enviar tu hoja de vida mediante el formulario.</p></div>;
  return <div className="roleList">{jobs.map((job, index) => <div key={job.id}><b>0{index + 1}</b><span>{job.title}<small>{job.location} · {job.department}</small></span><a href="#postulacion">POSTULARME ↗</a></div>)}</div>;
}
