import Link from "next/link";

import { PillarPageHero } from "@/components/seo/pillar-page-hero";
import { PillarPageTealCta } from "@/components/seo/pillar-page-cta";
import { RelatedGuides } from "@/components/seo/related-guides";
import { Section } from "@/components/ui/section";
import { grantGuideMetadata } from "@/lib/seo/grant-guide-metadata";
import { pillarProseClass } from "@/lib/seo/pillar-page";

export const metadata = grantGuideMetadata({
  path: "/home-retrofit-grants-ireland",
  titleSegment: "Home retrofit grants Ireland (complete guide)",
  description:
    "A practical guide to home retrofit grants in Ireland, including likely total support, eligibility basics, upgrade order, and links to key grant pages."
});

const linkClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";
const pageUrl = "https://www.retrofitplanner.ie/home-retrofit-grants-ireland";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What grants are available in Ireland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEAI is the main grant provider for home energy upgrades, and support is usually spread across different upgrade types rather than one single payment. Most homeowners combine supports such as insulation grants, heat pump grants, solar PV grants, and conditional windows and doors support."
      }
    },
    {
      "@type": "Question",
      name: "Who is eligible for retrofit grants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Owner-occupied homes are typically eligible for many grant types. Some landlords may be eligible depending on the scheme. Minimum BER improvement is often required, especially for heat pump routes, and technical requirements still need to be met before support is approved."
      }
    },
    {
      "@type": "Question",
      name: "How the grant process works",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Assess your home first, choose upgrades in a practical order, apply through the appropriate route, complete the works, and then grant support is usually paid after completion."
      }
    },
    {
      "@type": "Question",
      name: "How grants fit into your upgrade plan",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grants work best when they follow a fabric-first approach so your home is prepared before bigger system changes. A practical sequence is usually insulation, then ventilation, then heating, then solar."
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
    { "@type": "ListItem", position: 3, name: "Home retrofit grants Ireland", item: pageUrl }
  ]
};

export default function HomeRetrofitGrantsIrelandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PillarPageHero
        eyebrow="GRANTS GUIDE"
        title="Home retrofit grants Ireland"
        intro="Multiple retrofit grants are available in Ireland, and many homeowners combine them across insulation, heating, and other upgrades. Typical total support can be significant, but the key is understanding how grants fit together in the right sequence for your home."
        summaryItems={[
          "Multiple grants available depending on upgrades",
          "Heat pump grant is often around EUR6,500",
          "Grants reduce cost but do not remove upfront spend"
        ]}
      />

      <Section className="border-t border-ink-200" title="Quick answer">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p className="text-lg font-semibold leading-8 text-ink-900 sm:text-xl">
            Most Irish homes can combine multiple retrofit grants, with total support often reaching
            EUR10,000-EUR20,000+ depending on the upgrade path.
          </p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Total support can reach EUR10,000-EUR20,000+ depending on upgrades.</li>
            <li>Most homes combine multiple grants, such as insulation and heating support.</li>
            <li>The biggest factor is your starting BER and overall upgrade plan.</li>
          </ul>
          <p className="text-sm text-ink-500">
            Based on typical SEAI supports and common retrofit upgrade paths in Ireland.
          </p>
        </div>
      </Section>

      <Section
        className="border-t border-ink-200"
        title="What grants are available in Ireland?"
        description="SEAI is the main grant provider for home energy upgrades, and support is usually spread across different upgrade types rather than one single payment."
      >
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>Most homeowners combine multiple supports based on their home and upgrade path.</p>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Insulation grants</li>
            <li>Heat pump grants</li>
            <li>Solar PV grants</li>
            <li>Windows and doors grants (limited or conditional)</li>
          </ul>
        </div>
      </Section>

      <Section className="border-t border-ink-200" title="Grants by upgrade type">
        <div className={`max-w-3xl space-y-8 ${pillarProseClass}`}>
          <div className="border-b border-ink-200 pb-6">
            <h3 className="text-xl font-semibold tracking-tight text-ink-900">Heat pump grants</h3>
            <p className="mt-2 text-ink-600">Typical support is often around EUR6,500, depending on eligibility and scheme rules.</p>
            <p className="mt-2">
              <Link className={linkClass} href="/heat-pump-grants-ireland">
                Heat pump grants Ireland
              </Link>
            </p>
          </div>
          <div className="border-b border-ink-200 pb-6">
            <h3 className="text-xl font-semibold tracking-tight text-ink-900">Insulation grants</h3>
            <p className="mt-2 text-ink-600">Grants can apply across attic, wall, and floor insulation depending on the measure.</p>
            <p className="mt-2">
              <Link className={linkClass} href="/insulation-grants-ireland">
                Insulation grants Ireland
              </Link>
            </p>
          </div>
          <div className="border-b border-ink-200 pb-6">
            <h3 className="text-xl font-semibold tracking-tight text-ink-900">Solar panel grants</h3>
            <p className="mt-2 text-ink-600">Solar PV support can be part of a wider retrofit plan once core upgrades are clear.</p>
            <p className="mt-2">
              <Link className={linkClass} href="/solar-panel-grants-ireland">
                Solar panel grants Ireland
              </Link>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-ink-900">Windows and doors grants</h3>
            <p className="mt-2 text-ink-600">Support can be limited and conditional, so it is important to check current criteria.</p>
            <p className="mt-2">
              <Link className={linkClass} href="/windows-doors-grants-ireland">
                Windows and doors grants Ireland
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <PillarPageTealCta
        heading="Find your likely grants based on your home"
        body="Use the planner to estimate your likely grants based on your home type, BER starting point, and upgrade path."
        buttonLabel="Start planner"
      />

      <Section className="border-t border-ink-200" title="Who is eligible for retrofit grants?">
        <div className={`max-w-3xl ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Owner-occupied homes are typically eligible for many grant types.</li>
            <li>Some landlords may be eligible depending on the scheme.</li>
            <li>Minimum BER improvement is often required, especially for heat pump routes.</li>
            <li>Technical requirements still need to be met before support is approved.</li>
          </ul>
        </div>
      </Section>

      <Section className="border-t border-ink-200" title="How the grant process works">
        <div className={`max-w-3xl space-y-5 ${pillarProseClass}`}>
          <ol className="list-decimal space-y-2.5 pl-5">
            <li>
              Assess your home (BER and technical readiness), often starting with a{" "}
              <Link className={linkClass} href="/ber-assessment-ireland">
                BER assessment
              </Link>
              .
            </li>
            <li>
              Choose upgrades in a practical order using a{" "}
              <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
                what to upgrade first
              </Link>{" "}
              approach.
            </li>
            <li>Apply through SEAI and/or your contractor route.</li>
            <li>Complete the upgrade works.</li>
            <li>Grant support is paid after completion.</li>
          </ol>
          <p className="font-medium text-ink-800">
            Important: grants usually come after the work is completed, so upfront budget is still needed.
          </p>
        </div>
      </Section>

      <Section className="border-t border-ink-200" title="Common mistakes with grants">
        <div className={`max-w-3xl ${pillarProseClass}`}>
          <ul className="list-disc space-y-2.5 pl-5">
            <li>Choosing upgrades based only on grant size.</li>
            <li>Installing a heat pump before improving insulation.</li>
            <li>Underestimating additional costs not covered by grants.</li>
            <li>Assuming grants cover the full project cost.</li>
            <li>Not planning upgrades in the right order.</li>
          </ul>
        </div>
      </Section>

      <Section className="border-t border-ink-200" title="How grants fit into your upgrade plan">
        <div className={`max-w-3xl space-y-4 ${pillarProseClass}`}>
          <p>
            Grants work best when they follow a fabric-first approach, so your home is prepared before bigger system changes.
          </p>
          <p>A practical sequence is usually insulation, then ventilation, then heating, then solar.</p>
          <p>
            For sequencing guidance, read{" "}
            <Link className={linkClass} href="/what-to-upgrade-first-home-retrofit-ireland">
              what to upgrade first
            </Link>
            . For budget planning, see{" "}
            <Link className={linkClass} href="/home-retrofit-cost-ireland">
              home retrofit cost Ireland
            </Link>
            .
          </p>
        </div>
      </Section>

      <RelatedGuides
        links={[
          { href: "/home-retrofit-cost-ireland", label: "Home retrofit cost Ireland" },
          { href: "/what-to-upgrade-first-home-retrofit-ireland", label: "What to upgrade first" },
          { href: "/heat-pump-cost-ireland", label: "Heat pump cost Ireland" },
          { href: "/heat-pump-grants-ireland", label: "Heat pump grants Ireland" }
        ]}
      />

      <PillarPageTealCta
        heading="Build your retrofit plan with grants included"
        body="Use the planner to combine upgrade order, likely costs, and available grants into one practical plan for your home."
        buttonLabel="Start planner"
      />
    </>
  );
}
