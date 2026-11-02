export type PortfolioCategory = "materiales" | "vial" | "equipos";

export type PortfolioItem = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  description: string;
  image: string;
  imagePosition?: string;
  applications: string[];
};

/** Líneas editoriales de muestra basadas en las actividades económicas registradas.
 * No son fichas de producto, existencias ni proyectos confirmados de Patria. */
export const portfolioItems: PortfolioItem[] = [
  { slug: "agregados-para-construccion", title: "Agregados para construcción", category: "materiales", categoryLabel: "Materiales", description: "Espacio para presentar materiales pétreos con origen, gradación y disponibilidad confirmados por la empresa.", image: "/images/portfolio/agregados-editorial.webp", applications: ["Obra civil", "Infraestructura vial"] },
  { slug: "materiales-granulares", title: "Materiales granulares", category: "materiales", categoryLabel: "Materiales", description: "Ficha preparada para detallar granulometría, aplicaciones y condiciones reales de suministro.", image: "/images/projects/asphalt-plant.png", applications: ["Bases", "Rellenos"] },
  { slug: "mezclas-asfalticas", title: "Mezclas asfálticas", category: "materiales", categoryLabel: "Materiales", description: "Una futura ficha para mezclas, normas aplicables y unidades de venta verificadas.", image: "/images/portfolio/pavimentacion-editorial.webp", applications: ["Pavimentación", "Mantenimiento"] },
  { slug: "pavimentacion", title: "Pavimentación", category: "vial", categoryLabel: "Infraestructura vial", description: "Presentación de proyectos de pavimento sujeta a la confirmación del alcance operativo de Patria.", image: "/images/home/hero-road.png", imagePosition: "center 65%", applications: ["Vías", "Espacio urbano"] },
  { slug: "construccion-de-vias", title: "Construcción de vías", category: "vial", categoryLabel: "Infraestructura vial", description: "Línea editorial relacionada con la actividad registrada de construcción de carreteras y vías férreas.", image: "/images/projects/urban-paving.png", applications: ["Carreteras", "Conectividad"] },
  { slug: "obras-de-ingenieria-civil", title: "Obras de ingeniería civil", category: "vial", categoryLabel: "Infraestructura vial", description: "Espacio para publicar servicios, metodología y proyectos aprobados por la empresa.", image: "/images/projects/urban-paving.png", imagePosition: "center 35%", applications: ["Obra civil", "Infraestructura"] },
  { slug: "maquinaria-para-obra", title: "Maquinaria para obra", category: "equipos", categoryLabel: "Equipos", description: "Ficha futura de equipos en alquiler, capacidades y condiciones una vez exista inventario confirmado.", image: "/images/portfolio/maquinaria-editorial.webp", applications: ["Operación", "Alquiler"] },
  { slug: "equipos-de-apoyo", title: "Equipos de apoyo", category: "equipos", categoryLabel: "Equipos", description: "Sección para describir equipos y servicios de soporte cuando Patria entregue las fichas correspondientes.", image: "/images/projects/asphalt-plant.png", imagePosition: "center 35%", applications: ["Construcción", "Logística"] },
];

export const portfolioCategories = [
  { value: "todos", label: "Todas las líneas" },
  { value: "materiales", label: "Materiales" },
  { value: "vial", label: "Infraestructura vial" },
  { value: "equipos", label: "Equipos" },
] as const;

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
