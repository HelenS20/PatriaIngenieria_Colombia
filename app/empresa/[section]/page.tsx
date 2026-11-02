import Link from "next/link";
import { notFound, redirect } from "next/navigation";

const sections: Record<string, { title: string; intro: string; body: string }> = {
  procesos: { title: "Nuestros procesos", intro: "Información operativa en preparación", body: "El proceso técnico definitivo se publicará después de que Patria confirme sus métodos de trabajo, responsables y soportes." },
  certificaciones: { title: "Certificaciones", intro: "Soportes por verificar", body: "No se han proporcionado certificados oficiales para exhibir en esta versión. Esta página estará lista para incorporarlos cuando la empresa entregue documentos vigentes." },
  fundamentos: { title: "Fundamentos", intro: "Identidad institucional en preparación", body: "La misión, visión y valores se publicarán cuando Patria apruebe sus textos institucionales." },
  cumplimiento: { title: "Cumplimiento", intro: "Documentación por confirmar", body: "Los documentos de cumplimiento se incorporarán después de la revisión y aprobación de la empresa." },
  actualizacion: { title: "Actualización de datos", intro: "Solicita una actualización", body: "Para solicitar una actualización de tus datos, utiliza el formulario de contacto e indica qué información deseas corregir." },
  "tratamiento-datos": { title: "Tratamiento de datos", intro: "Política empresarial pendiente de aprobación", body: "Los formularios recogen nombre, correo, contenido del mensaje y, en postulaciones, la hoja de vida. Estos datos se envían al correo configurado por la empresa mediante el proveedor Resend; no se guardan en una base de datos de este proyecto. Antes de publicar el sitio, Patria debe aprobar la política de tratamiento de datos, los tiempos de conservación y los canales para consultas o solicitudes." },
};

export function generateStaticParams() { return [...Object.keys(sections), "nosotros"].map((section) => ({ section })); }

export default async function CompanyPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (section === "nosotros") redirect("/quienes-somos");
  const content = sections[section];
  if (!content) notFound();
  return <section className="articlePage companyInfoPage"><Link className="textLink" href="/quienes-somos">← QUIÉNES SOMOS</Link><p className="eyebrow">Patria Ingeniería</p><h1>{content.title}</h1><p className="articleLead">{content.intro}</p><div className="articleBody"><p>{content.body}</p><p>Si necesitas información ahora, <Link href="/contacto">escríbenos desde el formulario de contacto</Link>.</p></div></section>;
}
