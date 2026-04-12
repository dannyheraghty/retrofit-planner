import type { Metadata } from "next";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/planner", label: "Planner" },
  { href: "/how-it-works", label: "How it works" }
];

const footerItems: NavItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
  { href: "/how-it-works", label: "How it works" }
];

export const siteConfig = {
  name: "RetrofitPlanner.ie",
  description:
    "A neutral planning tool for Irish homeowners researching retrofit upgrades and 2026 home energy grants.",
  url: "https://www.retrofitplanner.ie",
  navItems,
  footerItems
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true
  }
};
