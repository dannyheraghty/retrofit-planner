import { ReactNode } from "react";

import { PlannerFocusHeader } from "@/components/layout/planner-focus-header";
import { PlannerMinimalFooter } from "@/components/layout/planner-minimal-footer";

type PlannerLayoutProps = {
  children: ReactNode;
};

export default function PlannerLayout({ children }: PlannerLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <PlannerFocusHeader />
      <main className="flex-1">{children}</main>
      <PlannerMinimalFooter />
    </div>
  );
}
