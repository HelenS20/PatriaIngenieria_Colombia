import { getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const url = getWhatsAppUrl("Hola, quisiera información sobre Patria Ingeniería.");
  if (!url) return null;
  return <a className="whatsAppFloat" href={url} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp"><span aria-hidden="true">↗</span><b>WhatsApp</b></a>;
}
