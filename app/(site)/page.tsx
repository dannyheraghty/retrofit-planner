import type { Metadata } from "next";

import { HeroPlanPreview } from "@/components/home/hero-plan-preview";
import { Reveal } from "@/components/home/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { FaqItem } from "@/components/ui/faq-item";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "SEAI Grants and Retrofit Planner",
  description:
    "Check what SEAI grants your home may qualify for in 2026 and understand possible next steps for heat pumps, insulation, solar, and more."
};

const trustPoints = [
  {
    text: "Built for Irish homeowners navigating SEAI grants",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m9 17 2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    text: "Updated for 2026 grant changes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="21 3 21 8 16 8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="3 21 3 16 8 16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    text: "Clear next steps for your home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect
          width="8"
          height="4"
          x="8"
          y="2"
          rx="1"
          ry="1"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m9 14 2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
] as const;

const helpCards = [
  {
    number: "01",
    title: "Tell us about your home",
    description:
      "Answer a few simple questions about your property, heating, insulation, and upgrade interests."
  },
  {
    number: "02",
    title: "See likely grants and upgrade fit",
    description:
      "Get a practical estimate of what grants may apply and which upgrades may suit your home."
  },
  {
    number: "03",
    title: "Know your next steps",
    description:
      "Understand what to explore before BER assessments, installer quotes, or deeper retrofit decisions."
  }
] as const;

const grantCards = [
  {
    eyebrow: "Heat pump",
    title: "Higher support in 2026",
    description:
      "The heat pump grant increased, but suitability still depends on home fabric, heating setup, and whether preparation work may be needed first."
  },
  {
    eyebrow: "Windows and doors",
    title: "A new grant category",
    description:
      "Windows and doors grants are now part of the conversation, creating a new decision point for homeowners comparing upgrade paths."
  },
  {
    eyebrow: "Solar and insulation",
    title: "Still important for many homes",
    description:
      "Solar PV, attic insulation, and wall insulation remain relevant in many cases, especially when balancing comfort, cost, and readiness."
  }
] as const;

const quoteCards = [
  {
    title: "Avoid wasted quotes",
    description:
      "Start with a clearer view of what may suit your home before reaching out."
  },
  {
    title: "Understand what actually applies",
    description:
      "See how grants and upgrade fit can differ by home type, heating, and insulation."
  },
  {
    title: "Start with clarity",
    description:
      "Use the planner as a practical first step before deeper assessment or installer advice."
  }
] as const;

export default function HomePage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-[#0f8f81] pb-6 pt-8 sm:pb-10 sm:pt-10 lg:pb-12">
        <div className="grid gap-10 max-sm:gap-9 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,500px)] lg:items-center lg:gap-12">
          <Reveal className="max-w-[39rem] text-center sm:text-left lg:pr-6">
            <h1 className="mx-auto w-full text-[3.06rem] font-semibold leading-[1.12] tracking-[-0.042em] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.12)] sm:mx-0 sm:max-w-none sm:text-[3.9rem] sm:leading-[0.98] sm:tracking-[-0.05em] lg:text-[4.85rem]">
              Check what SEAI grants your home may qualify for in 2026
            </h1>
            <p className="mx-auto mt-5 w-full max-w-[22rem] text-base leading-7 text-white/85 max-sm:mt-6 sm:mx-0 sm:mt-6 sm:max-w-xl sm:text-lg sm:leading-8">
              Answer a few simple questions and get a clear view of grants,
              upgrade options, and next steps.
            </p>

            <div className="mx-auto mt-6 flex w-full justify-center max-sm:px-2 max-sm:mt-6 sm:mx-0 sm:mt-5 sm:max-w-xl sm:justify-start">
              <ButtonLink
                href="/planner"
                size="lg"
                className="w-full justify-center max-sm:h-14 max-sm:px-7 max-sm:text-base sm:h-14 sm:w-full sm:px-14 sm:text-base"
              >
                Start your free plan
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3 sm:space-y-4">
              <div className="text-center text-[0.65rem] font-medium uppercase leading-none tracking-[0.18em] text-white/75 sm:text-white/80">
                Retrofit planner for Irish homeowners
              </div>
              <HeroPlanPreview />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-ink-200 py-8 sm:py-9">
        <div className="grid gap-4 md:grid-cols-3">
          {trustPoints.map((item, index) => (
            <Reveal
              key={item.text}
              delay={index * 0.06}
              className="flex h-full items-start gap-3.5 rounded-[1.1rem] border border-ink-200 bg-white px-5 py-5 text-[0.98rem] font-medium leading-7 text-ink-900 shadow-soft sm:gap-4 sm:px-6 sm:py-6"
            >
              <span className="mt-[2px] shrink-0 text-[#0f8f81]">{item.icon}</span>
              <span className="min-w-0">{item.text}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        title="How Retrofit Planner helps"
        description="A short planner clarifies what may apply to your home before assessments, quotes, or deeper retrofit decisions."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {helpCards.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.08}
              className="h-full"
            >
              <Card className="h-full p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-sm font-semibold text-[#0f8f81]">
                  {step.number}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#0f8f81]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">
                  {step.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        className="border-b border-t border-ink-200 bg-[#0f8f81]"
        title="Why use a planner before getting quotes?"
        description="Not every home is ready for every upgrade. A planner helps homeowners understand likely grant fit, possible blockers, and useful next steps before speaking with contractors."
        titleClassName="text-white"
        descriptionClassName="text-white/85"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {quoteCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.08}
              className="h-full"
            >
              <Card className="h-full p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-40px_rgba(43,62,56,0.12)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-sm font-semibold text-[#0f8f81]">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">
                  {card.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        title="SEAI grants for home upgrades in Ireland (2026)"
        headerClassName="lg:mb-12"
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] lg:items-start lg:gap-8">
          <Reveal>
            <div className="rounded-[1.1rem] border border-ink-200 bg-white px-5 py-6 shadow-soft sm:px-7 sm:py-7">
              <div className="space-y-4 text-base leading-7 text-ink-500">
                <p>
                  SEAI grants help homeowners in Ireland improve energy efficiency
                  through upgrades like heat pumps, insulation, windows, and solar
                  panels.
                </p>
                <p>
                  In 2026, grant eligibility still depends on factors such as your
                  home type, heating system, existing insulation, and previous
                  upgrades.
                </p>
                <p>
                  RetrofitPlanner.ie helps you understand what may apply to your
                  home before taking the next step.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {grantCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card className="shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_65px_-42px_rgba(43,62,56,0.12)]">
                  <CardContent
                    eyebrow={item.eyebrow}
                    title={item.title}
                    description={item.description}
                  />
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Frequently asked questions">
        <Reveal>
          <div className="space-y-4">
            <FaqItem
              defaultOpen
              question="Do I need to know my BER rating?"
              answer="No. The planner can still give useful guidance even if you do not know your BER. If you do know it, that can help provide better context."
            />
            <FaqItem
              question="Is this affiliated with SEAI?"
              answer="No. RetrofitPlanner.ie is designed to be clear and practical, but it does not claim to be an official SEAI service or to make official eligibility decisions."
            />
            <FaqItem
              question="Will I be contacted by contractors?"
              answer="Only if you choose to proceed and provide your details."
            />
            <FaqItem
              question="How accurate are the results?"
              answer="The results are intended as a helpful interpretation based on the information provided. They are not a formal grant determination and some upgrades may still require assessment first."
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pb-14 pt-4 sm:pb-16 sm:pt-6">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-[#0f8f81] px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to map your home&apos;s upgrade path?
              </h2>
              <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">
                Start the planner for grants, likely fit, and practical next steps.
              </p>
              <div className="mt-6">
                <ButtonLink
                  href="/planner"
                  className="w-full justify-center sm:w-auto sm:min-w-[12rem]"
                >
                  Start your free plan
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
