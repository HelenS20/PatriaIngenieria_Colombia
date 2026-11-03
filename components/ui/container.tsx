import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = { as?: ElementType; className?: string; children: ReactNode };

/** Contenedor estándar del sitio: ancho máximo de 7xl, centrado y con márgenes laterales responsivos. */
export function Container({ as: Tag = "div", className, children }: Props) {
  return <Tag className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</Tag>;
}
