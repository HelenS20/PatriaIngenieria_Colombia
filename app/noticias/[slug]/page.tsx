import Link from "next/link";
import { newsItems } from "@/lib/content";
import { Container } from "@/components/ui/container";

const images = ["/images/projects/urban-paving.png", "/images/home/hero-road.png", "/images/projects/asphalt-plant.png"];

export function generateStaticParams() { return newsItems.map((item) => ({ slug: item.id })); }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articleIndex = newsItems.findIndex((item) => item.id === slug);
  const index = articleIndex < 0 ? 0 : articleIndex;
  const article = newsItems[index];

  return (
    <article className="bg-white py-20">
      <Container className="max-w-3xl">
        <Link
          className="inline-flex items-center gap-2 text-[12px] font-bold text-brand-blue transition-colors hover:text-brand-black"
          href="/noticias"
        >
          ← VOLVER A NOTICIAS
        </Link>

        <header className="mt-10">
          <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-brand-graphite">
            {article.date} · {article.category}
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-brand-black">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-graphite">{article.excerpt}</p>
        </header>

        <div
          className="relative mt-10 flex aspect-[16/9] items-end overflow-hidden rounded-sm bg-brand-silver"
          role="img"
          aria-label="Imagen ilustrativa del artículo"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.1)), url('${images[index % images.length]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="m-4 rounded-sm bg-black/50 px-2 py-1 font-mono text-[10px] text-white/90">
            IMAGEN DEMOSTRATIVA / {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-10">
          <p className="font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-brand-black">
            Un espacio para contar el avance, el impacto y las personas detrás de cada proyecto.
          </p>
          <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-brand-graphite">
            <p>
              Este artículo es contenido de demostración. Aquí se publicará la información confirmada por el
              equipo de comunicaciones, con fotografías, fechas y resultados reales.
            </p>
            <p>
              La estructura ya contempla una dirección única para cada publicación y permite conectar más
              adelante un gestor de contenidos para el equipo autorizado.
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 border-t border-brand-silver pt-6 font-mono text-[11px] text-brand-graphite">
          <span>CONTINUAR EXPLORANDO</span>
          <Link href="/noticias" className="font-bold text-brand-blue transition-colors hover:text-brand-black">
            VER TODAS LAS NOTICIAS ↗
          </Link>
        </div>
      </Container>
    </article>
  );
}
