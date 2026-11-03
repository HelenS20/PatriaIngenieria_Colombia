import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <span className="text-zinc-400 text-sm font-mono tracking-widest">
              INGENIERÍA · INFRAESTRUCTURA
            </span>
          </div>
          <div className="space-y-6">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-500">
              Conoce a Patria
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              INGENIERÍA CIVIL
              <br />
              <span className="text-zinc-600">CON PROPÓSITO.</span>
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed max-w-xl">
              Patria Ingeniería Pavimentos y Agregados S.A.S. desarrolla actividades de ingeniería civil, infraestructura vial, materiales de construcción y maquinaria.
            </p>
            <div className="flex flex-wrap gap-3">
              {["OBRA CIVIL", "MATERIALES", "EQUIPOS"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
            <Link
              href="/quienes-somos"
              className="inline-flex items-center gap-2 text-zinc-900 font-semibold text-sm hover:text-zinc-600 transition-colors"
            >
              QUIÉNES SOMOS
              <span className="text-zinc-400">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
