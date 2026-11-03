"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { jobs } from "@/lib/content";
import { ArrowRight, CheckCircle2, AlertCircle, Upload } from "lucide-react";

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

  return (
    <form className="space-y-6" onSubmit={submit}>
      <div className="mb-8">
        <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-blue font-mono mb-4">
          Postulación espontánea
        </p>
        <h3 className="text-[clamp(43px,4.6vw,70px)] font-display font-semibold leading-[1.01] tracking-[-0.062em] text-brand-black">
          ENVÍA TU HV
        </h3>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="block text-[12px] font-semibold text-brand-graphite mb-2">
            Nombre completo
          </span>
          <input
            required
            name="fullName"
            maxLength={120}
            placeholder="Tu nombre"
            className="w-full px-4 py-3 border border-brand-silver rounded-sm text-[14px] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
          />
        </label>

        <label className="block">
          <span className="block text-[12px] font-semibold text-brand-graphite mb-2">
            Correo electrónico
          </span>
          <input
            required
            name="email"
            type="email"
            placeholder="nombre@correo.com"
            className="w-full px-4 py-3 border border-brand-silver rounded-sm text-[14px] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
          />
        </label>

        <label className="block">
          <span className="block text-[12px] font-semibold text-brand-graphite mb-2">
            Área de interés
          </span>
          <select
            name="position"
            required
            defaultValue=""
            className="w-full px-4 py-3 border border-brand-silver rounded-sm text-[14px] bg-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="Postulación espontánea">Postulación espontánea</option>
            {jobs.map((job) => (
              <option key={job.id} value={job.title}>
                {job.title}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="block text-[12px] font-semibold text-brand-graphite mb-2">
            Hoja de vida (PDF, DOC o DOCX · máximo 5 MB)
          </span>
          <div className="relative">
            <input
              required
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full px-4 py-3 border border-brand-silver rounded-sm text-[14px] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-brand-blue file:text-white hover:file:bg-[#004769]"
            />
            <Upload className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-graphite pointer-events-none" />
          </div>
        </label>

        <label className="flex items-start gap-3">
          <input
            required
            name="privacy"
            type="checkbox"
            className="flex-shrink-0 w-4 h-4 mt-1 accent-brand-blue"
          />
          <span className="text-[13px] text-brand-graphite leading-relaxed">
            He leído la información sobre{" "}
            <Link
              href="/empresa/tratamiento-datos"
              target="_blank"
              className="text-brand-blue hover:text-brand-blue-deep underline underline-offset-2"
            >
              tratamiento de datos
            </Link>{" "}
            y autorizo el envío de mi HV.
          </span>
        </label>

        <div className="sr-only" aria-hidden="true">
          <label>
            Sitio web
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <button
          className="w-full min-h-[48px] px-5 py-3 border border-brand-blue bg-brand-blue text-white font-bold text-[12px] rounded-sm hover:bg-[#004769] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "ENVIANDO…" : "ENVIAR POSTULACIÓN"}
          <ArrowRight className="w-4 h-4" />
        </button>

        {status !== "idle" && status !== "sending" && (
          <p
            className={`flex items-center gap-2 text-[13px] ${
              status === "sent" ? "text-green-600" : "text-red-600"
            }`}
            role="status"
          >
            {status === "sent" ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
}
