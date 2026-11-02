export type Project = { id: string; category: string; title: string; location: string; imageClass: string };
export type NewsItem = { id: string; date: string; category: string; title: string; excerpt: string };
export type Job = { id: string; title: string; location: string; publishedAt: string; department: string; summary: string };
export type Service = { id: string; title: string; description: string };
export type Metric = { value: string; suffix?: string; label: string };
