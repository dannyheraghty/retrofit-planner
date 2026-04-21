import Link from "next/link";

import { StartPlannerLink } from "@/components/analytics/start-planner-link";
import { Reveal } from "@/components/home/reveal";
import { PillarPageTealCta } from "@/components/seo/pillar-page-cta";
import { PillarPageHero } from "@/components/seo/pillar-page-hero";
import { RelatedGuides } from "@/components/seo/related-guides";
import { Section } from "@/components/ui/section";
import { grantGuideMetadata } from "@/lib/seo/grant-guide-metadata";
import { pillarProseClass } from "@/lib/seo/pillar-page";

export const metadata = grantGuideMetadata({
  path: "/heat-pump-cost-ireland",
  titleSegment: "Heat Pump Cost Ireland",
  description:
    "A practical guide to heat pump cost Ireland homeowners can expect, with realistic price ranges, grant-adjusted budgets, and the biggest factors that affect final spend."
});

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function HeatPumpCostIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="HEAT PUMP COST GUIDE"
        title="Heat pump cost Ireland"
        intro="Most homeowners in Ireland should plan for a broad heat pump budget, not a single headline number. This guide gives realistic ranges, explains what pushes costs up, and shows how grants reduce net spend but do not remove upfront payment."
        summaryItems={[
          "Typical cost range before and after grants",
          "SEAI support can reduce net spend",
          "Insulation readiness is a major cost driver"
        ]}
        ctaLabel="Start planner"
      />

      <Section className="border-t border-ink-200 py-12 sm:py-14" title="Quick answer">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Typical heat pump cost in Ireland is around <strong>EUR13,000 to EUR24,000</strong> before grants.
          </p>
          <p>
            After the standard SEAI heat pump grant (often around <strong>EUR6,500</strong>), many homeowners plan for roughly{" "}
            <strong>EUR6,500 to EUR17,500</strong> net.
          </p>
          <p>
            Final pricing still varies significantly if insulation, radiators, or electrical upgrades are needed before commissioning.
          </p>
        </div>
      </Section>

      <Section className="py-12 sm:py-14" title="At a glance">
        <div className={`max-w-3xl ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              <strong>Typical cost range:</strong> most installs land around <strong>EUR13,000 to EUR24,000</strong> before grants.
            </li>
            <li>
              <strong>Grants available:</strong> many eligible homes can access around <strong>EUR6,500</strong> in SEAI support.
            </li>
            <li>
              <strong>Biggest cost drivers:</strong> insulation level, radiator upgrades, and electrical works.
            </li>
          </ul>
        </div>
      </Section>

      <PillarPageTealCta
        heading="Want a clearer heat pump cost for your home?"
        body="Use the planner to estimate likely cost based on your home type, insulation level, and upgrade readiness."
        buttonLabel="Start planner"
      />

      <Section className="py-12 sm:py-14" title="How much does a heat pump cost in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <h3>Basic install (smaller or efficient home)</h3>
          <p>
            <strong>EUR13,000 to EUR16,000</strong> is common where the home has good insulation and needs limited changes beyond the heat pump
            system itself.
          </p>

          <h3>Typical semi-detached home</h3>
          <p>
            <strong>EUR16,000 to EUR20,000</strong> is a realistic range for many semis, where some radiator or controls work is usually included.
          </p>

          <h3>More complex or larger homes</h3>
          <p>
            <strong>EUR20,000 to EUR24,000+</strong> is common where homes are larger, older, or need substantial readiness works before heat pump
            operation is reliable.
          </p>
        </div>
      </Section>

      <Section className="py-12 sm:py-14" title="What affects the cost most?">
        <div className={`max-w-3xl ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              <strong>Home size:</strong> larger homes generally need larger output and longer install scope.
            </li>
            <li>
              <strong>Insulation and BER starting point:</strong> lower-performance homes often need preparatory work to run efficiently.
            </li>
            <li>
              <strong>Radiator upgrades:</strong> undersized radiators for low-temperature heating can add significant cost.
            </li>
            <li>
              <strong>Electrical upgrades:</strong> consumer board or wiring updates are common hidden extras.
            </li>
            <li>
              <strong>Heat pump type:</strong> most homes use air-to-water systems, but specification and complexity can shift pricing.
            </li>
          </ul>
        </div>
      </Section>

      <Section className="py-12 sm:py-14" title="Typical cost breakdown">
        <div className={`max-w-3xl ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              <strong>Heat pump unit:</strong> EUR6,000 to EUR10,000
            </li>
            <li>
              <strong>Installation labour:</strong> EUR3,000 to EUR6,000
            </li>
            <li>
              <strong>Hot water cylinder:</strong> EUR1,000 to EUR2,500
            </li>
            <li>
              <strong>Controls:</strong> EUR500 to EUR1,500
            </li>
            <li>
              <strong>Electrical works:</strong> EUR500 to EUR2,000
            </li>
            <li>
              <strong>Radiator upgrades (if needed):</strong> EUR1,000 to EUR5,000
            </li>
          </ul>
        </div>
      </Section>

      <Section className="py-12 sm:py-14" title="SEAI grants (Ireland)">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            For many eligible homes, the typical heat pump grant is around <strong>EUR6,500</strong>.
          </p>
          <p>
            It applies to qualifying heat pump installations, but eligibility depends on meeting scheme requirements and technical standards.
          </p>
          <p>
            The grant reduces net cost, but it does not normally remove upfront payment needs during project delivery.
          </p>
          <p>
            Check the wider{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              SEAI grants Ireland
            </Link>{" "}
            guide for current context.
          </p>
        </div>
      </Section>

      <Section className="py-12 sm:py-14" title="Real-world scenarios">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <h3>1980s semi-detached (average BER)</h3>
          <p>
            <strong>Estimated total cost:</strong> around EUR17,000 to EUR20,000 before grant.
          </p>
          <p>
            <strong>Main drivers:</strong> standard installation plus moderate radiator and controls upgrades.
          </p>

          <h3>Well-insulated modern home</h3>
          <p>
            <strong>Estimated total cost:</strong> around EUR13,000 to EUR16,000 before grant.
          </p>
          <p>
            <strong>Main drivers:</strong> simpler install and limited readiness works.
          </p>

          <h3>Older home needing upgrades</h3>
          <p>This is why online price ranges are only a starting point - your home&apos;s setup matters more than the average.</p>
          <p>
            <strong>Estimated total cost:</strong> around EUR20,000 to EUR24,000+ before grant.
          </p>
          <p>
            <strong>Main drivers:</strong> insulation readiness, broader radiator replacement, and potential electrical updates.
          </p>
        </div>
      </Section>

      <Section className="py-12 sm:py-14" title="Hidden costs to watch for">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              <strong>Radiator upgrades:</strong> common when existing emitters are not sized for lower flow temperatures.
            </li>
            <li>
              <strong>Insulation required before install:</strong> some homes need fabric work first to avoid poor performance.
            </li>
            <li>
              <strong>Electrical panel upgrades:</strong> older consumer units may need updates for compliance and capacity.
            </li>
            <li>
              <strong>Ground works:</strong> external pipe runs or access constraints can add labour cost on some properties.
            </li>
          </ul>
        </div>
      </Section>

      <Section className="py-12 sm:py-14" title="Is a heat pump worth it?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            In many homes, a heat pump improves comfort with steadier temperatures and can reduce reliance on oil or gas over time.
          </p>
          <p>Running-cost outcomes depend on insulation quality, controls, and system design.</p>
          <p>
            It is usually best value where insulation is already strong or planned first. For a full decision breakdown, see{" "}
            <Link className={linkClass} href="/is-heat-pump-worth-it-ireland">
              is a heat pump worth it in Ireland
            </Link>
            .
          </p>
          <p>
            If you are still sequencing works, read{" "}
            <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
              what to upgrade first
            </Link>{" "}
            and{" "}
            <Link className={linkClass} href="/home-retrofit-cost-ireland">
              home retrofit cost Ireland
            </Link>
            .
          </p>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/home-retrofit-cost-ireland", label: "Home retrofit cost Ireland" },
          { href: "/what-to-upgrade-first-home-retrofit-ireland", label: "What to upgrade first" },
          { href: "/seai-grants-ireland-2026", label: "SEAI grants Ireland" },
          { href: "/heat-pump-grants-ireland", label: "Heat pump grants Ireland" },
          { href: "/is-heat-pump-worth-it-ireland", label: "Is a heat pump worth it?" }
        ]}
      />

      <Section className="border-t border-ink-200" title="Frequently asked questions">
        <Reveal>
          <div className="space-y-4">
            <details className="group rounded-xl border border-ink-200 bg-white px-5 py-4 shadow-soft">
              <summary className="cursor-pointer list-none text-base font-semibold text-ink-900">
                How much does a heat pump cost in Ireland after grants?
              </summary>
              <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
                Many homeowners budget roughly EUR6,500 to EUR17,500 net after grant support, but final cost still depends on insulation,
                radiators, and electrical works.
              </p>
            </details>
            <details className="group rounded-xl border border-ink-200 bg-white px-5 py-4 shadow-soft">
              <summary className="cursor-pointer list-none text-base font-semibold text-ink-900">
                What is the typical SEAI heat pump grant amount?
              </summary>
              <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
                A common planning figure is around EUR6,500 for qualifying homes, subject to current scheme rules and eligibility.
              </p>
            </details>
            <details className="group rounded-xl border border-ink-200 bg-white px-5 py-4 shadow-soft">
              <summary className="cursor-pointer list-none text-base font-semibold text-ink-900">
                Why do some quotes come in much higher?
              </summary>
              <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
                Higher quotes are usually driven by readiness works such as insulation upgrades, radiator changes, and electrical panel updates.
              </p>
            </details>
            <details className="group rounded-xl border border-ink-200 bg-white px-5 py-4 shadow-soft">
              <summary className="cursor-pointer list-none text-base font-semibold text-ink-900">
                Is a heat pump worth it in older homes?
              </summary>
              <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
                It can be, but results are best when insulation and system design are addressed first rather than treating heating as a standalone
                swap.
              </p>
            </details>
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-6 sm:pb-16 sm:pt-8">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Plan your heat pump upgrade with more confidence
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Use the planner to turn broad cost ranges into a more practical upgrade path for your home.
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
