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
  path: "/heat-pump-cost-ireland",
  titleSegment: "Heat Pump Costs in Ireland",
  description:
    "A practical guide to heat pump cost Ireland homeowners are researching. See typical ranges, what affects quotes, and how grants may reduce upfront costs."
});

const overviewCards = [
  {
    title: "What this page covers",
    body: "Typical heat pump cost ranges in Ireland, likely grant impact, and the main factors that change your quote."
  },
  {
    title: "Who it is for",
    body: "Irish homeowners researching heat pump pricing before collecting installer quotes."
  },
  {
    title: "Main next step",
    body: "Use the planner for a tailored cost and upgrade view based on your home."
  }
] as const;

const costFactors = [
  {
    title: "Property type",
    body: "Detached, semi-detached, terrace, and apartment homes can each need different system design and installation scope."
  },
  {
    title: "Size of the home",
    body: "Larger floor area usually means higher output requirements and more emitter or pipework changes."
  },
  {
    title: "Existing insulation level",
    body: "Lower insulation can push system size up and increase costs through extra prep work."
  },
  {
    title: "Current heating system",
    body: "Older boiler systems can need controls, pipework, and hot water upgrades before installation."
  },
  {
    title: "Radiators or underfloor setup",
    body: "Some homes need radiator or underfloor upgrades to run well at lower flow temperatures."
  },
  {
    title: "Electrical or plumbing changes",
    body: "Consumer unit updates, wiring, and plumbing changes are common hidden costs in final quotes."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function HeatPumpCostIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="HEAT PUMP COST GUIDE"
        title="Heat Pump Costs in Ireland"
        intro="Heat pump costs in Ireland can vary a lot depending on the home, the system, and any preparation work needed. This guide explains likely ranges, where grants fit in, and what to check before you commit."
        summaryItems={[
          "Typical heat pump cost range in Ireland",
          "SEAI grants can reduce upfront cost",
          "The real price depends on your home and readiness"
        ]}
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

      <Section className="py-14 sm:py-16" title="How much does a heat pump cost in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Most heat pump installations in Ireland cost between <strong>EUR12,000 and EUR25,000+</strong> before grants, but the real price
            depends heavily on your home.
          </p>
          <p>
            If you are researching heat pump cost Ireland or how much does a heat pump cost in Ireland, the headline range is only a starting
            point.
          </p>
          <p>
            After grant support, many homes still face a substantial net cost. Air to water heat pump cost Ireland quotes can shift once
            installer surveys identify readiness gaps.
          </p>
          <p>
            <strong>Typical cost (before grants):</strong> EUR12,000 to EUR25,000+
            <br />
            <strong>Typical cost (after SEAI grant):</strong> EUR5,500 to EUR18,500+
          </p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Heat pump unit: output size and brand both affect cost.</li>
            <li>Installation and commissioning: complexity and layout drive labour costs.</li>
            <li>Hot water cylinder and controls: system compatibility can add cost.</li>
            <li>Radiators or emitter upgrades: often needed for lower flow temperatures.</li>
            <li>Insulation or prep work: may be required before installation.</li>
            <li>Electrical works if needed: consumer unit or wiring upgrades can apply.</li>
          </ul>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200 bg-ink-100/40 py-14 sm:py-16"
        title="What affects the cost of a heat pump?"
        description="These practical factors are the main reasons quotes vary."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {costFactors.map((factor, index) => (
            <Reveal key={factor.title} delay={index * 0.06} className="h-full">
              <Card className="h-full p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)]">
                <h3 className="text-lg font-semibold tracking-tight text-ink-900 sm:text-xl">{factor.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{factor.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="SEAI grants for heat pumps in Ireland">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            This page is about price mechanics. For how heat pump grants are usually framed—readiness, sequencing, and what the grant is
            trying to support—use the{" "}
            <Link className={linkClass} href="/heat-pump-grants-ireland">
              heat pump grants guide
            </Link>
            .
          </p>
          <p>
            Grant support can reduce upfront cost, but eligibility depends on your home and whether readiness requirements are met.
          </p>
          <p>
            Many homeowners search for heat pump grant Ireland information first, but grant access still depends on property condition and
            project details.
          </p>
          <p>
            Grants can lower upfront heat pump price Ireland costs, but they do not usually cover the full project once upgrades are included.
          </p>
          <p>
            Not every home is immediately ready for a heat pump grant route. Some homes need insulation or other preparatory upgrades first.
          </p>
          <p>
            For context, review the{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              SEAI grants overview
            </Link>{" "}
            and{" "}
            <Link className={linkClass} href="/seai-grants-eligibility-ireland">
              SEAI grants eligibility guidance
            </Link>
            .
          </p>
        </div>
      </Section>

      <PillarPageTealCta
        heading="See what may actually make sense for your home"
        body="Use the planner to get a clearer view of likely upgrades, possible grants, and what to do first before chasing quotes."
        buttonLabel="Start planner"
      />

      <Section className="py-14 sm:py-16" title="Why do heat pump quotes vary so much?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Every home is different.</li>
            <li>Retrofit homes often need more work than new builds.</li>
            <li>Hidden upgrade costs can change the quote.</li>
            <li>Installer assumptions differ.</li>
            <li>Comparing like-for-like is hard without a clear plan.</li>
          </ul>
          <p>
            Wide quote differences are common. A whole-home plan helps you compare scope properly and avoid expensive sequencing mistakes.
          </p>
          <p>This is why online price ranges are only a starting point - your home&apos;s setup matters more than the average.</p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Is a heat pump worth it?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>In the right home, a heat pump can reduce long-term running costs and improve comfort.</p>
          <p>Compared with older oil or gas systems, many homes see steadier indoor temperatures and better day-to-day comfort.</p>
          <p>
            Performance depends on insulation quality and proper system design. Not every home should start with heating system replacement
            first.
          </p>
          <p>
            For a broader order-of-works view, use the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="What should you do before installing a heat pump?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Many homeowners jump straight to getting quotes, but this often leads to confusion or incorrect pricing.</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Prioritise insulation first where needed.</li>
            <li>
              Understand your BER baseline with a{" "}
              <Link className={linkClass} href="/ber-assessment-ireland">
                BER assessment
              </Link>
              .
            </li>
            <li>Avoid one-off decisions without a whole-home plan.</li>
            <li>
              Use a joined-up approach from the{" "}
              <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
                home energy upgrade guide
              </Link>
              .
            </li>
          </ul>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/seai-grants-ireland-2026", label: "SEAI grants overview" },
          { href: "/seai-grants-eligibility-ireland", label: "SEAI grants eligibility" },
          { href: "/home-energy-upgrade-guide-ireland", label: "Home energy upgrade guide" },
          { href: "/ber-assessment-ireland", label: "BER assessment guide" },
          { href: "/heat-pump-grants-ireland", label: "Heat pump grants" },
          { href: "/insulation-grants-ireland", label: "Insulation grants" }
        ]}
      />

      <Section className="border-t border-ink-200" title="Frequently asked questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="How much does a heat pump cost in Ireland?"
              answer="Many installed quotes are around EUR12,000 to EUR25,000+ before grants, but total cost depends on your home and any extra upgrade work."
            />
            <FaqItem
              question="What is the SEAI grant for a heat pump?"
              answer="Grant support may reduce upfront cost for eligible homes, but requirements and readiness conditions apply."
            />
            <FaqItem
              question="Does an old house in Ireland need insulation before a heat pump?"
              answer="In many cases yes. Older homes often need insulation and heat-loss improvements first."
            />
            <FaqItem
              question="Are heat pumps expensive to run?"
              answer="They can be efficient to run in well-insulated homes with the right system design."
            />
            <FaqItem
              question="Will a heat pump work with existing radiators?"
              answer="Sometimes, but some homes need radiator upgrades or system changes for best performance."
            />
            <FaqItem
              question="How do I know if a heat pump is right for my home?"
              answer="Start with a whole-home view of insulation, heating, and grant readiness before collecting final quotes."
            />
            <FaqItem
              question="Do heat pumps increase electricity bills in Ireland?"
              answer="Usually yes, electricity use goes up. But overall running costs can still be lower in an efficient, well-insulated home, so the real outcome depends on your property."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Get a tailored heat pump cost view for your home
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Online price guides are useful, but the real answer depends on your home, upgrade readiness, and likely grant path. Use the
              planner for a clearer next step.
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
