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
  path: "/windows-doors-grants-ireland",
  titleSegment: "Windows and Doors Grants Ireland (2026)",
  description:
    "Explore windows and doors grants in Ireland, what affects suitability, and how glazing upgrades fit into wider retrofit planning."
});

const overviewCards = [
  {
    title: "What this guide covers",
    body: "How windows and doors support is typically considered, what can affect suitability, and how glazing upgrades fit into wider home improvements."
  },
  {
    title: "Who it is for",
    body: "Homeowners considering window or door upgrades who want to understand the practical steps before speaking to an installer or assessor."
  },
  {
    title: "Important note",
    body: "Support levels and suitability vary depending on your home, current glazing, heat loss, and wider upgrade plans."
  }
] as const;

const beforeWindowsDoorsCards = [
  {
    title: "Current glazing condition",
    body: "Older or draughty windows may be a clear source of discomfort, but the current condition needs to be looked at in context."
  },
  {
    title: "Heat loss across the whole home",
    body: "Windows and doors matter, but so do attic, wall, and floor heat losses. The right priority depends on the whole picture."
  },
  {
    title: "Comfort and draught reduction",
    body: "In some homes, glazing upgrades are driven more by comfort and draught reduction than by headline grant figures."
  },
  {
    title: "Wider upgrade sequence",
    body: "Window and door upgrades are often considered alongside insulation or heating changes, depending on your goals and budget."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function WindowsDoorsGrantsIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="2026 GUIDE"
        title="Windows and doors grants for homeowners in Ireland (2026)"
        intro="Thinking about upgrading windows or doors? Support may be available, but what makes sense depends on your home, current glazing, comfort issues, and wider upgrade plans. This guide explains how windows and doors support fits into broader retrofit decisions."
        summaryItems={[
          "Explore possible windows and doors grants",
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
        title="Thinking about windows or doors? Start with the bigger picture"
        description="Many homeowners look at windows and doors because they feel draughts, notice condensation, or want to improve comfort. But whether this is the best next step depends on how the home performs overall."
      >
        <div className={`max-w-3xl space-y-5 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Are existing windows old, draughty, or poorly performing?</li>
            <li>Is comfort the main concern, or is a wider retrofit being planned?</li>
            <li>Are there larger sources of heat loss elsewhere in the home?</li>
            <li>Would other upgrades need to be considered alongside glazing changes?</li>
          </ul>
          <p>
            In practice, windows and doors are often part of a broader upgrade plan rather than a standalone fix.
          </p>
          <p>
            If you have not mapped that wider sequence yet, the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>{" "}
            is a better starting point than any single measure page.
          </p>
        </div>
      </Section>

      <Section className="border-t border-ink-200" title="What usually matters before upgrading windows or doors">
        <div className="grid gap-4 sm:grid-cols-2">
          {beforeWindowsDoorsCards.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.06} className="h-full">
              <Card className="h-full p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)]">
                <h3 className="text-lg font-semibold tracking-tight text-ink-900 sm:text-xl">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{area.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Why windows and doors are usually part of a wider plan">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-10">
          <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
            <p>
              Upgrading windows or doors can improve comfort and reduce draughts, but they are only one part of how a home
              performs overall.
            </p>
            <p>
              In many cases, glazing improvements make most sense when considered alongside insulation, ventilation, and
              other energy upgrades. Significant heat loss may also come from{" "}
              <Link className={linkClass} href="/insulation-grants-ireland">
                insulation gaps in walls, floors, or the attic
              </Link>
              , not just from glazing.
            </p>
            <p>
              For how these measures sit under national retrofit support, see our{" "}
              <Link className={linkClass} href="/seai-grants-ireland-2026">
                SEAI grants overview
              </Link>
              .
            </p>
          </div>
          <Reveal>
            <div className="rounded-[1.1rem] border border-ink-200 bg-white px-5 py-6 shadow-soft sm:px-6 sm:py-7">
              <h3 className="text-base font-semibold text-ink-900">A practical way to think about it</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                Focus on where the home is losing comfort and heat first, then decide whether windows or doors are the
                right next step.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200"
        title="What a windows or doors grant figure does not tell you"
        description="A published figure can be useful as a reference, but it does not confirm suitability or final support."
      >
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>On its own, a figure does not confirm:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>that windows or doors are the biggest priority</li>
            <li>that the home will qualify for that level of support</li>
            <li>that all technical or programme conditions are met</li>
            <li>that final support will match an early estimate</li>
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
          { href: "/ber-assessment-ireland", label: "BER assessment guide" }
        ]}
      />

      <PillarPageTealCta
        heading="Want a clearer view for your home?"
        body="See how windows and doors upgrades may fit your home, what may need to come first, and what support you may want to explore."
        buttonLabel="Start your plan"
      />

      <Section title="How to use this page">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Use this as a starting point, not a final answer.</p>
          <p>It helps you understand how glazing upgrades fit into wider retrofit planning.</p>
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
              question="Are there grants for windows and doors in Ireland?"
              answer="Support may be available depending on the upgrade, your home, and current programme rules."
            />
            <FaqItem
              question="Should I upgrade windows before insulation?"
              answer="Not always. The right order depends on where the home is losing the most heat and comfort."
            />
            <FaqItem
              question="Are new windows always worth it?"
              answer="Not necessarily. It depends on the current condition of the windows, the rest of the home, and your wider goals."
            />
            <FaqItem
              question="Can windows and doors be upgraded alongside other retrofit work?"
              answer="Yes, they are often considered as part of a wider upgrade plan depending on the home and budget."
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
