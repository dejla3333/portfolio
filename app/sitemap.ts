import type { MetadataRoute } from "next";

const baseUrl = "https://dejla.dev";

const locales = ["en", "fa", "ps"];

const projects = [
  "kaaryab",
  "fikfinder",
  "password-checker",
  "world-explorer",
  "heart-ai",
  "movie-watchlist",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    pages.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });

    for (const project of projects) {
      pages.push({
        url: `${baseUrl}/${locale}/projects/${project}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return pages;
}