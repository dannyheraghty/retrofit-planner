import type { Metadata } from "next";

import { Section } from "@/components/ui/section";

const PRIVACY_EMAIL = "retrofitplanner@gmail.com";

const mailClass =
  "font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-4 transition hover:text-brand-800 hover:decoration-brand-800";

const prose =
  "text-sm leading-7 text-ink-600 sm:text-[0.95rem]" as const;

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Plain-English summary of what RetrofitPlanner.ie may collect, why, and how it is used. We do not sell your personal information."
};

export default function PrivacyPage() {
  return (
    <>
      <Section className="pb-6 pt-14 sm:pt-20" title="Privacy">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>
            This page explains, in plain English, what information
            RetrofitPlanner.ie may collect, why it is collected, and how it is
            used.
          </p>
          <p>
            If you have a privacy question, you can contact:{" "}
            <a className={mailClass} href={`mailto:${PRIVACY_EMAIL}`}>
              {PRIVACY_EMAIL}
            </a>
          </p>
        </div>
      </Section>

      <Section title="What information we may collect">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>
            When you use the planner, you may choose to provide information
            about your home, such as:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>property type</li>
            <li>approximate age of the home</li>
            <li>heating setup</li>
            <li>insulation details</li>
            <li>BER or energy-related information, if known</li>
            <li>upgrade interests</li>
          </ul>
          <p>If you choose to unlock a fuller plan or contact us, you may also provide:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>your name</li>
            <li>your email address</li>
          </ul>
        </div>
      </Section>

      <Section title="Why this information is used">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>This information is used to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>generate a more relevant retrofit plan</li>
            <li>show possible upgrade paths and indicative support</li>
            <li>improve the product over time</li>
            <li>respond to messages or feedback if you contact us</li>
          </ul>
          <p>
            We aim to collect only the information that is reasonably needed to
            provide the planner experience.
          </p>
        </div>
      </Section>

      <Section title="What we do not do">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>We do not sell your personal information.</p>
          <p>We do not claim that planner outputs are official decisions.</p>
          <p>
            We do not use your information for unrelated purposes that are
            inconsistent with the purpose of the site.
          </p>
        </div>
      </Section>

      <Section title="Planner information is informational">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>
            The outputs shown on RetrofitPlanner.ie are intended as general
            guidance only. They do not constitute official eligibility
            confirmation, professional advice, or grant approval.
          </p>
          <p>
            Users should confirm important decisions through official grant
            sources or qualified professionals where appropriate.
          </p>
        </div>
      </Section>

      <Section title="How information is handled">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>
            RetrofitPlanner.ie is currently an early-stage product. As the
            service develops, data handling and storage processes may evolve.
          </p>
          <p>
            Reasonable steps are taken to keep the site and any submitted
            information handled responsibly, but users should avoid submitting
            unnecessary sensitive personal information through the planner.
          </p>
        </div>
      </Section>

      <Section title="Contact for privacy questions">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>
            If you have questions about this privacy notice or how information
            is handled, you can contact:
          </p>
          <p>
            <a className={mailClass} href={`mailto:${PRIVACY_EMAIL}`}>
              {PRIVACY_EMAIL}
            </a>
          </p>
        </div>
      </Section>

      <Section title="Changes to this page" className="pb-16 sm:pb-20">
        <div className={`max-w-3xl space-y-4 ${prose}`}>
          <p>
            This page may be updated from time to time as the product develops,
            especially when backend systems, analytics, or lead handling
            workflows are added.
          </p>
        </div>
      </Section>
    </>
  );
}
