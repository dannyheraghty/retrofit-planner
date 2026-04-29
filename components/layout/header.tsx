import Link from "next/link";

import { StartPlannerLink } from "@/components/analytics/start-planner-link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#eeeeee] bg-white">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem] sm:gap-6">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-tight text-ink-900 transition hover:text-brand-700 sm:text-lg"
        >
          Retrofit Planner
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-medium text-ink-600 underline-offset-8 transition hover:text-ink-900 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <StartPlannerLink
          href="/planner"
          size="sm"
          className="rounded-xl px-4 shadow-none hover:translate-y-0 hover:shadow-none hover:bg-[#ea580c] sm:px-5"
        >
          Check your grants
        </StartPlannerLink>
      </Container>
    </header>
  );
}
