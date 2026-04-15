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
  path: "/insulation-grants-ireland",
  titleSegment: "Insulation Grants Ireland (2026)",
  description:
    "Explore insulation grants in Ireland, including attic, wall, floor, and draught proofing upgrades, and how they fit into wider retrofit planning."
});

const overviewCards = [
  {
    title: "What this guide covers",
    body: "How insulation grants are typically structured, what can affect eligibility, and how insulation fits into wider home upgrades."
  },
  {
    title: "Who it is for",
    body: "Homeowners considering insulation upgrades who want to understand the practical steps before speaking to a contractor or assessor."
  },
  {
    title: "Important note",
    body: "Support levels and suitability vary depending on your home, existing insulation, and assessment results."
  }
] as const;

const insulationUpgradeCards = [
  {
    title: "Attic insulation",
    body: "Often one of the simplest and most cost-effective upgrades. Many homes benefit from improving or topping up attic insulation."
  },
  {
    title: "Wall insulation",
    body: "Includes cavity wall or external/internal insulation. Suitability depends on wall type, condition, and previous work."
  },
  {
    title: "Floor insulation",
    body: "Less commonly done first, but can improve comfort in certain homes, especially older properties."
  },
  {
    title: "Draught proofing",
    body: "Reducing uncontrolled air movement can improve comfort and help insulation perform better."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function InsulationGrantsIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="2026 GUIDE"
        title="Insulation grants for homeowners in Ireland (2026)"
        intro="Thinking about improving insulation? Grants can help, but what’s available—and what makes sense—often depends on your home’s current condition. This guide explains how insulation support works and how it fits into wider upgrade planning."
        summaryItems={[
          "Explore possible insulation grants",
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
        title="Thinking about insulation? Start with the bigger picture"
        description="Many homeowners look at insulation as a first step—and in many cases, it is. But what makes sense depends on the current state of your home and how different improvements work together."
      >
        <div className={`max-w-3xl space-y-5 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Is insulation already in place, and how effective is it?</li>
            <li>Are there obvious areas of heat loss (attic, walls, floors)?</li>
            <li>Would draughts or ventilation need attention too?</li>
            <li>Is a broader upgrade plan being considered?</li>
          </ul>
          <p>
            In practice, insulation is often one of the most impactful early improvements—but it still benefits from being
            considered as part of a wider plan.
          </p>
          <p>
            For the wider retrofit sequence (fabric, heating, solar) before you fixate on one grant, see the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="border-t border-ink-200" title="Common insulation upgrades homeowners explore">
        <div className="grid gap-4 sm:grid-cols-2">
          {insulationUpgradeCards.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.06} className="h-full">
              <Card className="h-full p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)]">
                <h3 className="text-lg font-semibold tracking-tight text-ink-900 sm:text-xl">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{area.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Why insulation often comes first">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-10">
          <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
            <p>
              Improving insulation reduces heat loss, which can improve the performance of heating upgrades like{" "}
              <Link className={linkClass} href="/heat-pump-grants-ireland">
                heat pumps
              </Link>
              .
            </p>
            <p>In many cases, reducing heat demand is considered before upgrading how the home is heated.</p>
          </div>
          <Reveal>
            <div className="rounded-[1.1rem] border border-ink-200 bg-white px-5 py-6 shadow-soft sm:px-6 sm:py-7">
              <h3 className="text-base font-semibold text-ink-900">A practical way to think about it</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                Focus first on keeping heat in, then on how heat is generated. This often leads to better performance and
                more efficient outcomes overall.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200"
        title="What an insulation grant figure does not tell you"
        description="A published grant amount can be helpful as a reference, but it does not confirm suitability or final support."
      >
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>On its own, a figure does not confirm:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>that your home needs that type of insulation</li>
            <li>that all conditions are met</li>
            <li>that the upgrade is the right priority</li>
            <li>that final support will match early expectations</li>
          </ul>
          <p>This is why guidance often uses cautious language such as “may qualify” or “may suit”.</p>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/home-energy-upgrade-guide-ireland", label: "Home energy upgrade guide" },
          { href: "/seai-grants-ireland-2026", label: "SEAI grants overview" },
          { href: "/seai-grants-eligibility-ireland", label: "SEAI grants eligibility" },
          { href: "/heat-pump-grants-ireland", label: "Heat pump grants" },
          { href: "/windows-doors-grants-ireland", label: "Windows and doors grants" },
          { href: "/ber-assessment-ireland", label: "BER assessment guide" }
        ]}
      />

      <PillarPageTealCta
        heading="Want a clearer view for your home?"
        body="See how insulation upgrades may apply to your home, what may need to come first, and what support you may want to explore."
        buttonLabel="Start your plan"
      />

      <Section title="How to use this page">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Use this as a starting point, not a final answer.</p>
          <p>It helps you understand how insulation upgrades fit into wider planning.</p>
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
              question="What insulation grants are available in Ireland?"
              answer="Support depends on the type of insulation, your home, and current programme rules."
            />
            <FaqItem
              question="Is attic insulation worth doing first?"
              answer="In many homes, attic insulation is one of the simplest and most impactful improvements—but it depends on what is already in place."
            />
            <FaqItem
              question="Do I need an assessment before upgrading insulation?"
              answer="In some cases, an assessment may be needed to confirm suitability or access certain supports."
            />
            <FaqItem
              question="Can I upgrade insulation and heating at the same time?"
              answer="Yes, but in many cases insulation is considered first to improve overall performance."
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
