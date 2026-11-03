import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { portfolioCategories } from "@/lib/portfolio";
import {
  parsePortfolioQuery,
  portfolioCategoryCount,
  portfolioHref,
  searchPortfolio,
  type PortfolioSearchParams,
} from "@/lib/portfolio-search";
import { Search, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portafolio | Patria Ingeniería",
  description: "Explora las líneas editoriales de materiales, infraestructura vial y equipos de Patria Ingeniería.",
};

export default async function PortfolioPage({ searchParams }: { searchParams: Promise<PortfolioSearchParams> }) {
  const query = parsePortfolioQuery(await searchParams);
  const results = searchPortfolio(query);
  const hasFilters = Boolean(query.q || query.categoria !== "todos" || query.orden !== "nombre");

  return (
    <>
      <section className="min-h-[430px] bg-[#102a38]">
        <div className="px-page-gutter py-[100px_0] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-blue-light font-mono">
              PATRIA INGENIERÍA / PORTAFOLIO
            </p>
            <h1 className="text-[clamp(50px,5.9vw,90px)] font-display font-semibold leading-[0.98] tracking-[-0.08em] text-white">
              Soluciones para{" "}
              <span className="text-brand-blue-light italic">seguir avanzando.</span>
            </h1>
            <p className="text-[16px] leading-[1.75] text-white/80 max-w-xl">
              Explora materiales, infraestructura vial y equipos en un catálogo pensado para iniciar una conversación sobre tu proyecto.
            </p>
            <a
              className="inline-flex items-center gap-2 text-brand-blue-light text-[12px] font-bold hover:text-white transition-colors"
              href="#explorar"
            >
              Explorar líneas
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="relative h-[300px] lg:h-[400px] rounded-sm overflow-hidden">
            <Image
              src="/images/portfolio/pavimentacion-editorial.webp"
              alt="Pavimentación vial, imagen ilustrativa"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 right-4 text-[10px] font-mono text-white/80 bg-black/50 px-2 py-1 rounded-sm">
              IMAGEN ILUSTRATIVA
            </span>
          </div>
        </div>
      </section>

      <section className="py-[clamp(76px,8vw,118px)] bg-[#f5f8f9]" id="explorar">
        <div className="px-page-gutter">
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <div>
                <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-graphite font-mono mb-4">
                  ÁREAS DE TRABAJO
                </p>
                <h2 className="text-[clamp(43px,4.6vw,70px)] font-display font-semibold leading-[1.01] tracking-[-0.062em] text-brand-black">
                  Encuentra una línea{" "}
                  <span className="text-brand-blue italic">para tu proyecto.</span>
                </h2>
              </div>
              <p className="max-w-md text-[14px] leading-relaxed text-brand-graphite">
                Estas fichas son una estructura de muestra basada en las actividades registradas. Patria debe confirmar productos, alcance, normas y disponibilidad antes de publicarlos como oferta oficial.
              </p>
            </div>

            <nav className="flex flex-wrap gap-3 mb-8" aria-label="Categorías del portafolio">
              {portfolioCategories.map((category) => (
                <Link
                  key={category.value}
                  href={portfolioHref({ ...query, categoria: category.value, pagina: 1 })}
                  className={cn(
                    "px-4 py-2 text-[13px] font-semibold rounded-sm border transition-all duration-300",
                    query.categoria === category.value
                      ? "bg-brand-blue text-white border-brand-blue"
                      : "bg-white text-brand-graphite border-brand-silver hover:border-brand-blue hover:text-brand-blue"
                  )}
                  aria-current={query.categoria === category.value ? "page" : undefined}
                >
                  {category.label}
                  <span className="ml-2 text-[11px] opacity-70">
                    ({portfolioCategoryCount(category.value)})
                  </span>
                </Link>
              ))}
            </nav>

            <form className="flex flex-col md:flex-row gap-4 mb-8" action="/portafolio" method="get" role="search">
              <label className="flex-1 relative">
                <span className="sr-only">Buscar por nombre o aplicación</span>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-graphite" />
                <input
                  name="q"
                  type="search"
                  defaultValue={query.q}
                  maxLength={80}
                  placeholder="Ej. agregados, vías, maquinaria"
                  className="w-full pl-10 pr-4 py-3 border border-brand-silver rounded-sm text-[14px] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
              </label>
              <label className="relative">
                <span className="sr-only">Ordenar</span>
                <select
                  name="orden"
                  defaultValue={query.orden}
                  className="px-4 py-3 border border-brand-silver rounded-sm text-[14px] bg-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                >
                  <option value="nombre">Nombre A–Z</option>
                  <option value="nombre-desc">Nombre Z–A</option>
                  <option value="categoria">Categoría</option>
                </select>
              </label>
              {query.categoria !== "todos" && <input type="hidden" name="categoria" value={query.categoria} />}
              <button
                type="submit"
                className="px-6 py-3 bg-brand-blue text-white font-bold text-[12px] rounded-sm hover:bg-[#004769] transition-colors flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Buscar
              </button>
            </form>

            <div className="flex items-center justify-between text-[13px] text-brand-graphite mb-8" aria-live="polite">
              <p>
                {results.total} {results.total === 1 ? "línea" : "líneas"}
                {query.q && <> para <strong>"{query.q}"</strong></>}
              </p>
              {hasFilters && (
                <Link
                  href="/portafolio"
                  className="flex items-center gap-2 text-brand-blue hover:text-brand-blue-deep transition-colors"
                >
                  Limpiar filtros
                  <X className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>

          {results.items.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {results.items.map((item) => (
                <article
                  className="bg-white border border-brand-silver rounded-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  key={item.slug}
                >
                  <Link
                    className="relative block aspect-[4/3] overflow-hidden"
                    href={`/portafolio/${item.slug}?volver=${encodeURIComponent(portfolioHref(query))}`}
                    aria-label={`Ver ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title}, imagen ilustrativa`}
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      style={{ objectPosition: item.imagePosition ?? "center" }}
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-3 right-3 text-[10px] font-mono text-white/80 bg-black/50 px-2 py-1 rounded-sm">
                      IMAGEN ILUSTRATIVA
                    </span>
                  </Link>
                  <div className="p-5">
                    <p className="text-[11px] font-mono text-brand-graphite mb-2">
                      {item.categoryLabel} · Línea de muestra
                    </p>
                    <h3 className="text-[18px] font-display font-semibold text-brand-black mb-2">
                      <Link
                        href={`/portafolio/${item.slug}?volver=${encodeURIComponent(portfolioHref(query))}`}
                        className="hover:text-brand-blue transition-colors"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-[13px] leading-relaxed text-brand-graphite mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-brand-silver">
                      <span className="text-[12px] text-brand-graphite">{item.applications[0]}</span>
                      <Link
                        href={`/portafolio/${item.slug}?volver=${encodeURIComponent(portfolioHref(query))}`}
                        className="text-brand-blue text-[12px] font-bold flex items-center gap-1 hover:text-brand-blue-deep transition-colors"
                        aria-label={`Ver detalles de ${item.title}`}
                      >
                        Ver detalle
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-brand-silver rounded-sm">
              <Search className="w-12 h-12 text-brand-silver mx-auto mb-4" />
              <h3 className="text-[24px] font-display font-semibold text-brand-black mb-2">
                No encontramos esa línea
              </h3>
              <p className="text-[14px] text-brand-graphite mb-6">
                Prueba con otra palabra o vuelve a ver todo el portafolio.
              </p>
              <Link
                href="/portafolio"
                className="inline-flex items-center gap-2 text-brand-blue text-[12px] font-bold hover:text-brand-blue-deep transition-colors"
              >
                Ver todas las líneas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {results.pages > 1 && (
            <nav className="flex items-center justify-center gap-4" aria-label="Páginas del portafolio">
              {results.page > 1 && (
                <Link
                  href={portfolioHref({ ...query, pagina: results.page - 1 })}
                  className="flex items-center gap-2 px-4 py-2 border border-brand-silver rounded-sm text-[13px] font-semibold hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </Link>
              )}
              <span className="text-[13px] text-brand-graphite">
                Página {results.page} de {results.pages}
              </span>
              {results.page < results.pages && (
                <Link
                  href={portfolioHref({ ...query, pagina: results.page + 1 })}
                  className="flex items-center gap-2 px-4 py-2 border border-brand-silver rounded-sm text-[13px] font-semibold hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  Siguiente
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>

      <section className="py-[clamp(76px,8vw,118px)] bg-[#102a38]">
        <div className="px-page-gutter flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-blue-light font-mono mb-4">
              HABLEMOS DE TU PROYECTO
            </p>
            <h2 className="text-[clamp(43px,4.6vw,70px)] font-display font-semibold leading-[1.01] tracking-[-0.062em] text-white mb-4">
              ¿No ves lo que necesitas?
            </h2>
            <p className="text-[16px] leading-[1.75] text-white/80 max-w-xl">
              Cuéntanos el alcance de tu solicitud y el equipo podrá orientarte por correo cuando el canal esté configurado.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-5 min-h-[48px] px-5 py-3 border border-brand-blue-light bg-brand-blue-light text-brand-black font-bold text-[12px] rounded-sm hover:bg-white hover:-translate-y-0.5 transition-all duration-300"
            href="/contacto"
          >
            Escríbenos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
