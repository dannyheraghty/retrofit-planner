import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const paths = [
  "/",
  "/planner",
  "/how-it-works",
  "/privacy",
  "/contact",
  "/seai-grants-ireland-2026",
  "/seai-grants-eligibility-ireland",
  "/home-energy-upgrade-guide-ireland",
  "/does-retrofit-increase-house-value-ireland",
  "/is-heat-pump-worth-it-ireland",
  "/is-solar-worth-it-ireland",
  "/is-insulation-worth-it-ireland",
  "/heat-pump-cost-ireland",
  "/ber-assessment-ireland",
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
