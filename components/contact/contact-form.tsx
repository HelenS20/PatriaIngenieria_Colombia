"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

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

  return (
    <form className="space-y-6" onSubmit={submit}>
      <div className="mb-8">
        <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-blue font-mono mb-4">
          Escríbenos
        </p>
        <h2 className="text-[clamp(43px,4.6vw,70px)] font-display font-semibold leading-[1.01] tracking-[-0.062em] text-brand-black">
          HABLEMOS DE
          <br />
          <span className="text-brand-blue italic">TU PROYECTO.</span>
        </h2>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="block text-[12px] font-semibold text-brand-graphite mb-2">
            Nombre completo
          </span>
          <input
            required
            name="name"
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
            type="email"
            name="email"
            placeholder="nombre@empresa.com"
            className="w-full px-4 py-3 border border-brand-silver rounded-sm text-[14px] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
          />
        </label>

        <label className="block">
          <span className="block text-[12px] font-semibold text-brand-graphite mb-2">
            Empresa
          </span>
          <input
            name="company"
            maxLength={120}
            placeholder="Nombre de empresa"
            className="w-full px-4 py-3 border border-brand-silver rounded-sm text-[14px] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
          />
        </label>

        {initialSubject && (
          <label className="block">
            <span className="block text-[12px] font-semibold text-brand-graphite mb-2">
              Asunto
            </span>
            <input
              name="subject"
              maxLength={120}
              defaultValue={initialSubject}
              readOnly
              className="w-full px-4 py-3 border border-brand-silver rounded-sm text-[14px] bg-brand-silver/30 cursor-not-allowed"
            />
          </label>
        )}

        <label className="block">
          <span className="block text-[12px] font-semibold text-brand-graphite mb-2">
            ¿Cómo podemos ayudarte?
          </span>
          <textarea
            required
            name="message"
            maxLength={5000}
            rows={4}
            placeholder="Cuéntanos brevemente sobre tu proyecto"
            className="w-full px-4 py-3 border border-brand-silver rounded-sm text-[14px] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue resize-none"
          />
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
            y autorizo el envío de mi solicitud.
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
          {status === "sending" ? "ENVIANDO…" : "ENVIAR MENSAJE"}
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
