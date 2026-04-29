import Link from "next/link";

import { StartPlannerLink } from "@/components/analytics/start-planner-link";
import { Reveal } from "@/components/home/reveal";
import { PillarPageHero } from "@/components/seo/pillar-page-hero";
import { PillarPageTealCta } from "@/components/seo/pillar-page-cta";
import { FaqItem } from "@/components/ui/faq-item";
import { Section } from "@/components/ui/section";
import { grantGuideMetadata } from "@/lib/seo/grant-guide-metadata";
import { pillarProseClass } from "@/lib/seo/pillar-page";

export const metadata = grantGuideMetadata({
  path: "/do-i-need-a-ber-assessment-before-retrofit-ireland",
  titleSegment: "Do I Need a BER Assessment Before Retrofit Ireland",
  description:
    "Do I need a BER assessment before retrofit Ireland? A practical guide for Irish homeowners on when BER is recommended, when it is required, and how it shapes upgrade decisions."
});

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";
const pageUrl = "https://www.retrofitplanner.ie/do-i-need-a-ber-assessment-before-retrofit-ireland";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I legally need a BER before retrofit in Ireland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not for every retrofit action. Some homeowners start small upgrades without a BER. For larger works, grants, and formal project planning, BER is often expected or required."
      }
    },
    {
      "@type": "Question",
      name: "Is a BER required for SEAI grants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many SEAI-supported pathways use BER before and/or after works to set baseline performance and verify improvement. Requirements vary by measure and route, so check current grant criteria before you proceed."
      }
    },
    {
      "@type": "Question",
      name: "Should I get a BER before installing a heat pump?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, yes. A BER and related assessment process help confirm whether your home is ready, what fabric upgrades may be needed first, and how the heating system should be sized."
      }
    },
    {
      "@type": "Question",
      name: "Should I get a BER before or after insulation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before is usually better for planning the right insulation work. After can be useful to verify results or support grant-related documentation. For larger retrofit plans, both stages can add value."
      }
    },
    {
      "@type": "Question",
      name: "How much does a BER assessment cost in Ireland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing varies by property size, location, and assessor. Many homeowners see BER as a planning cost that can reduce bigger mistakes later in the retrofit process."
      }
    },
    {
      "@type": "Question",
      name: "Can I retrofit my home without a BER?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can carry out some upgrades without one, especially smaller measures. But as projects become broader, BER-led planning usually gives better sequencing, stronger performance, and clearer grant alignment."
      }
    },
    {
      "@type": "Question",
      name: "How accurate is a BER for planning upgrades?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BER is a useful planning baseline, not a perfect prediction of every real-world bill outcome. It is most valuable when used alongside property condition, occupancy patterns, and staged upgrade decisions."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.retrofitplanner.ie/" },
    { "@type": "ListItem", position: 2, name: "Retrofit Guides", item: "https://www.retrofitplanner.ie/home-energy-upgrade-guide-ireland" },
    { "@type": "ListItem", position: 3, name: "Do I need a BER assessment before a home retrofit in Ireland?", item: pageUrl }
  ]
};

export default function DoINeedABerAssessmentBeforeRetrofitIrelandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PillarPageHero
        eyebrow="BER GUIDE"
        title="Do I need a BER assessment before a home retrofit in Ireland?"
        intro="A BER is usually the best starting point for planning a retrofit. It shows where the home is losing energy, is often required for grants or heat pump pathways, and is not always necessary for a single simple improvement."
        summaryItems={[
          "BER helps understand your starting point",
          "Often required for grants or heat pump upgrades",
          "Not always needed before basic insulation upgrades"
        ]}
        ctaLabel="Start planner"
      />

      <Section className="py-14 sm:py-16" title="Quick answer">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>In most cases, a BER assessment is recommended before planning a full retrofit in Ireland.</p>
          <p>It helps show where energy is being lost and which upgrades are likely to have the strongest impact first.</p>
          <p>For simple upgrades like attic insulation, some homeowners proceed without one initially.</p>
          <p>For heat pump grants and larger retrofit projects, a BER assessment or equivalent energy assessment is usually required.</p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Should you get a BER before your retrofit?">
        <div className={`max-w-3xl ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Yes - if you are planning a full retrofit, a heat pump, or grant-backed upgrades.</li>
            <li>Maybe - if you are doing staged upgrades but want a clearer upgrade roadmap.</li>
            <li>Not yet - if you are only doing one simple upgrade such as attic insulation.</li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="What is a BER and what does it tell you?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            BER stands for Building Energy Rating. It places your home on an A to G scale based on overall energy performance.
          </p>
          <p>
            A BER assessment looks at key factors such as heat loss, insulation levels, heating system setup, and efficiency. For the wider
            background, see the{" "}
            <Link className={linkClass} href="/ber-assessment-ireland">
              BER assessment guide
            </Link>
            .
          </p>
          <p>In Ireland, BER assessments are carried out by registered SEAI assessors.</p>
          <p>In Ireland, a BER assessment often costs around EUR150 to EUR300 depending on the home and assessor.</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Identify where the biggest energy losses are happening.</li>
            <li>Understand which upgrades are likely to deliver the strongest return first.</li>
            <li>Plan your retrofit in a clearer, lower-risk order.</li>
          </ul>
          <p>
            If you are still unsure what to prioritise, read{" "}
            <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
              what to upgrade first
            </Link>
            . If budget is your next question, compare this with{" "}
            <Link className={linkClass} href="/home-retrofit-cost-ireland">
              home retrofit cost Ireland
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="When you should get a BER before retrofit">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Getting a BER first is usually the better choice when:</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>You are planning a full or deep retrofit.</li>
            <li>You are considering a heat pump.</li>
            <li>You are applying for SEAI grants.</li>
            <li>You are unsure where to start with upgrades.</li>
          </ul>
          <p>A BER helps avoid common planning mistakes before money is committed, especially when multiple upgrades are involved.</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>It reduces the chance of doing upgrades in the wrong order.</li>
            <li>It helps avoid wasted spend on poorly sequenced works.</li>
            <li>It gives a clearer roadmap for staged or full retrofit decisions.</li>
          </ul>
          <p>
            If grant support matters, see{" "}
            <Link className={linkClass} href="/home-retrofit-grants-ireland">
              home retrofit grants Ireland
            </Link>
            .
          </p>
        </div>
      </Section>

      <PillarPageTealCta
        heading="Plan your retrofit the right way from the start"
        body="Use the planner to understand your home, likely upgrades, and how a BER fits into your plan."
        buttonLabel="Start planner"
      />

      <Section className="py-14 sm:py-16" title="When you might not need a BER first">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>There are practical cases where homeowners start without a BER:</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Doing a single obvious upgrade such as attic insulation.</li>
            <li>Fixing urgent comfort issues like major draughts.</li>
            <li>Making small staged upgrades while building a longer plan.</li>
          </ul>
          <p>
            Even in these situations, BER becomes more valuable as projects grow. Once multiple measures are involved, assessment-led planning usually
            gives better outcomes.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="How a BER affects your retrofit plan">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>A BER helps you see where your home is losing heat and decide what to do first.</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>It supports fabric-first priorities, with insulation and airtightness ahead of heating changes.</li>
            <li>It helps avoid the wrong upgrade order that can weaken performance.</li>
            <li>It supports better system sizing, especially for heat pumps.</li>
            <li>It reduces wasted spend from rework or poorly timed decisions.</li>
          </ul>
          <p>
            This is often called a fabric-first approach: improve the building envelope first, then size and select heating for the updated home.
          </p>
          <p>
            If you want a practical sequence, use{" "}
            <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
              what to upgrade first
            </Link>{" "}
            alongside your BER results.
          </p>
          <p>In practice, this usually means better savings, stronger performance, and fewer expensive mistakes.</p>
        </div>
      </Section>

      <Section className="pt-2 sm:pt-3">
        <div className={`max-w-3xl ${pillarProseClass}`}>
          <p>If you want to understand your likely upgrades before booking a BER, use the planner to map your starting point.</p>
          <p>
            You can also compare your likely next steps with a broader{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade plan
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="BER and grants in Ireland">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>BER is closely linked to grant-backed retrofit planning in Ireland.</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Many SEAI grant pathways require BER before and/or after works.</li>
            <li>Heat pump grants typically involve minimum BER improvement conditions.</li>
            <li>BER is used to verify the impact of upgrades across the project.</li>
          </ul>
          <p>
            If budget planning is your next step, compare likely spend with{" "}
            <Link className={linkClass} href="/home-retrofit-cost-ireland">
              home retrofit cost
            </Link>
            , and if grant support matters, check{" "}
            <Link className={linkClass} href="/seai-grants-eligibility-ireland">
              SEAI grant eligibility
            </Link>{" "}
            alongside{" "}
            <Link className={linkClass} href="/home-retrofit-grants-ireland">
              home retrofit grants Ireland
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Common mistakes without a BER">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Installing a heat pump before improving insulation and airtightness.</li>
            <li>Choosing upgrades based on guesswork rather than home performance.</li>
            <li>Over-sizing or under-sizing major systems.</li>
            <li>Missing better upgrade sequencing that would reduce total spend.</li>
          </ul>
          <p>
            For a practical view of likely outcomes, read{" "}
            <Link className={linkClass} href="/how-much-can-you-save-with-a-home-retrofit-ireland">
              how much you can save with a home retrofit Ireland
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="border-t border-ink-200" title="Frequently asked questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="Do I legally need a BER before retrofit in Ireland?"
              answer="Not for every retrofit action. Some homeowners start small upgrades without a BER. For larger works, grants, and formal project planning, BER is often expected or required."
            />
            <FaqItem
              question="Is a BER required for SEAI grants?"
              answer="Many SEAI-supported pathways use BER before and/or after works to set baseline performance and verify improvement. Requirements vary by measure and route, so check current grant criteria before you proceed."
            />
            <FaqItem
              question="Should I get a BER before installing a heat pump?"
              answer="In most cases, yes. A BER and related assessment process help confirm whether your home is ready, what fabric upgrades may be needed first, and how the heating system should be sized."
            />
            <FaqItem
              question="Should I get a BER before or after insulation?"
              answer="Before is usually better for planning the right insulation work. After can be useful to verify results or support grant-related documentation. For larger retrofit plans, both stages can add value."
            />
            <FaqItem
              question="How much does a BER assessment cost in Ireland?"
              answer="Pricing varies by property size, location, and assessor. Many homeowners see BER as a planning cost that can reduce bigger mistakes later in the retrofit process."
            />
            <FaqItem
              question="Can I retrofit my home without a BER?"
              answer="You can carry out some upgrades without one, especially smaller measures. But as projects become broader, BER-led planning usually gives better sequencing, stronger performance, and clearer grant alignment."
            />
            <FaqItem
              question="How accurate is a BER for planning upgrades?"
              answer="BER is a useful planning baseline, not a perfect prediction of every real-world bill outcome. It is most valuable when used alongside property condition, occupancy patterns, and staged upgrade decisions."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Plan your retrofit the right way from the start
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Use the planner to understand your home, likely upgrades, and how a BER fits into your plan.
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
