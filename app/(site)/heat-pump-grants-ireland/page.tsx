import Link from "next/link";

import { StartPlannerLink } from "@/components/analytics/start-planner-link";
import { Reveal } from "@/components/home/reveal";
import { PillarPageHero } from "@/components/seo/pillar-page-hero";
import { PillarPageTealCta } from "@/components/seo/pillar-page-cta";
import { RelatedGuides } from "@/components/seo/related-guides";
import { Card } from "@/components/ui/card";
import { FaqItem } from "@/components/ui/faq-item";
import { Section } from "@/components/ui/section";
import { grantGuideMetadata } from "@/lib/seo/grant-guide-metadata";
import { pillarProseClass } from "@/lib/seo/pillar-page";

export const metadata = grantGuideMetadata({
  path: "/heat-pump-grants-ireland",
  titleSegment: "Heat Pump Grants Ireland (2026)",
  description:
    "Learn how heat pump grants work in Ireland, what may affect eligibility, and what to consider before changing your home heating."
});

const overviewCards = [
  {
    title: "What this guide covers",
    body: "How heat pump grants are typically structured, what can affect eligibility, and how they fit into wider home upgrades."
  },
  {
    title: "Who it is for",
    body: "Homeowners considering a heat pump who want to understand the practical steps before speaking to an installer or assessor."
  },
  {
    title: "Important note",
    body: "Support levels and suitability vary depending on your home, existing insulation, and assessment results."
  }
] as const;

const beforeHeatPumpCards = [
  {
    title: "Insulation improvements",
    body: "Attic, wall, or floor insulation may need to be improved so the home can retain heat effectively."
  },
  {
    title: "Air tightness and draught reduction",
    body: "Reducing uncontrolled heat loss can make a significant difference to performance and comfort."
  },
  {
    title: "Windows and glazing",
    body: "In some homes, upgrading windows or reducing draughts may be part of preparing for a heating change."
  },
  {
    title: "Assessment or survey",
    body: "A technical assessment may be needed to confirm whether a heat pump is suitable for your home."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function HeatPumpGrantsIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="2026 GUIDE"
        title="Heat pump grants for homeowners in Ireland (2026)"
        intro="Thinking about switching to a heat pump? Grants can help, but the amount available and whether it makes sense often depends on your home first. This guide explains how heat pump support works and what to consider before making a decision."
        summaryItems={[
          "Explore possible heat pump grants",
          "Understand what may need to come first",
          "Get a practical next-step view for your home"
        ]}
      />

      <Section className="border-t border-ink-200 py-10 sm:py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {overviewCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06} className="h-full">
              <Card className="h-full p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)] sm:p-7">
                <h2 className="text-lg font-semibold tracking-tight text-[#0f8f81] sm:text-xl">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-ink-500">{card.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        className="border-t border-ink-200 bg-ink-100/40"
        title="Thinking about a heat pump? Start with the bigger picture"
        description="Many homeowners look at heat pumps first, but whether it makes sense often depends on the condition of the home overall."
      >
        <div className={`max-w-3xl space-y-5 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Is the home well insulated enough?</li>
            <li>Would heat loss need to be reduced first?</li>
            <li>Is a technical assessment required before upgrading?</li>
            <li>What level of support might apply in a typical case?</li>
          </ul>
          <p>
            In practice, heat pumps are often part of a wider upgrade plan rather than a single standalone change.
          </p>
          <p>
            This guide focuses on how grant support fits that journey. If you are mainly comparing installed price bands and what changes quotes, read{" "}
            <Link className={linkClass} href="/heat-pump-cost-ireland">
              heat pump costs in Ireland
            </Link>{" "}
            first, then come back here for grant framing.
          </p>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200"
        title="What usually comes before a heat pump"
        description="Heat pumps work best in homes with lower heat demand. That means some upgrades are often considered first."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {beforeHeatPumpCards.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.06} className="h-full">
              <Card className="h-full p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)]">
                <h3 className="text-lg font-semibold tracking-tight text-ink-900 sm:text-xl">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{area.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Why the order of upgrades matters">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-10">
          <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
            <p>Switching heating without addressing heat loss first can limit how effective a heat pump will be.</p>
            <p>
              In many cases, changing the heating system often comes after{" "}
              <Link className={linkClass} href="/insulation-grants-ireland">
                improving insulation
              </Link>{" "}
              and reducing heat demand first.
            </p>
          </div>
          <Reveal>
            <div className="rounded-[1.1rem] border border-ink-200 bg-white px-5 py-6 shadow-soft sm:px-6 sm:py-7">
              <h3 className="text-base font-semibold text-ink-900">A practical way to think about it</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                The goal is to understand what your home needs first, then choose upgrades in a sequence that makes sense.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200"
        title="What a heat pump grant figure does not tell you"
        description="A published grant amount can be helpful as a reference, but it does not confirm suitability or final support."
      >
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>On its own, a figure does not confirm:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>that your home is ready for a heat pump</li>
            <li>that all conditions are met</li>
            <li>that a heat pump is the best option</li>
            <li>that the final support will match an early estimate</li>
          </ul>
          <p>This is why guidance often uses cautious language such as “may qualify” or “may suit”.</p>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/home-energy-upgrade-guide-ireland", label: "Home energy upgrade guide" },
          { href: "/seai-grants-ireland-2026", label: "SEAI grants overview" },
          { href: "/seai-grants-eligibility-ireland", label: "SEAI grants eligibility" },
          { href: "/heat-pump-cost-ireland", label: "Heat pump costs in Ireland" },
          { href: "/ber-assessment-ireland", label: "BER assessment guide" },
          { href: "/insulation-grants-ireland", label: "Insulation grants" },
          { href: "/solar-panel-grants-ireland", label: "Solar panel grants" }
        ]}
      />

      <PillarPageTealCta
        heading="Want a clearer view for your home?"
        body="See how heat pump options may fit your home, what may need to come first, and what support you may want to explore."
        buttonLabel="Start your plan"
      />

      <Section title="How to use this page">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Use this as a starting point, not a final decision.</p>
          <p>It helps you understand how heat pump upgrades fit into wider planning.</p>
          <p>
            For a more tailored view,{" "}
            <Link className={linkClass} href="/planner">
              use the planner
            </Link>{" "}
            to explore what may apply to your home.
          </p>
        </div>
      </Section>

      <Section className="border-t border-ink-200" title="Common questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="How much is the heat pump grant in Ireland?"
              answer="Support levels can vary depending on the type of system and current programme rules."
            />
            <FaqItem
              question="Can I install a heat pump without upgrading insulation?"
              answer="In some cases it may be possible, but insulation improvements are often recommended first."
            />
            <FaqItem
              question="Do I need an assessment before installing a heat pump?"
              answer="A technical assessment is often required to confirm suitability."
            />
            <FaqItem
              question="Is a heat pump always the best option?"
              answer="Not always. The best option depends on the home and what upgrades are already in place."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Start with clarity, then explore next steps
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Use the planner to see possible grants, upgrade paths, and practical next steps for your home.
            </p>
            <div className="mt-8 flex justify-center sm:justify-start">
              <StartPlannerLink href="/planner" size="lg" className="w-full justify-center sm:w-auto sm:min-w-[12rem]">
                Start planner
              </StartPlannerLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
