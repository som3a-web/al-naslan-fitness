import type { MetadataRoute } from "next";
import { LANDING_PAGES, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1, alternates: { languages: { ar: `${SITE_URL}/ar` } } },
    { url: `${SITE_URL}/ar`, lastModified, changeFrequency: "weekly", priority: 0.9, alternates: { languages: { en: SITE_URL } } },
    ...LANDING_PAGES.map((p) => ({ url: `${SITE_URL}${p.href}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
