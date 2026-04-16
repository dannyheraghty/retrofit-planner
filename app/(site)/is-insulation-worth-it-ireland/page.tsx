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
  path: "/is-insulation-worth-it-ireland",
  titleSegment: "Is Insulation Worth It in Ireland?",
  description:
    "A practical guide for homeowners asking is insulation worth it in Ireland. Learn when insulation is worth doing, when it may not be the next step, how grants affect the decision, and why savings depend on the home."
});

const overviewCards = [
  {
    title: "What this page covers",
    body: "A short overview of whether insulation is worth it in Ireland, what affects the decision, and the main cost, grant, and savings questions."
  },
  {
    title: "Who it is for",
    body: "Irish homeowners trying to decide if insulation is the right next step before getting quotes or planning wider energy upgrades."
  },
  {
    title: "Main next step",
    body: "Use the planner for a clearer whole-home view of upgrades, likely grant fit, and what to do first."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function IsInsulationWorthItIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="DECISION GUIDE"
        title="Is Insulation Worth It in Ireland?"
        intro="Yes, insulation is often worth it in Ireland because many homes still lose too much heat and cost too much to keep warm. In practice, insulation is often the most important first upgrade because it can improve comfort, lower heating demand, and make later upgrades work better. It is less compelling where the home is already well insulated or where the likely improvement is limited."
        summaryItems={["Often the best first upgrade", "Grants can reduce upfront cost", "Savings depend on starting condition"]}
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

      <Section className="py-14 sm:py-16" title="Is insulation worth it in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            In many Irish homes, insulation is worth it because it is often the most important first step. Before changing heating systems or
            looking at more expensive upgrades, reducing heat loss usually improves comfort and lowers the amount of heat the home needs.
          </p>
          <p>
            That is especially true in older properties, homes with poorer BER ratings, and homes with high heating bills. If the building
            fabric is weak, insulation often delivers a more practical starting point than jumping straight to a heating upgrade.
          </p>
          <p>
            It may be less compelling where the home already performs well or where another priority should clearly come first. The real question
            is not just whether insulation helps, but whether it is the right next step for your home, budget, and upgrade plan.
          </p>
          <p>
            For a broader view of upgrade order and what often comes first, see the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>
            . If you are comparing where heating or electricity upgrades fit after fabric work, also see{" "}
            <Link className={linkClass} href="/is-heat-pump-worth-it-ireland">
              whether a heat pump is worth it
            </Link>{" "}
            and{" "}
            <Link className={linkClass} href="/is-solar-worth-it-ireland">
              whether solar is worth it
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="When insulation is worth it">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>The home has a poor BER rating and there is clear room to improve energy performance.</li>
            <li>Heat loss is high, with rooms that feel cold, draughty, or hard to keep warm.</li>
            <li>Heating bills are high and you want to reduce heating demand before looking at other upgrades.</li>
            <li>The property is an older home where insulation levels are likely to be weak by modern standards.</li>
            <li>You are planning wider upgrades and want to improve the building fabric first.</li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="When insulation may not be worth it">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>The home is already well insulated and there may be limited extra benefit from more work.</li>
            <li>There is only limited upgrade impact remaining because the main areas of heat loss have already been addressed.</li>
            <li>Another issue is more urgent, such as moisture, ventilation, or essential repair work.</li>
            <li>Budget is tight and other priorities are more urgent than extra insulation in your specific case.</li>
            <li>The expected improvement is relatively small compared with the cost and disruption involved.</li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="How much does insulation cost in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Insulation costs in Ireland vary widely depending on the measure. Attic insulation is usually one of the lower-cost options, while
            wall insulation can range much higher depending on whether it is cavity, internal, or external wall work.
          </p>
          <p>
            As a broad guide, attic insulation may often be in the low hundreds to low thousands, while wall insulation projects can run from a
            few thousand euro to well into five figures for larger or more complex homes.
          </p>
          <p>
            The practical decision usually comes down to the upfront cost after grants, the likely improvement in comfort and bills, and whether
            the work supports other planned upgrades. For more detail on measures and support, see the{" "}
            <Link className={linkClass} href="/insulation-grants-ireland">
              insulation grants Ireland guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="SEAI grants for insulation">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            SEAI grants can make insulation more attractive by lowering the upfront cost, but the best value still depends on the home and the
            type of work needed.
          </p>
          <p>
            Eligibility, scope, and timing still matter. For more detail, review the{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              SEAI grants Ireland overview
            </Link>
            . If insulation is part of a wider plan, it also helps to compare it with the overall order of works in the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Savings and payback">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Insulation reduces heat loss, which lowers the amount of heating your home needs. In simple terms, less heat escaping usually means
            less energy needed to keep the home comfortable.
          </p>
          <p>
            Savings depend heavily on the starting condition of the home. A poorly insulated house may see a much clearer benefit than a home
            where most of the obvious heat-loss issues have already been addressed.
          </p>
          <p>
            For many homes, the value is not only about simple payback. Better comfort, lower heating demand, and a stronger base for later
            upgrades can matter just as much.
          </p>
          <p>
            That means payback is home-specific rather than fixed. Some homes see a stronger financial case than others.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Final verdict: is insulation worth it?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            For many Irish homeowners, insulation is worth it where the home still loses heat, feels uncomfortable, or has a poor BER rating with
            clear room for improvement.
          </p>
          <p>
            It is less compelling where the home is already well insulated, the likely extra benefit is small, or another issue should clearly be
            handled first.
          </p>
          <p>
            In practice, insulation is often the best first upgrade before changing heating systems because it improves the building fabric first.
            The best next step is to compare likely benefits, grant support, and wider upgrade priorities together before deciding what to do
            next.
          </p>
        </div>
      </Section>

      <PillarPageTealCta
        heading="See what makes sense for your home"
        body="Use the planner to get a clearer view of likely upgrades, possible grants, and what to do first before making insulation decisions."
        buttonLabel="Start planner"
      />

      <RelatedGuides
        links={[
          { href: "/is-heat-pump-worth-it-ireland", label: "Is a heat pump worth it in Ireland?" },
          { href: "/is-solar-worth-it-ireland", label: "Is solar worth it in Ireland?" },
          { href: "/insulation-grants-ireland", label: "Insulation grants Ireland" },
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
              question="Is insulation worth it in older Irish homes?"
              answer="Often yes. Older Irish homes frequently have higher heat loss and weaker insulation levels, so upgrading insulation can improve comfort and reduce heating demand. The actual value depends on the home, the measure, and what has already been upgraded."
            />
            <FaqItem
              question="What type of insulation gives the best value?"
              answer="That depends on where the main heat loss is happening. In many homes, attic insulation can be one of the most cost-effective upgrades, while wall insulation may have a bigger impact in the right property but often costs more."
            />
            <FaqItem
              question="How much can insulation reduce heating bills?"
              answer="There is no single figure for every home. Bill savings depend on how much heat the property currently loses, the type of insulation added, and how expensive the home is to heat today. Homes starting from a poorer condition often see the clearest benefit."
            />
            <FaqItem
              question="Do you need insulation before a heat pump?"
              answer="Not in every case, but insulation is often the right first step. Heat pumps usually work best in homes with lower heat loss, so improving insulation first can make a heating upgrade more effective and more practical."
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
              Use the planner to understand whether insulation is the right next step, what other upgrades may matter, and how grants could shape
              the decision for your home.
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
