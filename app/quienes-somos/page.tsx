import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Quiénes somos | Patria Ingeniería", description: "Conoce la actividad y el enfoque de Patria Ingeniería Pavimentos y Agregados S.A.S." };

const areas = [
  { number: "01", title: "Ingeniería civil", text: "Construcción de otras obras de ingeniería civil." },
  { number: "02", title: "Infraestructura vial", text: "Construcción de carreteras y vías férreas." },
  { number: "03", title: "Materiales", text: "Comercio al por mayor de materiales de construcción." },
  { number: "04", title: "Equipos", text: "Alquiler y arrendamiento de maquinaria y equipos." },
];

export default function AboutPage() {
  return <>
    <section className="aboutHero"><div className="aboutHeroCopy"><p className="eyebrow">Patria Ingeniería</p><h1>INGENIERÍA QUE<br /><i>ABRE CAMINO.</i></h1><p>Somos Patria Ingeniería Pavimentos y Agregados S.A.S. Nuestra actividad se concentra en la construcción, la infraestructura vial, los materiales y la maquinaria para obra.</p><Link className="cta" href="/contacto">HABLEMOS DE TU PROYECTO <span>↗</span></Link></div><div className="aboutHeroVisual"><div><span>01 / NUESTRA IDENTIDAD</span><strong>TRABAJO QUE<br />CONECTA<br /><i>TERRITORIOS.</i></strong></div></div></section>
    <section className="aboutStatement"><p className="eyebrow">Quiénes somos</p><div><h2>UN PUNTO DE ENCUENTRO ENTRE<br /><i>MATERIALES, EQUIPOS Y OBRA.</i></h2><p>El nombre y las actividades inscritas de Patria orientan esta propuesta de sitio. Nuestro objetivo aquí es presentar de forma clara sus líneas de trabajo y facilitar el contacto con clientes, aliados y candidatos. La historia, los valores, el equipo y los resultados deberán completarse con información aprobada por la empresa.</p></div></section>
    <section className="aboutAreas"><div className="aboutAreasHead"><p className="eyebrow">Ámbitos registrados</p><h2>LO QUE DA FORMA<br /><i>A PATRIA.</i></h2></div><div className="aboutAreaGrid">{areas.map((area) => <article key={area.number}><span>{area.number} / ÁREA</span><h3>{area.title}</h3><p>{area.text}</p></article>)}</div></section>
    <section className="aboutSource"><p>Esta página presenta una propuesta editorial de la empresa. No se atribuyen cifras, certificaciones ni proyectos sin verificación previa con Patria.</p></section>
    <section className="aboutNext"><div><p className="eyebrow">Siguiente paso</p><h2>CONOCE LAS LÍNEAS<br /><i>DEL PORTAFOLIO.</i></h2></div><Link className="cta" href="/portafolio">EXPLORAR PORTAFOLIO <span>↗</span></Link></section>
  </>;
}
