import { ReactNode } from "react";

type Props = { eyebrow: string; title: ReactNode; aside?: ReactNode };
export function SectionHeading({ eyebrow, title, aside }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
      <div>
        <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-graphite font-mono mb-4">
          {eyebrow}
        </p>
        <h2 className="text-section-title font-display font-semibold leading-[1] tracking-[-0.065em] text-brand-black">
          {title}
        </h2>
      </div>
      {aside && <div className="md:mt-12">{aside}</div>}
    </div>
  );
}
