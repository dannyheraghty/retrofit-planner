import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PlannerFieldProps = {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
  required?: boolean;
};

export function PlannerField({
  label,
  htmlFor,
  hint,
  children,
  required
}: PlannerFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-ink-800"
      >
        {label}
        {required ? <span className="text-teal-600"> *</span> : null}
      </label>
      {children}
      {hint ? <p className="text-sm text-ink-500">{hint}</p> : null}
    </div>
  );
}

type PlannerInlineErrorProps = {
  id: string;
  message: string | null;
};

export function PlannerInlineError({ id, message }: PlannerInlineErrorProps) {
  if (!message) return null;
  return (
    <p id={id} className={cn("text-sm font-medium text-[#b45309]")} role="alert">
      {message}
    </p>
  );
}
