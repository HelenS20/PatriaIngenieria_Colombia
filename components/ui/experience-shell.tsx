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

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[100] h-[3px] bg-brand-blue transition-[width] duration-100 ease-linear"
        style={{ width: "var(--scroll, 0%)" }}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-0 z-[9999] grid place-items-center bg-brand-black transition-[opacity,visibility] duration-500 ${
          loading ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="grid h-[60px] w-[60px] place-items-center rounded-full bg-white">
            <Image src={brandIcon} alt="" priority className="h-9 w-9 object-contain" />
          </span>
          <b className="font-mono text-[10px] font-bold tracking-[1.4px] text-white">PATRIA INGENIERÍA</b>
          <i className="block h-0.5 w-[180px] animate-pulse bg-brand-silver" />
        </div>
      </div>
      {children}
    </>
  );
}
