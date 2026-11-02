const areas = ["OBRA CIVIL", "INFRAESTRUCTURA VIAL", "MATERIALES", "MAQUINARIA"];

export function MetricsSection() {
  return <section className="numbers activityBand" data-reveal><p className="eyebrow">Actividades económicas registradas</p><div>{areas.map((area, index) => <article key={area}><b>0{index + 1}</b><p>{area}</p></article>)}</div><small>Información basada en el registro empresarial público. Alcance comercial por confirmar con Patria.</small></section>;
}
