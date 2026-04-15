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
  path: "/solar-panel-grants-ireland",
  titleSegment: "Solar Panel Grants Ireland (2026)",
  description:
    "Learn how solar panel grants work in Ireland, what affects suitability, and how solar fits into wider home energy upgrades."
});

const overviewCards = [
  {
    title: "What this guide covers",
    body: "How solar panel grants are typically structured, what can affect eligibility, and how solar fits into wider home upgrades."
  },
  {
    title: "Who it is for",
    body: "Homeowners considering solar panels who want to understand the practical steps before speaking to an installer or assessor."
  },
  {
    title: "Important note",
    body: "Support levels and suitability vary depending on your roof, orientation, shading, and overall energy usage."
  }
] as const;

const beforeSolarCards = [
  {
    title: "Roof suitability",
    body: "Orientation, angle, and shading all affect how much electricity solar panels can generate."
  },
  {
    title: "Energy usage patterns",
    body: "Homes that use more electricity during the day often benefit more from solar generation."
  },
  {
    title: "Electrical setup",
    body: "Your existing electrical system may need minor adjustments to support solar installation."
  },
  {
    title: "Overall upgrade plan",
    body: "Solar may be combined with other upgrades, depending on your goals and budget."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function SolarPanelGrantsIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="2026 GUIDE"
        title="Solar panel grants for homeowners in Ireland (2026)"
        intro="Thinking about installing solar panels? Grants can help, but what’s available—and whether it makes sense—depends on your home, roof suitability, and energy usage. This guide explains how solar support works and how it fits into wider home upgrades."
        summaryItems={[
          "Explore possible solar panel grants",
          "Understand what affects suitability and savings",
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
        title="Thinking about solar panels? Start with the bigger picture"
        description="Many homeowners are interested in solar as a way to reduce electricity bills, but whether it makes sense depends on how your home uses energy and how suitable your roof is."
      >
        <div className={`max-w-3xl space-y-5 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Does your roof get enough sunlight (orientation and shading)?</li>
            <li>Is there enough usable roof space?</li>
            <li>How much electricity do you use during the day?</li>
            <li>Are other upgrades being considered at the same time?</li>
          </ul>
          <p>
            In practice, solar panels are most effective when they are part of a broader approach to improving energy
            efficiency. See the wider overview of{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              SEAI grants
            </Link>{" "}
            for how support across measures fits together.
          </p>
          <p>
            For a non-grant-first order of works many homeowners use, start with the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="border-t border-ink-200" title="What usually matters before installing solar">
        <div className="grid gap-4 sm:grid-cols-2">
          {beforeSolarCards.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.06} className="h-full">
              <Card className="h-full p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)]">
                <h3 className="text-lg font-semibold tracking-tight text-ink-900 sm:text-xl">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{area.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Why solar is often part of a wider plan">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-10">
          <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
            <p>
              Solar panels generate electricity, but they don’t reduce heat loss or heating demand. That’s why they are
              often considered alongside{" "}
              <Link className={linkClass} href="/insulation-grants-ireland">
                insulation improvements
              </Link>{" "}
              or heating upgrades.
            </p>
            <p>
              In many cases, improving how energy is used in the home comes before or alongside generating your own
              electricity.
            </p>
          </div>
          <Reveal>
            <div className="rounded-[1.1rem] border border-ink-200 bg-white px-5 py-6 shadow-soft sm:px-6 sm:py-7">
              <h3 className="text-base font-semibold text-ink-900">A practical way to think about it</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                Focus first on how your home uses energy, then consider how solar can help offset that usage over time.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200"
        title="What a solar grant figure does not tell you"
        description="A published grant amount can be helpful as a reference, but it does not confirm suitability or final support."
      >
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>On its own, a figure does not confirm:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>that your home is suitable for solar panels</li>
            <li>that your roof will generate enough electricity</li>
            <li>that all conditions are met</li>
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
          { href: "/insulation-grants-ireland", label: "Insulation grants" },
          { href: "/heat-pump-grants-ireland", label: "Heat pump grants" },
          { href: "/heat-pump-cost-ireland", label: "Heat pump costs in Ireland" }
        ]}
      />

      <PillarPageTealCta
        heading="Want a clearer view for your home?"
        body="See how solar panel options may fit your home, what may need to come first, and what support you may want to explore."
        buttonLabel="Start your plan"
      />

      <Section title="How to use this page">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Use this as a starting point, not a final decision.</p>
          <p>It helps you understand how solar fits into wider upgrade planning.</p>
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
              question="How much is the solar panel grant in Ireland?"
              answer="Support levels depend on system size and current programme rules."
            />
            <FaqItem
              question="Are solar panels worth it in Ireland?"
              answer="It depends on your roof, energy usage, and how much electricity you use during the day."
            />
            <FaqItem
              question="Do I need planning permission for solar panels?"
              answer="In many cases, solar panels are exempt from planning permission, but it depends on the property and installation."
            />
            <FaqItem
              question="Can I combine solar grants with other upgrades?"
              answer="Yes, solar is often considered alongside other upgrades depending on your home and overall plan."
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
