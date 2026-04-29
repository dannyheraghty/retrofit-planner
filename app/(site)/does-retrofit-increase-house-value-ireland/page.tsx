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

const pageTitle = "Does Retrofitting Increase House Value in Ireland? What Actually Adds Value";
const pageDescription =
  "Not all retrofits increase house value. See which upgrades actually boost resale appeal in Ireland — and which ones don’t before you spend thousands.";

export const metadata = {
  ...grantGuideMetadata({
    path: "/does-retrofit-increase-house-value-ireland",
    titleSegment: pageTitle,
    description: pageDescription
  }),
  title: {
    absolute: pageTitle
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does a higher BER rating increase house value in Ireland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often, yes. In Ireland, buyers use BER as a quick signal for likely heating costs, comfort, and future upgrade needs. A stronger rating can make a property more appealing, but it does not guarantee the same price uplift in every area."
      }
    },
    {
      "@type": "Question",
      name: "What upgrades add the most value to a home in Ireland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The upgrades most likely to add value are those that improve BER, reduce running costs, and are visible or meaningful to buyers. Insulation, airtightness improvements, heating upgrades, and solar can help when they fit the property and local market."
      }
    },
    {
      "@type": "Question",
      name: "Is a heat pump good for resale value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A heat pump can support resale value when the home is ready for it, has good insulation, and the system reduces likely running costs. It may add less value if installed before heat loss issues are fixed."
      }
    },
    {
      "@type": "Question",
      name: "Do buyers care about energy efficiency in Ireland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Buyers increasingly care about energy efficiency because it affects running costs, comfort, and future upgrade needs. BER is one of the clearest signals buyers can compare."
      }
    }
  ]
};

const overviewCards = [
  {
    title: "What this page covers",
    body: "A practical overview of whether retrofit can increase house value in Ireland, what affects the outcome, and how BER and buyer demand fit into the picture."
  },
  {
    title: "Who it is for",
    body: "Irish homeowners trying to understand whether energy upgrades are likely to improve resale appeal before deciding what work to do."
  },
  {
    title: "Main next step",
    body: "Use the planner for a clearer whole-home view of upgrades, likely grant fit, and what to do first."
  }
] as const;

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

export default function DoesRetrofitIncreaseHouseValueIrelandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PillarPageHero
        eyebrow="DECISION GUIDE"
        title="Does Retrofit Increase House Value in Ireland?"
        intro="Some upgrades increase your home’s value — others barely move the needle. In Ireland, the difference often comes down to what buyers can see, how much your BER improves, and whether running costs are clearly reduced. This guide shows which upgrades actually add value — and which ones don’t, before you spend thousands."
        summaryItems={[
          "Higher BER ratings can improve resale appeal",
          "Energy-efficient homes are increasingly in demand",
          "Value impact depends on upgrades, location, and market"
        ]}
        ctaLabel="Check which upgrades are worth it for your home"
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

      <Section className="py-14 sm:py-16" title="Short answer: does retrofit increase value?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Yes — but only when the upgrades are visible, meaningful, and aligned with what buyers care about.</p>
          <p>In Ireland, value typically increases when:</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>The BER improves significantly (e.g. D → B)</li>
            <li>Running costs are clearly reduced</li>
            <li>The home feels more comfortable and modern</li>
          </ul>
          <p>Value usually does NOT increase much when:</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Upgrades are small or not visible to buyers</li>
            <li>Insulation or heat loss issues are not addressed first</li>
            <li>The spend is high relative to the property’s market value</li>
          </ul>
          <p>
            👉 Want to see which upgrades would actually increase your home&apos;s value?{" "}
            <Link className={linkClass} href="/planner">
              Check your upgrade plan
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Does retrofit increase house value in Ireland?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Retrofit can increase house value in Ireland, especially when it leads to a clear BER improvement, lower expected running costs, and a
            home that feels more comfortable and modern to live in.
          </p>
          <p>
            That does not mean every euro spent on a home upgrade produces the same increase in sale price. The outcome depends on the starting
            condition of the property, the scale of the BER improvement, the quality of the retrofit, and how much buyers in that part of the market
            care about energy efficiency.
          </p>
          <p>
            For example, moving a home from a BER of D to B with insulation and a heat pump may make the property more attractive to buyers because
            the improvement is easy to see and the likely running costs are lower. The exact value impact still depends on the home, the area, and
            what comparable properties look like.
          </p>
          <p>
            In practical terms, does BER affect house price Ireland? Often yes, because buyers can compare ratings quickly and use them as a signal
            for likely heating costs, comfort, and future upgrade needs. That makes energy rating house value Ireland a real consideration, even
            though location and overall property condition still matter a lot.
          </p>
          <p>
            In many cases, retrofit improves saleability as well as price potential. A more efficient home may be easier to market and quicker to
            sell, even where the financial return is not a simple one-to-one match with the money spent.
          </p>
          <p>
            For a practical savings view alongside resale impact, see{" "}
            <Link className={linkClass} href="/how-much-can-you-save-with-a-home-retrofit-ireland">
              how much you can save with a retrofit
            </Link>
            .
          </p>
          <p>
            If you are deciding what to do first, the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>{" "}
            gives a broader view of how insulation, heating, and grants fit together. To compare which measures may be worth doing before you think
            about resale impact, see{" "}
            <Link className={linkClass} href="/is-insulation-worth-it-ireland">
              whether insulation adds value in Ireland
            </Link>
            ,{" "}
            <Link className={linkClass} href="/is-heat-pump-worth-it-ireland">
              whether a heat pump is worth it
            </Link>
            , or{" "}
            <Link className={linkClass} href="/is-solar-worth-it-ireland">
              whether solar is worth it
            </Link>
            .
          </p>
        </div>
      </Section>

      <PillarPageTealCta
        heading="See what upgrades would actually increase your home's value"
        body="Check which upgrades improve BER, resale appeal, and running costs — based on your home."
        buttonLabel="Check your upgrade plan"
      />

      <Section className="py-14 sm:py-16" title="When retrofit can increase house value">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>The home moves up by a meaningful BER band, such as from D to B, making the improvement easy for buyers to see.</li>
            <li>The retrofit clearly reduces heating demand and likely energy bills through better insulation, airtightness, and controls.</li>
            <li>A modern heating system such as a heat pump replaces an older oil or gas setup in a home that is ready for it.</li>
            <li>The work is well-rounded, with good insulation and airtightness supporting the heating upgrade rather than leaving obvious gaps.</li>
            <li>The property is in a market where buyers increasingly value lower running costs and may pay more for a stronger BER profile.</li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="When retrofit may not increase value">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>The upgrades are minimal, so the BER improvement and buyer-facing benefit are too small to change the result much.</li>
            <li>You over-invest relative to the property value or local ceiling price, limiting the likely home upgrade ROI Ireland outcome.</li>
            <li>The local market is driven more by location, size, and general condition than by energy performance alone.</li>
            <li>The retrofit is poorly executed or incomplete, for example adding a new system without addressing insulation or ventilation properly.</li>
            <li>You expect a guaranteed euro-for-euro return from every measure, which is not how retrofit value Ireland usually works in practice.</li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="How energy upgrades affect BER ratings">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            BER stands for Building Energy Rating. In simple terms, it is the Irish rating that shows how energy efficient a home is, from better
            performing homes at the top end to less efficient homes at the lower end.
          </p>
          <p>
            Energy upgrades such as attic or wall insulation, airtightness improvements, heating controls, and efficient systems like heat pumps
            can all improve BER if they are appropriate for the home. A bigger improvement in the building fabric and heating setup usually has a
            more visible effect than small one-off measures.
          </p>
          <p>
            In Ireland, BER is a key signal for buyers because it gives a quick read on likely running costs, comfort, and how much upgrade work may
            still be needed after purchase. It also matters more as energy costs remain important and attention keeps shifting toward better
            performing homes.
          </p>
          <p>
            Homes with higher BER ratings are often easier to sell because the efficiency story is clearer and the future cost risk feels lower to
            buyers. That does not guarantee a fixed price premium, but it helps explain why energy rating house value Ireland and does BER affect
            house price Ireland are such common questions.
          </p>
          <p>
            If you want more detail on how ratings work, see the{" "}
            <Link className={linkClass} href="/ber-assessment-ireland">
              BER assessment Ireland guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Costs vs value added">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Retrofit does not always return EUR1-for-EUR1 in added sale price, but that does not mean it lacks value. Some measures improve
            saleability, comfort, and energy performance even where the resale uplift is lower than the project cost.
          </p>
          <p>
            That is why it helps to think about both financial and lifestyle value together. Financial value may show up in stronger resale appeal,
            better marketability, lower running costs while you live there, and some level of price support. Lifestyle value can include a warmer
            home, fewer cold spots, better comfort, and a more modern heating setup.
          </p>
          <p>
            In practice, the best approach is to compare the likely net cost after{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              how grants affect upgrade value in Ireland
            </Link>
            , the probable BER improvement, and the wider home upgrade ROI Ireland rather than expecting a fixed resale uplift from every measure.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Grants and incentives">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            SEAI grants can improve the overall case for retrofit by reducing the upfront cost of eligible upgrades. That matters because lower net
            cost can make the value equation more attractive, even where resale uplift alone would not justify the work.
          </p>
          <p>
            This is especially relevant for higher-cost measures. For example, if you are considering a heating upgrade, it helps to compare the{" "}
            <Link className={linkClass} href="/heat-pump-cost-ireland">
              heat pump cost vs value in Ireland
            </Link>{" "}
            guide with the{" "}
            <Link className={linkClass} href="/heat-pump-grants-ireland">
              how heat pump grants affect upgrade value in Ireland
            </Link>{" "}
            guide so you can judge the likely net spend more realistically.
          </p>
          <p>
            For more detail, see the{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              how grants affect upgrade value in Ireland
            </Link>{" "}
            overview and the{" "}
            <Link className={linkClass} href="/seai-grants-eligibility-ireland">
              grant eligibility and upgrade value in Ireland
            </Link>{" "}
            guide.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Final verdict: does retrofit increase house value?">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Retrofit can increase house value in Ireland, especially where it improves BER, lowers likely running costs, and makes the home more
            appealing to buyers comparing similar properties.
          </p>
          <p>
            It is not guaranteed to return every euro spent, and the outcome depends on the upgrades completed, the property, and local market
            conditions.
          </p>
          <p>
            A balanced view is that retrofit often supports both resale appeal and long-term home quality, but the best next step is to compare
            likely benefits, grants, and upgrade order rather than treating value uplift as automatic. For a broader decision framework, the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>{" "}
            is a useful next read.
          </p>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/is-insulation-worth-it-ireland", label: "Does insulation add value in Ireland?" },
          { href: "/is-heat-pump-worth-it-ireland", label: "Is a heat pump worth it in Ireland?" },
          { href: "/is-solar-worth-it-ireland", label: "Is solar worth it in Ireland?" },
          { href: "/home-energy-upgrade-guide-ireland", label: "Home energy upgrade guide Ireland" },
          { href: "/seai-grants-ireland-2026", label: "How grants affect upgrade value in Ireland" },
          { href: "/ber-assessment-ireland", label: "BER assessment Ireland" },
          { href: "/heat-pump-cost-ireland", label: "Heat pump cost vs value in Ireland" }
        ]}
      />

      <Section className="border-t border-ink-200" title="Frequently asked questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="Does a higher BER rating increase house value in Ireland?"
              answer="Often, yes. In Ireland, buyers use BER as a quick signal for likely heating costs, comfort, and future upgrade needs. A stronger rating can make a property more appealing, but it does not guarantee the same price uplift in every area."
            />
            <FaqItem
              question="What upgrades add the most value to a home in Ireland?"
              answer="The upgrades most likely to add value are those that improve BER, reduce running costs, and are visible or meaningful to buyers. Insulation, airtightness improvements, heating upgrades, and solar can help when they fit the property and local market."
            />
            <FaqItem
              question="Is a heat pump good for resale value?"
              answer="A heat pump can support resale value when the home is ready for it, has good insulation, and the system reduces likely running costs. It may add less value if installed before heat loss issues are fixed."
            />
            <FaqItem
              question="Do buyers care about energy efficiency in Ireland?"
              answer="Yes. Buyers increasingly care about energy efficiency because it affects running costs, comfort, and future upgrade needs. BER is one of the clearest signals buyers can compare."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              See which upgrades are actually worth it for your home
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Use the planner to understand which upgrades may matter most, what could improve BER and resale appeal, and how grants could shape
              the decision before committing to retrofit work.
            </p>
            <div className="mt-8 flex justify-center sm:justify-start">
              <StartPlannerLink href="/planner" size="lg" className="w-full justify-center sm:w-auto sm:min-w-[12rem]">
                Check your upgrade plan
              </StartPlannerLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
