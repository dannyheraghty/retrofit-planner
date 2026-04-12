import { UPGRADE_INTEREST_OPTIONS } from "./constants";
import type {
  AtticInsulationStatus,
  BerRatingBand,
  BerStatus,
  HomeownerStatus,
  PropertyType,
  UpgradeInterestId,
  WallInsulationStatus,
  WindowCondition,
  YearBuiltBand
} from "./types";

type AtticNonEmpty = Exclude<AtticInsulationStatus, "">;

const propertyLabels: Record<Exclude<PropertyType, "">, string> = {
  detached: "Detached house",
  semi_detached: "Semi-detached house",
  terraced: "Terraced / townhouse",
  apartment: "Apartment / duplex",
  other_or_unsure: "Other / not sure"
};

const yearLabels: Record<Exclude<YearBuiltBand, "">, string> = {
  pre_1919: "Built before 1919",
  "1919_1945": "1919–1945",
  "1946_1960": "1946–1960",
  "1961_1980": "1961–1980",
  "1981_2000": "1981–2000",
  "2001_2010": "2001–2010",
  "2011_newer": "2011 or newer"
};

const berStatusLabels: Record<Exclude<BerStatus, "">, string> = {
  know_band: "Know my BER",
  rough_idea: "Rough idea (no certificate)",
  dont_know_yet: "Don’t know yet",
  assessment_booked: "BER assessment booked"
};

const berBandLabels: Record<Exclude<BerRatingBand, "">, string> = {
  a_or_b: "A or B",
  c: "C",
  d: "D",
  e: "E",
  f_or_g: "F or G",
  exempt: "Exempt / not on scale"
};

const atticLabels: Record<AtticNonEmpty, string> = {
  none_or_unknown: "Little or none — or not sure",
  some_but_patchy: "Some insulation, but patchy, thin, or draughty",
  upgraded_older: "Upgraded in the past — may not meet today’s levels",
  recent_or_well_insulated: "Recently improved or generally in good shape"
};

const wallLabels: Record<Exclude<WallInsulationStatus, "">, string> = {
  unknown: "Not sure what is in the walls",
  unlikely_or_none: "No clear insulation (likely none)",
  some_cavity_or_partial: "Some insulation work done (partial)",
  significant_upgrade: "Walls have been significantly upgraded"
};

const homeownerLabels: Record<Exclude<HomeownerStatus, "">, string> = {
  owner_occupier: "I live in the home (owner-occupier)",
  landlord: "I rent it out to tenants",
  other: "Other / not sure"
};

const windowLabels: Record<Exclude<WindowCondition, "">, string> = {
  mostly_single_glazed: "Mostly older windows (likely single-glazed or draughty)",
  mix_old_and_new: "Mix of older and newer glazing in different rooms",
  mostly_double_or_newer: "Mostly double-glazed or newer units throughout",
  not_sure: "Not sure"
};

const heatingLabels: Record<string, string> = {
  heat_pump: "Heat pump",
  gas_boiler: "Gas boiler",
  oil_boiler: "Oil boiler",
  solid_fuel: "Solid fuel",
  electric: "Electric",
  district: "District heating",
  other_unsure: "Other / not sure"
};

export function labelHeating(value: string): string {
  if (!value) return "—";
  return heatingLabels[value] ?? value;
}

export function labelHomeownerStatus(value: HomeownerStatus): string {
  if (!value) return "—";
  return homeownerLabels[value] ?? value;
}

export function labelPropertyType(value: PropertyType): string {
  if (!value) return "—";
  return propertyLabels[value] ?? value;
}

export function labelYearBand(value: YearBuiltBand): string {
  if (!value) return "—";
  return yearLabels[value] ?? value;
}

export function labelBerSummary(status: BerStatus, band: BerRatingBand): string {
  if (!status) return "—";
  if (status === "know_band" && band) return `${berStatusLabels.know_band}: ${berBandLabels[band]}`;
  if (status === "know_band") return berStatusLabels.know_band;
  return berStatusLabels[status as Exclude<BerStatus, "">] ?? status;
}

export function labelAttic(value: AtticInsulationStatus): string {
  if (!value) return "—";
  return atticLabels[value] ?? value;
}

export function labelWall(value: WallInsulationStatus): string {
  if (!value) return "—";
  return wallLabels[value] ?? value;
}

export function labelWindows(value: WindowCondition): string {
  if (!value) return "—";
  return windowLabels[value] ?? value;
}

export function labelUpgradeInterests(ids: UpgradeInterestId[]): string {
  if (ids.length === 0) return "—";
  const map = new Map(UPGRADE_INTEREST_OPTIONS.map((o) => [o.id, o.label]));
  return ids.map((id) => map.get(id) ?? id).join(", ");
}
