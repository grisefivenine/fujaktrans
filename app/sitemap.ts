import { articles } from "./blog/articles";
import { serviceDetails } from "@/lib/service-details";

export default function sitemap() {
  const baseUrl = "https://fujaktrans.hu";
  const staticPages = [
    { path: "", priority: 1 },
    { path: "/ajanlatkeres", priority: 0.95 },
    { path: "/arak", priority: 0.9 },
    { path: "/jarmupark", priority: 0.85 },
    { path: "/referenciak", priority: 0.8 },
    { path: "/blog", priority: 0.75 },
    { path: "/informaciok", priority: 0.7 },
    { path: "/adatkezeles", priority: 0.3 },
    { path: "/aszf", priority: 0.3 },
  ];

  return [
    ...staticPages.map((page) => ({ url: `${baseUrl}${page.path}`, priority: page.priority })),
    ...articles.map((article) => ({ url: `${baseUrl}/blog/${article.slug}`, priority: 0.65 })),
    ...serviceDetails.map((service) => ({ url: `${baseUrl}/szolgaltatasok/${service.slug}`, priority: 0.72 })),
  ];
}
