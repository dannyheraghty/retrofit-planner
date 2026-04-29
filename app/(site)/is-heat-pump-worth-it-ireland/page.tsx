import Link from "next/link";

import { StartPlannerLink } from "@/components/analytics/start-planner-link";
import { Reveal } from "@/components/home/reveal";
import { PillarPageTealCta } from "@/components/seo/pillar-page-cta";
import { PillarPageHero } from "@/components/seo/pillar-page-hero";
import { RelatedGuides } from "@/components/seo/related-guides";
import { Card } from "@/components/ui/card";
import { FaqItem } from "@/components/ui/faq-item";
import { Section } from "@/components/ui/section";
import { grantGuideMetadata } from "@/lib/seo/grant-guide-metadata";
import { pillarProseClass } from "@/lib/seo/pillar-page";

export const metadata = grantGuideMetadata({
  path: "/is-heat-pump-worth-it-ireland",
  titleSegment: "Is a Heat Pump Worth It in Ireland?",
  description:
    "A practical, honest guide for homeowners asking is heat pump worth it Ireland. Learn when it makes sense, when it may not, what it costs, and how grants affect the decision."
});

const overviewCards = [
  {
    title: "What this page covers",
    body: "A simple overview of whether a heat pump is worth it in Ireland, what affects the decision, and the main cost and savings questions."
  },
  {
    title: "Who it is for",
    body: "Irish homeowners trying to decide if a heat pump makes sense before collecting quotes or choosing upgrades."
  },
  {
    title: "Main next step",
    body: "Use the planner for a clearer whole-home view of upgrades, likely grant fit, and what to do first."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function IsHeatPumpWorthItIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="DECISION GUIDE"
        title="Is a Heat Pump Worth It in Ireland?"
        intro="If you are asking is heat pump worth it Ireland, the short answer is that it often is for well-insulated homes replacing older oil or gas heating. It is usually less compelling where insulation is poor, upfront cost is the main barrier, or the home may be sold soon. This guide explains how costs, grants, savings, and home readiness affect the decision in practice."
        summaryItems={["Typical costs vs savings", "Grants can reduce upfront cost", "Works best in well-insulated homes"]}
        ctaLabel="Start planner"
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

      <Section className="py-14 sm:py-16" title="Is a heat pump worth it in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            In many Irish homes, a heat pump is worth it if the property is reasonably well insulated, you expect to stay long term, and you
            are replacing an older oil or gas heating system.
          </p>
          <p>
            It is less compelling where heat loss is still high, the upfront cost is a major constraint, or you may sell soon. The key question
            is not just whether a heat pump works, but whether it makes sense for your home, budget, and upgrade sequence.
          </p>
          <p>
            In practice, the decision depends on home readiness, insulation level, and whether a heat pump should come before or after other
            upgrades.
          </p>
          <p>
            Before making a one-off heating decision, it helps to look at your home as a whole. The{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>{" "}
            explains how insulation, heating, and grants fit together. For a sequencing checklist, see{" "}
            <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
              what to upgrade first
            </Link>
            . If you are weighing fabric work first, see{" "}
            <Link className={linkClass} href="/is-insulation-worth-it-ireland">
              is insulation worth it
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="When a heat pump makes sense in Ireland">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>The home is already well insulated, with BER B2 or better often being a stronger fit.</li>
            <li>You are replacing an older oil or gas boiler and want a more efficient long-term heating system.</li>
            <li>You expect to stay in the property for years, giving the upfront investment more time to pay back.</li>
            <li>You are likely to qualify for grant support, which can improve the overall value of the project.</li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="When a heat pump may not be worth it in Ireland">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>The home still has poor insulation or clear heat-loss issues that should be addressed first.</li>
            <li>You may only stay in the property for a short period, so the long-term benefit matters less.</li>
            <li>You are highly sensitive to upfront cost, even after taking grants into account.</li>
            <li>The property needs other priority upgrades first, such as insulation, windows, or basic fabric improvements.</li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="How much does a heat pump cost in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Typical heat pump installations in Ireland are often in the region of <strong>EUR12,000 to EUR25,000+</strong> before grants,
            depending on the home, the system design, and any extra work needed.
          </p>
          <p>
            That means the decision is rarely about the heat pump alone. You also need to consider insulation levels, emitter upgrades, hot
            water setup, and how much grant support may reduce the final net cost.
          </p>
          <p>
            For more pricing context, see{" "}
            <Link className={linkClass} href="/heat-pump-cost-ireland">
              heat pump cost in Ireland
            </Link>
            , and compare{" "}
            <Link className={linkClass} href="/home-retrofit-cost-ireland">
              home retrofit cost
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="SEAI grants for heat pumps in Ireland">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            SEAI support can make a heat pump more attractive financially, but the grant does not remove the need to check whether your home is
            actually ready for this type of heating system.
          </p>
          <p>
            Eligibility, readiness, and the wider project scope still matter. For more detail, review the{" "}
            <Link className={linkClass} href="/heat-pump-grants-ireland">
              heat pump grants in Ireland
            </Link>{" "}
            guide and the{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              SEAI grants Ireland overview
            </Link>{" "}
            overview.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Running costs and savings in Ireland">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            In the right home, a heat pump can offer lower running costs than oil or gas because it uses electricity very efficiently rather
            than generating heat in the same way as a boiler.
          </p>
          <p>
            Electricity is usually more expensive per unit than gas, but a well-designed heat pump can still work out favourably because of its
            efficiency. Actual savings depend on insulation, controls, usage patterns, and what system you are replacing.
          </p>
          <p>
            Some homeowners focus on simple payback, while others value steadier comfort and lower reliance on oil or gas. The practical answer
            depends on your home rather than a headline national average.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Heat pump vs oil and gas heating in Ireland">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Compared with an oil boiler or gas boiler, a heat pump usually has a higher upfront cost but can deliver better efficiency and more
            even comfort in a suitable home.
          </p>
          <p>
            Boilers may look cheaper in the short term, especially if you only compare replacement cost. But if you are planning broader energy
            upgrades anyway, a heat pump may make more sense as part of a joined-up long-term plan.
          </p>
        </div>
      </Section>

      <PillarPageTealCta
        heading="See what makes sense for your home"
        body="Use the planner to get a clearer view of likely upgrades, possible grants, and what to do first before making heating decisions."
        buttonLabel="Start planner"
      />

      <Section className="py-14 sm:py-16" title="Final verdict: is it worth it?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            For many Irish homeowners, a heat pump is worth it where the home is reasonably well insulated, oil or gas is being replaced, and
            there is a long enough timeframe to benefit from the upgrade.
          </p>
          <p>
            It is usually less worthwhile where insulation is poor, ownership may be short term, or the upfront cost is the main constraint.
            The best next step is to compare grants, costs, and home readiness together before deciding what should come first.
          </p>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/is-insulation-worth-it-ireland", label: "Is insulation worth it in Ireland?" },
          { href: "/does-retrofit-increase-house-value-ireland", label: "Does retrofit increase house value in Ireland?" },
          { href: "/heat-pump-cost-ireland", label: "Heat pump cost Ireland" },
          { href: "/heat-pump-grants-ireland", label: "Heat pump grants Ireland" },
          { href: "/seai-grants-ireland-2026", label: "SEAI grants Ireland" },
          { href: "/home-energy-upgrade-guide-ireland", label: "Home energy upgrade guide Ireland" }
        ]}
      />

      <Section className="border-t border-ink-200" title="Frequently asked questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="Are heat pumps worth it in Ireland?"
              answer="Heat pumps in Ireland can be worth it when the home is well insulated, the system is properly designed, and you plan to stay long enough to benefit. Heat pumps in Ireland are usually less attractive where heat loss is still high or the upfront cost is the main concern."
            />
            <FaqItem
              question="Do heat pumps save money in Ireland?"
              answer="Heat pumps in Ireland can lower running costs compared with oil or gas in the right home, but it depends on insulation, controls, and what system is being replaced. Electricity use goes up, but heat pump efficiency can still make overall heating costs more competitive."
            />
            <FaqItem
              question="Do you need insulation for a heat pump?"
              answer="In many cases, yes. Heat pumps in Ireland work best in homes with low heat loss, so insulation and overall fabric performance matter a lot. That is why some homes should improve insulation before changing the heating system."
            />
            <FaqItem
              question="How long does it take to see savings?"
              answer="There is no single timeline for every home. It depends on the upfront cost after grants, the change in running costs, and how long you stay in the property. For many homeowners using heat pumps in Ireland, the decision is about comfort and long-term value as well as savings."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Get a clear upgrade plan for your home
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Use the planner to understand likely upgrades, possible grant fit, and the best next step for your home before committing to a
              heating change.
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
