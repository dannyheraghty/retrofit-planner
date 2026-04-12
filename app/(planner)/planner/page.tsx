import type { Metadata } from "next";

import { PlannerShell } from "@/components/planner/planner-shell";

export const metadata: Metadata = {
  title: "Retrofit planner",
  description:
    "Step through property details, current setup, upgrade interests, and intent to draft a neutral 2026 retrofit plan for Irish homes — not an eligibility decision."
};

export default function PlannerPage() {
  return <PlannerShell />;
}
