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
    <header className="nav patriaNav">
      <Link className="brand brandLogo" href="/" onClick={closeMenu} aria-label={`${siteConfig.name} - inicio`}>
        <img src="/images/brand/patria-logo-transparent.png" alt={siteConfig.legalName} />
      </Link>

      <nav className="navlinks patriaNavLinks" aria-label="Navegación principal">
        {siteConfig.navigation.map((item) => (
          <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
        ))}
      </nav>
      <Link className="navJobsButton" href="/vacantes">VACANTES <span aria-hidden="true">↗</span></Link>

      <button className="mobileMenuToggle" type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((open) => !open)}>
        {mobileOpen ? "CERRAR" : "MENÚ"} <b aria-hidden="true">{mobileOpen ? "×" : "+"}</b>
      </button>
      {mobileOpen && (
        <nav className="mobileDrawer" id="mobile-navigation" aria-label="Navegación móvil">
          <div className="mobileDrawerPrimary">
            {siteConfig.navigation.map((item) => <Link onClick={closeMenu} key={item.href} href={item.href}>{item.label}</Link>)}
            <Link onClick={closeMenu} className="mobileJobsLink" href="/vacantes">Vacantes ↗</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
