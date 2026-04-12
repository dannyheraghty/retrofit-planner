import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[1.1rem] border border-ink-200 bg-white p-6 shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}

type CardContentProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function CardContent({
  title,
  description,
  eyebrow
}: CardContentProps) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-sm font-medium text-[#0f8f81]">{eyebrow}</p>
      ) : null}
      <h3 className="text-xl font-semibold tracking-tight text-ink-900">
        {title}
      </h3>
      <p className="text-sm leading-7 text-ink-500">{description}</p>
    </div>
  );
}
