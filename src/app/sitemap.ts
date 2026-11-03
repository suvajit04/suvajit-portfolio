import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://suvajitportfolio.netlify.app";
  const routes = ["", "/about", "/skills", "/experience", "/projects", "/projects/hisnet", "/projects/medpulse", "/projects/task-management", "/projects/poy-calculator", "/contact"];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 }));
}
