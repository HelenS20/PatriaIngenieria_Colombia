import Link from "next/link";
import type { NewsItem } from "@/types";

const images = ["/images/projects/urban-paving.png", "/images/home/hero-road.png", "/images/projects/asphalt-plant.png"];

export function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <div className="newsGrid">
      {items.map((item, index) => (
        <article key={item.id} className="newsCard">
          <Link className="newsCardImage" href={`/noticias/${item.id}`} aria-label={`Leer ${item.title}`} style={{ backgroundImage: `linear-gradient(0deg, rgba(7, 17, 12, .17), rgba(7, 17, 12, .04)), url('${images[index % images.length]}')` }}>
            <span>{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            <b aria-hidden="true">↗</b>
          </Link>
          <div className="newsCardBody">
            <p>{item.date} · {item.category}</p>
            <h3>{item.title}</h3>
            <span>{item.excerpt}</span>
            <Link href={`/noticias/${item.id}`}>VER BORRADOR <b aria-hidden="true">↗</b></Link>
          </div>
        </article>
      ))}
    </div>
  );
}
