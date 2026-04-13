"use client";

import { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button-link";

type StartPlannerLinkProps = {
  href?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function StartPlannerLink({
  href = "/planner",
  children = "Start planner",
  variant = "primary",
  size = "md",
  className
}: StartPlannerLinkProps) {
  return (
    <ButtonLink
      href={href}
      variant={variant}
      size={size}
      className={className}
      onClick={() => {
        if (typeof window === "undefined" || typeof window.gtag !== "function") {
          return;
        }

        window.gtag("event", "start_planner_click");
      }}
    >
      {children}
    </ButtonLink>
  );
}
