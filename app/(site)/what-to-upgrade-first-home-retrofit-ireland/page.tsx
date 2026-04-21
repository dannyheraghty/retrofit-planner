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
  path: "/what-to-upgrade-first-home-retrofit-ireland",
  titleSegment: "What to Upgrade First in Your Home (Ireland)",
  description:
    "A practical guide for Irish homeowners on what to upgrade first in your home. Learn the correct retrofit order to avoid mistakes and improve comfort."
});

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";
const pageUrl = "https://www.retrofitplanner.ie/what-to-upgrade-first-home-retrofit-ireland";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I upgrade first in my home in Ireland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, start with insulation and airtightness. This reduces heat demand and makes later upgrades perform better."
      }
    },
    {
      "@type": "Question",
      name: "Should ventilation come before a heat pump?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ventilation planning should happen as airtightness improves, before final heating decisions. This helps avoid condensation and air-quality issues."
      }
    },
    {
      "@type": "Question",
      name: "Do I always need new windows and doors before a heat pump?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. Many homes can prioritise insulation, airtightness, ventilation, and heating first, then replace windows or doors where genuinely needed."
      }
    },
    {
      "@type": "Question",
      name: "Why is solar PV usually last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar is most effective when core efficiency and heating choices are already in place. It is usually a final optimisation step."
      }
    },
    {
      "@type": "Question",
      name: "Can the order change for partial retrofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If budget is limited, projects can be phased. The sequence may shift, but fabric-first is still the safest default for most homes."
      }
    },
    {
      "@type": "Question",
      name: "What if my BER is already strong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your BER is already good, your plan may focus more on selective upgrades. You still need to sequence measures so each step supports the next."
      }
    },
    {
      "@type": "Question",
      name: "Can I install a heat pump without insulation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can, but it is often poor value in homes with high heat loss. Most homeowners get better comfort and performance by improving insulation and airtightness first."
      }
    },
    {
      "@type": "Question",
      name: "Do I need a BER assessment before deciding what to upgrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is strongly recommended. A BER assessment helps show where energy is being lost and makes it easier to prioritise upgrades in the right order."
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
    { "@type": "ListItem", position: 3, name: "What to upgrade first in your home (Ireland)", item: pageUrl }
  ]
};

export default function WhatToUpgradeFirstHomeRetrofitIrelandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PillarPageHero
        eyebrow="DECISION GUIDE"
        title="What to upgrade first in your home (Ireland)"
        intro="Upgrade sequencing matters more than most homeowners expect. If you do the right measures in the right order, you get better comfort, better value, and fewer expensive surprises."
        summaryItems={[
          "Fabric-first sequencing gives better results",
          "Heating works best after insulation and ventilation",
          "Solar is usually a final-stage upgrade"
        ]}
        ctaLabel="Start planner"
      />

      <Section className="py-14 sm:py-16" title="Quick answer">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            The correct upgrade order for most Irish homes is: insulation and airtightness -&gt; ventilation -&gt; heating system (usually a heat
            pump) -&gt; windows and doors if needed -&gt; solar PV last.
          </p>
          <p>This sequence reduces wasted spend, improves comfort sooner, and helps each upgrade perform properly.</p>
          <div className="rounded-[1rem] border border-ink-200 bg-white px-5 py-5 shadow-soft sm:px-6">
            <ol className="list-decimal space-y-1.5 pl-5 text-sm leading-7 text-ink-700 sm:text-base">
              <li>Insulation and airtightness</li>
              <li>Ventilation</li>
              <li>Heating system</li>
              <li>Windows and doors (if needed)</li>
              <li>Solar PV</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Correct upgrade order">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <h3>1) Insulation and airtightness</h3>
          <p>
            <strong>What it is:</strong> Upgrading attic, wall, and floor insulation where relevant, while reducing uncontrolled draughts.
          </p>
          <p>
            <strong>Why now:</strong> It lowers heat demand first, so every later upgrade performs better.
          </p>
          <p>
            <strong>Typical mistake if skipped:</strong> Homeowners install heating too early and end up with higher running costs and weaker
            comfort.
          </p>
          <p>
            Start with fabric basics first, then compare likely spend with the{" "}
            <Link className={linkClass} href="/home-retrofit-cost-ireland">
              home retrofit cost guide
            </Link>{" "}
            so your budget matches the right sequence.
          </p>

          <h3>2) Ventilation</h3>
          <p>
            <strong>What it is:</strong> Making sure fresh air flow is controlled after airtightness improves.
          </p>
          <p>
            <strong>Why now:</strong> Better airtightness without ventilation planning can lead to condensation and stale air.
          </p>
          <p>
            <strong>Typical mistake if skipped:</strong> Moisture issues appear after insulation upgrades, forcing extra remedial work.
          </p>

          <h3>3) Heating system (heat pump)</h3>
          <p>
            <strong>What it is:</strong> Choosing and sizing a heating system for the home&apos;s updated heat demand.
          </p>
          <p>
            <strong>Why now:</strong> Once the fabric is improved, the heating design can be sized correctly and perform more efficiently.
          </p>
          <p>
            <strong>Typical mistake if skipped:</strong> A heat pump is chosen before the home is ready, causing poor performance and avoidable
            cost.
          </p>
          <p>
            If you are planning this stage, review{" "}
            <Link className={linkClass} href="/heat-pump-cost-ireland">
              heat pump cost Ireland
            </Link>{" "}
            and available{" "}
            <Link className={linkClass} href="/seai-grants-ireland-2026">
              SEAI grants
            </Link>{" "}
            before final sizing.
          </p>

          <h3>4) Windows and doors (if needed)</h3>
          <p>
            <strong>What it is:</strong> Targeted replacement where existing units are failing, very draughty, or beyond practical repair.
          </p>
          <p>
            <strong>Why now:</strong> Many homes can delay this until after core fabric and heating decisions are made.
          </p>
          <p>
            <strong>Typical mistake if skipped:</strong> Spending heavily on full replacement too early when other measures would deliver faster gains.
          </p>

          <h3>5) Solar PV (last)</h3>
          <p>
            <strong>What it is:</strong> Generating electricity on-site to support household demand.
          </p>
          <p>
            <strong>Why now:</strong> Solar works best after core efficiency and heating choices are settled.
          </p>
          <p>
            <strong>Typical mistake if skipped:</strong> Installing panels first and delaying the upgrades that most improve comfort and heat demand.
          </p>
          <p>
            For a full fabric-first overview, use the{" "}
            <Link className={linkClass} href="/home-energy-upgrade-guide-ireland">
              home energy upgrade guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <PillarPageTealCta
        heading="Need a clear upgrade sequence for your home?"
        body="Use the planner to prioritise the right measures in the right order, based on your home in Ireland."
        buttonLabel="Start planner"
      />

      <Section className="py-14 sm:py-16" title="Why order matters">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            <strong>Cost inefficiencies:</strong> Doing high-cost measures out of order often creates rework, such as changing emitters or controls
            after heating is already installed.
          </p>
          <p>
            Installing a heat pump before reducing heat loss can lead to a larger, more expensive system than the home actually needs.
          </p>
          <p>
            <strong>Comfort impact:</strong> Homes usually feel warmer and steadier sooner when draughts and heat loss are tackled before heating
            replacement.
          </p>
          <p>
            <strong>System performance issues:</strong> Heating systems, especially heat pumps, run more efficiently and with fewer complaints when
            the building fabric and ventilation are already in good shape.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Common mistakes">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Installing a heat pump before reducing major heat loss.</li>
            <li>Ignoring ventilation when airtightness improves.</li>
            <li>Replacing all windows and doors before reviewing bigger performance gaps.</li>
            <li>Choosing upgrades based only on grant headlines, not upgrade sequence.</li>
            <li>Adding solar first and delaying core comfort upgrades.</li>
          </ul>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="When the order may vary">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            The ideal path can vary by your BER starting point, available budget, and whether you are doing a partial retrofit or a full-home
            plan.
          </p>
          <p>
            Even when details change, most Irish homes still benefit from a fabric-first approach before final heating and solar decisions.
          </p>
        </div>
      </Section>

      <Section className="py-14 sm:py-16" title="Example scenario">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            A typical 1980s semi-detached home in Ireland starts with attic insulation, then adds wall insulation where relevant, followed by
            practical airtightness improvements around key draught points.
          </p>
          <p>
            Once those fabric works are complete, the homeowner carries out a ventilation check and then replaces the old boiler with a right-sized
            heating system based on the home&apos;s updated heat demand.
          </p>
          <p>
            Only a few weak windows are replaced where needed, and solar PV is added last after the core retrofit is working well. This path usually
            delivers earlier comfort and avoids expensive sequencing mistakes.
          </p>
        </div>
      </Section>

      <Section className="border-t border-ink-200" title="Frequently asked questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="What should I upgrade first in my home in Ireland?"
              answer="In most cases, start with insulation and airtightness. This reduces heat demand and makes later upgrades perform better."
            />
            <FaqItem
              question="Should ventilation come before a heat pump?"
              answer="Ventilation planning should happen as airtightness improves, before final heating decisions. This helps avoid condensation and air-quality issues."
            />
            <FaqItem
              question="Do I always need new windows and doors before a heat pump?"
              answer="Not always. Many homes can prioritise insulation, airtightness, ventilation, and heating first, then replace windows or doors where genuinely needed."
            />
            <FaqItem
              question="Why is solar PV usually last?"
              answer="Solar is most effective when core efficiency and heating choices are already in place. It is usually a final optimisation step."
            />
            <FaqItem
              question="Can the order change for partial retrofits?"
              answer="Yes. If budget is limited, projects can be phased. The sequence may shift, but fabric-first is still the safest default for most homes."
            />
            <FaqItem
              question="What if my BER is already strong?"
              answer="If your BER is already good, your plan may focus more on selective upgrades. You still need to sequence measures so each step supports the next."
            />
            <FaqItem
              question="Can I install a heat pump without insulation?"
              answer="You can, but it is often poor value in homes with high heat loss. Most homeowners get better comfort and performance by improving insulation and airtightness first."
            />
            <FaqItem
              question="Do I need a BER assessment before deciding what to upgrade?"
              answer="It is strongly recommended. A BER assessment helps show where energy is being lost and makes it easier to prioritise upgrades in the right order."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Plan your upgrade order with real costs for your home
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              Use the planner to prioritise upgrades, understand likely costs, and avoid expensive sequencing mistakes before you commit to works.
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
