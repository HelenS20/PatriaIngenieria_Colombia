/** Número confirmado en formato internacional, solo dígitos. No asumir que un teléfono público usa WhatsApp. */
export function getWhatsAppUrl(message: string): string | null {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() ?? "";
  if (!/^\d{10,15}$/.test(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
