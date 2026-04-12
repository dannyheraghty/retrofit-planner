import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SectionProps = {
  children?: ReactNode;
  className?: string;
  headerClassName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function Section({
  children,
  className,
  headerClassName,
  eyebrow,
  title,
  description,
  titleClassName,
  descriptionClassName
}: SectionProps) {
  return (
    <section className={cn("py-12 sm:py-14 lg:py-16", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mb-6 max-w-3xl space-y-3 sm:mb-8",
              headerClassName
            )}
          >
            {eyebrow ? (
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand-600">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                className={cn(
                  "text-3xl font-semibold tracking-tight sm:text-[2.4rem]",
                  titleClassName ?? "text-ink-900"
                )}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className={cn(
                  "text-base leading-7 sm:text-lg",
                  descriptionClassName ?? "text-ink-500"
                )}
              >
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
