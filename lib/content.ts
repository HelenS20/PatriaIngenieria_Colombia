import type { Job, Metric, NewsItem, Project, Service } from "@/types";

export const services: Service[] = [
  { id: "materials", title: "Materiales", description: "Comercio de materiales de construcción. Detalles comerciales por confirmar." },
  { id: "civil-works", title: "Obra civil", description: "Construcción de obras de ingeniería civil, según su actividad registrada." },
  { id: "roads", title: "Infraestructura vial", description: "Construcción de carreteras y vías férreas dentro de su objeto registrado." },
  { id: "equipment", title: "Equipos y maquinaria", description: "Alquiler de maquinaria y equipos; inventario disponible por confirmar." },
];

export const metrics: Metric[] = [];

export const projects: Project[] = [
  { id: "regional-corridor", category: "Vial", title: "Infraestructura vial", location: "Imagen ilustrativa", imageClass: "projectRoad" },
  { id: "public-space", category: "Urbano", title: "Obra civil", location: "Imagen ilustrativa", imageClass: "projectCity" },
  { id: "production-plant", category: "Materiales", title: "Materiales de construcción", location: "Imagen ilustrativa", imageClass: "projectPlant" },
];

export const newsItems: NewsItem[] = [
  { id: "nuevo-frente", date: "BORRADOR", category: "Materiales", title: "Materiales para proyectos", excerpt: "Un espacio para explicar líneas de materiales y fichas técnicas aprobadas." },
  { id: "territorio", date: "BORRADOR", category: "Infraestructura", title: "Obra civil e infraestructura vial", excerpt: "Una guía editorial para presentar el alcance real de cada servicio." },
  { id: "innovacion", date: "BORRADOR", category: "Talento", title: "Cómo enviar tu hoja de vida", excerpt: "Información para futuras postulaciones y convocatorias verificadas." },
];

export const jobs: Job[] = [];
