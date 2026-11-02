"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export function ContactForm({ initialSubject = "" }: { initialSubject?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const data = new FormData(form);
      data.set("kind", "contact");
      const response = await fetch("/api/messages", { method: "POST", body: data });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "No se pudo enviar el mensaje.");
      form.reset();
      setStatus("sent");
      setFeedback("Mensaje enviado. Gracias por contactarnos.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "No se pudo enviar el mensaje.");
    }
  }

  return <form className="contactForm" onSubmit={submit}>
    <p className="eyebrow">Escríbenos</p><h2>HABLEMOS DE<br /><i>TU PROYECTO.</i></h2>
    <label>Nombre completo<input required name="name" maxLength={120} placeholder="Tu nombre" /></label>
    <label>Correo electrónico<input required type="email" name="email" placeholder="nombre@empresa.com" /></label>
    <label>Empresa<input name="company" maxLength={120} placeholder="Nombre de empresa" /></label>
    {initialSubject && <label>Asunto<input name="subject" maxLength={120} defaultValue={initialSubject} readOnly /></label>}
    <label>¿Cómo podemos ayudarte?<textarea required name="message" maxLength={5000} rows={4} placeholder="Cuéntanos brevemente sobre tu proyecto" /></label>
    <label className="check"><input required name="privacy" type="checkbox" /><span>He leído la información sobre <Link href="/empresa/tratamiento-datos" target="_blank">tratamiento de datos</Link> y autorizo el envío de mi solicitud.</span></label>
    <div className="formTrap" aria-hidden="true"><label>Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <button className="cta" type="submit" disabled={status === "sending"}>{status === "sending" ? "ENVIANDO…" : "ENVIAR MENSAJE"} <span>→</span></button>
    {status !== "idle" && status !== "sending" && <p className={status === "sent" ? "success" : "formError"} role="status">{feedback}</p>}
  </form>;
}
