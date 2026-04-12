import { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

type PageHeroProps = {
  title: string;
  description: string;
  kicker: string;
  actions?: ReactNode;
};

export function PageHero({
  title,
  description,
  kicker,
  actions
}: PageHeroProps) {
  return (
    <Section className="pb-10 pt-14 sm:pt-20" eyebrow={kicker} title={title} description={description}>
      <Card className="flex flex-col gap-4 shadow-none sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-ink-600">
          This page is intentionally lightweight in Phase 1. The structure and
          visual system are in place so content can be added cleanly in the next
          phase.
        </p>
        <div className="flex flex-wrap gap-3">
          {actions ?? (
            <>
              <ButtonLink href="/planner">Open planner</ButtonLink>
              <ButtonLink href="/how-it-works" variant="ghost">
                How it works
              </ButtonLink>
            </>
          )}
        </div>
      </Card>
    </Section>
  );
}
