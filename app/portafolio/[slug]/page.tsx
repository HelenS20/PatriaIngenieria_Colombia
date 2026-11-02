import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolioItem, portfolioItems } from "@/lib/portfolio";

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

  return <>
    <article className="portfolioDetailV2">
      <nav className="portfolioBreadcrumb" aria-label="Ruta del portafolio"><Link href={returnHref}>Portafolio</Link><span aria-hidden="true">/</span><span>{item.categoryLabel}</span><span aria-hidden="true">/</span><span aria-current="page">{item.title}</span></nav>
      <div className="portfolioDetailMain">
        <div className="portfolioDetailPhoto"><Image src={item.image} alt={`${item.title}, imagen ilustrativa`} fill priority sizes="(max-width: 800px) 100vw, 55vw" style={{ objectPosition: item.imagePosition ?? "center" }} /><span>IMAGEN ILUSTRATIVA</span></div>
        <div className="portfolioDetailContent"><p className="eyebrow">{item.categoryLabel} / LÍNEA DE MUESTRA</p><h1>{item.title}</h1><p className="portfolioDetailLead">{item.description}</p>
          <div className="portfolioDetailApplications"><h2>Aplicaciones previstas</h2><ul>{item.applications.map((application) => <li key={application}>{application}</li>)}</ul></div>
          <div className="portfolioDetailNote"><strong>Información por confirmar</strong><p>Esta ficha es un ejemplo de presentación. Las especificaciones, normas, disponibilidad y condiciones comerciales se publicarán solo con datos aprobados por Patria.</p></div>
          <Link className="portfolioInquiry" href={inquiryHref}>Consultar esta línea <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <Link className="portfolioBack" href={returnHref}>← Volver al portafolio</Link>
    </article>

    {related.length > 0 && <section className="portfolioRelated"><div className="portfolioRelatedHead"><div><p className="eyebrow">SIGUE EXPLORANDO</p><h2>También puede interesarte</h2></div><Link href={returnHref}>Ver todas las líneas ↗</Link></div><div className="portfolioRelatedGrid">{related.map((other) => <Link href={`/portafolio/${other.slug}`} className="portfolioRelatedCard" key={other.slug}><div><Image src={other.image} alt={`${other.title}, imagen ilustrativa`} fill sizes="(max-width: 680px) 100vw, 50vw" style={{ objectPosition: other.imagePosition ?? "center" }} /></div><span>{other.categoryLabel}</span><h3>{other.title} <b aria-hidden="true">↗</b></h3></Link>)}</div></section>}
  </>;
}
