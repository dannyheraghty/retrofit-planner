import type { Metadata } from "next";

import { Section } from "@/components/ui/section";

const CONTACT_EMAIL = "retrofitplanner@gmail.com";

const mailClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

const prose =
  "text-sm leading-7 text-ink-600 sm:text-[0.95rem]" as const;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email RetrofitPlanner.ie for feedback, questions about your plan, or privacy queries. Official grant rules should be confirmed with SEAI or a qualified professional."
};

export default function ContactPage() {
  return (
    <>
      <Section className="pb-6 pt-14 sm:pt-20" title="Contact">
        <div className={`max-w-3xl space-y-4 text-base leading-7 text-ink-600 sm:text-lg`}>
          <p>Questions, feedback, or something unclear in your plan?</p>
          <p>You can contact RetrofitPlanner.ie by email:</p>
          <p>
            <a className={mailClass} href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </Section>

      <Section title="What to contact us about">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>You can get in touch if you:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>spot something unclear or inaccurate</li>
            <li>have feedback on the planner</li>
            <li>want to report a problem with the site</li>
            <li>have a privacy-related question</li>
          </ul>
        </div>
      </Section>

      <Section title="Important note" className="pb-16 sm:pb-20">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>RetrofitPlanner.ie provides general planning guidance only.</p>
          <p>
            For official grant eligibility, assessment requirements, or
            technical retrofit decisions, users should confirm details through
            SEAI guidance or a qualified professional where appropriate.
          </p>
        </div>
      </Section>
    </>
  );
}
