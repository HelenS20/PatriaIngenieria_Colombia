import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outlineLight" | "link" | "linkLight";

const base =
  "inline-flex items-center justify-center gap-2 text-[12px] font-bold tracking-wide transition-all duration-300";

const variants: Record<Variant, string> = {
  // Acción principal sobre fondo claro u oscuro.
  primary:
    "min-h-[48px] rounded-sm border border-brand-blue bg-brand-blue px-5 py-3 text-white hover:bg-[#004769] hover:-translate-y-0.5",
  // Acción secundaria con borde, sobre fondo claro.
  outline:
    "min-h-[48px] rounded-sm border border-brand-blue px-5 py-3 text-brand-blue hover:bg-brand-blue hover:text-white",
  // Acción secundaria con borde, sobre fondo oscuro.
  outlineLight:
    "min-h-[48px] rounded-sm border border-brand-silver px-5 py-3 text-brand-silver hover:bg-brand-silver hover:text-brand-black",
  // Enlace de texto sobre fondo claro.
  link: "text-brand-blue hover:text-brand-black",
  // Enlace de texto sobre fondo oscuro.
  linkLight: "text-brand-silver hover:text-white",
};

/** Clases de botón/enlace coherentes en todo el sitio. */
export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}
