import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { CookieSettingsButton } from "@/components/ui/cookie-consent";

export function SiteFooter() {
  const whatsAppUrl = getWhatsAppUrl("Hola, quiero conocer los servicios de Patria Ingeniería.");

  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link
              className="inline-flex items-center w-[200px] h-12 mb-6"
              href="/"
              aria-label={`${siteConfig.name} - inicio`}
            >
              <img
                src="/images/brand/patria-logo-transparent.png"
                alt={siteConfig.legalName}
                className="h-full w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Patria Ingeniería Pavimentos y Agregados S.A.S. — ingeniería e infraestructura.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-4">
              Explora
            </p>
            <div className="space-y-3">
              <Link
                href="/quienes-somos"
                className="block text-zinc-400 text-sm hover:text-white transition-colors"
              >
                Quiénes somos
              </Link>
              <Link
                href="/portafolio"
                className="block text-zinc-400 text-sm hover:text-white transition-colors"
              >
                Portafolio
              </Link>
              <Link
                href="/vacantes"
                className="block text-zinc-400 text-sm hover:text-white transition-colors"
              >
                Vacantes
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-4">
              Contacto
            </p>
            <div className="space-y-3">
              <span className="block text-zinc-400 text-sm">
                {siteConfig.city}
              </span>
              <Link
                href="/contacto"
                className="block text-zinc-400 text-sm hover:text-white transition-colors"
              >
                Escríbenos
              </Link>
              {whatsAppUrl && (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-zinc-400 text-sm hover:text-white transition-colors"
                >
                  WhatsApp →
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-4">
              Legal
            </p>
            <div className="space-y-3">
              <Link
                href="/empresa/tratamiento-datos"
                className="block text-zinc-400 text-sm hover:text-white transition-colors"
              >
                Tratamiento de datos
              </Link>
              <Link
                href="/politica-cookies"
                className="block text-zinc-400 text-sm hover:text-white transition-colors"
              >
                Política de cookies
              </Link>
              <div className="pt-2">
                <CookieSettingsButton />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800">
          <small className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos los derechos reservados.
          </small>
        </div>
      </div>
    </footer>
  );
}
