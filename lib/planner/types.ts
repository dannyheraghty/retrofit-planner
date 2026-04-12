export type PropertyType =
  | "detached"
  | "semi_detached"
  | "terraced"
  | "apartment"
  | "other_or_unsure"
  | "";

export type HomeownerStatus = "owner_occupier" | "landlord" | "other" | "";

export type YearBuiltBand =
  | "pre_1919"
  | "1919_1945"
  | "1946_1960"
  | "1961_1980"
  | "1981_2000"
  | "2001_2010"
  | "2011_newer"
  | "";

/** Do you already know your BER (rating on a certificate)? */
export type BerStatus =
  | "know_band"
  | "rough_idea"
  | "dont_know_yet"
  | "assessment_booked"
  | "";

/** Approximate band when homeowner knows their BER — grouped for practical use. */
export type BerRatingBand =
  | "a_or_b"
  | "c"
  | "d"
  | "e"
  | "f_or_g"
  | "exempt"
  | "";

export type AtticInsulationStatus =
  | AtticInsulationStatusKnown
  | "";

export type AtticInsulationStatusKnown =
  | "none_or_unknown"
  | "some_but_patchy"
  | "upgraded_older"
  | "recent_or_well_insulated";

export type WallInsulationStatus = WallInsulationStatusKnown | "";

export type WallInsulationStatusKnown =
  | "unknown"
  | "unlikely_or_none"
  | "some_cavity_or_partial"
  | "significant_upgrade";

export type WindowCondition = WindowConditionKnown | "";

export type WindowConditionKnown =
  | "mostly_single_glazed"
  | "mix_old_and_new"
  | "mostly_double_or_newer"
  | "not_sure";

export type UpgradeInterestId =
  | "heat_pump"
  | "attic_insulation"
  | "wall_insulation"
  | "windows_doors"
  | "solar_pv"
  | "full_retrofit"
  | "not_sure";

export type PreviousUpgradeId =
  | "attic"
  | "windows"
  | "wall"
  | "heat_pump"
  | "solar"
  | "heating_upgrade"
  | "none_yet";

export type PlannerAnswers = {
  propertyType: PropertyType;
  county: string;
  yearBuiltBand: YearBuiltBand;
  homeownerStatus: HomeownerStatus;
  heating: string;
  berStatus: BerStatus;
  berRatingBand: BerRatingBand;
  atticInsulation: AtticInsulationStatus;
  wallInsulation: WallInsulationStatus;
  windowCondition: WindowCondition;
  previousUpgrades: PreviousUpgradeId[];
  upgradeInterests: UpgradeInterestId[];
  // NOTE:
  // This field is now derived from `timeline` and is no longer directly selected by the user.
  // It is kept for compatibility with earlier logic.
  // When hydrating or restoring planner state, ensure this value is synchronized
  // using `moveWithinSixMonthsFromTimeline`.
  // Consider removing or centralizing this derivation in future refactoring.
  moveWithinSixMonths: string;
  timeline: string;
  budget: string;
  quotesOrInstallerDiscussions: string;
  // NOTE:
  // This field now represents the user's preferred next step (e.g. talk to a professional,
  // review options independently, or just explore).
  // It is NOT a consent flag for being contacted.
  // Do not use this as a legal/marketing consent signal.
  // Actual contact consent is captured separately via `consentContact` in Step 6.
  // If exporting to CRM/contractor systems, consider renaming or remapping this field.
  openToQualifiedContact: string;
  leadName: string;
  leadEmail: string;
  leadPhone: string;
  consentContact: boolean;
};

export type PlannerStepMeta = {
  id: string;
  label: string;
  title: string;
  description: string;
};
