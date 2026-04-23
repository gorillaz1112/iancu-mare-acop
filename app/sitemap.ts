import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now = new Date()

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/lucrari`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...siteConfig.services.map((s) => ({
      url: `${base}/servicii/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...siteConfig.areas.map((a) => ({
      url: `${base}/zone/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
