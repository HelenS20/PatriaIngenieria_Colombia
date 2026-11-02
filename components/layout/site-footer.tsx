import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { CookieSettingsButton } from "@/components/ui/cookie-consent";

export function SiteFooter() {
  const whatsAppUrl = getWhatsAppUrl("Hola, quiero conocer los servicios de Patria Ingeniería.");
  return <footer id="contacto">
    <Link className="brand brandLogo" href="/" aria-label={`${siteConfig.name} - inicio`}><img src="/images/brand/patria-logo-transparent.png" alt={siteConfig.legalName} /></Link>
    <div><p>Explora</p><Link href="/quienes-somos">Quiénes somos</Link><Link href="/portafolio">Portafolio</Link><Link href="/vacantes">Vacantes</Link></div>
    <div><p>Contacto</p><span>{siteConfig.city}</span><Link href="/contacto">Escríbenos</Link>{whatsAppUrl && <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>}</div>
    <small>© {new Date().getFullYear()} {siteConfig.legalName}. <Link href="/empresa/tratamiento-datos">Tratamiento de datos</Link> · <Link href="/politica-cookies">Política de cookies</Link> · <CookieSettingsButton /></small>
  </footer>;
}
