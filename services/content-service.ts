import { jobs, newsItems, projects, services } from "@/lib/content";

// Reemplace estas funciones por consultas a su CMS o API cuando el proyecto pase a producción.
export const contentService = {
  getServices: async () => services,
  getProjects: async () => projects,
  getNews: async () => newsItems,
  getJobs: async () => jobs,
};
