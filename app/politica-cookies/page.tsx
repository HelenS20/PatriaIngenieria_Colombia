import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = { title: "Política de cookies | Patria Ingeniería" };

export default function CookiesPage() {
  return (
    <article className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-brand-graphite">
          Privacidad
        </p>
        <h1 className="font-display text-section-title font-semibold leading-[1.05] tracking-[-0.03em] text-brand-black">
          POLÍTICA DE
          <br />
          <span className="text-brand-blue">COOKIES.</span>
        </h1>
        <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-brand-graphite">
          <p>
            Este sitio utiliza una cookie propia llamada <strong className="text-brand-black">patria_cookie_consent</strong> para
            recordar si elegiste aceptar todas las cookies o solo las necesarias. Dura hasta seis meses y puedes
            cambiar tu elección desde el enlace “Configurar cookies” en el pie de página.
          </p>
          <p>
            En esta versión no se cargan servicios de análisis de tráfico ni publicidad, con independencia de la
            opción elegida. Si en el futuro se incorporan, deberán activarse únicamente según la preferencia
            registrada y actualizar esta política antes del lanzamiento.
          </p>
          <p>
            Los formularios de contacto y hojas de vida funcionan sin cookies de seguimiento. Para información
            sobre el tratamiento de los datos enviados por formulario, consulta la página de tratamiento de datos
            y confirma su texto definitivo con la empresa.
          </p>
        </div>
      </Container>
    </article>
  );
}
