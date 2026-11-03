import Link from "next/link";

export function AboutPreview() {
  return <section className="homeAbout" data-reveal>
    <div className="homeAboutImage"><span>MOSQUERA · CUNDINAMARCA</span></div>
    <div className="homeAboutCopy"><p className="eyebrow">Conoce a Patria</p><h2>INGENIERÍA CIVIL<br /><i>CON PROPÓSITO.</i></h2><p>Patria Ingeniería Pavimentos y Agregados S.A.S. es una compañía dedicada a obras de ingeniería civil, infraestructura vial, materiales de construcción y maquinaria para obra.</p><div className="homeAboutPills"><span>OBRA CIVIL</span><span>MATERIALES</span><span>EQUIPOS</span></div><Link className="textLink" href="/quienes-somos">QUIÉNES SOMOS ↗</Link></div>
  </section>;
}
