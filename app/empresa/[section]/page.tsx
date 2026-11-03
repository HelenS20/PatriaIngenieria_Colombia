import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, Info, FileText, Shield, Target, CheckCircle, RefreshCw } from "lucide-react";

const sections: Record<string, { title: string; intro: string; body: string; icon: any }> = {
  procesos: { title: "Nuestros procesos", intro: "Información operativa en preparación", body: "El proceso técnico definitivo se publicará después de que Patria confirme sus métodos de trabajo, responsables y soportes.", icon: Target },
  certificaciones: { title: "Certificaciones", intro: "Soportes por verificar", body: "No se han proporcionado certificados oficiales para exhibir en esta versión. Esta página estará lista para incorporarlos cuando la empresa entregue documentos vigentes.", icon: Shield },
  fundamentos: { title: "Fundamentos", intro: "Identidad institucional en preparación", body: "La misión, visión y valores se publicarán cuando Patria apruebe sus textos institucionales.", icon: FileText },
  cumplimiento: { title: "Cumplimiento", intro: "Documentación por confirmar", body: "Los documentos de cumplimiento se incorporarán después de la revisión y aprobación de la empresa.", icon: CheckCircle },
  actualizacion: { title: "Actualización de datos", intro: "Solicita una actualización", body: "Para solicitar una actualización de tus datos, utiliza el formulario de contacto e indica qué información deseas corregir.", icon: RefreshCw },
  "tratamiento-datos": { title: "Tratamiento de datos", intro: "Política empresarial pendiente de aprobación", body: "Los formularios recogen nombre, correo, contenido del mensaje y, en postulaciones, la hoja de vida. Estos datos se envían al correo configurado por la empresa mediante el proveedor Resend; no se guardan en una base de datos de este proyecto. Antes de publicar el sitio, Patria debe aprobar la política de tratamiento de datos, los tiempos de conservación y los canales para consultas o solicitudes.", icon: Info },
};

export function generateStaticParams() { return [...Object.keys(sections), "nosotros"].map((section) => ({ section })); }

function CompanyContent({ title, intro, body, icon: Icon }: { title: string; intro: string; body: string; icon: any }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand-blue font-mono mb-4">
          Patria Ingeniería
        </p>
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-brand-blue/10 rounded-sm">
            <Icon className="w-8 h-8 text-brand-blue" />
          </div>
          <h1 className="text-[clamp(50px,5.9vw,90px)] font-display font-semibold leading-[0.98] tracking-[-0.08em] text-brand-black">
            {title}
          </h1>
        </div>
        <p className="text-[23px] leading-[1.45] font-display text-brand-graphite max-w-2xl">
          {intro}
        </p>
      </div>

      <div className="p-8 bg-white border border-brand-silver rounded-sm">
        <p className="text-[16px] leading-[1.85] text-brand-graphite mb-6">
          {body}
        </p>
        <p className="text-[14px] text-brand-graphite leading-relaxed border-t border-brand-silver pt-6">
          Si necesitas información ahora,{" "}
          <Link
            href="/contacto"
            className="text-brand-blue hover:text-brand-black underline underline-offset-2 font-semibold"
          >
            escríbenos desde el formulario de contacto
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default async function CompanyPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (section === "nosotros") redirect("/quienes-somos");
  const content = sections[section];
  if (!content) notFound();

  return (
    <section className="py-[clamp(76px,8vw,118px)] bg-[#f5f8f9]">
      <div className="px-page-gutter">
        <Link
          className="inline-flex items-center gap-2 text-brand-blue text-[12px] font-bold mb-8 hover:text-brand-black transition-colors"
          href="/quienes-somos"
        >
          <ArrowLeft className="w-4 h-4" />
          QUIÉNES SOMOS
        </Link>
        <CompanyContent
          title={content.title}
          intro={content.intro}
          body={content.body}
          icon={content.icon}
        />
      </div>
    </section>
  );
}
