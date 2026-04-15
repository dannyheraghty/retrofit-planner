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
  path: "/ber-assessment-ireland",
  titleSegment: "BER Assessment Ireland",
  description:
    "A clear BER assessment Ireland guide for homeowners. Learn what a BER assessment is, when you need one, BER certificate Ireland cost, and what to do before booking."
});

const overviewCards = [
  {
    title: "What this page covers",
    body: "A clear overview of BER meaning, BER certificate Ireland cost, and when a BER assessment is required."
  },
  {
    title: "Who it is for",
    body: "Irish homeowners planning upgrades, preparing for grants, or trying to understand their BER rating Ireland baseline."
  },
  {
    title: "Main next step",
    body: "Use the planner first to get a clearer upgrade path before booking assessments or collecting quotes."
  }
] as const;

const ratingFactors = [
  {
    title: "Insulation",
    body: "Insulation is often the biggest factor because it controls how much heat your home loses."
  },
  {
    title: "Windows and doors",
    body: "Older glazing and draughty frames increase heat loss and can pull your BER rating down."
  },
  {
    title: "Heating system",
    body: "Heating system efficiency has a major impact, especially where controls or older boilers are inefficient."
  },
  {
    title: "Ventilation",
    body: "Poor ventilation setup or uncontrolled air leakage can reduce efficiency and comfort."
  },
  {
    title: "Home age and construction",
    body: "Older construction types usually have weaker fabric performance unless upgrades have already been completed."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function BerAssessmentIrelandPage() {
  return (
    <>
      <PillarPageHero
        eyebrow="BER GUIDE"
        title="BER Assessment Ireland"
        intro="A BER assessment Ireland homeowners receive gives a simple view of how energy efficient a home is today. It matters when selling, renting, and in many grant journeys. This guide explains what it means, when you need one, and what to do first."
        summaryItems={["What a BER assessment tells you", "When you need one", "Typical cost in Ireland"]}
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

      <Section className="py-14 sm:py-16" title="What is a BER assessment?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>A BER assessment Ireland homeowners receive measures how energy efficient a home is and gives it a rating from A to G.</p>
          <p>
            In simple terms, a BER rating Ireland result shows how efficiently a property uses energy for heating, hot water, lighting, and
            ventilation.
          </p>
          <p>
            A-rated homes are generally the most efficient, while G-rated homes are usually the least efficient and most expensive to heat.
          </p>
          <p>
            It is often used to inform upgrade choices and can be part of SEAI grant journeys where a BER certificate Ireland document helps
            show the home&apos;s starting point. For how grants are usually grouped by measure, see the{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              SEAI grants overview
            </Link>
            .
          </p>
          <p>
            A BER assessment in Ireland shows your starting point, but it does not tell you what to upgrade first or in what order. For a
            practical sequence, use the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="How a BER assessment works in practice">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            A registered SEAI assessor visits your home and checks key details that affect energy use. They review insulation, heating,
            ventilation, and the property&apos;s construction type and age.
          </p>
          <p>
            The findings are entered into DEAP (Dwelling Energy Assessment Procedure), which is the standard method used in Ireland. You then
            receive a BER certificate and an advisory report with recommended improvements.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="When do you need a BER assessment in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>You may need a BER assessment in Ireland in a few common situations:</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>It is a legal requirement when selling a home.</li>
            <li>It is a legal requirement when renting out a property.</li>
            <li>It is required for many SEAI grants where BER evidence is part of the process.</li>
            <li>It is useful before major upgrades so you can compare before and after performance.</li>
          </ul>
          <p>Many homeowners ask, “Do I need a BER assessment?” The answer depends on what you are doing next.</p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="How much does a BER assessment cost in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Most BER assessments in Ireland cost between €150 and €300, depending on the property.</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink-200">
                  <th className="px-3 py-2 font-semibold text-ink-900">Item</th>
                  <th className="px-3 py-2 font-semibold text-ink-900">Typical range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-ink-200">
                  <td className="px-3 py-2 text-ink-700">BER assessment cost</td>
                  <td className="px-3 py-2 text-ink-700">EUR150 - EUR300</td>
                </tr>
                <tr className="border-b border-ink-200">
                  <td className="px-3 py-2 text-ink-700">Time required</td>
                  <td className="px-3 py-2 text-ink-700">1-2 hours</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-ink-700">Certificate validity</td>
                  <td className="px-3 py-2 text-ink-700">10 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Typical BER certificate Ireland cost is around <strong>EUR150 to EUR300</strong>, though some quotes may sit outside that range.
          </p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Home size can affect pricing.</li>
            <li>Location can influence assessor travel and demand.</li>
            <li>Assessor pricing models vary, so quotes are not always like-for-like.</li>
          </ul>
          <p>
            During the process, a registered assessor visits your home, reviews insulation, heating systems, and construction details, then
            generates a BER report and certificate.
          </p>
          <p>Cost matters, but timing matters too. Booking at the right stage can make your BER assessment more useful.</p>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200 bg-ink-100/40 py-14 sm:py-16"
        title="What affects your BER rating?"
        description="These are the practical home factors that usually have the biggest impact on a BER score."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {ratingFactors.map((factor, index) => (
            <Reveal key={factor.title} delay={index * 0.06} className="h-full">
              <Card className="h-full p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)]">
                <h3 className="text-lg font-semibold tracking-tight text-ink-900 sm:text-xl">{factor.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{factor.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Do you need a BER assessment before upgrades?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Sometimes yes, especially where grants require BER evidence.</p>
          <p>Sometimes it is helpful but not strictly required, particularly in early planning for smaller works.</p>
          <p>
            The right timing depends on the upgrade type and your goal. If grants are part of your plan, review{" "}
            <Link className={linkClass} href="/seai-grants-eligibility-ireland">
              SEAI grants eligibility
            </Link>{" "}
            and the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>
            . If you are weighing heating changes, see{" "}
            <Link className={linkClass} href="/heat-pump-cost-ireland">
              heat pump costs in Ireland
            </Link>{" "}
            for pricing context.
          </p>
        </div>
      </Section>

      <PillarPageTealCta
        heading="Get a clearer view of your home’s starting point"
        body="Use the planner to understand likely upgrade routes and next steps for your home, without relying only on a BER score."
        buttonLabel="Start planner"
      />

      <Section className="py-14 sm:py-16" title="What should you do before booking a BER assessment?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Understand your upgrade goals first.</li>
            <li>Avoid doing a BER assessment too early if your plan is still unclear.</li>
            <li>Use a whole-home plan first so the BER certificate supports real decisions.</li>
          </ul>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/home-energy-upgrade-guide-ireland", label: "Home energy upgrade guide" },
          { href: "/seai-grants-ireland-2026", label: "SEAI grants overview" },
          { href: "/seai-grants-eligibility-ireland", label: "SEAI grants eligibility" },
          { href: "/heat-pump-cost-ireland", label: "Heat pump costs in Ireland" },
          { href: "/heat-pump-grants-ireland", label: "Heat pump grants" },
          { href: "/insulation-grants-ireland", label: "Insulation grants" }
        ]}
      />

      <Section className="border-t border-ink-200" title="Frequently asked questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="What is a BER rating?"
              answer="A BER rating is a scale from A to G that shows the energy performance of a home. A-rated homes are the most efficient, while G-rated homes are the least efficient."
            />
            <FaqItem
              question="How much does a BER assessment cost in Ireland?"
              answer="Typical BER assessment pricing is often around EUR150 to EUR300, depending on home size, location, and assessor pricing."
            />
            <FaqItem
              question="Do I need a BER for SEAI grants?"
              answer="In many grant pathways, BER evidence is required at certain stages. The exact requirement depends on the upgrade measure and scheme rules."
            />
            <FaqItem
              question="How long does a BER assessment take?"
              answer="On-site assessment time varies by property size and complexity, but many standard homes are assessed in roughly one to two hours."
            />
            <FaqItem
              question="How long is a BER certificate valid?"
              answer="A BER certificate is generally valid for 10 years, unless major works are completed that materially change the home&apos;s energy performance."
            />
            <FaqItem
              question="How do I get a BER certificate in Ireland?"
              answer="Book a registered SEAI BER assessor, complete the home assessment visit, and the assessor will submit the data through DEAP. You then receive your BER certificate and advisory report."
            />
            <FaqItem
              question="Who can carry out a BER assessment in Ireland?"
              answer="Only a BER assessor registered with SEAI can carry out a valid BER assessment in Ireland and issue an official BER certificate."
            />
            <FaqItem
              question="Can I improve my BER rating without major renovation?"
              answer="Yes, sometimes smaller upgrades can help, but larger BER improvements usually require insulation upgrades or heating system changes."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Get a clearer plan for your home
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              BER information is useful, but it does not replace a full next-step plan. Use the planner to map practical upgrades and what to
              do next with more confidence.
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
