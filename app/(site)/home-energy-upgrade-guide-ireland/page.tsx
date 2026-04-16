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
  path: "/home-energy-upgrade-guide-ireland",
  titleSegment: "Home Energy Upgrade Guide Ireland",
  description:
    "A practical home energy upgrade guide for Ireland. Learn which upgrades to prioritise, what SEAI grants may apply, and what to do first."
});

const overviewCards = [
  {
    title: "What this guide covers",
    body: "The main upgrade options in Ireland, the order that usually works best, and where to check relevant grant guidance."
  },
  {
    title: "Who it is for",
    body: "Homeowners who want to make informed decisions before booking quotes, assessments, or major retrofit works."
  },
  {
    title: "Main next step",
    body: "Use the planner to map likely next steps for your own home, instead of relying on one-size-fits-all advice."
  }
] as const;

const upgradeAreas = [
  {
    title: "Attic and roof insulation",
    body: "Often one of the quickest ways to cut heat loss, improve comfort, and reduce heating demand."
  },
  {
    title: "Wall insulation",
    body: "Cavity, internal, and external wall options suit different property types and can materially change overall heat retention."
  },
  {
    title: "Windows and doors",
    body: "Useful for tackling draughts and cold spots, particularly in older homes with poor glazing or leaky frames."
  },
  {
    title: "Heat pump upgrades",
    body: "Best considered after heat loss is reviewed, so system sizing and performance are based on realistic home conditions."
  },
  {
    title: "Solar PV",
    body: "Can reduce electricity bills and pair well with electrified heating, once core fabric priorities are addressed."
  },
  {
    title: "Deeper retrofit work",
    body: "Some properties need a coordinated package of fabric, heating, and ventilation upgrades rather than a single measure."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function HomeEnergyUpgradeGuideIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="IRELAND GUIDE"
        title="Home Energy Upgrade Guide Ireland"
        intro="Planning a home energy upgrade in Ireland can feel unclear: which works should come first, which grants may apply, and where costs can rise. This guide gives a practical sequence you can use before you commit."
        summaryItems={["Compare key upgrade options", "Follow a practical upgrade order", "Use the planner to set priorities"]}
      />

      <Section className="border-t border-ink-200 py-10 sm:py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {overviewCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06} className="h-full">
              <Card className="h-full p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)] sm:p-7">
                <h2 className="text-lg font-semibold tracking-tight text-[#0f8f81] sm:text-xl">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-500">{card.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        className="border-t border-ink-200 bg-ink-100/40"
        title="What home energy upgrades are available in Ireland?"
        description="Most Irish homes need a mix of fabric, heating, and electricity upgrades. The right combination depends on your building, not one standalone product."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {upgradeAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.06} className="h-full">
              <Card className="h-full p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)]">
                <h3 className="text-lg font-semibold tracking-tight text-ink-900 sm:text-xl">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{area.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="What order should most homeowners consider upgrades in?">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-10">
          <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
            <p>For most homes, the safest route is to improve the building first, then upgrade systems.</p>
            <ol className="list-decimal space-y-2.5 pl-5">
              <li>Reduce heat loss first with insulation and draught control, so later upgrades are not oversized or inefficient.</li>
              <li>Review heating next, when your heat demand is clearer and system choices are easier to compare.</li>
              <li>Add solar PV or further upgrades after core fabric and heating decisions are in place.</li>
            </ol>
            <p>
              If you want to apply this sequence to your own home,{" "}
              <Link className={linkClass} href="/planner">
                use the planner
              </Link>
              .
            </p>
          </div>
          <Reveal>
            <div className="rounded-[1.1rem] border border-ink-200 bg-white px-5 py-6 shadow-soft sm:px-6 sm:py-7">
              <h3 className="text-base font-semibold text-ink-900">Why sequence matters</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                The wrong order can lock in higher costs. The right order improves comfort sooner and avoids rework.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200"
        title="What SEAI grants might apply?"
        description="SEAI support is split by measure and eligibility rules. Use the right guide for the upgrade you are actively planning."
      >
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Start with the{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              SEAI grants overview for Ireland
            </Link>{" "}
            for the big picture on grant areas and sequencing. If you are mainly trying to work out whether support could apply to your
            situation, use the focused{" "}
            <Link className={linkClass} href="/seai-grants-eligibility-ireland">
              SEAI grants eligibility guide
            </Link>
            .
          </p>
          <p>Then move to the guide that matches your next likely measure:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <Link className={linkClass} href="/heat-pump-grants-ireland">
                Heat pump grants in Ireland
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/insulation-grants-ireland">
                Insulation grants in Ireland
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/solar-panel-grants-ireland">
                Solar panel grants in Ireland
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/windows-doors-grants-ireland">
                Windows and doors grants in Ireland
              </Link>
            </li>
          </ul>
          <p>
            For heating budgets, see{" "}
            <Link className={linkClass} href="/heat-pump-cost-ireland">
              heat pump costs in Ireland
            </Link>{" "}
            (pricing and what moves quotes). If you need to understand ratings or timing for an assessment, read the{" "}
            <Link className={linkClass} href="/ber-assessment-ireland">
              BER assessment guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section title="What does a home energy upgrade cost in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Home energy upgrade costs in Ireland vary by home size, age, existing insulation level, and whether the project is a single measure or a full retrofit.
          </p>
          <p>
            Scope is usually the biggest cost driver: fabric upgrades, heating changes, and electrical works all add complexity. Compare options as a package, not as isolated line items.
          </p>
          <p>
            If a heat pump is on your list, typical installed ranges and grant effects are summarised in the{" "}
            <Link className={linkClass} href="/heat-pump-cost-ireland">
              heat pump cost guide
            </Link>
            . If you are still comparing whether specific upgrades make sense at all, see{" "}
            <Link className={linkClass} href="/is-heat-pump-worth-it-ireland">
              whether a heat pump is worth it
            </Link>
            ,{" "}
            <Link className={linkClass} href="/is-insulation-worth-it-ireland">
              whether insulation is worth it
            </Link>
            , or{" "}
            <Link className={linkClass} href="/is-solar-worth-it-ireland">
              whether solar is worth it
            </Link>
            .
          </p>
        </div>
      </Section>

      <PillarPageTealCta
        heading="Need a clearer starting point?"
        body="Use the planner to prioritise upgrades for your home, understand likely grant routes, and avoid costly guesswork on what to do first."
        buttonLabel="Start planner"
      />

      <Section title="What should you do first for your own home?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            The first step should reflect your own property. Two similar-looking homes can need very different upgrade paths.
          </p>
          <p>
            The most practical starting point is to{" "}
            <Link className={linkClass} href="/planner">
              start with the planner
            </Link>
            , then use the grant guides above to validate specific measures.
          </p>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/seai-grants-ireland-2026", label: "SEAI grants overview" },
          { href: "/seai-grants-eligibility-ireland", label: "SEAI grants eligibility" },
          { href: "/is-heat-pump-worth-it-ireland", label: "Is a heat pump worth it in Ireland?" },
          { href: "/is-insulation-worth-it-ireland", label: "Is insulation worth it in Ireland?" },
          { href: "/is-solar-worth-it-ireland", label: "Is solar worth it in Ireland?" },
          { href: "/does-retrofit-increase-house-value-ireland", label: "Does retrofit increase house value in Ireland?" },
          { href: "/ber-assessment-ireland", label: "BER assessment guide" },
          { href: "/heat-pump-cost-ireland", label: "Heat pump costs in Ireland" },
          { href: "/heat-pump-grants-ireland", label: "Heat pump grants" },
          { href: "/insulation-grants-ireland", label: "Insulation grants" },
          { href: "/solar-panel-grants-ireland", label: "Solar panel grants" },
          { href: "/windows-doors-grants-ireland", label: "Windows and doors grants" }
        ]}
      />

      <Section className="border-t border-ink-200" title="Frequently asked questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="What is the best first home energy upgrade in Ireland?"
              answer="In many cases, reducing heat loss first is the most reliable starting point, but the best first measure depends on your home condition."
            />
            <FaqItem
              question="Should I install a heat pump before insulation?"
              answer="Usually no. Most homes benefit from insulation and heat-loss improvements first, then heating upgrades once demand is lower."
            />
            <FaqItem
              question="Can I apply for more than one SEAI grant?"
              answer="Often yes across different measures, but eligibility depends on current scheme rules and the works you complete. The SEAI grants eligibility guide explains what usually affects whether support may apply."
            />
            <FaqItem
              question="How do I decide between insulation, heating, and solar?"
              answer="Assess your home fabric first, then heating, then solar. The planner helps you map that sequence for your property."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Plan your next home energy steps with more clarity
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Use the planner to identify your best first upgrades, estimate likely grant routes, and build a realistic order of works for your home.
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
