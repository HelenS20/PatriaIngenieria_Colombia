"use client";

import Link from "next/link";
import { NewsGrid } from "@/components/news/news-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { buttonClasses } from "@/components/ui/button-styles";
import { newsItems } from "@/lib/content";

export function NewsPreview() {
  return (
    <section id="noticias" className="bg-white py-24" data-reveal>
      <Container>
        <SectionHeading
          eyebrow="Actualidad"
          title={<>NOTICIAS<br /><i>Y NOVEDADES</i></>}
          aside={
            <Link className={buttonClasses("link")} href="/noticias">
              IR AL BLOG ↗
            </Link>
          }
        />
        <div className="mt-12">
          <NewsGrid items={newsItems} />
        </div>
      </Container>
    </section>
  );
}
