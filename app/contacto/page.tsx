import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = { title: "Contáctanos | Patria Ingeniería" };
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ asunto?: string | string[] }> }) {
  const raw = await searchParams;
  const subject = (Array.isArray(raw.asunto) ? raw.asunto[0] ?? "" : raw.asunto ?? "").trim().slice(0, 120);
  const whatsAppUrl = getWhatsAppUrl(subject ? `Hola, quisiera información. ${subject}` : "Hola, quisiera información sobre Patria Ingeniería.");
  return <><section className="contactHero"><div><p className="eyebrow">Inicia tu proyecto</p><h1>HABLEMOS<br /><i>DE TU IDEA.</i></h1><p>Cuéntanos qué necesitas en materiales, equipos u obra civil. El formulario nos permite organizar tu solicitud y responderte al correo indicado.</p><div className="contactHeroActions"><a className="cta" href="#formulario">ESCRIBIR MENSAJE <span>↗</span></a>{whatsAppUrl && <a className="contactWhatsApp" href={whatsAppUrl} target="_blank" rel="noopener noreferrer">ABRIR WHATSAPP ↗</a>}</div></div><div className="contactImage"><span>P</span><p>INGENIERÍA<br />QUE CONECTA</p></div></section><section className="contactGrid"><div className="contactInfo"><p className="eyebrow">Canales de contacto</p><h2>ESTAMOS LISTOS<br /><i>PARA ESCUCHARTE.</i></h2><article><b>01</b><div><small>Correo de contacto temporal</small><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></article><article><b>02</b><div><small>Ubicación registrada</small><span>{siteConfig.city}</span></div></article><article><b>03</b><div><small>Vacantes</small><Link href="/vacantes">Envía tu hoja de vida ↗</Link></div></article>{whatsAppUrl && <article><b>04</b><div><small>Atención por chat</small><a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">Abrir WhatsApp ↗</a></div></article>}<div className="contactMap"><div className="rings"/><span>BUCARAMANGA<br />SANTANDER</span></div></div><div id="formulario"><ContactForm initialSubject={subject} /></div></section></>;
}
