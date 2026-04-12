import Link from "next/link";

import { Container } from "@/components/ui/container";

export function PlannerMinimalFooter() {
  return (
    <footer className="mt-auto border-t border-ink-100 bg-white">
      <Container className="py-4">
        <nav
          aria-label="Site links"
          className="flex flex-wrap justify-center gap-x-6 gap-y-1 sm:justify-end"
        >
          <Link
            href="/privacy"
            className="text-xs font-medium text-ink-400 transition hover:text-ink-600"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-xs font-medium text-ink-400 transition hover:text-ink-600"
          >
            Contact
          </Link>
          <Link
            href="/how-it-works"
            className="text-xs font-medium text-ink-400 transition hover:text-ink-600"
          >
            How it works
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
