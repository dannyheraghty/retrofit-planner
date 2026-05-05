import Link from "next/link";

import { StartPlannerLink } from "@/components/analytics/start-planner-link";
import { Reveal } from "@/components/home/reveal";
import { PillarPageHero } from "@/components/seo/pillar-page-hero";
import { PillarPageTealCta } from "@/components/seo/pillar-page-cta";
import { RelatedGuides } from "@/components/seo/related-guides";
import { FaqItem } from "@/components/ui/faq-item";
import { Section } from "@/components/ui/section";
import { grantGuideMetadata } from "@/lib/seo/grant-guide-metadata";
import { pillarProseClass } from "@/lib/seo/pillar-page";

export const metadata = grantGuideMetadata({
  path: "/home-retrofit-cost-ireland",
  titleSegment: "Home Retrofit Cost Ireland: 2026 Prices (€20k–€60k+)",
  description:
    "Find realistic home retrofit costs in Ireland, what drives price, and how grants reduce what you actually pay."
});

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";
const pageUrl = "https://www.retrofitplanner.ie/home-retrofit-cost-ireland";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the average home retrofit cost in Ireland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most serious retrofit plans land in the €20k-€60k+ range. Smaller phased projects can sit lower, while deeper whole-home upgrades can move above that."
      }
    },
    {
      "@type": "Question",
      name: "What is the cheapest way to retrofit a home in Ireland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start fabric-first with high-impact insulation and airtightness measures, then stage heating upgrades later. This usually gives the lowest-risk route when budget is tight."
      }
    },
    {
      "@type": "Question",
      name: "What does home retrofit cost in Ireland after grants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many projects that sit around €35k-€60k+ before grants still require roughly €25k-€45k+ net homeowner spend after grants. For heat pumps specifically, typical net ranges are often around €5k-€10k after grant."
      }
    },
    {
      "@type": "Question",
      name: "How much does a partial retrofit cost versus a full retrofit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partial retrofits are often €10k-€25k. Mid-level plans are often €20k-€45k. Full coordinated upgrades are commonly €35k-€60k+."
      }
    },
    {
      "@type": "Question",
      name: "What part of a retrofit usually costs the most?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Heating system upgrades (€12k-€20k before grant), deeper insulation packages (€10k-€20k+), and window-door replacements (€8k-€15k) are usually the biggest cost blocks."
      }
    },
    {
      "@type": "Question",
      name: "How can I estimate my own retrofit cost more accurately?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with BER and home condition, define your scope clearly, then compare quotes measure-by-measure. The planner helps build that sequence before you commit."
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
    { "@type": "ListItem", position: 3, name: "Home retrofit cost Ireland", item: pageUrl }
  ]
};

export default function HomeRetrofitCostIrelandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PillarPageHero
        eyebrow="COST GUIDE"
        title="Home Retrofit Cost Ireland: How Much Will You Pay? (€20k-€60k+ Guide)"
        intro="Most home retrofits in Ireland cost between €20,000 and €60,000+, depending on your home, BER rating, and upgrade scope. This guide breaks down real cost ranges, what drives them, and how grants can reduce what you actually pay."
        summaryItems={["Most full projects fall in the €20k-€60k+ range", "Scope and BER starting point drive the final budget", "Grants reduce cost but do not remove upfront spend"]}
        ctaLabel="Estimate your retrofit cost"
      />

      <Section className="border-t border-ink-200 py-14 sm:py-16" title="At a glance">
        <div className={`max-w-3xl ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Most full retrofit projects in Ireland land in the <strong>€20k-€60k+</strong> range.</li>
            <li>Light retrofit plans often start near €10k-€25k, while deeper projects move above €60k.</li>
            <li>Starting BER, floor area, and upgrade scope are the three strongest cost drivers.</li>
            <li>SEAI support cuts net spend, but homeowners still need a clear upfront budget.</li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Quick answer">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>The typical home retrofit cost in Ireland is €20,000-€60,000+, depending on your home&apos;s size, BER rating, and upgrade scope.</p>
          <p>In practice, lower-BER and larger homes move toward the top end, while smaller phased plans sit toward the lower end.</p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="How much does a home retrofit cost in Ireland? (cost to retrofit house Ireland)">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            When homeowners search <strong>cost to retrofit house ireland</strong>, they are usually choosing between phased works and a full
            package. A clear{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade plan
            </Link>{" "}
            helps you compare the ranges most projects fall into:
          </p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              <strong>Light retrofit:</strong> <strong>€10k-€25k</strong> for focused insulation and airtightness measures.
            </li>
            <li>
              <strong>Mid-level retrofit:</strong> <strong>€20k-€45k</strong> for fabric upgrades plus selected heating or window works.
            </li>
            <li>
              <strong>Full home upgrade cost Ireland:</strong> <strong>€35k-€60k+</strong> for coordinated fabric, heating, and broader upgrade
              scope.
            </li>
          </ul>
          <p>
            If your budget is tight, start with a light retrofit path and use a clear{" "}
            <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
              what to upgrade first
            </Link>{" "}
            sequence before staging major system upgrades.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Typical retrofit cost breakdown">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Most full budgets are made up of these core components:</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              <strong>Insulation (basic):</strong> <strong>€3k-€10k</strong> for focused attic or cavity-style upgrades; the{" "}
              <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
                home energy upgrade guide
              </Link>{" "}
              explains where these fit.
            </li>
            <li>
              <strong>Insulation (full upgrades):</strong> <strong>€10k-€20k+</strong> for deeper wall, airtightness, and wider fabric scope.
            </li>
            <li>
              <strong>
                <Link className={linkClass} href="/heat-pump-cost-ireland">
                  Heat pump cost in Ireland
                </Link>
                :
              </strong>{" "}
              <strong>€12k-€20k before grant</strong>, typically <strong>€5k-€10k after grant</strong>.
            </li>
            <li>
              <strong>Windows and doors:</strong> <strong>€8k-€15k</strong> typical.
            </li>
            <li>
              <strong>Solar PV:</strong> typically <strong>€6k-€10k after grant</strong>.
            </li>
          </ul>
          <p>Add contingency for ventilation updates, enabling works, and project coordination, especially in older homes.</p>
          <p>
            For heating-specific pricing, see{" "}
            <Link className={linkClass} href="/heat-pump-cost-ireland">
              heat pump cost Ireland
            </Link>
            .
          </p>
        </div>
      </Section>

      <PillarPageTealCta
        heading="Need a clearer retrofit budget for your home?"
        body="Use the planner to map your likely costs, check grant impact, and avoid expensive surprises."
        buttonLabel="Get your cost estimate"
      />

      <Section className="py-14 sm:py-16" title="What affects retrofit cost the most?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              <strong>
                <Link className={linkClass} href="/ber-assessment-ireland">
                  BER starting point
                </Link>
                :
              </strong>{" "}
              homes in E, F, or G BER bands usually need deeper fabric and heating upgrades.
            </li>
            <li>
              <strong>House size and layout:</strong> larger floor area means more material, labour, and higher system capacity.
            </li>
            <li>
              <strong>
                <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
                  Upgrade scope
                </Link>
                :
              </strong>{" "}
              partial works and full retrofit packages are priced on completely different scales.
            </li>
          </ul>
          <p>
            Actionable rule of thumb: if your BER starts in F or G, use the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>{" "}
            to plan mid-to-upper range budgets and stage works with a clear sequence.
          </p>
          <p>
            If you are still sequencing decisions, use{" "}
            <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
              what to upgrade first
            </Link>{" "}
            and the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Grants and how they reduce your cost">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            <Link className={linkClass} href="/home-retrofit-grants-ireland">
              Home retrofit grants in Ireland
            </Link>{" "}
            can reduce cost meaningfully when your project is set up correctly. Use these planning numbers as a practical guide:
          </p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              <strong>Before grants:</strong> many full plans sit around <strong>€35k-€60k+</strong>, with heat pump scope often at €12k-€20k.
            </li>
            <li>
              <strong>After grants:</strong> many homeowners still budget around <strong>€25k-€45k+</strong>, with heat pump net costs often in
              the €5k-€10k range.
            </li>
          </ul>
          <p>
            For current grant routes and eligibility, review{" "}
            <Link className={linkClass} href="/home-retrofit-grants-ireland">
              home retrofit grants Ireland
            </Link>{" "}
            before final budgeting.
          </p>
          <p>
            If you are choosing order as well as budget, pair this with{" "}
            <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
              what to upgrade first
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Is a full retrofit worth the cost?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            In practice, a full retrofit is worth it when you prioritise comfort, stable running costs, and a stronger home performance baseline.
          </p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Comfort usually improves first and most noticeably.</li>
            <li>Running-cost gains are strongest when scope and sequencing are right.</li>
            <li>Project value improves when upgrades are planned as one joined-up path.</li>
          </ul>
          <p>
            Compare outcomes in{" "}
            <Link className={linkClass} href="/does-retrofit-increase-house-value-ireland">
              increase house value
            </Link>{" "}
            and measure-specific guides like{" "}
            <Link className={linkClass} href="/is-heat-pump-worth-it-ireland">
              is a heat pump worth it
            </Link>
            , then use the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy guide
            </Link>{" "}
            and{" "}
            <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
              what to upgrade first
            </Link>
            .
          </p>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/heat-pump-cost-ireland", label: "Heat pump cost Ireland" },
          { href: "/seai-grants-ireland-2026", label: "SEAI grants Ireland" },
          { href: "/what-to-upgrade-first-home-retrofit-ireland", label: "What to upgrade first" },
          { href: "/home-energy-upgrade-guide-ireland", label: "Home energy guide" },
          { href: "/does-retrofit-increase-house-value-ireland", label: "Does retrofit increase house value?" }
        ]}
      />

      <Section className="border-t border-ink-200" title="Frequently asked questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="What is the average home retrofit cost in Ireland?"
              answer="Most serious retrofit plans land in the €20k-€60k+ range. Smaller phased projects can sit lower, while deeper whole-home upgrades can move above that."
            />
            <FaqItem
              question="What is the cheapest way to retrofit a home in Ireland?"
              answer="Start fabric-first with high-impact insulation and airtightness measures, then stage heating upgrades later. This usually gives the lowest-risk route when budget is tight."
            />
            <FaqItem
              question="What does home retrofit cost in Ireland after grants?"
              answer={
                <>
                  Many projects that sit around €35k-€60k+ before grants still require roughly €25k-€45k+ net homeowner spend after{" "}
                  <Link className={linkClass} href="/home-retrofit-grants-ireland">
                    home retrofit grants
                  </Link>
                  . For heat pumps specifically, typical net ranges are often around €5k-€10k after grant.
                </>
              }
            />
            <FaqItem
              question="How much does a partial retrofit cost versus a full retrofit?"
              answer="Partial retrofits are often €10k-€25k. Mid-level plans are often €20k-€45k. Full coordinated upgrades are commonly €35k-€60k+."
            />
            <FaqItem
              question="What part of a retrofit usually costs the most?"
              answer="Heating system upgrades (€12k-€20k before grant), deeper insulation packages (€10k-€20k+), and window-door replacements (€8k-€15k) are usually the biggest cost blocks."
            />
            <FaqItem
              question="How can I estimate my own retrofit cost more accurately?"
              answer={
                <>
                  Start with BER and home condition, define your scope clearly, then compare quotes measure-by-measure. The{" "}
                  <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
                    home energy upgrade guide
                  </Link>{" "}
                  helps build that sequence before you commit.
                </>
              }
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Build your upgrade plan with realistic costs
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Use the planner to turn rough cost ranges into a step-by-step upgrade plan tailored to your home.
            </p>
            <div className="mt-8 flex justify-center sm:justify-start">
              <StartPlannerLink href="/planner" size="lg" className="w-full justify-center sm:w-auto sm:min-w-[12rem]">
                Get your cost estimate
              </StartPlannerLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
