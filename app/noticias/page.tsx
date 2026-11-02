import { NewsGrid } from "@/components/news/news-grid";
import { newsItems } from "@/lib/content";
export const metadata = { title: "Noticias | Patria Ingeniería" };
export default function NewsPage() { return <><section className="innerHero"><p className="eyebrow">Actualidad</p><h1>NOTICIAS<br/><i>Y NOVEDADES.</i></h1><p>Un espacio preparado para comunicar la actividad de la empresa.</p></section><section className="section news"><NewsGrid items={newsItems} /></section></>; }
