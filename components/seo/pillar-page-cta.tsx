import { StartPlannerLink } from "@/components/analytics/start-planner-link";
import { Reveal } from "@/components/home/reveal";
import { ButtonLink } from "@/components/ui/button-link";

type PillarPageTealCtaProps = {
  heading: string;
  body: string;
  buttonLabel: string;
  buttonHref?: string;
  reassurance?: string;
};

export function PillarPageTealCta({
  heading,
  body,
  buttonLabel,
  buttonHref = "/planner",
  reassurance
}: PillarPageTealCtaProps) {
  return (
    <section className="border-t border-ink-200 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[1.1rem] border border-ink-200 bg-[#0f8f81] px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {heading}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">{body}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                {buttonLabel === "Start planner" ? (
                  <StartPlannerLink
                    href={buttonHref}
                    className="w-full justify-center sm:w-auto sm:min-w-[12rem]"
                  >
                    {buttonLabel}
                  </StartPlannerLink>
                ) : (
                  <ButtonLink
                    href={buttonHref}
                    className="w-full justify-center sm:w-auto sm:min-w-[12rem]"
                  >
                    {buttonLabel}
                  </ButtonLink>
                )}
              </div>
              {reassurance ? (
                <p className="mt-4 text-sm leading-6 text-white/75">{reassurance}</p>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
