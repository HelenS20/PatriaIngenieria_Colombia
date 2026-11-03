import Link from "next/link";
import type { NewsItem } from "@/types";
import { ArrowRight, Calendar } from "lucide-react";

const images = ["/images/projects/urban-paving.png", "/images/home/hero-road.png", "/images/projects/asphalt-plant.png"];

export function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <article
          key={item.id}
          className="bg-white border border-brand-silver rounded-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <Link
            className="relative block aspect-[16/9] overflow-hidden bg-brand-silver"
            href={`/noticias/${item.id}`}
            aria-label={`Leer ${item.title}`}
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('${images[index % images.length]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <span className="self-start text-[10px] font-mono text-white/80 bg-black/50 px-2 py-1 rounded-sm">
                {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
              <ArrowRight className="self-end w-5 h-5 text-white" />
            </div>
          </Link>
          <div className="p-5">
            <div className="flex items-center gap-2 text-[11px] text-brand-graphite mb-3">
              <Calendar className="w-3 h-3" />
              <span>{item.date} · {item.category}</span>
            </div>
            <h3 className="text-[18px] font-display font-semibold text-brand-black mb-2 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-[13px] leading-relaxed text-brand-graphite mb-4 line-clamp-2">
              {item.excerpt}
            </p>
            <Link
              href={`/noticias/${item.id}`}
              className="inline-flex items-center gap-2 text-brand-blue text-[12px] font-bold hover:text-brand-blue-deep transition-colors"
            >
              VER BORRADOR
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
