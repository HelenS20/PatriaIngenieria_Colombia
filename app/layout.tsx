import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"; // <-- 1. Importa Speed Insights aquí
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ExperienceShell } from "@/components/ui/experience-shell";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import "./globals.css";
import "../styles/tokens.css";
import "./interactive.css";
import "./contact.css";
import "../styles/responsive.css";
import "./assets.css";
import "../styles/layout-fixes.css";
import "../styles/dynamic-experience.css";
import "../styles/certification-marquee.css";
import "../styles/location-motion.css";
import "../styles/hero-ticker.css";
import "../styles/section-polish.css";
import "../styles/final-polish.css";
import "../styles/certification-finish.css";
import "../styles/patria-brand.css";
import "../styles/patria-refresh.css";
import "../styles/modern-minimal.css";
import "../styles/portfolio-v2.css";
import "../styles/agency-direction.css";

export const metadata: Metadata = {
  title: "Patria Ingeniería | Pavimentos y Agregados",
  description: "Patria Ingeniería Pavimentos y Agregados S.A.S. — ingeniería e infraestructura.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <ExperienceShell>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <WhatsAppButton />
          <CookieConsent />
        </ExperienceShell>
        <Analytics />
        <SpeedInsights /> {/* <-- 2. Añade el componente SpeedInsights aquí */}
      </body>
    </html>
  );
}