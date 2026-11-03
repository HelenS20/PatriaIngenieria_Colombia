import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = { eyebrow: string; title: ReactNode; aside?: ReactNode; className?: string };

export function SectionHeading({ eyebrow, title, aside, className }: Props) {
  return (
    <div className={cn("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div>
        <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-brand-graphite">
          {eyebrow}
        </p>
        <h2 className="font-display text-section-title font-semibold leading-[1.05] tracking-[-0.03em] text-brand-black">
          {title}
        </h2>
      </div>
      {aside && <div className="md:pb-2">{aside}</div>}
    </div>
  );
}
