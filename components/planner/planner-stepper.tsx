import { PLANNER_STEPS } from "@/lib/planner/constants";

type PlannerStepperProps = {
  currentIndex: number;
};

export function PlannerStepper({ currentIndex }: PlannerStepperProps) {
  const total = PLANNER_STEPS.length;
  const progress = Math.min(100, Math.round(((currentIndex + 1) / total) * 100));

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-medium text-ink-800">
          Step {currentIndex + 1} of {total}
        </p>
        <span className="text-sm text-ink-500 tabular-nums">{progress}%</span>
      </div>

      <div
        className="h-2 overflow-hidden rounded-full bg-ink-100"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Planner progress: step ${currentIndex + 1} of ${total}`}
      >
        <div
          className="h-full rounded-full bg-teal-600 transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
