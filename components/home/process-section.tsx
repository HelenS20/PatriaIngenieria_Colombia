"use client";
import { useState } from "react";

const steps = [
  ["01", "Conversación", "Entendemos el alcance y las necesidades del proyecto."],
  ["02", "Definición", "Precisamos materiales, recursos y condiciones de trabajo."],
  ["03", "Planeación", "Organizamos los pasos técnicos y logísticos."],
  ["04", "Ejecución", "El servicio se realiza según el alcance acordado."],
] as const;

export function ProcessSection() {
  const [active, setActive] = useState(0);
  return <section className="processSection" data-reveal><div><p className="eyebrow">Una ruta sencilla</p><h2>DEL PRIMER<br /><i>CONTACTO A LA OBRA.</i></h2><p className="processNote">Secuencia editorial ilustrativa; el proceso operativo definitivo se confirmará con Patria.</p></div><div className="processRail">{steps.map(([number, title, text], index) => <button type="button" key={number} className={index === active ? "active" : ""} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}><b>{number}</b><span>{title}</span><small>{text}</small></button>)}</div></section>;
}
