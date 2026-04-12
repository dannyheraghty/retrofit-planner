import Link from "next/link";

import { Section } from "@/components/ui/section";
import { pillarProseClass } from "@/lib/seo/pillar-page";

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export type RelatedGuideLink = {
  href: string;
  label: string;
};

type RelatedGuidesProps = {
  links: readonly RelatedGuideLink[];
};

export function RelatedGuides({ links }: RelatedGuidesProps) {
  return (
    <Section
      className="border-t border-ink-200"
      title="Related guides"
      description="Explore related retrofit guides for Irish homeowners."
    >
      <ul className={`max-w-3xl list-none space-y-2.5 ${pillarProseClass}`}>
        {links.map((item) => (
          <li key={item.href}>
            <Link className={linkClass} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
