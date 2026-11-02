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

export const metadata: Metadata = {
  title: "Portafolio | Patria Ingeniería",
  description: "Explora las líneas editoriales de materiales, infraestructura vial y equipos de Patria Ingeniería.",
};

export default async function PortfolioPage({ searchParams }: { searchParams: Promise<PortfolioSearchParams> }) {
  const query = parsePortfolioQuery(await searchParams);
  const results = searchPortfolio(query);
  const hasFilters = Boolean(query.q || query.categoria !== "todos" || query.orden !== "nombre");

  return <>
    <section className="portfolioHero">
      <div className="portfolioHeroCopy">
        <p className="eyebrow">PATRIA INGENIERÍA / PORTAFOLIO</p>
        <h1>Soluciones para <i>seguir avanzando.</i></h1>
        <p>Explora materiales, infraestructura vial y equipos en un catálogo pensado para iniciar una conversación sobre tu proyecto.</p>
        <a className="portfolioHeroLink" href="#explorar">Explorar líneas <span aria-hidden="true">↓</span></a>
      </div>
      <div className="portfolioHeroVisual">
        <Image src="/images/portfolio/pavimentacion-editorial.webp" alt="Pavimentación vial, imagen ilustrativa" fill priority sizes="(max-width: 760px) 100vw, 50vw" />
        <span>IMAGEN ILUSTRATIVA</span>
      </div>
    </section>

    <section className="portfolioBrowse" id="explorar">
      <div className="portfolioBrowseHead">
        <div><p className="eyebrow">ÁREAS DE TRABAJO</p><h2>Encuentra una línea <i>para tu proyecto.</i></h2></div>
        <p>Estas fichas son una estructura de muestra basada en las actividades registradas. Patria debe confirmar productos, alcance, normas y disponibilidad antes de publicarlos como oferta oficial.</p>
      </div>

      <nav className="portfolioTabs" aria-label="Categorías del portafolio">
        {portfolioCategories.map((category) => <Link
          key={category.value}
          href={portfolioHref({ ...query, categoria: category.value, pagina: 1 })}
          className={query.categoria === category.value ? "portfolioTab is-active" : "portfolioTab"}
          aria-current={query.categoria === category.value ? "page" : undefined}
        ><span>{category.label}</span><small>{portfolioCategoryCount(category.value)}</small></Link>)}
      </nav>

      <form className="portfolioToolbar" action="/portafolio" method="get" role="search">
        <label className="portfolioSearchField"><span>Buscar por nombre o aplicación</span><input name="q" type="search" defaultValue={query.q} maxLength={80} placeholder="Ej. agregados, vías, maquinaria" /></label>
        <label className="portfolioSortField"><span>Ordenar</span><select name="orden" defaultValue={query.orden}><option value="nombre">Nombre A–Z</option><option value="nombre-desc">Nombre Z–A</option><option value="categoria">Categoría</option></select></label>
        {query.categoria !== "todos" && <input type="hidden" name="categoria" value={query.categoria} />}
        <button type="submit">Buscar <span aria-hidden="true">↗</span></button>
      </form>

      <div className="portfolioResultsBar" aria-live="polite"><p>{results.total} {results.total === 1 ? "línea" : "líneas"}{query.q && <> para <strong>“{query.q}”</strong></>}</p>{hasFilters && <Link href="/portafolio">Limpiar filtros <span aria-hidden="true">×</span></Link>}</div>

      {results.items.length ? <div className="portfolioGrid">{results.items.map((item) => <article className="portfolioCard" key={item.slug}>
        <Link className="portfolioCardImage" href={`/portafolio/${item.slug}?volver=${encodeURIComponent(portfolioHref(query))}`} aria-label={`Ver ${item.title}`}>
          <Image src={item.image} alt={`${item.title}, imagen ilustrativa`} fill sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectPosition: item.imagePosition ?? "center" }} />
          <span>IMAGEN ILUSTRATIVA</span>
        </Link>
        <div className="portfolioCardContent"><p>{item.categoryLabel} <span>·</span> Línea de muestra</p><h3><Link href={`/portafolio/${item.slug}?volver=${encodeURIComponent(portfolioHref(query))}`}>{item.title}</Link></h3><p className="portfolioCardDescription">{item.description}</p><div className="portfolioCardBottom"><span>{item.applications[0]}</span><Link href={`/portafolio/${item.slug}?volver=${encodeURIComponent(portfolioHref(query))}`} aria-label={`Ver detalles de ${item.title}`}>Ver detalle <b aria-hidden="true">↗</b></Link></div></div>
      </article>)}</div> : <div className="portfolioEmpty"><span aria-hidden="true">⌕</span><h3>No encontramos esa línea</h3><p>Prueba con otra palabra o vuelve a ver todo el portafolio.</p><Link href="/portafolio">Ver todas las líneas <span aria-hidden="true">↗</span></Link></div>}

      {results.pages > 1 && <nav className="portfolioPagination" aria-label="Páginas del portafolio">
        {results.page > 1 && <Link href={portfolioHref({ ...query, pagina: results.page - 1 })}>← Anterior</Link>}
        <span>Página {results.page} de {results.pages}</span>
        {results.page < results.pages && <Link href={portfolioHref({ ...query, pagina: results.page + 1 })}>Siguiente →</Link>}
      </nav>}
    </section>

    <section className="portfolioContactStrip"><div><p className="eyebrow">HABLEMOS DE TU PROYECTO</p><h2>¿No ves lo que necesitas?</h2><p>Cuéntanos el alcance de tu solicitud y el equipo podrá orientarte por correo cuando el canal esté configurado.</p></div><Link href="/contacto">Escríbenos <span aria-hidden="true">↗</span></Link></section>
  </>;
}
