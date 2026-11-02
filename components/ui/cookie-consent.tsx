"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const cookieName = "patria_cookie_consent";

function readChoice() {
  const cookie = document.cookie.split("; ").find((part) => part.startsWith(`${cookieName}=`));
  return cookie?.split("=")[1] ?? null;
}

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
  return <section className="cookiePanel" aria-label="Preferencias de cookies">
    <div><span className="cookieKicker">PRIVACIDAD</span><h2>Tu experiencia, bajo control.</h2><p>Usamos una cookie para recordar tu elección. Actualmente el sitio no carga herramientas de analítica ni publicidad. Puedes cambiar tu preferencia cuando quieras.</p><Link href="/politica-cookies">Ver política de cookies ↗</Link></div>
    <div className="cookieActions"><button type="button" onClick={() => choose("essential")}>SOLO NECESARIAS</button><button type="button" onClick={() => choose("all")}>ACEPTAR TODAS</button></div>
  </section>;
}

export function CookieSettingsButton() {
  return <button className="cookieSettingsButton" type="button" onClick={() => window.dispatchEvent(new Event("patria:cookie-settings"))}>Configurar cookies</button>;
}
