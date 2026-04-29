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
  titleSegment: "Heat Pump Grants Ireland 2026: Get Up to €12,500",
  description:
    "See how much heat pump grant support you could get in Ireland, typical net costs after grants, eligibility checks, and what most homes actually qualify for."
});

const overviewCards = [
  {
    title: "Grant amount + net cost (numbers first)",
    body: "See the 2026 heat pump grant cap used for planning (up to EUR12,500) and the typical net spend homeowners plan for after support (EUR6,500-EUR17,500)."
  },
  {
    title: "Eligibility clarity (fast checks)",
    body: "Know what usually decides eligibility: owner-occupied context, BER/heat-loss readiness, and technical/assessment steps before approval."
  },
  {
    title: "Is it worth it? (when grants actually help)",
    body: "A numbers-first decision test: where grants reduce net cost into the EUR6,500-EUR17,500 planning range, and where insulation prep is required first."
  }
] as const;

const beforeHeatPumpCards = [
  {
    title: "Insulation improvements",
    body: "Heat pumps work best in homes with lower heat demand. Insulation upgrades and draught reduction are the most common readiness step before commissioning."
  },
  {
    title: "Air tightness and draught reduction",
    body: "Reducing uncontrolled heat loss helps the heat pump run efficiently and supports the BER/heat-loss outcomes that underpin grant routes."
  },
  {
    title: "Windows and glazing",
    body: "Where glazing contributes to heat loss, the technical/assessment step can flag basic fabric improvements before the heating upgrade."
  },
  {
    title: "Assessment or survey",
    body: "A technical/assessment step is used to confirm suitability and whether the route you are choosing matches your home's readiness."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function HeatPumpGrantsIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="2026 GRANTS GUIDE"
        title="Heat Pump Grants Ireland 2026: Could You Get Up to €12,500?"
        intro="Most Irish homeowners do not automatically get the full €12,500 — and many overspend by upgrading in the wrong order. This page shows what you could qualify for, realistic net costs after grants, and the upgrade order that makes a heat pump financially worth it."
        summaryItems={[
          "Up to €12,500 possible heat pump support",
          "Typical net spend after grants: €6,500–€17,500",
          "Eligibility depends on BER, heat loss, and readiness",
          "Insulation may need to come before the heat pump"
        ]}
        ctaLabel="Check your grant eligibility"
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

      <Section className="border-t border-ink-200" title="What most homeowners actually get">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            The €12,500 figure is the upper planning cap, not what every home will receive. In practice, your grant fit depends
            on your home’s BER, heat-loss readiness, insulation level, and whether the heat pump is the right next upgrade.
          </p>
          <p>
            Many homeowners should plan around a realistic net cost range of €6,500–€17,500 after grant support, rather than
            assuming the maximum grant will apply automatically.
          </p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>€12,500 is the maximum planning figure, not guaranteed approval</li>
            <li>Homes with poor insulation may need fabric upgrades first</li>
            <li>The grant is most valuable when the heat pump is installed in the right upgrade order</li>
          </ul>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200 bg-ink-100/40"
        title="Is it worth it? The quick grant + eligibility test"
        description="Numbers-first 2026 checklist: grant cap, net planning cost, and what must be true for your route."
      >
        <div className={`max-w-3xl space-y-5 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              2026 grant cap used for planning: <strong>up to EUR12,500</strong> heat pump support.
            </li>
            <li>
              Typical net spend after that support: <strong>EUR6,500-EUR17,500</strong> (based on typical installed costs).
            </li>
            <li>
              Your home needs enough BER/heat-loss readiness for a heat pump route to be financially meaningful.
            </li>
          </ul>
          <p>
            If insulation/airtightness prep is needed first, treat it as part of the heat pump decision. The grant helps with
            eligible works, but it does not remove the need to prepare the home for lower heat demand.
          </p>
          <p>
            For costs, read{" "}
            <Link className={linkClass} href="/heat-pump-cost-ireland">
              real heat pump costs in Ireland after grants
            </Link>
            . For the full “is it worth it?” decision view, read{" "}
            <Link className={linkClass} href="/is-heat-pump-worth-it-ireland">
              is a heat pump worth it in Ireland
            </Link>
            .
          </p>
          <p>
            👉 Want to see if a heat pump grant actually works for your home?{" "}
            <Link className={linkClass} href="/planner">
              Check your grant eligibility
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200"
        title="Before your heat pump grant can work financially"
        description="These readiness areas are the ones most homeowners end up planning first before the heating change."
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

      <PillarPageTealCta
        heading="See if a heat pump grant actually fits your home"
        body="Check your likely grant amount, realistic net cost, and whether your home is ready before speaking to installers."
        buttonLabel="Check your grant eligibility"
      />

      <Section title="Upgrade order: when the grant becomes financially real">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-10">
          <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
            <p>
              If heat loss is still high, a heat pump route becomes harder to justify - because your home is not yet prepared for lower
              heat demand.
            </p>
            <p>
              The grant supports the eligible upgrade, but it does not remove the need for the home to be ready. In most retrofit
              plans, you line up insulation and draught reduction first, then heating - so the heat pump is the next logical step.
            </p>
            <p>
              That is why the sensible next step is usually BER/heat-loss context first, insulation and draught reduction
              next, then heating.
            </p>
          </div>
          <Reveal>
            <div className="rounded-[1.1rem] border border-ink-200 bg-white px-5 py-6 shadow-soft sm:px-6 sm:py-7">
              <h3 className="text-base font-semibold text-ink-900">Do this next (so your grant route stays on track)</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                Start with BER/heat-loss context, then line up insulation and draught reduction if they are needed. After that,
                confirm your heat pump suitability and the assessment steps tied to the route.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200"
        title="What a heat pump grant number does not confirm"
        description="A grant headline is not your final approval. Use the checks below before you book quotes."
      >
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>On its own, a figure does not confirm:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>that your home meets the BER/heat-loss readiness level for the route you are choosing</li>
            <li>that the technical/assessment checks for suitability are completed</li>
            <li>that the upgrade order is correct for your retrofit path</li>
            <li>what extra readiness works (if any) you need to fund alongside the heat pump</li>
          </ul>
          <p>
            If you want the practical next step, use the planner to turn your home details into a clearer grant fit and upgrade
            order.
          </p>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/home-energy-upgrade-guide-ireland", label: "Home energy upgrade guide" },
          { href: "/seai-grants-ireland-2026", label: "SEAI grants overview" },
          { href: "/seai-grants-eligibility-ireland", label: "SEAI grants eligibility" },
          { href: "/heat-pump-cost-ireland", label: "Real heat pump costs in Ireland after grants" },
          { href: "/is-heat-pump-worth-it-ireland", label: "Is a heat pump worth it?" },
          { href: "/ber-assessment-ireland", label: "BER assessment guide" },
          { href: "/insulation-grants-ireland", label: "Insulation grants" },
          { href: "/solar-panel-grants-ireland", label: "Solar panel grants" }
        ]}
      />

      <Section title="How to use this page">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Use this page to decide if your home needs prep first before you chase installers and quotes.</p>
          <p>Start with the EUR12,500 grant cap, then align eligibility checks and upgrade order with your BER/heat-loss readiness.</p>
          <p>
            For a home-specific view of likely grant fit and next steps,{" "}
            <Link className={linkClass} href="/planner">
              check your grant eligibility
            </Link>{" "}
            with your home details.
          </p>
        </div>
      </Section>

      <Section className="border-t border-ink-200" title="Common questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="How much can you actually get from a heat pump grant in Ireland?"
              answer="For 2026 planning, the indicative heat pump grant cap can be up to €12,500, but the final support depends on your home’s readiness, assessment results, and the route you choose."
            />
            <FaqItem
              question="Can I install a heat pump without upgrading insulation?"
              answer="If your home's heat-loss level means you need BER/route readiness, you'll typically need insulation and draught reduction prep first. A heat pump route works best when the home is prepared for lower heat demand."
            />
            <FaqItem
              question="Do I need an assessment before installing a heat pump?"
              answer="Yes - technical/assessment steps are usually part of confirming suitability and eligibility for heat pump support."
            />
            <FaqItem
              question="Is a heat pump worth it after grants?"
              answer="It is usually worth it when your home is reasonably well-prepared (BER/heat-loss readiness) and you expect to benefit long enough. If insulation/airtightness prep is still needed, your real answer depends on upgrade order, not just the grant name."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              See what you could actually get from a heat pump grant
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Check your likely grant amount, net cost after support, and whether your home is ready before you commit to quotes.
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
