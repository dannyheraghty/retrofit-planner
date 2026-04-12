import { cn } from "@/lib/utils";

type Step = {
  label: string;
};

type StepperProps = {
  steps: Step[];
  currentStep: number;
};

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <ol className="grid gap-3 sm:grid-cols-3">
      {steps.map((step, index) => {
        const isComplete = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <li
            key={step.label}
            className={cn(
              "rounded-[1.1rem] bg-white px-4 py-4 transition",
              isCurrent ? "border-2 border-brand-600" : "border border-ink-200"
            )}
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold",
                  isCurrent && "bg-brand-600 text-white",
                  isComplete && "bg-ink-900 text-white",
                  !isCurrent && !isComplete && "bg-white text-ink-500"
                )}
              >
                {index + 1}
              </span>
              <span className="text-sm font-medium text-ink-800">{step.label}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
