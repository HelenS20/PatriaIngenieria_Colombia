"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <Link
          className="flex items-center w-[160px] h-12"
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

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            className="hidden md:inline-flex items-center px-4 py-2 bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
            href="/vacantes"
          >
            VACANTES
          </Link>

          <button
            className="md:hidden flex items-center gap-2 text-zinc-900 text-sm"
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
            className="fixed inset-0 top-16 z-40 bg-white border-t border-zinc-200 md:hidden"
            id="mobile-navigation"
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col p-6 space-y-0">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  onClick={closeMenu}
                  href={item.href}
                  className={`py-4 border-b border-zinc-100 text-base font-medium ${
                    pathname === item.href ? "text-zinc-900" : "text-zinc-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                onClick={closeMenu}
                className="py-4 text-zinc-900 font-medium"
                href="/vacantes"
              >
                Vacantes
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
