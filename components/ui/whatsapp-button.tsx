import { getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const url = getWhatsAppUrl("Hola, quisiera información sobre Patria Ingeniería.");
  if (!url) return null;
  return (
    <a
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#168a54] px-4 py-3 text-xs font-bold text-white shadow-[0_12px_25px_rgba(0,0,0,0.22)] transition-transform duration-200 hover:-translate-y-0.5"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <span aria-hidden="true" className="grid h-[25px] w-[25px] place-items-center rounded-full border border-white/65 text-base">
        ↗
      </span>
      <b>WhatsApp</b>
    </a>
  );
}
