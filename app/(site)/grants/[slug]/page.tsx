import type { Metadata } from "next";

import { PageHero } from "@/components/placeholders/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

type GrantPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: GrantPageProps): Metadata {
  const readableSlug = params.slug.replace(/-/g, " ");

  return {
    title: `Grants: ${readableSlug}`,
    description:
      "Placeholder SEO landing page for retrofit and grant-focused search intents."
  };
}

export default function GrantLandingPage({ params }: GrantPageProps) {
  return (
    <>
      <PageHero
        kicker="SEO landing page"
        title={`Placeholder page for ${params.slug.replace(/-/g, " ")}`}
        description="This dynamic route gives the project a clean pattern for indexable grant and upgrade landing pages."
      />

      <Section title="Landing page template">
        <Card>
          <CardContent
            eyebrow="Reusable pattern"
            title="Server-rendered SEO route"
            description="Each landing page can later add unique content, FAQs, internal links, and structured metadata without changing the overall route architecture."
          />
        </Card>
      </Section>
    </>
  );
}
