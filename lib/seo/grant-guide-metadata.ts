import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

/**
 * Canonical URL, Open Graph, and Twitter metadata for grant guide pages.
 * Titles use the root layout template (`%s | RetrofitPlanner.ie`).
 */
export function grantGuideMetadata(input: {
  path: string;
  titleSegment: string;
  description: string;
}): Metadata {
  const { path, titleSegment, description } = input;
  const fullTitle = `${titleSegment} | ${siteConfig.name}`;

  return {
    title: titleSegment,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    },
    robots: {
      index: true,
      follow: true
    }
  };
}
