"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { jobs } from "@/lib/content";

export function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const data = new FormData(form);
      data.set("kind", "application");
      const response = await fetch("/api/messages", { method: "POST", body: data });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "No se pudo enviar la postulación.");
      form.reset();
      setStatus("sent");
      setFeedback("Postulación enviada. Gracias por tu interés.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "No se pudo enviar la postulación.");
    }
  }

  return <form className="apply" onSubmit={submit}>
    <p className="eyebrow">Postulación espontánea</p><h3>ENVÍA TU HV</h3>
    <label>Nombre completo<input required name="fullName" maxLength={120} placeholder="Tu nombre" /></label>
    <label>Correo electrónico<input required name="email" type="email" placeholder="nombre@correo.com" /></label>
    <label>Área de interés<select name="position" required defaultValue=""><option value="" disabled>Selecciona una opción</option><option value="Postulación espontánea">Postulación espontánea</option>{jobs.map((job) => <option key={job.id} value={job.title}>{job.title}</option>)}</select></label>
    <label>Hoja de vida (PDF, DOC o DOCX · máximo 5 MB)<input required name="resume" type="file" accept=".pdf,.doc,.docx" /></label>
    <label className="check"><input required name="privacy" type="checkbox" /><span>He leído la información sobre <Link href="/empresa/tratamiento-datos" target="_blank">tratamiento de datos</Link> y autorizo el envío de mi HV.</span></label>
    <div className="formTrap" aria-hidden="true"><label>Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <button className="cta" type="submit" disabled={status === "sending"}>{status === "sending" ? "ENVIANDO…" : "ENVIAR POSTULACIÓN"} <span>→</span></button>
    {status !== "idle" && status !== "sending" && <p className={status === "sent" ? "success" : "formError"} role="status">{feedback}</p>}
  </form>;
}
