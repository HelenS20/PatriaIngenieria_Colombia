"use client";

import Link from "next/link";
import { NewsGrid } from "@/components/news/news-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { newsItems } from "@/lib/content";
export function NewsPreview() { return <section id="noticias" className="section news" data-reveal><SectionHeading eyebrow="Actualidad" title={<>NOTICIAS<br/><i>Y NOVEDADES</i></>} aside={<Link className="textLink" href="/noticias">IR AL BLOG ↗</Link>} /><NewsGrid items={newsItems} /></section>; }
