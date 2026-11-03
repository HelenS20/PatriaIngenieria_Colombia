import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ExperienceShell } from "@/components/ui/experience-shell";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Inter, DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/tokens.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patria Ingeniería | Pavimentos y Agregados",
  description: "Patria Ingeniería Pavimentos y Agregados S.A.S. — ingeniería e infraestructura.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${dmMono.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        <ExperienceShell>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <WhatsAppButton />
          <CookieConsent />
        </ExperienceShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}