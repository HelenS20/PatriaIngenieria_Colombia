import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { CookieSettingsButton } from "@/components/ui/cookie-consent";
import { Container } from "@/components/ui/container";

const linkClass = "block text-sm text-brand-silver transition-colors hover:text-white";
const groupTitleClass = "mb-4 text-xs font-bold uppercase tracking-widest text-brand-silver/70";

export function SiteFooter() {
  const whatsAppUrl = getWhatsAppUrl("Hola, quiero conocer los servicios de Patria Ingeniería.");

  return (
    <footer className="bg-brand-black py-16 text-white">
      <Container>
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              className="mb-6 inline-flex h-12 w-[200px] items-center"
              href="/"
              aria-label={`${siteConfig.name} - inicio`}
            >
              <img
                src="/images/brand/patria-logo-transparent.png"
                alt={siteConfig.legalName}
                className="h-full w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-brand-silver">
              Patria Ingeniería Pavimentos y Agregados S.A.S. — ingeniería e infraestructura.
            </p>
          </div>

          <div>
            <p className={groupTitleClass}>Explora</p>
            <div className="space-y-3">
              <Link href="/quienes-somos" className={linkClass}>
                Quiénes somos
              </Link>
              <Link href="/portafolio" className={linkClass}>
                Portafolio
              </Link>
              <Link href="/vacantes" className={linkClass}>
                Vacantes
              </Link>
            </div>
          </div>

          <div>
            <p className={groupTitleClass}>Contacto</p>
            <div className="space-y-3">
              <span className="block text-sm text-brand-silver">{siteConfig.city}</span>
              <Link href="/contacto" className={linkClass}>
                Escríbenos
              </Link>
              {whatsAppUrl && (
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  WhatsApp →
                </a>
              )}
            </div>
          </div>

          <div>
            <p className={groupTitleClass}>Legal</p>
            <div className="space-y-3">
              <Link href="/empresa/tratamiento-datos" className={linkClass}>
                Tratamiento de datos
              </Link>
              <Link href="/politica-cookies" className={linkClass}>
                Política de cookies
              </Link>
              <div className="pt-2">
                <CookieSettingsButton />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8">
          <small className="text-sm text-brand-silver/70">
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos los derechos reservados.
          </small>
        </div>
      </Container>
    </footer>
  );
}
