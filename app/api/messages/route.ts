import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxFileBytes = 5 * 1024 * 1024;

function value(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > 7 * 1024 * 1024) {
    return NextResponse.json({ error: "El archivo supera el tamaño permitido." }, { status: 413 });
  }

  try {
    const data = await request.formData();
    if (value(data, "website")) return NextResponse.json({ ok: true });
    const kind = value(data, "kind");
    const name = value(data, kind === "application" ? "fullName" : "name");
    const email = value(data, "email");
    if (!name || name.length > 120 || !emailPattern.test(email) || email.length > 254 || value(data, "privacy") !== "on") {
      return NextResponse.json({ error: "Revisa nombre, correo y autorización de datos." }, { status: 400 });
    }
    if (kind !== "application" && kind !== "contact") return NextResponse.json({ error: "Formulario no válido." }, { status: 400 });

    const lines = [`Nombre: ${name}`, `Correo: ${email}`];
    let attachments: { filename: string; content: string }[] | undefined;

    if (kind === "application") {
      const position = value(data, "position");
      const resume = data.get("resume");
      if (!position || position.length > 120 || !(resume instanceof File) || !resume.size || resume.size > maxFileBytes || !/\.(pdf|doc|docx)$/i.test(resume.name)) {
        return NextResponse.json({ error: "Selecciona un cargo y adjunta una HV PDF, DOC o DOCX de máximo 5 MB." }, { status: 400 });
      }
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/octet-stream"];
      if (resume.type && !allowedTypes.includes(resume.type)) return NextResponse.json({ error: "Tipo de archivo no permitido." }, { status: 400 });
      lines.push(`Cargo de interés: ${position}`, `Archivo: ${resume.name}`);
      attachments = [{ filename: resume.name.replace(/[^a-zA-Z0-9._-]/g, "_"), content: Buffer.from(await resume.arrayBuffer()).toString("base64") }];
    } else {
      const company = value(data, "company");
      const subject = value(data, "subject");
      const message = value(data, "message");
      if (!message || message.length > 5000 || company.length > 120 || subject.length > 120) return NextResponse.json({ error: "Escribe un mensaje de hasta 5000 caracteres." }, { status: 400 });
      lines.push(`Empresa: ${company || "No indicada"}`, `Asunto: ${subject || "Consulta general"}`, "", "Mensaje:", message);
    }
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.EMAIL_FROM;
    const to = process.env.MESSAGES_TO_EMAIL;
    if (!apiKey || !from || !to) return NextResponse.json({ error: "El correo aún no está configurado. Inténtalo más tarde." }, { status: 503 });

    const payload = {
      from, to: [to], reply_to: email,
      subject: kind === "application" ? `Nueva hoja de vida - ${name}` : `Nuevo mensaje de contacto - ${name}`,
      text: lines.join("\n"),
      ...(attachments ? { attachments } : {}),
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify(payload), cache: "no-store",
    });
    if (!response.ok) {
      console.error("Email provider rejected submission", response.status);
      return NextResponse.json({ error: "No se pudo enviar el correo. Inténtalo más tarde." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "No se pudo procesar el formulario." }, { status: 400 });
  }
}
