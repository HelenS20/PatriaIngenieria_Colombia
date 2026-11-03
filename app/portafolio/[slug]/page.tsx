import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolioItem, portfolioItems } from "@/lib/portfolio";
import { ArrowLeft, ArrowRight, CheckCircle2, Info } from "lucide-react";

export function generateStaticParams() {
  return portfolioItems.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const item = getPortfolioItem((await params).slug);
  return {
    title: item ? `${item.title} | Patria Ingeniería` : "Portafolio | Patria Ingeniería",
    description: item?.description,
  };
}

export default async function PortfolioDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ volver?: string | string[] }>;
}) {
  const item = getPortfolioItem((await params).slug);
  if (!item) notFound();

  const rawReturn = (await searchParams).volver;
  const candidate = Array.isArray(rawReturn) ? rawReturn[0] ?? "" : rawReturn ?? "";
  const returnHref = candidate === "/portafolio" || candidate.startsWith("/portafolio?") ? candidate : "/portafolio";
  const inquiryHref = `/contacto?asunto=${encodeURIComponent(`Consulta sobre ${item.title}`)}`;
  const related = portfolioItems.filter((other) => other.category === item.category && other.slug !== item.slug).slice(0, 2);

  return (
    <>
      <article className="py-[clamp(76px,8vw,118px)] bg-[#f5f8f9]">
        <div className="px-page-gutter">
          <nav className="flex items-center gap-2 text-[12px] text-brand-graphite mb-8" aria-label="Ruta del portafolio">
            <Link href={returnHref} className="hover:text-brand-blue transition-colors">
              Portafolio
            </Link>
            <span aria-hidden="true">/</span>
            <span>{item.categoryLabel}</span>
            <span aria-hidden="true">/</span>
            <span className="text-brand-black font-semibold" aria-current="page">
              {item.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src={item.image}
                alt={`${item.title}, imagen ilustrativa`}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 55vw"
                style={{ objectPosition: item.imagePosition ?? "center" }}
                className="object-cover"
              />
              <span className="absolute bottom-4 right-4 text-[10px] font-mono text-white/80 bg-black/50 px-2 py-1 rounded-sm">
                IMAGEN ILUSTRATIVA
              </span>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-blue font-mono mb-4">
                  {item.categoryLabel} / LÍNEA DE MUESTRA
                </p>
                <h1 className="text-[clamp(50px,5.9vw,90px)] font-display font-semibold leading-[0.98] tracking-[-0.08em] text-brand-black mb-6">
                  {item.title}
                </h1>
                <p className="text-[18px] leading-relaxed text-brand-graphite">
                  {item.description}
                </p>
              </div>

              <div className="p-6 bg-white border border-brand-silver rounded-sm">
                <h2 className="text-[20px] font-display font-semibold text-brand-black mb-4">
                  Aplicaciones previstas
                </h2>
                <ul className="space-y-3">
                  {item.applications.map((application) => (
                    <li key={application} className="flex items-start gap-3 text-[14px] text-brand-graphite">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-brand-blue/10 border border-brand-blue/30 rounded-sm">
                <div className="flex items-start gap-3 mb-3">
                  <Info className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <strong className="text-[16px] font-semibold text-brand-black">
                    Información por confirmar
                  </strong>
                </div>
                <p className="text-[14px] leading-relaxed text-brand-graphite">
                  Esta ficha es un ejemplo de presentación. Las especificaciones, normas, disponibilidad y condiciones comerciales se publicarán solo con datos aprobados por Patria.
                </p>
              </div>

              <Link
                className="inline-flex items-center gap-5 min-h-[48px] px-5 py-3 border border-brand-blue bg-brand-blue text-white font-bold text-[12px] rounded-sm hover:bg-[#004769] hover:-translate-y-0.5 transition-all duration-300"
                href={inquiryHref}
              >
                Consultar esta línea
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <Link
            className="inline-flex items-center gap-2 text-brand-blue text-[12px] font-bold mt-12 hover:text-brand-blue-deep transition-colors"
            href={returnHref}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al portafolio
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-[clamp(76px,8vw,118px)] bg-white">
          <div className="px-page-gutter">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <div>
                <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-graphite font-mono mb-4">
                  SIGUE EXPLORANDO
                </p>
                <h2 className="text-[clamp(43px,4.6vw,70px)] font-display font-semibold leading-[1.01] tracking-[-0.062em] text-brand-black">
                  También puede interesarte
                </h2>
              </div>
              <Link
                href={returnHref}
                className="inline-flex items-center gap-2 text-brand-blue text-[12px] font-bold hover:text-brand-blue-deep transition-colors"
              >
                Ver todas las líneas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((other) => (
                <Link
                  href={`/portafolio/${other.slug}`}
                  className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-silver hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  key={other.slug}
                >
                  <Image
                    src={other.image}
                    alt={`${other.title}, imagen ilustrativa`}
                    fill
                    sizes="(max-width: 680px) 100vw, 50vw"
                    style={{ objectPosition: other.imagePosition ?? "center" }}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[10px] font-mono text-brand-blue-light mb-2 block">
                      {other.categoryLabel}
                    </span>
                    <h3 className="text-[20px] font-display font-semibold text-white mb-2">
                      {other.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-brand-blue-light text-[12px] font-bold">
                      Ver detalles
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
