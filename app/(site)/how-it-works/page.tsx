import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { FaqItem } from "@/components/ui/faq-item";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How RetrofitPlanner.ie turns your home details into general guidance on grants, upgrade paths, and next steps—without acting as an official eligibility checker."
};

const prose =
  "text-sm leading-7 text-ink-600 sm:text-[0.95rem]" as const;

export default function HowItWorksPage() {
  return (
    <>
      <Section className="pb-6 pt-14 sm:pt-20" title="How it works">
        <div className="max-w-3xl space-y-4 text-base leading-7 text-ink-600 sm:text-lg">
          <p>
            RetrofitPlanner.ie helps Irish homeowners get a clearer view of
            possible grants, suitable upgrade paths, and practical next steps
            based on the information they provide about their home.
          </p>
          <p>
            It is designed as a decision-support tool, not an official
            eligibility checker.
          </p>
        </div>
      </Section>

      <Section title="A practical starting point for retrofit decisions">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>
            The planner is built to help homeowners make sense of retrofit
            options without needing to decode grant pages, technical terms, or
            upgrade jargon on their own.
          </p>
          <p>Based on the answers you provide, the tool highlights:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>upgrades that may suit your home</li>
            <li>an indicative grant range</li>
            <li>a suggested order of works</li>
            <li>practical next steps to consider</li>
          </ul>
          <p>
            The aim is to make early planning easier, not to replace
            professional advice or formal grant assessment.
          </p>
        </div>
      </Section>

      <Section title="What the planner looks at">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>The planner uses the details you enter about your home, such as:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>home type and age</li>
            <li>BER or current efficiency level, if known</li>
            <li>heating setup</li>
            <li>insulation status</li>
            <li>windows and doors</li>
            <li>
              upgrade interests such as heat pump, insulation, solar, or glazing
            </li>
          </ul>
          <p>
            These inputs are used to produce general guidance based on common
            retrofit scenarios for Irish homes.
          </p>
        </div>
      </Section>

      <Section title="How guidance is generated">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>Recommendations are based on a practical interpretation of:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>the home details you provide</li>
            <li>common retrofit sequencing principles</li>
            <li>typical upgrade suitability patterns</li>
            <li>
              publicly available grant information and general retrofit guidance
            </li>
          </ul>
          <p>
            The planner does not inspect your home, verify technical conditions,
            or assess full grant eligibility. It works as an early-stage
            guidance layer to help you understand what may be worth exploring
            next.
          </p>
        </div>
      </Section>

      <Section title="What the estimated grant range means">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>Any grant figures shown in your plan are indicative only.</p>
          <p>
            They are intended to give you a rough sense of the level of support
            that may be available for upgrades you are exploring. Actual grant
            amounts, eligibility, and qualifying conditions can depend on factors
            such as:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>your property type</li>
            <li>the exact upgrade being carried out</li>
            <li>technical requirements</li>
            <li>installer requirements</li>
            <li>assessment outcomes</li>
            <li>current grant rules at the time you apply</li>
          </ul>
          <p>
            For that reason, the planner uses careful language such as “may
            qualify” and “may suit”.
          </p>
        </div>
      </Section>

      <Section title="Important limitations">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p className="font-medium text-ink-800">RetrofitPlanner.ie:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>does not make official eligibility decisions</li>
            <li>is not affiliated with SEAI</li>
            <li>
              does not replace a BER assessment, technical survey, or installer
              advice
            </li>
            <li>does not guarantee grant approval or final grant values</li>
            <li>
              may simplify some scenarios in order to provide clear, practical
              guidance
            </li>
          </ul>
          <p>
            The guidance is intended to help you get oriented, compare options,
            and prepare for the next step.
          </p>
        </div>
      </Section>

      <Section title="When a professional assessment may still be needed">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>A fuller assessment may still be important if:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>you are considering a heat pump</li>
            <li>insulation condition is unclear</li>
            <li>your BER is unknown or out of date</li>
            <li>you are planning multiple upgrades together</li>
            <li>
              your home has unusual construction or previous retrofit work
            </li>
            <li>
              you want to confirm likely grant eligibility before committing
            </li>
          </ul>
          <p>
            In many cases, the best next step is to use your plan as a
            conversation starter with a qualified assessor, contractor, or official
            grant source.
          </p>
        </div>
      </Section>

      <Section title="Frequently asked questions">
        <div className="space-y-4">
          <FaqItem
            defaultOpen
            question="Does RetrofitPlanner.ie make official grant decisions?"
            answer="No. It provides general guidance to help you understand what may be relevant for your home, but official decisions depend on the relevant grant process and assessment requirements."
          />
          <FaqItem
            question="Is RetrofitPlanner.ie affiliated with SEAI?"
            answer="No. RetrofitPlanner.ie is an independent planning tool and is not affiliated with SEAI."
          />
          <FaqItem
            question="Are the grant figures exact?"
            answer="No. They are indicative ranges or reference figures designed to help with early planning."
          />
          <FaqItem
            question="Can this replace a professional assessment?"
            answer="No. Some upgrades, especially heat pump and fabric-first retrofit decisions, may require professional assessment before moving ahead."
          />
          <FaqItem
            question="Why does the planner use cautious wording?"
            answer="Because suitability and grant eligibility can depend on details that are not fully captured in a short online planner. The tool is designed to guide, not overpromise."
          />
        </div>
      </Section>

      <Section className="pb-16 sm:pb-20" title="Use the planner as a practical first step">
        <Card className="max-w-3xl">
          <div className="space-y-6">
            <p className={`${prose}`}>
              If you want a clearer picture of possible grants, upgrade options,
              and next steps for your home, the planner can help you get
              oriented before speaking to a professional or reviewing official
              requirements in detail.
            </p>
            <ButtonLink href="/planner" size="md">
              Start planner
            </ButtonLink>
          </div>
        </Card>
      </Section>
    </>
  );
}
