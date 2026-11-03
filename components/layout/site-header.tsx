"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMobileOpen(false);

  // Cerrar el drawer al cambiar de ruta o pulsar Escape.
  useEffect(() => { setMobileOpen(false); }, [pathname]);
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [mobileOpen]);

  return (
    <header className="nav patriaNav">
      <Link className="brand brandLogo" href="/" onClick={closeMenu} aria-label={`${siteConfig.name} - inicio`}>
        <Image
          src="/images/brand/patria-logo-transparent.png"
          alt={siteConfig.legalName}
          width={240}
          height={80}
          priority
        />
      </Link>

      <nav className="navlinks patriaNavLinks" aria-label="Navegación principal">
        {siteConfig.navigation.map((item) => (
          <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
        ))}
      </nav>
      <Link className="navJobsButton" href="/vacantes">VACANTES <span aria-hidden="true">↗</span></Link>

      <button
        className="mobileMenuToggle"
        type="button"
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
        aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <MenuIcon open={mobileOpen} />
      </button>

      {mobileOpen && (
        <>
          <div className="mobileBackdrop" aria-hidden="true" onClick={closeMenu} />
          <nav className="mobileDrawer" id="mobile-navigation" aria-label="Navegación móvil">
            <div className="mobileDrawerPrimary">
              {siteConfig.navigation.map((item) => (
                <Link onClick={closeMenu} key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              ))}
              <Link onClick={closeMenu} className="mobileJobsLink" href="/vacantes">
                Vacantes <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
