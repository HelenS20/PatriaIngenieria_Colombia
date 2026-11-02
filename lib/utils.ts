export function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-CO", { dateStyle: "long" }).format(new Date(date));
}
