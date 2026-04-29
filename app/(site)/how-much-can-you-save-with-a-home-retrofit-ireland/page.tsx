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

const pageTitle = "How Much Can You Save With a Home Retrofit in Ireland? Real Examples + Costs";
const pageDescription =
  "How much can you really save with a home retrofit in Ireland? See realistic savings by home type, BER, and upgrade path — before you spend.";

export const metadata = {
  ...grantGuideMetadata({
    path: "/how-much-can-you-save-with-a-home-retrofit-ireland",
    titleSegment: pageTitle,
    description: pageDescription
  }),
  title: {
    absolute: pageTitle
  }
};

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";
const pageUrl = "https://www.retrofitplanner.ie/how-much-can-you-save-with-a-home-retrofit-ireland";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much can you really save with a home retrofit in Ireland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Savings vary by BER starting point, fuel type, and upgrade quality. Homes with higher heat loss usually have stronger savings potential than already efficient homes."
      }
    },
    {
      "@type": "Question",
      name: "Do heat pumps always reduce bills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. They usually perform best when insulation, airtightness, and system design are handled correctly before installation."
      }
    },
    {
      "@type": "Question",
      name: "Which retrofit upgrade actually saves the most money in Ireland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no single answer for every home, but fabric-first measures often create the strongest foundation for long-term savings."
      }
    },
    {
      "@type": "Question",
      name: "Is insulation the biggest source of savings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many Irish homes, insulation is one of the biggest drivers because it reduces heat demand directly. Outcomes improve further when paired with ventilation and heating upgrades."
      }
    },
    {
      "@type": "Question",
      name: "Can partial upgrades still cut energy costs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Partial retrofits can deliver meaningful bill reductions, especially when measures are sequenced well and aligned to the home's biggest weaknesses."
      }
    },
    {
      "@type": "Question",
      name: "How does BER affect savings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lower starting BER ratings usually indicate greater heat loss, which can mean stronger savings potential after retrofit if upgrades are properly planned."
      }
    },
    {
      "@type": "Question",
      name: "How can I estimate home retrofit savings Ireland more accurately?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use your BER, heating fuel, and house type as a starting point, then model upgrade order. The planner helps turn those inputs into realistic savings ranges."
      }
    },
    {
      "@type": "Question",
      name: "Is a home retrofit worth it in Ireland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For many homeowners, yes, but outcomes vary. The value usually comes from a mix of lower running costs, better comfort, and stronger long-term home performance, with results depending on starting condition and upgrade quality."
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
    { "@type": "ListItem", position: 3, name: "How much can you save with a home retrofit Ireland", item: pageUrl }
  ]
};

export default function HowMuchCanYouSaveWithAHomeRetrofitIrelandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PillarPageHero
        eyebrow="SAVINGS GUIDE"
        title="How Much Can You Save With a Home Retrofit in Ireland?"
        intro="Savings from a retrofit can vary hugely — from small bill reductions to major long-term savings. What you save depends on your home’s BER, upgrade order, and system choices. This guide shows realistic savings scenarios so you do not overestimate the return."
        summaryItems={[
          "Savings depend on BER, fuel type, and upgrade order",
          "Fabric-first upgrades usually create the strongest results",
          "Heat pumps work best when the home is ready",
          "Personal estimates are more useful than average figures"
        ]}
        ctaLabel="Estimate your savings for your home"
      />

      <Section className="py-14 sm:py-16" title="Quick answer">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Like{" "}
            <Link className={linkClass} href="/home-retrofit-cost-ireland">
              home retrofit costs in Ireland
            </Link>
            {", "}
            there is no single retrofit savings figure for every Irish home. In practice, outcomes can range from modest bill reductions to stronger
            long-term savings, depending on the home and the plan.
          </p>
          <p>
            In Ireland, retrofit outcomes vary widely because homes differ significantly in age, construction, and insulation levels. Savings are usually
            strongest when BER starting point, fuel type, and upgrade path are considered together, with insulation, airtightness, ventilation, and
            heating planned as one joined-up sequence.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Typical retrofit savings in Ireland">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Retrofit savings vary widely, even before factoring in{" "}
            <Link className={linkClass} href="/home-retrofit-grants-ireland">
              available SEAI grants
            </Link>
            {", "}
            but most homes fall into broad planning ranges depending on the starting condition and upgrade depth.
          </p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Light upgrades: €200–€600/year potential savings</li>
            <li>Moderate upgrades: €600–€1,500/year potential savings</li>
            <li>Deeper retrofit: €1,500–€3,000+/year potential savings</li>
            <li>The biggest gains usually come when heat loss is fixed before heating upgrades</li>
          </ul>
          <p>
            These are planning ranges, not guarantees. Your actual result depends on your home, energy use, BER starting point, and upgrade sequence.
          </p>
        </div>
      </Section>

      <Section className="py-6">
        <div className={`max-w-3xl ${pillarProseClass}`}>
          <p>
            👉 Want a personalised estimate?{" "}
            <Link className={linkClass} href="/planner">
              Estimate your savings for your home
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="What kind of savings can a retrofit create?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              <strong>Lower heating bills:</strong> Better insulation and heat retention mean less energy is needed to keep rooms comfortable.
            </li>
            <li>
              <strong>Reduced oil or gas dependence:</strong> A more efficient home can reduce exposure to volatile fuel costs over time.
            </li>
            <li>
              <strong>Better heating system performance:</strong> Systems like heat pumps tend to perform better when the home&apos;s heat demand is lower.
            </li>
            <li>
              <strong>Less wasted spend from poor order:</strong> Correct sequencing helps avoid paying twice for upgrades that need rework later.
            </li>
            <li>
              <strong>Indirect value:</strong> Better comfort and future-ready performance can add practical value beyond monthly bills alone.
            </li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="What affects how much you can save?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>
              <strong>
                Starting{" "}
                <Link className={linkClass} href="/ber-assessment-ireland">
                  BER rating
                </Link>
                {":"}
              </strong>{" "}
              Homes starting in lower BER bands often have stronger savings potential after upgrades.
            </li>
            <li>
              <strong>Current fuel:</strong> Your present heating source (oil, gas, electricity, or solid fuel) changes how savings show up.
            </li>
            <li>
              <strong>House type and size:</strong> Detached and larger homes often have more heat-loss area and different upgrade economics.
            </li>
            <li>
              <strong>Insulation level:</strong> The weaker the fabric baseline, the more room there is for meaningful bill reduction.
            </li>
            <li>
              <strong>Upgrade sequence:</strong> Knowing{" "}
              <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
                what to upgrade first
              </Link>{" "}
              usually improves performance and reduces wasted spend.
            </li>
            <li>
              <strong>Partial vs full retrofit:</strong> Partial works can still cut costs, while full plans often deliver the biggest combined gain.
            </li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Realistic savings scenarios">
        <div className={`max-w-3xl space-y-6 ${pillarProseClass}`}>
          <div className="space-y-3">
            <h3>1) Older semi-detached home with high heat loss</h3>
            <p>
              <strong>Where savings come from:</strong> Reducing major heat loss first with insulation, airtightness, and ventilation, then upgrading
              heating to match the improved fabric when you{" "}
              <Link className={linkClass} href="/planner">
                plan your upgrades properly
              </Link>
              {"."}
            </p>
            <p>
              <strong>Savings potential:</strong> Often the biggest upside, with meaningful running-cost reductions when starting inefficiency is high.
            </p>
            <p>
              <strong>What to watch:</strong> Installing heating too early can weaken results and increase lifetime spend.
            </p>
          </div>

          <div className="space-y-3">
            <h3>2) Average home doing partial upgrades</h3>
            <p>
              <strong>Where savings come from:</strong> Targeted measures like attic insulation, practical draught reduction, and heating controls.
            </p>
            <p>
              <strong>Savings potential:</strong> Usually modest to meaningful, especially when upgrades are selected to support future stages.
            </p>
            <p>
              <strong>What to watch:</strong> One-off upgrades done out of order can limit later gains and lead to avoidable rework.
            </p>
          </div>

          <div className="space-y-3">
            <h3>3) Better-insulated home improving heating efficiency</h3>
            <p>
              <strong>Where savings come from:</strong> Improving heating system efficiency, controls, and distribution rather than major fabric works.
            </p>
            <p>
              <strong>Savings potential:</strong> Typically lower than high-loss homes, but still capable of steady running-cost improvements.
            </p>
            <p>
              <strong>What to watch:</strong> Expected savings are strongest when system design and controls are matched to actual demand.
            </p>
          </div>
        </div>
      </Section>

      <PillarPageTealCta
        heading="See what savings are realistic for your home"
        body="Build a realistic retrofit plan based on your home type, BER starting point, likely costs, grants, and upgrade path."
        buttonLabel="Get your savings estimate"
      />

      <Section className="py-14 sm:py-16" title="Why savings are not just about bills">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Many homeowners focus only on payback. In practice, retrofit value also comes from better comfort, more stable room temperatures, lower
            dependence on fuel price swings, and the potential to{" "}
            <Link className={linkClass} href="/does-retrofit-increase-house-value-ireland">
              increase house value
            </Link>
            {"."}
          </p>
          <p>
            Retrofit planning can also make homes more suitable for systems like heat pumps and reduce the risk of costly rework later. For many homes,
            that combined resilience is as important as monthly bill changes.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="How upgrade order changes savings">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            A poor sequence can reduce overall savings. If major heat loss is not addressed first, later heating upgrades may underperform and weaken the
            overall outcome.
          </p>
          <p>
            Fabric-first planning usually improves the return from heating investment. If you are unsure where to start, read{" "}
            <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
              what to upgrade first
            </Link>{" "}
            to avoid wasted spend, and use the{" "}
            <Link className={linkClass} href="/home-retrofit-cost-ireland">
              home retrofit cost Ireland
            </Link>{" "}
            guide to plan your budget realistically.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Is a full retrofit always the best way to save?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Not always. Some homes benefit from staged upgrades that spread budget and reduce decision risk.
          </p>
          <p>
            Partial retrofits can still improve running costs when chosen carefully. Full retrofits usually create the biggest combined comfort and
            efficiency gain, but only when scope and sequencing are practical for your home.
          </p>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/home-retrofit-cost-ireland", label: "Home retrofit cost Ireland" },
          { href: "/what-to-upgrade-first-home-retrofit-ireland", label: "What to upgrade first" },
          { href: "/heat-pump-cost-ireland", label: "Heat pump cost Ireland" },
          { href: "/home-retrofit-grants-ireland", label: "Home retrofit grants Ireland" }
        ]}
      />

      <Section className="border-t border-ink-200" title="Frequently asked questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="How much can you really save with a home retrofit in Ireland?"
              answer="Savings vary by BER starting point, fuel type, and upgrade quality. Homes with higher heat loss usually have stronger savings potential than already efficient homes."
            />
            <FaqItem
              question="Do heat pumps always reduce bills?"
              answer="Not always. They usually perform best when insulation, airtightness, and system design are handled correctly before installation."
            />
            <FaqItem
              question="Which retrofit upgrade actually saves the most money in Ireland?"
              answer="There is no single answer for every home, but fabric-first measures often create the strongest foundation for long-term savings."
            />
            <FaqItem
              question="Is insulation the biggest source of savings?"
              answer="In many Irish homes, insulation is one of the biggest drivers because it reduces heat demand directly. Outcomes improve further when paired with ventilation and heating upgrades."
            />
            <FaqItem
              question="Can partial upgrades still cut energy costs?"
              answer="Yes. Partial retrofits can deliver meaningful bill reductions, especially when measures are sequenced well and aligned to the home's biggest weaknesses."
            />
            <FaqItem
              question="How does BER affect savings?"
              answer="Lower starting BER ratings usually indicate greater heat loss, which can mean stronger savings potential after retrofit if upgrades are properly planned."
            />
            <FaqItem
              question="How can I estimate home retrofit savings Ireland more accurately?"
              answer="Use your BER, heating fuel, and house type as a starting point, then model upgrade order. The planner helps turn those inputs into realistic savings ranges."
            />
            <FaqItem
              question="Is a home retrofit worth it in Ireland?"
              answer="For many homeowners, yes, but outcomes vary. The value usually comes from a mix of lower running costs, better comfort, and stronger long-term home performance, with results depending on starting condition and upgrade quality."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Build a retrofit plan around realistic savings
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Build a realistic retrofit plan around your home, likely costs, grants, and savings so you can decide the right upgrade path with
              confidence.
            </p>
            <div className="mt-8 flex justify-center sm:justify-start">
              <StartPlannerLink href="/planner" size="lg" className="w-full justify-center sm:w-auto sm:min-w-[12rem]">
                Get your savings estimate
              </StartPlannerLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
