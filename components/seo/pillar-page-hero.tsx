import { StartPlannerLink } from "@/components/analytics/start-planner-link";
import { Reveal } from "@/components/home/reveal";
import type { ReactNode } from "react";

type PillarPageHeroProps = {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  summaryItems: readonly string[];
  ctaLabel?: string;
};

export function PillarPageHero({
  eyebrow,
  title,
  intro,
  summaryItems,
  ctaLabel = "Start planner"
}: PillarPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0f8f81] pb-6 pt-8 sm:pb-10 sm:pt-10 lg:pb-12">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 max-sm:gap-9 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,380px)] lg:items-center lg:gap-12">
          <Reveal className="max-w-[39rem] text-center sm:text-left lg:pr-6">
            <p className="text-[0.65rem] font-medium uppercase leading-none tracking-[0.18em] text-white/75 sm:text-white/80">
              {eyebrow}
            </p>
            <h1 className="mx-auto mt-4 w-full text-[3.06rem] font-semibold leading-[1.12] tracking-[-0.042em] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.12)] sm:mx-0 sm:max-w-none sm:text-[3.9rem] sm:leading-[0.98] sm:tracking-[-0.05em] lg:text-[4.85rem]">
              {title}
            </h1>
            <p className="mx-auto mt-5 w-full max-w-[22rem] text-base leading-7 text-white/85 max-sm:mt-6 sm:mx-0 sm:mt-6 sm:max-w-xl sm:text-lg sm:leading-8">
              {intro}
            </p>
            <div className="mx-auto mt-6 flex w-full max-w-xl justify-center sm:mx-0 sm:justify-start">
              <StartPlannerLink
                href="/planner"
                size="lg"
                className="w-full justify-center max-sm:h-14 max-sm:px-7 max-sm:text-base sm:h-14 sm:w-full sm:px-14 sm:text-base"
              >
                {ctaLabel}
              </StartPlannerLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[1.1rem] border border-white/25 bg-white p-6 shadow-soft sm:p-7">
              <p className="text-sm font-semibold text-[#0f8f81]">At a glance</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-ink-600">
                {summaryItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f8f81]"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
