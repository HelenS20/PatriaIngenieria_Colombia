"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const cookieName = "patria_cookie_consent";

function readChoice() {
  const cookie = document.cookie.split("; ").find((part) => part.startsWith(`${cookieName}=`));
  return cookie?.split("=")[1] ?? null;
}

const actionButton =
  "flex-1 basis-[180px] rounded-sm border border-brand-blue px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-wide transition-shadow hover:shadow-md";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!readChoice());
    const openSettings = () => setVisible(true);
    window.addEventListener("patria:cookie-settings", openSettings);
    return () => window.removeEventListener("patria:cookie-settings", openSettings);
  }, []);

  function choose(value: "all" | "essential") {
    document.cookie = `${cookieName}=${value}; Max-Age=15552000; Path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    setVisible(false);
  }

  if (!visible) return null;
  return (
    <section
      className="fixed bottom-6 right-6 z-[100] grid w-[min(500px,calc(100vw-40px))] gap-4 rounded-xl border border-brand-silver bg-white p-7 shadow-[0_25px_60px_rgba(0,0,0,0.23)] max-[520px]:bottom-2.5 max-[520px]:right-2.5 max-[520px]:w-[calc(100vw-20px)] max-[520px]:p-5"
      aria-label="Preferencias de cookies"
    >
      <div>
        <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-brand-blue">PRIVACIDAD</span>
        <h2 className="mb-2 mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-brand-black">
          Tu experiencia, bajo control.
        </h2>
        <p className="mb-3 text-xs leading-relaxed text-brand-graphite">
          Usamos una cookie para recordar tu elección. Actualmente el sitio no carga herramientas de analítica
          ni publicidad. Puedes cambiar tu preferencia cuando quieras.
        </p>
        <Link href="/politica-cookies" className="text-[11px] font-extrabold text-brand-blue hover:text-brand-black">
          Ver política de cookies ↗
        </Link>
      </div>
      <div className="flex flex-wrap gap-2.5">
        <button type="button" onClick={() => choose("essential")} className={`${actionButton} bg-white text-brand-blue`}>
          SOLO NECESARIAS
        </button>
        <button type="button" onClick={() => choose("all")} className={`${actionButton} bg-brand-blue text-white`}>
          ACEPTAR TODAS
        </button>
      </div>
    </section>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      className="text-sm text-brand-silver underline underline-offset-2 transition-colors hover:text-white"
      type="button"
      onClick={() => window.dispatchEvent(new Event("patria:cookie-settings"))}
    >
      Configurar cookies
    </button>
  );
}
