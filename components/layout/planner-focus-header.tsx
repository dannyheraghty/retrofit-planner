import Link from "next/link";

import { Container } from "@/components/ui/container";

export function PlannerFocusHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-200 bg-white">
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-ink-900 transition hover:text-teal-700 sm:text-lg"
        >
          Retrofit Planner
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-ink-500 underline-offset-4 transition hover:text-ink-700 hover:underline"
        >
          Back to home
        </Link>
      </Container>
    </header>
  );
}
