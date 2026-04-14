import { Card } from "@/components/ui/card";
import {
  labelBerSummary,
  labelHeating,
  labelPropertyType,
  labelUpgradeInterests,
  labelYearBand
} from "@/lib/planner/labels";
import type { PlannerAnswers } from "@/lib/planner/types";
import { cn } from "@/lib/utils";

type PlannerSummaryProps = {
  answers: PlannerAnswers;
  currentStep: number;
  className?: string;
};

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-ink-100 py-3 last:border-0 last:pb-0 first:pt-0">
      <dt className="text-xs font-medium uppercase tracking-wide text-ink-400">
        {label}
      </dt>
      <dd className="text-sm font-medium text-ink-900">{value}</dd>
    </div>
  );
}

export function PlannerSummary({
  answers,
  currentStep,
  className
}: PlannerSummaryProps) {
  const countyLabel = answers.county || "—";

  const gated =
    currentStep >= 6
      ? "Full plan unlocked (mock)"
      : currentStep === 5
        ? "Preview snapshot ready - unlock full plan next"
        : currentStep >= 4
          ? "Preview — fuller detail after you unlock"
          : "In progress";

  return (
    <aside className={cn(className)}>
      <Card className="p-4 sm:p-5 lg:p-5">
        <div className="space-y-1 pb-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Your answers
          </p>
          <p className="text-sm text-ink-600">
            A live snapshot as you go — not a grant decision.
          </p>
        </div>
        <dl>
          <SummaryRow label="Property" value={labelPropertyType(answers.propertyType)} />
          <SummaryRow label="County" value={countyLabel} />
          <SummaryRow label="Built" value={labelYearBand(answers.yearBuiltBand)} />
          <SummaryRow label="Main heating" value={labelHeating(answers.heating)} />
          <SummaryRow
            label="BER"
            value={labelBerSummary(answers.berStatus, answers.berRatingBand)}
          />
          <SummaryRow
            label="Interests"
            value={labelUpgradeInterests(answers.upgradeInterests)}
          />
        </dl>
        <p
          className={cn(
            "mt-5 rounded-xl px-3 py-2 text-xs font-medium",
            currentStep === 5
              ? "border border-teal-200 bg-teal-50 text-teal-800"
              : "bg-ink-100 text-ink-700"
          )}
        >
          {gated}
        </p>
      </Card>
    </aside>
  );
}
