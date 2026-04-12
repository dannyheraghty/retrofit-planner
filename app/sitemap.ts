import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const paths = [
  "/",
  "/planner",
  "/how-it-works",
  "/privacy",
  "/contact",
  "/seai-grants-ireland-2026",
  "/heat-pump-grants-ireland",
  "/insulation-grants-ireland",
  "/solar-panel-grants-ireland",
  "/windows-doors-grants-ireland"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return paths.map((path) => ({
    url: `${base}${path}`
  }));
}
