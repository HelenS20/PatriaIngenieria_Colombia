import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Quiénes somos | Patria Ingeniería", description: "Conoce la actividad y el enfoque de Patria Ingeniería Pavimentos y Agregados S.A.S." };

const areas = [
  { number: "01", title: "Ingeniería civil", text: "Construcción de otras obras de ingeniería civil." },
  { number: "02", title: "Infraestructura vial", text: "Construcción de carreteras y vías férreas." },
  { number: "03", title: "Materiales", text: "Comercio al por mayor de materiales de construcción." },
  { number: "04", title: "Equipos", text: "Alquiler y arrendamiento de maquinaria y equipos." },
];

export default function AboutPage() {
  return (
    <>
      <section className="min-h-[500px] bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-400">
              Patria Ingeniería
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              INGENIERÍA QUE
              <br />
              <span className="text-zinc-300">ABRE CAMINO.</span>
            </h1>
            <p className="text-base text-zinc-400 max-w-xl leading-relaxed">
              Somos Patria Ingeniería Pavimentos y Agregados S.A.S. Nuestra actividad se relaciona con la construcción, la infraestructura vial, los materiales y la maquinaria para obra.
            </p>
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-100 transition-colors border border-zinc-200"
              href="/contacto"
            >
              HABLEMOS DE TU PROYECTO
              <span className="text-zinc-400">→</span>
            </Link>
          </div>
          <div className="h-[400px] bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <div className="text-center space-y-4">
              <span className="text-xs font-mono text-zinc-400">01 / NUESTRA IDENTIDAD</span>
              <h2 className="text-3xl font-bold text-white">
                TRABAJO QUE
                <br />
                CONECTA
                <br />
                <span className="text-zinc-300">TERRITORIOS.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-4">
            Quiénes somos
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-6">
            UN PUNTO DE ENCUENTRO ENTRE
            <br />
            <span className="text-zinc-600">MATERIALES, EQUIPOS Y OBRA.</span>
          </h2>
          <p className="text-base text-zinc-600 leading-relaxed">
            El nombre y las actividades inscritas de Patria orientan esta propuesta de sitio. Nuestro objetivo aquí es presentar de forma clara sus líneas de trabajo y facilitar el contacto con clientes, aliados y candidatos. La historia, los valores, el equipo y los resultados deberán completarse con información aprobada por la empresa.
          </p>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-4">
              Ámbitos registrados
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              LO QUE DA FORMA
              <br />
              <span className="text-zinc-600">A PATRIA.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <article
                key={area.number}
                className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-colors"
              >
                <div className="mb-4">
                  <span className="text-sm font-mono text-zinc-500">{area.number} / ÁREA</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{area.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-zinc-600 text-center leading-relaxed">
            La razón social y las actividades económicas se consultaron en un directorio empresarial basado en RUES. Esta página evita atribuir a Patria cifras, certificaciones o proyectos no verificados.
          </p>
        </div>
      </section>

      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-4">
              Siguiente paso
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              CONOCE LAS LÍNEAS
              <br />
              <span className="text-zinc-300">DEL PORTAFOLIO.</span>
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-100 transition-colors border border-zinc-200"
            href="/portafolio"
          >
            EXPLORAR PORTAFOLIO
            <span className="text-zinc-400">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
