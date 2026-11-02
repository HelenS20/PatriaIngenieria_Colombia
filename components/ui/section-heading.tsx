import { ReactNode } from "react";

type Props = { eyebrow: string; title: ReactNode; aside?: ReactNode };
export function SectionHeading({ eyebrow, title, aside }: Props) {
  return <div className="sectionHead"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{aside}</div>;
}
