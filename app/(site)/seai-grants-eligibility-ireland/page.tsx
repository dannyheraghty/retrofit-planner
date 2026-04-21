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
  path: "/seai-grants-eligibility-ireland",
  titleSegment: "SEAI Grants Eligibility Ireland",
  description:
    "SEAI grants eligibility in Ireland explained in clear terms. See what can affect whether support may apply to your home and check likely next steps with the planner."
});

const overviewCards = [
  {
    title: "What this page covers",
    body: "Who SEAI grants may apply to and what can affect eligibility—not grant amounts or a full list of measures. For that breadth, start with the SEAI grants overview, then return here for qualification-focused questions."
  },
  {
    title: "Who it is for",
    body: "Irish homeowners trying to understand if grant support may apply before they commit to quotes or upgrades."
  },
  {
    title: "Main next step",
    body: "Use the planner to get a more tailored view instead of relying on generic grant rules."
  }
] as const;

const eligibilityFactors = [
  {
    title: "Property type",
    body: "Property type shapes what is practical first, from detached homes to apartments and terraces."
  },
  {
    title: "Year the home was built",
    body: "Build period influences heat loss, insulation levels, and which upgrades are realistic first steps."
  },
  {
    title: "Existing BER or current condition",
    body: "Your home&apos;s current performance influences what upgrades are realistic to start with."
  },
  {
    title: "Type of upgrade being explored",
    body: "Eligibility can shift depending on whether you are exploring insulation, heating, solar, windows, or doors."
  },
  {
    title: "Whether related work may need to happen first",
    body: "Some upgrades are only viable after earlier fabric or readiness work."
  },
  {
    title: "Whether grant rules differ by measure",
    body: "Grant rules differ by measure, so what applies in one path may not apply in another."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function SeaiGrantsEligibilityIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="ELIGIBILITY GUIDE"
        title="SEAI Grants Eligibility Ireland"
        intro="Trying to figure out SEAI grants eligibility in Ireland? If you are asking, “Am I eligible for SEAI grants?” or “Do I qualify?”, the answer depends on your home, the upgrade, and your stage of works. This page stays narrow: qualification signals and common blockers—not a full tour of every grant. For upgrade order before you lock in a measure, pair it with the home energy upgrade guide."
        summaryItems={[
          "Understand who SEAI grants may apply to",
          "See what can affect eligibility",
          "Use the planner for a clearer next step"
        ]}
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

      <Section className="py-14 sm:py-16" title="Who is eligible for SEAI grants in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            This page complements the broad{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              SEAI grants overview
            </Link>
            : here the focus is whether support might apply to your situation, not which measures exist.
          </p>
          <p>
            Eligibility usually comes down to three things: who is applying, what home is involved, and which upgrade is planned.
          </p>
          <p>
            For how upgrades usually fit together before you worry about qualification details, see the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>
            .
          </p>
          <p>
            Most grant paths are built around owner-occupied homes, but some non-owner situations can still be relevant depending on the
            measure.
          </p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              <strong>Homeowners:</strong> most common applicants for residential SEAI grant measures.
            </li>
            <li>
              <strong>Landlord or non-owner cases:</strong> may apply in some situations depending on the measure.
            </li>
            <li>
              <strong>Occupancy and use:</strong> how the property is used can affect the eligibility route.
            </li>
            <li>
              <strong>Property type and age:</strong> these shape what upgrades are practical and likely to qualify.
            </li>
            <li>
              <strong>Grant type matters:</strong> eligibility is not the same across every measure.
            </li>
          </ul>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200 bg-ink-100/40 py-14 sm:py-16"
        title="What affects your eligibility?"
        description="A quick scan of the practical factors homeowners usually need to check first."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {eligibilityFactors.map((factor, index) => (
            <Reveal key={factor.title} delay={index * 0.06} className="h-full">
              <Card className="h-full p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)]">
                <h3 className="text-lg font-semibold tracking-tight text-ink-900 sm:text-xl">{factor.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{factor.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Do you need a BER assessment?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Sometimes yes, and sometimes the next step depends on the measure you are exploring.</p>
          <p>
            Some upgrades are relatively straightforward to start reviewing, while others usually require clearer understanding of current
            home performance first.
          </p>
          <p>
            For bigger system decisions, many homeowners find it helpful to understand the home&apos;s baseline before committing to a route.
          </p>
          <p>This is one of the most common points of confusion and often depends on what you are planning to do next.</p>
          <p>
            For what a BER involves, typical fees, and when it is legally required, read the{" "}
            <Link className={linkClass} href="/ber-assessment-ireland">
              BER assessment guide
            </Link>
            . For timing decisions on assessment before upgrade planning, read{" "}
            <Link className={linkClass} href="/do-i-need-a-ber-assessment-before-retrofit-ireland">
              when to get a BER before retrofit
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Are all upgrades equally likely to qualify?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>No, and choosing the wrong starting point is one of the most common mistakes homeowners make.</p>
          <p>
            Some upgrades may need preparation first, especially where heating choices depend on insulation and overall building fabric.
            In many homes, one measure is a simpler, lower-risk starting point than another.
          </p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              <Link className={linkClass} href="/heat-pump-grants-ireland">
                Heat pump grants guide
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/insulation-grants-ireland">
                Insulation grants guide
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/solar-panel-grants-ireland">
                Solar panel grants guide
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/windows-doors-grants-ireland">
                Windows and doors grants guide
              </Link>
            </li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Can you apply for multiple SEAI grants?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Many homeowners explore more than one measure over time, and that is often a practical approach. The key point is that
            sequencing matters.
          </p>
          <p>
            What may apply can depend on your broader plan, not just one isolated idea. Starting with a joined-up view helps avoid
            confusion and unnecessary rework.
          </p>
          <p>
            For a wider overview of current grant areas, see the{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              SEAI grants Ireland guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <PillarPageTealCta
        heading="See what you may actually qualify for"
        body="Use the planner for a clearer view based on your home, so you can reduce uncertainty and focus on the next upgrades that are worth exploring."
        buttonLabel="Start planner"
      />

      <Section className="py-14 sm:py-16" title="How can you check your SEAI grant eligibility more quickly?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            General grant pages are useful, but they only go so far. A home-specific next step is faster and more practical.
          </p>
          <p>
            The planner narrows what may suit your home using answers about property type, current condition, and upgrade interests.
          </p>
          <p>
            It helps you avoid wasted time and wrong early quotes for upgrades that may not be the right starting point.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="What should you do before getting quotes?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Many homeowners start this step too early.</li>
            <li>Understand likely upgrade order before comparing prices.</li>
            <li>Avoid collecting quotes too early for a measure that may not be the right first step.</li>
            <li>
              If you are still unsure,{" "}
              <Link className={linkClass} href="/planner">
                use the planner
              </Link>{" "}
              before speaking to installers.
            </li>
          </ul>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/home-energy-upgrade-guide-ireland", label: "Home energy upgrade guide" },
          { href: "/seai-grants-ireland-2026", label: "SEAI grants overview" },
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
              question="Who qualifies for SEAI grants in Ireland?"
              answer="In broad terms, many SEAI grant measures are designed for homeowners. Eligibility depends on the home and the upgrade you are planning, so it is not one-size-fits-all. The right route varies by property context and measure."
            />
            <FaqItem
              question="Am I eligible for SEAI grants as a landlord?"
              answer="Some landlord situations may be relevant for certain measures, but the practical answer depends on the specific grant pathway and property context."
            />
            <FaqItem
              question="Do I need a BER assessment to apply for a grant?"
              answer="Sometimes. It depends on the upgrade and stage of works. For larger decisions, understanding current home performance is often an important step."
            />
            <FaqItem
              question="Can I get more than one SEAI grant?"
              answer="Many homeowners explore multiple measures over time. What applies can depend on sequencing and your wider upgrade plan."
            />
            <FaqItem
              question="What if I am not sure which upgrade I should start with?"
              answer="Start with a home-level plan first. The planner helps you narrow likely priorities before you commit to quotes or specific measures."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Get a clearer answer for your home
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Use the planner for a tailored view of which upgrades and grant areas may be relevant to your home, with less uncertainty on what to do next.
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
