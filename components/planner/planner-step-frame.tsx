import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PlannerStepFrameProps = {
  title: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Tighter vertical rhythm for dense steps (e.g. step 1 above the fold on desktop). */
  compact?: boolean;
};

export function PlannerStepFrame({
  title,
  description,
  children,
  className,
  compact
}: PlannerStepFrameProps) {
  return (
    <div className={cn(compact ? "space-y-5 lg:space-y-6" : "space-y-8", className)}>
      <header className={cn("space-y-2", compact && "space-y-1.5")}>
        <h1
          className={cn(
            "text-2xl font-semibold tracking-tight text-ink-900 sm:text-[1.65rem]",
            compact && "sm:text-[1.5rem] lg:text-[1.55rem]"
          )}
        >
          {title}
        </h1>
        {description != null && description !== "" ? (
          typeof description === "string" ? (
            <p
              className={cn(
                "max-w-2xl text-base leading-relaxed text-ink-600",
                compact && "text-[0.9375rem] leading-[1.55] lg:text-base lg:leading-relaxed"
              )}
            >
              {description}
            </p>
          ) : (
            <div
              className={cn(
                "max-w-2xl space-y-2 text-base leading-relaxed text-ink-600",
                compact && "text-[0.9375rem] leading-[1.55] lg:text-base lg:leading-relaxed"
              )}
            >
              {description}
            </div>
          )
        ) : null}
      </header>
      <div>{children}</div>
    </div>
  );
}
