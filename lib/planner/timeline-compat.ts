// NOTE:
// This helper exists to maintain compatibility with legacy `moveWithinSixMonths` logic.
// The source of truth is now `timeline`.
// Any code that loads planner answers from storage should re-run this mapping
// to avoid stale or inconsistent values.

/** Maps `timeline` to legacy `moveWithinSixMonths` values (preview logic uses `timeline` only). */
export function moveWithinSixMonthsFromTimeline(timeline: string): string {
  switch (timeline) {
    case "asap":
    case "six_months":
      return "yes";
    case "one_year":
      return "no";
    case "researching":
      return "unsure";
    default:
      return "";
  }
}
