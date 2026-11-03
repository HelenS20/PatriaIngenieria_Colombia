"use client";


import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import brandIcon from "@/app/icon.png";

export function ExperienceShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLoading(false);
      return;
    }
    const timer = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const distance = Math.max(1, document.body.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty("--scroll", `${Math.min(100, window.scrollY / distance * 100)}%`);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return <><div className="readingProgress" aria-hidden="true" /><div className={`preloader ${loading ? "" : "preloaderOut"}`} aria-hidden="true"><div><span><Image src={brandIcon} alt="" priority /></span><b>PATRIA INGENIERÍA</b><i /></div></div>{children}</>;
}
