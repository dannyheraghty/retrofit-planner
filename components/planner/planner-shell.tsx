"use client";

import { useCallback, useState } from "react";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { initialPlannerAnswers, PLANNER_STEPS } from "@/lib/planner/constants";
import type { PlannerAnswers } from "@/lib/planner/types";
import { validatePlannerStep } from "@/lib/planner/validation";
import { PlannerInlineError } from "@/components/planner/planner-field";
import { PLANNER_STEP_PANELS } from "@/components/planner/planner-step-panels";
import { PlannerStepper } from "@/components/planner/planner-stepper";
import { PlannerSummary } from "@/components/planner/planner-summary";
import { cn } from "@/lib/utils";

const LAST_STEP = PLANNER_STEP_PANELS.length - 1;

export function PlannerShell() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<PlannerAnswers>(initialPlannerAnswers);
  const [stepError, setStepError] = useState<string | null>(null);

  const resetPlan = useCallback(() => {
    setStep(0);
    setAnswers(initialPlannerAnswers);
    setStepError(null);
  }, []);

  const goNext = () => {
    const err = validatePlannerStep(step, answers);
    if (err) {
      setStepError(err);
      return;
    }
    setStepError(null);
    if (step < LAST_STEP) setStep((s) => s + 1);
  };

  const goBack = () => {
    setStepError(null);
    if (step > 0) setStep((s) => s - 1);
  };

  const Panel = PLANNER_STEP_PANELS[step];
  const showNext = step < LAST_STEP;
  const nextLabel =
    step === 4 ? "See my full plan" : step === 5 ? "Unlock full plan" : "Continue";

  return (
    <div
      className={cn(
        "border-b border-ink-200 bg-ink-100/50 pb-12 sm:pb-16 lg:pb-14",
        step === 0 ? "pt-5 sm:pt-6 lg:pt-5" : "pt-4 sm:pt-5 lg:pt-4"
      )}
    >
      <Container>
        {step === 0 ? (
          <div className="mb-4 max-w-3xl space-y-2 text-center sm:mb-5 sm:text-left lg:mb-4 lg:max-w-2xl">
            <h1 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-[1.75rem] lg:text-[1.85rem]">
              Build a draft plan for your home
            </h1>
            <p className="text-[0.9375rem] leading-relaxed text-ink-600 sm:text-base sm:leading-relaxed">
              Answer a few questions to see what may suit your property. This tool
              explains possibilities — it does not decide official grant eligibility.
            </p>
          </div>
        ) : null}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          <div className="min-w-0 flex-1 space-y-6">
            <Card
              className={cn(
                "p-4 sm:p-6 lg:p-6",
                step === LAST_STEP && "border-ink-200 shadow-sm lg:p-8"
              )}
            >
              {step === LAST_STEP ? (
                <p className="sr-only">
                  Your personalised retrofit plan — step {LAST_STEP + 1} of {PLANNER_STEPS.length}{" "}
                  complete.
                </p>
              ) : (
                <PlannerStepper currentIndex={step} />
              )}
              <div className="mt-4 lg:mt-5">
                <Panel
                  answers={answers}
                  setAnswers={setAnswers}
                  onResetPlan={step === LAST_STEP ? resetPlan : undefined}
                />
              </div>
              <PlannerInlineError id="planner-step-error" message={stepError} />
              <div
                className={cn(
                  "mt-6 flex flex-col gap-3 border-t border-ink-100 pt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-5 lg:pt-5"
                )}
              >
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className={cn(
                    "order-2 h-12 rounded-xl border border-ink-200 bg-white px-5 text-sm font-semibold text-ink-800 transition hover:border-ink-300 hover:bg-ink-100/80 sm:order-1",
                    step === 0 && "pointer-events-none opacity-40"
                  )}
                >
                  Back
                </button>
                {showNext ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="order-1 h-12 rounded-[0.95rem] border-2 border-black bg-cta px-6 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-cta-dark hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-dark sm:order-2 sm:ml-auto"
                  >
                    {nextLabel}
                  </button>
                ) : null}
              </div>
            </Card>
          </div>

          {step < LAST_STEP ? (
            <PlannerSummary
              answers={answers}
              currentStep={step}
              className="w-full shrink-0 lg:sticky lg:top-24 lg:max-w-sm"
            />
          ) : null}
        </div>
      </Container>
    </div>
  );
}
