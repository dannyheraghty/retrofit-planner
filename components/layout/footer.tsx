import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white">
      <Container className="flex flex-col gap-8 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-base font-semibold text-ink-900">
              Neutral retrofit guidance for Irish homeowners.
            </p>
            <p className="text-sm leading-6 text-ink-600">
              RetrofitPlanner.ie helps people understand upgrades, grants, and
              next steps using practical guidance rather than official
              decisions.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {siteConfig.footerItems.map((item) => (
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

        <p className="border-t border-ink-200 pt-8 text-sm leading-6 text-ink-500">
          RetrofitPlanner.ie provides practical guidance for Irish homeowners.
          It is not affiliated with SEAI and does not make official eligibility
          decisions.
        </p>
      </Container>
    </footer>
  );
}
