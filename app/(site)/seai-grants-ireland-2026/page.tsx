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
  path: "/seai-grants-ireland-2026",
  titleSegment: "SEAI Grants for Homeowners in Ireland (2026)",
  description:
    "Understand SEAI grants for Irish homeowners in 2026, including heat pumps, insulation, solar panels, windows, and broader retrofit planning."
});

const overviewCards = [
  {
    title: "What this guide covers",
    body: "A practical overview of the main home energy grant areas Irish homeowners often explore—heating, insulation, windows, solar—and what to think about before you commit to a route. For who may qualify and what shifts eligibility, use the dedicated eligibility guide linked below."
  },
  {
    title: "Who it is for",
    body: "Homeowners who want orientation before talking to an installer, assessor, or scheme contact."
  },
  {
    title: "Important note",
    body: "Support levels, conditions, and sensible upgrade order vary by home, assessment, and current programme rules."
  }
] as const;

const hubGuideCards = [
  {
    href: "/heat-pump-grants-ireland",
    title: "Heat pump grants",
    body: "Heat pumps are one of the most searched upgrade areas, but they often depend on insulation, heat loss, and wider home readiness.",
    linkLabel: "Read the heat pump guide"
  },
  {
    href: "/insulation-grants-ireland",
    title: "Insulation grants",
    body: "Insulation is often one of the earliest upgrades homeowners explore, especially where comfort and heat loss are the main concerns.",
    linkLabel: "Read the insulation guide"
  },
  {
    href: "/solar-panel-grants-ireland",
    title: "Solar panel grants",
    body: "Solar panels are often considered alongside wider efficiency upgrades and can make more sense once the bigger energy picture is clear.",
    linkLabel: "Read the solar guide"
  },
  {
    href: "/windows-doors-grants-ireland",
    title: "Windows and doors grants",
    body: "Glazing and door upgrades are often explored for comfort and draught reduction, but they usually sit within a broader plan.",
    linkLabel: "Read the windows and doors guide"
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function SeaiGrantsIreland2026Page() {
  return (
    <>
      <PillarPageHero
        eyebrow="2026 GUIDE"
        title="SEAI grants for homeowners in Ireland"
        intro="Planning upgrades? It is not always obvious which grants apply, how much support might be available, or what order makes sense. This guide gives a practical overview of the main home energy grant areas Irish homeowners often explore for 2026."
        summaryItems={[
          "Explore possible grants",
          "Understand likely upgrade paths",
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
        title="Common home energy upgrades homeowners explore"
        description="Most homeowners start by exploring one or two upgrades first. These are some of the most common areas people look at when trying to understand grants and retrofit priorities. You can also explore the more detailed guides below if you are focused on a specific type of upgrade."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {hubGuideCards.map((card, index) => (
            <Reveal key={card.href} delay={index * 0.06} className="h-full">
              <Link href={card.href} className="group block h-full">
                <Card className="h-full p-6 shadow-soft transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)] sm:p-7">
                  <h3 className="text-lg font-semibold tracking-tight text-ink-900 sm:text-xl">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-500">{card.body}</p>
                  <p className="mt-4">
                    <span className={linkClass}>{card.linkLabel}</span>
                  </p>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Why upgrade order matters">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-10">
          <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
            <p>Thinking upgrade-by-upgrade is common, but retrofit usually works better as a sequence.</p>
            <p>
              You might focus on a heat pump first—but the urgent question is often whether insulation, draughts, glazing, or survey work should come first.
            </p>
            <p>That does not make other upgrades “wrong”. The best next step depends on what your home is ready for now.</p>
            <p>
              For a step-by-step framing that is not grant-specific, see the{" "}
              <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
                home energy upgrade guide
              </Link>
              .
            </p>
          </div>
          <Reveal>
            <div className="rounded-[1.1rem] border border-ink-200 bg-white px-5 py-6 shadow-soft sm:px-6 sm:py-7">
              <h3 className="text-base font-semibold text-ink-900">A practical framing</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                Aim to understand what may suit your home, what may need assessment, and a sensible order—rather than chasing the largest headline first.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Context"
        title="What you actually need to know about SEAI grants"
        description="Most searches are trying to answer a few concrete questions—not just a headline number."
      >
        <div className={`max-w-3xl space-y-5 ${pillarProseClass}`}>
          <p className="text-ink-600">People searching “SEAI grants” often want to know:</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>What support might exist for the upgrades I am considering?</li>
            <li>Which measures usually come first?</li>
            <li>Do I need an assessment before I commit?</li>
            <li>What might support look like in a typical scenario?</li>
          </ul>
          <p>
            Outcomes depend on your home, the building fabric, the upgrade, and the rules in force when you apply. That is why sequencing and assessment often matter as much as the grant name.
          </p>
          <p>
            If your main question is whether you could qualify rather than which measures exist, read{" "}
            <Link className={linkClass} href="/seai-grants-eligibility-ireland">
              SEAI grants eligibility in Ireland
            </Link>
            . For typical heat pump installed costs and what moves quotes, see{" "}
            <Link className={linkClass} href="/heat-pump-cost-ireland">
              heat pump costs in Ireland
            </Link>
            . For BER timing and certificate basics, see the{" "}
            <Link className={linkClass} href="/ber-assessment-ireland">
              BER assessment guide
            </Link>
            .
          </p>
          <p>
            When you want this translated to your property,{" "}
            <Link className={linkClass} href="/planner">
              use the planner
            </Link>{" "}
            for a home-level starting point.
          </p>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200"
        title="What a grant headline can’t tell you alone"
        description="A published figure is a useful reference—it is not the full decision."
      >
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>On its own, a figure does not confirm:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>that your home is technically ready</li>
            <li>that every condition is met</li>
            <li>that a route is the best fit</li>
            <li>that final support will match an early estimate</li>
          </ul>
          <p>
            RetrofitPlanner.ie uses careful wording (“may qualify”, “may suit”, “indicative”) for that reason. For data handling, see our{" "}
            <Link className={linkClass} href="/privacy">
              privacy
            </Link>{" "}
            summary.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[1.1rem] border border-ink-200 bg-white px-5 py-6 shadow-soft sm:px-6 sm:py-7">
              <h3 className="text-base font-semibold text-[#0f8f81]">What this page helps with</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-ink-600 sm:text-[0.95rem]">
                <li>main categories of support</li>
                <li>likely next questions to ask</li>
                <li>orientation before you speak to a professional</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-[1.1rem] border border-ink-200 bg-ink-100/50 px-5 py-6 sm:px-6 sm:py-7">
              <h3 className="text-base font-semibold text-ink-900">What it does not replace</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-ink-600 sm:text-[0.95rem]">
                <li>official programme criteria</li>
                <li>technical assessment</li>
                <li>
                  BER review where needed (see the{" "}
                  <Link className={linkClass} href="/ber-assessment-ireland">
                    BER assessment guide
                  </Link>
                  )
                </li>
                <li>installer or retrofit professional advice</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/home-energy-upgrade-guide-ireland", label: "Home energy upgrade guide" },
          { href: "/seai-grants-eligibility-ireland", label: "SEAI grants eligibility" },
          { href: "/ber-assessment-ireland", label: "BER assessment guide" },
          { href: "/heat-pump-cost-ireland", label: "Heat pump costs in Ireland" },
          { href: "/heat-pump-grants-ireland", label: "Heat pump grants" },
          { href: "/insulation-grants-ireland", label: "Insulation grants" },
          { href: "/solar-panel-grants-ireland", label: "Solar panel grants" },
          { href: "/windows-doors-grants-ireland", label: "Windows and doors grants" }
        ]}
      />

      <PillarPageTealCta
        heading="Want a more personalised view?"
        body="See which upgrades may suit your home, what may need assessment first, and support you may want to explore—before quotes or deeper decisions."
        buttonLabel="Start planner"
      />

      <Section title="How to use this page">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Use this page as the broad SEAI grants overview—a starting point, not a final answer.</p>
          <p>Early on, it helps you map categories and the questions that usually come first.</p>
          <p>
            If you already know which upgrades you want,{" "}
            <Link className={linkClass} href="/planner">
              use the planner
            </Link>{" "}
            to turn general information into a practical view of your home.
          </p>
          <p>Close to a decision? Confirm details with current programme information and qualified professionals.</p>
          <p>
            For how the tool works, read{" "}
            <Link className={linkClass} href="/how-it-works">
              how it works
            </Link>
            . Questions?{" "}
            <Link className={linkClass} href="/contact">
              Contact us
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="border-t border-ink-200" title="Common questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="Does this page tell me exactly what grant I will get?"
              answer="No. Exact support depends on the upgrade, your home, any assessment required, and programme rules when you apply."
            />
            <FaqItem
              question="Is RetrofitPlanner.ie affiliated with SEAI?"
              answer="No. It is an independent planning tool and is not affiliated with SEAI."
            />
            <FaqItem
              question="Can I use this instead of a professional assessment?"
              answer="No. Some upgrades still need technical review, BER context, or installer guidance before you can decide with confidence."
            />
            <FaqItem
              question="Why is the language cautious?"
              answer="Because suitability depends on details a short page cannot fully capture. The aim is useful guidance without overpromising."
            />
            <FaqItem
              question="What should I do after reading this page?"
              answer="If you want a tailored starting point, run through the planner with your home details and interests."
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
              See possible grants, upgrade paths, and practical actions for your home in one place.
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
