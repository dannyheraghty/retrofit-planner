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
  path: "/is-solar-worth-it-ireland",
  titleSegment: "Is Solar Worth It in Ireland?",
  description:
    "A practical guide for homeowners asking is solar worth it Ireland. Learn when solar panels are worth it in Ireland, when they may not be, how grants affect the decision, and why savings and payback are home-specific."
});

const overviewCards = [
  {
    title: "What this page covers",
    body: "A practical overview of whether solar panels are worth it in Ireland, what affects the decision, and the main cost and savings questions."
  },
  {
    title: "Who it is for",
    body: "Irish homeowners trying to decide if solar makes sense for their home before collecting quotes or choosing upgrades."
  },
  {
    title: "Main next step",
    body: "Use the planner for a clearer whole-home view of upgrades, likely grant fit, and what to do first."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function IsSolarWorthItIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="DECISION GUIDE"
        title="Is Solar Worth It in Ireland?"
        intro="Solar is often worth it in Ireland when the home has a suitable roof, good daytime electricity use, and an owner who plans to stay long enough to benefit. It is usually less attractive where shading is heavy, roof suitability is weak, or the likely payback does not justify the upfront cost. This page explains when solar panels make practical sense for Irish homeowners."
        summaryItems={[
          "Solar can lower electricity bills",
          "Grants can reduce upfront cost",
          "Payback depends on roof, usage, and budget"
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

      <Section className="py-14 sm:py-16" title="Is solar worth it in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Solar is often worth it in Ireland when the home has a suitable roof, good daytime electricity use, and an owner who plans to stay
            long enough to benefit from lower bills. It may be less attractive where roof suitability is weak, electricity use is very low, or
            the likely payback feels too long for the upfront spend.
          </p>
          <p>
            In many Irish homes, solar panels are worth it in Ireland where the roof gets reasonable daylight, electricity use is high enough to
            use the power well, and the upfront cost still makes sense after grants.
          </p>
          <p>
            It is less compelling where roof space is limited, shading is significant, or the budget is tight enough that the payback feels too
            long. The key question is not just whether solar panels work, but whether solar panels are worth it in Ireland for your home and your
            priorities.
          </p>
          <p>
            In practice, the answer depends on roof suitability, likely self-use, grant support, and whether solar is the right next step
            compared with other upgrades. For a wider order-of-works view, use the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>
            . If you are still deciding whether to improve the building fabric before adding generation, see{" "}
            <Link className={linkClass} href="/is-insulation-worth-it-ireland">
              whether insulation is worth it
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="When solar is worth it in Ireland">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>The roof has enough usable space, a good orientation such as south or east-west, and limited shading.</li>
            <li>Your household has strong daytime electricity use, so more of the solar generation can be used in the home.</li>
            <li>You expect to stay in the property long enough for savings and bill reduction to build over time.</li>
            <li>Grant support improves the upfront numbers and makes the project fit your budget more comfortably.</li>
            <li>You want to reduce electricity bills and see solar as part of a longer-term home upgrade plan.</li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="When solar may not be worth it">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>The roof has heavy shading, a poor orientation, an awkward layout, or too little suitable space.</li>
            <li>You may only stay in the home for a short period, so the payback horizon matters more.</li>
            <li>Electricity use is very low, so solar generation may be less valuable day to day.</li>
            <li>You are highly sensitive to upfront cost, even after SEAI grants are taken into account.</li>
            <li>Other home upgrades are a clearer priority first based on comfort, heat loss, or overall budget.</li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="How much do solar panels cost in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Solar panel costs in Ireland vary by system size, roof setup, installation complexity, and whether battery storage is included, so
            there is no single figure that suits every home.
          </p>
          <p>
            The practical decision usually comes down to the upfront cost after grants, how much electricity you are likely to offset, and how
            long you expect to stay in the property.
          </p>
          <p>
            This page is about decision-making rather than a full price breakdown. For grant context, see the{" "}
            <Link className={linkClass} href="/solar-panel-grants-ireland">
              solar panel grants Ireland guide
            </Link>{" "}
            and, if you want a more joined-up view of next steps, use the planner. If you are comparing grants more broadly, see the{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              SEAI grants Ireland overview
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="SEAI grants for solar panels">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            SEAI support can improve the case for solar by lowering the upfront cost, but grants do not make every installation automatically
            worthwhile.
          </p>
          <p>
            Roof suitability, likely savings, and your budget still matter. For more detail, review the{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              SEAI grants Ireland overview
            </Link>
            , the{" "}
            <Link className={linkClass} href="/seai-grants-eligibility-ireland">
              SEAI grants eligibility guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Savings and payback">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Savings depend on how much electricity your home uses, how much of the solar generation you can use directly, and what you currently
            pay for electricity.
          </p>
          <p>
            Daytime usage matters because using more of the power in the home usually strengthens the case. Export value may help, but it should
            not be the only reason you decide solar panels are worth it in Ireland.
          </p>
          <p>
            In Ireland, payback often depends heavily on how much electricity you use during the day rather than on system size alone.
          </p>
          <p>
            That means payback is home-specific. Some homeowners focus on simple financial return, while others also value lower bills, more
            predictable electricity costs, and producing some of their own power.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Is solar worth it without a battery?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            In many homes, yes. Solar can still be worth it without a battery where the roof is suitable and the household can use a reasonable
            share of the electricity during the day.
          </p>
          <p>
            A battery can improve self-use and may make the setup more attractive for some homes, but it also adds cost. For many Irish
            homeowners, is solar worth it without a battery comes down to whether the core solar system works on its own merits first.
          </p>
        </div>
      </Section>

      <PillarPageTealCta
        heading="See what makes sense for your home"
        body="Use the planner to get a clearer view of likely upgrades, possible grants, and what to do first before choosing solar or other measures."
        buttonLabel="Start planner"
      />

      <Section className="py-14 sm:py-16" title="Final verdict: is solar worth it?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            For many Irish homeowners, solar is worth it where the home has a suitable roof, enough electricity use to benefit, and an owner who
            plans to stay long enough for the numbers to make sense.
          </p>
          <p>
            It is less compelling where shading is heavy, electricity use is very low, the ownership horizon is short, or the upfront spend still
            feels too high after grants.
          </p>
          <p>
            The best next step is to compare likely savings, grant support, and wider upgrade priorities together before making a one-off
            decision.
          </p>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/is-insulation-worth-it-ireland", label: "Is insulation worth it in Ireland?" },
          { href: "/does-retrofit-increase-house-value-ireland", label: "Does retrofit increase house value in Ireland?" },
          { href: "/solar-panel-grants-ireland", label: "Solar panel grants Ireland" },
          { href: "/seai-grants-ireland-2026", label: "SEAI grants Ireland" },
          { href: "/seai-grants-eligibility-ireland", label: "SEAI grants eligibility Ireland" },
          { href: "/home-energy-upgrade-guide-ireland", label: "Home energy upgrade guide Ireland" }
        ]}
      />

      <Section className="border-t border-ink-200" title="Frequently asked questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="Are solar panels worth it in Ireland?"
              answer="Solar panels can be worth it in Ireland where the roof is suitable, electricity use is strong enough to benefit, and the upfront cost still makes sense after grants. For most homeowners, the answer depends more on the home and usage pattern than on a simple national average."
            />
            <FaqItem
              question="Do solar panels save money in Ireland?"
              answer="Solar panels in Ireland can reduce electricity bills, but the level of savings depends on system size, daytime usage, and your tariff. Homes that use more of the solar power directly often see a stronger case than homes with very low usage."
            />
            <FaqItem
              question="Is solar worth it without a battery?"
              answer="Often yes. Solar panels worth it in Ireland does not always require a battery, especially where the household can use a useful share of the electricity during the day. A battery may improve self-use, but it also adds cost and is not essential for every home."
            />
            <FaqItem
              question="How long does it take for solar panels to pay back in Ireland?"
              answer="There is no single payback period for all solar panels in Ireland. It depends on the upfront cost after grants, roof suitability, daytime electricity use, and how much of the generation you use yourself. In practice, payback is home-specific rather than fixed."
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
              Use the planner to understand whether solar is the right next step, what other upgrades may matter, and how grants could shape the
              decision for your home.
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
