import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const base = "https://raymondabiola.vercel.app"; // update to your final domain

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...projectRoutes,
  ];
}
