import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowRight, Mail, MapPin, Briefcase, MessageCircle, ArrowDown } from "lucide-react";

export const metadata = { title: "Contáctanos | Patria Ingeniería" };
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ asunto?: string | string[] }> }) {
  const raw = await searchParams;
  const subject = (Array.isArray(raw.asunto) ? raw.asunto[0] ?? "" : raw.asunto ?? "").trim().slice(0, 120);
  const whatsAppUrl = getWhatsAppUrl(subject ? `Hola, quisiera información. ${subject}` : "Hola, quisiera información sobre Patria Ingeniería.");

  return (
    <>
      <section className="min-h-[650px] bg-[#102a38]">
        <div className="px-page-gutter py-[100px_0] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-blue-light font-mono">
              Inicia tu proyecto
            </p>
            <h1 className="text-[clamp(50px,5.9vw,90px)] font-display font-semibold leading-[0.98] tracking-[-0.08em] text-white">
              HABLEMOS
              <br />
              <span className="text-brand-blue-light italic">DE TU IDEA.</span>
            </h1>
            <p className="text-[16px] leading-[1.75] text-white/80 max-w-xl">
              Cuéntanos qué necesitas en materiales, equipos u obra civil. El formulario nos permite organizar tu solicitud y responderte al correo indicado.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex items-center gap-5 min-h-[48px] px-5 py-3 border border-brand-blue bg-brand-blue text-white font-bold text-[12px] rounded-sm hover:bg-[#004769] hover:-translate-y-0.5 transition-all duration-300"
                href="#formulario"
              >
                ESCRIBIR MENSAJE
                <ArrowRight className="w-4 h-4" />
              </a>
              {whatsAppUrl && (
                <a
                  className="inline-flex items-center gap-5 min-h-[48px] px-5 py-3 border border-brand-blue-light text-brand-blue-light font-bold text-[12px] rounded-sm hover:bg-brand-blue-light hover:text-brand-black transition-all duration-300"
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  ABRIR WHATSAPP
                </a>
              )}
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden bg-gradient-to-br from-brand-blue to-brand-blue-deep flex items-center justify-center">
            <div className="text-center space-y-4">
              <span className="text-[80px] font-display font-bold text-brand-blue-light">P</span>
              <p className="text-[24px] font-display font-semibold text-white">
                INGENIERÍA
                <br />
                QUE CONECTA
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(76px,8vw,118px)] bg-[#f5f8f9]">
        <div className="px-page-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-blue font-mono mb-4">
                  Canales de contacto
                </p>
                <h2 className="text-[clamp(43px,4.6vw,70px)] font-display font-semibold leading-[1.01] tracking-[-0.062em] text-brand-black">
                  ESTAMOS LISTOS
                  <br />
                  <span className="text-brand-blue italic">PARA ESCUCHARTE.</span>
                </h2>
              </div>

              <div className="space-y-6">
                <article className="flex gap-4">
                  <span className="text-[20px] font-bold font-mono text-brand-blue">01</span>
                  <div>
                    <small className="block text-[11px] font-semibold text-brand-graphite mb-1">
                      Correo de contacto temporal
                    </small>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-[14px] text-brand-blue hover:text-brand-blue-deep transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </article>

                <article className="flex gap-4">
                  <span className="text-[20px] font-bold font-mono text-brand-blue">02</span>
                  <div>
                    <small className="block text-[11px] font-semibold text-brand-graphite mb-1">
                      Ubicación registrada
                    </small>
                    <span className="text-[14px] text-brand-graphite">{siteConfig.city}</span>
                  </div>
                </article>

                <article className="flex gap-4">
                  <span className="text-[20px] font-bold font-mono text-brand-blue">03</span>
                  <div>
                    <small className="block text-[11px] font-semibold text-brand-graphite mb-1">
                      Vacantes
                    </small>
                    <Link
                      href="/vacantes"
                      className="text-[14px] text-brand-blue hover:text-brand-blue-deep transition-colors inline-flex items-center gap-1"
                    >
                      Envía tu hoja de vida
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>

                {whatsAppUrl && (
                  <article className="flex gap-4">
                    <span className="text-[20px] font-bold font-mono text-brand-blue">04</span>
                    <div>
                      <small className="block text-[11px] font-semibold text-brand-graphite mb-1">
                        Atención por chat
                      </small>
                      <a
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-brand-blue hover:text-brand-blue-deep transition-colors inline-flex items-center gap-1"
                      >
                        Abrir WhatsApp
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </article>
                )}
              </div>

              <div className="p-6 bg-[#152e38] rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-brand-blue-light" />
                  <span className="text-[12px] font-bold text-brand-blue-light">UBICACIÓN POR CONFIRMAR</span>
                </div>
                <p className="text-[13px] text-white/70">
                  La dirección física se actualizará cuando Patria confirme su sede oficial.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white border border-brand-silver rounded-sm p-8" id="formulario">
              <ContactForm initialSubject={subject} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
