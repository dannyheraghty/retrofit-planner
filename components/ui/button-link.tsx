import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variantClasses = {
  primary:
    "border-2 border-black bg-[#f97316] text-white shadow-[0_6px_16px_rgba(0,0,0,0.12)] hover:-translate-y-[2px] hover:bg-[#ea580c] hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)] focus-visible:outline-[#ea580c]",
  secondary:
    "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200 hover:bg-brand-100 focus-visible:outline-brand-700",
  ghost:
    "bg-transparent text-brand-600 hover:text-brand-700 focus-visible:outline-brand-700"
} as const;

const sizeClasses = {
  sm: "h-10 px-4 text-sm font-medium",
  md: "h-11 px-5 text-sm font-semibold sm:h-12 sm:px-6 sm:text-base",
  lg: "h-12 px-6 text-sm font-semibold sm:h-14 sm:px-8 sm:text-base"
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  onClick
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-[0.95rem] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
