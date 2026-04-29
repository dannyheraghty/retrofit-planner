import Link from "next/link";
import type { Metadata } from "next";

import { StartPlannerLink } from "@/components/analytics/start-planner-link";
import { Reveal } from "@/components/home/reveal";
import { PillarPageHero } from "@/components/seo/pillar-page-hero";
import { PillarPageTealCta } from "@/components/seo/pillar-page-cta";
import { RelatedGuides } from "@/components/seo/related-guides";
import { Card } from "@/components/ui/card";
import { FaqItem } from "@/components/ui/faq-item";
import { Section } from "@/components/ui/section";
import { pillarProseClass } from "@/lib/seo/pillar-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "What Home Energy Upgrade Should You Do First in Ireland? (2026 Guide)"
  },
  description:
    "Most Irish homes should fix heat loss first—not install a heat pump. See the correct upgrade order, avoid costly mistakes, and check what grants you could qualify for.",
  alternates: {
    canonical: `${siteConfig.url}/home-energy-upgrade-guide-ireland`
  }
};

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
        title="Home Energy Upgrades Ireland: What to Do First (Most Homes Get This Wrong)"
        ctaLabel="Check your grant eligibility"
        intro="Not sure where to start? Most Irish homes should fix heat loss first before upgrading heating or solar. Use the planner to see the right upgrade order for your home and what grants you could qualify for."
        summaryItems={["Fix heat loss first (insulation + draughts)", "Plan heating and heat pump sizing", "Check SEAI routes with the planner"]}
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
            <p>
              Do this first: reduce heat loss with insulation and draught control. When your building is tighter, later heating
              and heat pump upgrades can be sized correctly instead of being oversized and inefficient.
            </p>
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
              , then read{" "}
              <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
                what to upgrade first in your home
              </Link>
              .
            </p>
          </div>
          <Reveal>
            <div className="rounded-[1.1rem] border border-ink-200 bg-white px-5 py-6 shadow-soft sm:px-6 sm:py-7">
              <h3 className="text-base font-semibold text-ink-900">Why sequence matters</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                The wrong order can lock in higher costs. Get the fabric upgrades in first to avoid rework, improve comfort sooner,
                and make sure later heating choices match your real heat demand.
              </p>
            </div>
          </Reveal>
        </div>
        <p className={`mt-6 ${pillarProseClass}`}>
          👉 Want to apply this to your own home?{" "}
          <Link className={linkClass} href="/planner">
            Check your grant eligibility
          </Link>{" "}
          and get your upgrade plan.
        </p>
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
            For overall budgeting across measures, use the{" "}
            <Link className={linkClass} href="/home-retrofit-cost-ireland">
              home retrofit cost guide
            </Link>
            .
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
        heading="Not sure what to do first for your home?"
        body="Use the planner to get a personalised upgrade order, see likely grants, and avoid costly mistakes like installing heating too early."
        buttonLabel="Check your grant eligibility"
      />

      <Section title="What should you do first for your own home?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            The first move should be based on your property, not general advice. Two similar homes can need different priorities,
            and the wrong first measure can waste money or force rework.
          </p>
          <p>
            The most practical start is to{" "}
            <Link className={linkClass} href="/planner">
              start with the planner
            </Link>
            , then use the relevant SEAI grant guides to validate your chosen measure before you book work.
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
              answer="In most Irish homes, reducing heat loss through insulation and draught-proofing is the best first step. This improves comfort and ensures later upgrades like heat pumps are sized correctly."
            />
            <FaqItem
              question="Should I install a heat pump before insulation?"
              answer="No, insulation should usually come first. Installing a heat pump before improving insulation can lead to higher costs and inefficient system sizing."
            />
            <FaqItem
              question="Can I get SEAI grants for multiple upgrades?"
              answer="Yes, many SEAI grants can be combined across insulation, heating, and solar upgrades, depending on eligibility and your home's upgrade plan."
            />
            <FaqItem
              question="What order should home energy upgrades be done?"
              answer="A typical order is insulation first, then ventilation, followed by heating upgrades like heat pumps, and finally solar PV if suitable."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              See the best upgrade plan for your home
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Get a personalised upgrade plan based on your home, see what grants you could qualify for, and avoid wasting money on the wrong upgrades.
            </p>
            <div className="mt-8 flex justify-center sm:justify-start">
              <StartPlannerLink href="/planner" size="lg" className="w-full justify-center sm:w-auto sm:min-w-[12rem]">
                Check your grant eligibility
              </StartPlannerLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
