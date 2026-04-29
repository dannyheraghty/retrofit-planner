import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white">
      <Container className="flex flex-col gap-8 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-lg font-semibold text-ink-900">
              Plan your home retrofit with clarity
            </p>
            <p className="text-sm leading-6 text-ink-600">
              Compare grants, costs, savings, and upgrade options before you
              spend money on retrofit work.
            </p>
            <p className="text-sm leading-6 text-ink-500">
              Not sure where to start?{" "}
              <Link
                href="/planner"
                className="font-medium text-ink-700 underline-offset-4 transition hover:text-ink-900 hover:underline"
              >
                Use the planner
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {siteConfig.footerGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-sm font-semibold tracking-tight text-ink-900">
                  {group.title}
                </p>
                <div className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-ink-600 transition hover:text-ink-900"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="border-t border-ink-200 pt-8 text-xs leading-6 text-ink-500">
          RetrofitPlanner.ie is not affiliated with SEAI and does not provide
          official eligibility decisions.
        </p>
      </Container>
    </footer>
  );
}
