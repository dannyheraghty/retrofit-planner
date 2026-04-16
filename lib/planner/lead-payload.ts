import type { Database } from "@/lib/supabase";
import type { PlannerAnswers } from "@/lib/planner/types";

export type LeadInsertPayload = Database["public"]["Tables"]["leads"]["Insert"] & {
  source: string;
  landing_page: string;
  status: string;
  planner_version: string;
  full_name: string;
  email: string;
  phone: string;
  contact_consent: boolean;
  property_type: PlannerAnswers["propertyType"] | null;
  county: string | null;
  year_built_band: PlannerAnswers["yearBuiltBand"] | null;
  homeowner_status: PlannerAnswers["homeownerStatus"] | null;
  heating_system: string | null;
  ber_status: PlannerAnswers["berStatus"] | null;
  ber_rating_band: PlannerAnswers["berRatingBand"] | null;
  attic_insulation: PlannerAnswers["atticInsulation"] | null;
  wall_insulation: PlannerAnswers["wallInsulation"] | null;
  window_condition: PlannerAnswers["windowCondition"] | null;
  previous_upgrades: PlannerAnswers["previousUpgrades"];
  upgrade_interests: PlannerAnswers["upgradeInterests"];
  move_within_six_months: string | null;
  timeline: string | null;
  budget_band: string | null;
  quotes_or_installer_discussions: string | null;
  open_to_installer_contact: string | null;
  notes: string | null;
};

type LeadPayloadContext = {
  source: string;
  landingPage: string;
  status: string;
  plannerVersion: string;
};

function normalizeOptionalString(value: string): string | null {
  const normalized = value.trim();
  return normalized === "" ? null : normalized;
}

function normalizeRequiredString(value: string): string {
  return value.trim();
}

function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

function normalizeArray<T>(value: T[]): T[] {
  return value.filter(Boolean);
}

export function buildLeadInsertPayload(
  answers: PlannerAnswers,
  context: LeadPayloadContext
): LeadInsertPayload {
  return {
    source: normalizeRequiredString(context.source),
    landing_page: normalizeRequiredString(context.landingPage),
    status: normalizeRequiredString(context.status),
    planner_version: normalizeRequiredString(context.plannerVersion),
    full_name: normalizeRequiredString(answers.leadName),
    email: normalizeEmail(answers.leadEmail),
    phone: normalizeRequiredString(answers.leadPhone),
    contact_consent: answers.consentContact,
    property_type: normalizeOptionalString(answers.propertyType) as LeadInsertPayload["property_type"],
    county: normalizeOptionalString(answers.county),
    year_built_band: normalizeOptionalString(
      answers.yearBuiltBand
    ) as LeadInsertPayload["year_built_band"],
    homeowner_status: normalizeOptionalString(
      answers.homeownerStatus
    ) as LeadInsertPayload["homeowner_status"],
    heating_system: normalizeOptionalString(answers.heating),
    ber_status: normalizeOptionalString(answers.berStatus) as LeadInsertPayload["ber_status"],
    ber_rating_band: normalizeOptionalString(
      answers.berRatingBand
    ) as LeadInsertPayload["ber_rating_band"],
    attic_insulation: normalizeOptionalString(
      answers.atticInsulation
    ) as LeadInsertPayload["attic_insulation"],
    wall_insulation: normalizeOptionalString(
      answers.wallInsulation
    ) as LeadInsertPayload["wall_insulation"],
    window_condition: normalizeOptionalString(
      answers.windowCondition
    ) as LeadInsertPayload["window_condition"],
    previous_upgrades: normalizeArray(answers.previousUpgrades),
    upgrade_interests: normalizeArray(answers.upgradeInterests),
    move_within_six_months: normalizeOptionalString(answers.moveWithinSixMonths),
    timeline: normalizeOptionalString(answers.timeline),
    budget_band: normalizeOptionalString(answers.budget),
    quotes_or_installer_discussions: normalizeOptionalString(
      answers.quotesOrInstallerDiscussions
    ),
    open_to_installer_contact: normalizeOptionalString(answers.openToQualifiedContact),
    notes: null
  };
}
