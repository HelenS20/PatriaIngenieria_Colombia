"use client";

import { useEffect, useState } from "react";

// Punto de extensión para animaciones o cabecera reactiva.
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => { const update = () => setScrollY(window.scrollY); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  return scrollY;
}
