import type { Metadata } from "next";

type NavItem = {
  href: string;
  label: string;
};

type FooterGroup = {
  title: string;
  items: NavItem[];
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/home-retrofit-grants-ireland", label: "Grants" },
  { href: "/home-retrofit-cost-ireland", label: "Costs" },
  { href: "/does-retrofit-increase-house-value-ireland", label: "Compare" },
  { href: "/planner", label: "Planner" },
  { href: "/how-it-works", label: "How it works" }
];

const footerGroups: FooterGroup[] = [
  {
    title: "Guides",
    items: [
      { href: "/home-retrofit-grants-ireland", label: "Home retrofit grants" },
      {
        href: "/home-energy-upgrade-guide-ireland",
        label: "Home energy upgrade guide"
      },
      {
        href: "/what-to-upgrade-first-home-retrofit-ireland",
        label: "What to upgrade first"
      },
      {
        href: "/does-retrofit-increase-house-value-ireland",
        label: "Does retrofit increase house value?"
      }
    ]
  },
  {
    title: "Costs & savings",
    items: [
      { href: "/home-retrofit-cost-ireland", label: "Home retrofit cost" },
      { href: "/heat-pump-cost-ireland", label: "Heat pump cost" },
      {
        href: "/how-much-can-you-save-with-a-home-retrofit-ireland",
        label: "Retrofit savings"
      }
    ]
  },
  {
    title: "Grant pages",
    items: [
      { href: "/heat-pump-grants-ireland", label: "Heat pump grants" },
      { href: "/insulation-grants-ireland", label: "Insulation grants" },
      { href: "/solar-panel-grants-ireland", label: "Solar panel grants" },
      {
        href: "/windows-doors-grants-ireland",
        label: "Windows and doors grants"
      }
    ]
  },
  {
    title: "Company",
    items: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" }
    ]
  }
];

export const siteConfig = {
  name: "RetrofitPlanner.ie",
  description:
    "A neutral planning tool for Irish homeowners researching retrofit upgrades and 2026 home energy grants.",
  url: "https://www.retrofitplanner.ie",
  navItems,
  footerGroups
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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }
  },
  robots: {
    index: true,
    follow: true
  }
};
