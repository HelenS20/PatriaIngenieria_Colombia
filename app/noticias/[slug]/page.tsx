import Link from "next/link";
import { newsItems } from "@/lib/content";

const images = ["/images/projects/urban-paving.png", "/images/home/hero-road.png", "/images/projects/asphalt-plant.png"];

export function generateStaticParams() { return newsItems.map((item) => ({ slug: item.id })); }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articleIndex = newsItems.findIndex((item) => item.id === slug);
  const index = articleIndex < 0 ? 0 : articleIndex;
  const article = newsItems[index];

  return (
    <article className="articlePage articleEditorial">
      <Link className="textLink articleBack" href="/noticias">← VOLVER A NOTICIAS</Link>
      <header className="articleHeader">
        <p className="eyebrow">{article.date} · {article.category}</p>
        <h1>{article.title}</h1>
        <p className="articleLead">{article.excerpt}</p>
      </header>
      <div className="articleCover" role="img" aria-label="Imagen ilustrativa del artículo" style={{ backgroundImage: `url('${images[index % images.length]}')` }}>
        <span>IMAGEN DEMOSTRATIVA / {String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="articleContent">
        <p className="articleIntro">Un espacio para contar el avance, el impacto y las personas detrás de cada proyecto.</p>
        <div className="articleBody"><p>Este artículo es contenido de demostración. Aquí se publicará la información confirmada por el equipo de comunicaciones, con fotografías, fechas y resultados reales.</p><p>La estructura ya contempla una dirección única para cada publicación y permite conectar más adelante un gestor de contenidos para el equipo autorizado.</p></div>
      </div>
      <div className="articleNext"><span>CONTINUAR EXPLORANDO</span><Link href="/noticias">VER TODAS LAS NOTICIAS ↗</Link></div>
    </article>
  );
}
