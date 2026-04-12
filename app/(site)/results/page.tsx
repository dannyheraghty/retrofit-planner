import type { Metadata } from "next";

import { PageHero } from "@/components/placeholders/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Results",
  description: "Placeholder results route for future personalised retrofit guidance."
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        kicker="Results"
        title="Partial and full plan results"
        description="Future iterations will use this route for mock and gated results states, with soft suitability guidance per upgrade type."
      />

      <Section title="Result modules">
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <CardContent
              eyebrow="Value before capture"
              title="Preview state"
              description="A partial summary can be shown before lead capture without turning the page into a dead-end form."
            />
          </Card>
          <Card>
            <CardContent
              eyebrow="Value after capture"
              title="Full homeowner plan"
              description="The full plan state can later expand into grant context, upgrade suitability, and next-step recommendations."
            />
          </Card>
        </div>
      </Section>
    </>
  );
}
