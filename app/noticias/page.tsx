import { NewsGrid } from "@/components/news/news-grid";
import { Container } from "@/components/ui/container";
import { newsItems } from "@/lib/content";

export const metadata = { title: "Noticias | Patria Ingeniería" };

export default function NewsPage() {
  return (
    <>
      <section className="bg-brand-black py-24 text-white">
        <Container>
          <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-brand-silver">
            Actualidad
          </p>
          <h1 className="font-display text-section-title font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            NOTICIAS
            <br />
            <span className="text-brand-silver">Y NOVEDADES.</span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-brand-silver">
            Un espacio preparado para comunicar la actividad de la empresa.
          </p>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <NewsGrid items={newsItems} />
        </Container>
      </section>
    </>
  );
}
