export function LocationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] bg-zinc-100 border border-zinc-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-mono text-zinc-500">REFERENCIA DE UBICACIÓN</span>
              <span className="text-xs font-mono text-zinc-500">MOSQUERA · CUNDINAMARCA</span>
            </div>
            <div className="h-[300px] bg-zinc-200 border border-zinc-300 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">Mapa ilustrativo</span>
            </div>
            <div className="mt-6 p-4 bg-white border border-zinc-200">
              <span className="block text-xs font-mono text-zinc-500 mb-2">01 / DIRECCIÓN DE REFERENCIA</span>
              <p className="text-sm text-zinc-900 mb-3">Km 3.8, Zona Industrial Balsillas<br />Mosquera, Cundinamarca.</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Km+3.8+Zona+Industrial+Balsillas+Mosquera+Cundinamarca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-900 font-medium hover:text-zinc-600 transition-colors"
              >
                VER EN MAPAS →
              </a>
            </div>
            <span className="block mt-4 text-xs text-zinc-400">ESQUEMA ILUSTRATIVO · NO A ESCALA</span>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-500">
              Ubicación de referencia
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              UN PUNTO
              <br />
              <span className="text-zinc-600">DE PARTIDA.</span>
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed max-w-xl">
              El mapa animado es ilustrativo y la dirección no corresponde a una sede confirmada de Patria. Sustitúyela al recibir la información oficial de la empresa.
            </p>
            <div className="space-y-3">
              {[
                { number: "01", label: "BALSILLAS · MOSQUERA" },
                { number: "02", label: "SEDE POR CONFIRMAR" },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex items-center gap-4 p-4 bg-zinc-50 border border-zinc-200"
                >
                  <span className="text-lg font-mono text-zinc-900">{item.number}</span>
                  <span className="text-sm text-zinc-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
