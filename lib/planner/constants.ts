import type {
  PlannerAnswers,
  PlannerStepMeta,
  UpgradeInterestId
} from "./types";

export const PLANNER_STEPS: PlannerStepMeta[] = [
  {
    id: "property",
    label: "Property",
    title: "Your property",
    description:
      "A few details about your home — this helps us understand what may suit."
  },
  {
    id: "current",
    label: "Current setup",
    title: "Current condition of the home",
    description:
      "Heating, BER, and the condition of the main fabric — this helps judge what may be realistic next."
  },
  {
    id: "interests",
    label: "Interests",
    title: "What would you like to improve?",
    description:
      "Choose anything you'd like to improve or learn more about — this helps shape your plan."
  },
  {
    id: "intent",
    label: "Readiness",
    title: "Timing and next steps",
    description:
      "No commitment — this only shows how ready you are to move from research to action."
  },
  {
    id: "partial",
    label: "Preview",
    title: "Your home snapshot",
    description: "A quick preview of what may suit your home."
  },
  {
    id: "lead",
    label: "Unlock plan",
    title: "Unlock your full retrofit plan",
    description:
      "Add your details to unlock the fuller summary, clearer next steps, and upgrade order."
  },
  {
    id: "full",
    label: "Full plan",
    title: "Your Retrofit Plan",
    description:
      "Your personalised retrofit plan — based on your answers. It’s guidance, not a grant decision."
  }
];

export const IRISH_COUNTIES = [
  "Carlow",
  "Cavan",
  "Clare",
  "Cork",
  "Donegal",
  "Dublin",
  "Galway",
  "Kerry",
  "Kildare",
  "Kilkenny",
  "Laois",
  "Leitrim",
  "Limerick",
  "Longford",
  "Louth",
  "Mayo",
  "Meath",
  "Monaghan",
  "Offaly",
  "Roscommon",
  "Sligo",
  "Tipperary",
  "Waterford",
  "Westmeath",
  "Wexford",
  "Wicklow"
] as const;

export const initialPlannerAnswers: PlannerAnswers = {
  propertyType: "",
  county: "",
  yearBuiltBand: "",
  homeownerStatus: "",
  heating: "",
  berStatus: "",
  berRatingBand: "",
  atticInsulation: "",
  wallInsulation: "",
  windowCondition: "",
  previousUpgrades: [],
  upgradeInterests: [],
  moveWithinSixMonths: "",
  timeline: "",
  budget: "",
  quotesOrInstallerDiscussions: "",
  openToQualifiedContact: "",
  leadName: "",
  leadEmail: "",
  leadPhone: "",
  consentContact: false
};

export const UPGRADE_INTEREST_OPTIONS: Array<{
  id: UpgradeInterestId;
  label: string;
}> = [
  { id: "heat_pump", label: "Heat pump" },
  { id: "attic_insulation", label: "Attic insulation" },
  { id: "wall_insulation", label: "Wall insulation" },
  { id: "windows_doors", label: "Windows and doors" },
  { id: "solar_pv", label: "Solar PV" },
  { id: "full_retrofit", label: "Whole-home upgrade (deep retrofit)" },
  { id: "not_sure", label: "Not sure yet" }
];
