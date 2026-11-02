import { portfolioCategories, portfolioItems, type PortfolioCategory } from "@/lib/portfolio";

export type PortfolioOrder = "nombre" | "nombre-desc" | "categoria";
export type PortfolioQuery = {
  q: string;
  categoria: PortfolioCategory | "todos";
  orden: PortfolioOrder;
  pagina: number;
};
export type PortfolioSearchParams = {
  q?: string | string[];
  categoria?: string | string[];
  orden?: string | string[];
  pagina?: string | string[];
};

const pageSize = 6;
const first = (value: string | string[] | undefined) => Array.isArray(value) ? value[0] ?? "" : value ?? "";
const fold = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");

export function parsePortfolioQuery(raw: PortfolioSearchParams): PortfolioQuery {
  const category = first(raw.categoria);
  const order = first(raw.orden);
  const page = Number(first(raw.pagina) || "1");
  return {
    q: first(raw.q).trim().slice(0, 80),
    categoria: portfolioCategories.some(({ value }) => value === category) ? category as PortfolioQuery["categoria"] : "todos",
    orden: order === "categoria" || order === "nombre-desc" ? order : "nombre",
    pagina: Number.isSafeInteger(page) && page > 0 ? page : 1,
  };
}

export function portfolioHref(query: Partial<PortfolioQuery> = {}) {
  const params = new URLSearchParams();
  if (query.q) params.set("q", query.q);
  if (query.categoria && query.categoria !== "todos") params.set("categoria", query.categoria);
  if (query.orden && query.orden !== "nombre") params.set("orden", query.orden);
  if (query.pagina && query.pagina !== 1) params.set("pagina", String(query.pagina));
  return `/portafolio${params.size ? `?${params.toString()}` : ""}`;
}

export function searchPortfolio(query: PortfolioQuery) {
  const term = fold(query.q);
  const items = portfolioItems.filter((item) => {
    if (query.categoria !== "todos" && item.category !== query.categoria) return false;
    const haystack = fold([item.title, item.categoryLabel, item.description, ...item.applications].join(" "));
    return haystack.includes(term);
  }).sort((a, b) => {
    if (query.orden === "categoria") return a.categoryLabel.localeCompare(b.categoryLabel, "es") || a.title.localeCompare(b.title, "es");
    if (query.orden === "nombre-desc") return b.title.localeCompare(a.title, "es");
    return a.title.localeCompare(b.title, "es");
  });
  const pages = Math.max(1, Math.ceil(items.length / pageSize));
  const page = Math.min(query.pagina, pages);
  return { items: items.slice((page - 1) * pageSize, page * pageSize), total: items.length, pages, page, pageSize };
}

export function portfolioCategoryCount(category: PortfolioCategory | "todos") {
  return category === "todos" ? portfolioItems.length : portfolioItems.filter((item) => item.category === category).length;
}
