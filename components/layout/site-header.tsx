"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-brand-silver bg-white">
      <Container className="flex h-full items-center justify-between">
        <Link
          className="flex h-12 w-[160px] items-center"
          href="/"
          onClick={closeMenu}
          aria-label={`${siteConfig.name} - inicio`}
        >
          <img
            src="/images/brand/patria-logo-transparent.png"
            alt={siteConfig.legalName}
            className="h-full w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-brand-blue"
                  : "text-brand-graphite hover:text-brand-blue"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            className="hidden items-center rounded-sm bg-brand-blue px-4 py-2 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#004769] md:inline-flex"
            href="/vacantes"
          >
            VACANTES
          </Link>

          <button
            className="flex items-center gap-2 text-sm font-medium text-brand-black md:hidden"
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? "CERRAR" : "MENÚ"}
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="fixed inset-0 top-16 z-40 border-t border-brand-silver bg-white md:hidden"
            id="mobile-navigation"
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col p-6">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  onClick={closeMenu}
                  href={item.href}
                  className={`border-b border-brand-silver py-4 text-base font-medium ${
                    pathname === item.href ? "text-brand-blue" : "text-brand-graphite"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                onClick={closeMenu}
                className="py-4 font-semibold text-brand-blue"
                href="/vacantes"
              >
                Vacantes
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
