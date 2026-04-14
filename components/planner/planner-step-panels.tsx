"use client";

import type { Dispatch, SetStateAction } from "react";
import {
  ArrowRight,
  Building,
  Building2,
  Check,
  CircleHelp,
  Clock3,
  DoorOpen,
  Euro,
  Flame,
  Home,
  House,
  Layers,
  MessageCircleMore,
  Route,
  Wrench,
  Sun
} from "lucide-react";

import {
  IRISH_COUNTIES,
  PLANNER_STEPS,
  UPGRADE_INTEREST_OPTIONS
} from "@/lib/planner/constants";
import {
  buildFullRetrofitPlan,
  buildPartialPreview,
  grantCapEuro,
  type PreviewUpgradeCard
} from "@/lib/planner/partial-preview";
import { moveWithinSixMonthsFromTimeline } from "@/lib/planner/timeline-compat";
import type {
  PlannerAnswers,
  PreviousUpgradeId,
  PropertyType,
  UpgradeInterestId,
  YearBuiltBand
} from "@/lib/planner/types";
import { PlannerField } from "@/components/planner/planner-field";
import { PlannerStepFrame } from "@/components/planner/planner-step-frame";
import { cn } from "@/lib/utils";

const HEATING_OPTIONS = [
  { value: "heat_pump", label: "Air-to-water or other heat pump" },
  { value: "gas_boiler", label: "Gas boiler" },
  { value: "oil_boiler", label: "Oil boiler" },
  { value: "solid_fuel", label: "Solid fuel stove or open fire" },
  { value: "electric", label: "Electric (storage heaters, panels, etc.)" },
  { value: "district", label: "District heating / communal system" },
  { value: "other_unsure", label: "Other / not sure" }
] as const;

const BER_STATUS_OPTIONS = [
  {
    value: "know_band",
    label: "Yes — I have a BER certificate and know the band"
  },
  {
    value: "rough_idea",
    label: "I don’t have a certificate, but I have a rough idea"
  },
  {
    value: "dont_know_yet",
    label: "Not yet — I haven’t checked or don’t have one"
  },
  {
    value: "assessment_booked",
    label: "I have a BER assessment booked or planned soon"
  }
] as const;

const BER_BAND_OPTIONS = [
  { value: "a_or_b", label: "A or B (best grades)" },
  { value: "c", label: "C" },
  { value: "d", label: "D" },
  { value: "e", label: "E" },
  { value: "f_or_g", label: "F or G" },
  {
    value: "exempt",
    label: "Marked exempt or not on the usual A–G scale"
  }
] as const;

const ATTIC_OPTIONS = [
  {
    value: "none_or_unknown",
    label: "Little or none — or not sure"
  },
  {
    value: "some_but_patchy",
    label: "Some insulation, but patchy, thin, or draughty"
  },
  {
    value: "upgraded_older",
    label: "Upgraded in the past — may not meet today’s levels"
  },
  {
    value: "recent_or_well_insulated",
    label: "Recently improved or generally in good shape"
  }
] as const;

const WALL_OPTIONS = [
  { value: "unknown", label: "Not sure what is in the walls" },
  {
    value: "unlikely_or_none",
    label: "No clear insulation (likely none)"
  },
  {
    value: "some_cavity_or_partial",
    label: "Some insulation work done (partial)"
  },
  {
    value: "significant_upgrade",
    label: "Walls have been significantly upgraded"
  }
] as const;

const WINDOW_OPTIONS = [
  {
    value: "mostly_single_glazed",
    label: "Mostly older windows (likely single-glazed or draughty)"
  },
  {
    value: "mix_old_and_new",
    label: "Mix of older and newer glazing in different rooms"
  },
  {
    value: "mostly_double_or_newer",
    label: "Mostly double-glazed or newer units throughout"
  },
  { value: "not_sure", label: "Not sure" }
] as const;

const PREVIOUS_UPGRADE_OPTIONS = [
  { id: "attic" as const, label: "Attic or roof insulation" },
  { id: "windows" as const, label: "Windows or external doors" },
  { id: "wall" as const, label: "Wall insulation (any type)" },
  { id: "heat_pump" as const, label: "Heat pump installed" },
  { id: "solar" as const, label: "Solar PV" },
  {
    id: "heating_upgrade" as const,
    label: "Heating system upgrade (boiler replacement)"
  },
  { id: "none_yet" as const, label: "None of these yet" }
] as const;

const PREVIOUS_UPGRADE_CARD_ICONS: Record<PreviousUpgradeId, CardIcon> = {
  attic: Layers,
  windows: DoorOpen,
  wall: House,
  heat_pump: Flame,
  solar: Sun,
  heating_upgrade: Wrench,
  none_yet: CircleHelp
};

const TIMELINE_OPTIONS = [
  {
    value: "asap",
    label: "As soon as it’s practical — ready to line things up"
  },
  { value: "six_months", label: "Within the next 6 months" },
  { value: "one_year", label: "Within the next year" },
  { value: "researching", label: "Still researching — no fixed date" }
] as const;

const BUDGET_OPTIONS = [
  { value: "under_5k", label: "Under €5,000" },
  { value: "5k_15k", label: "About €5,000 – €15,000" },
  { value: "15k_40k", label: "About €15,000 – €40,000" },
  { value: "40k_plus", label: "€40,000 or more" },
  { value: "unsure", label: "Prefer not to say / not sure yet" }
] as const;

const QUOTES_INSTALLER_OPTIONS = [
  { value: "none", label: "Haven’t spoken to anyone yet" },
  {
    value: "informal",
    label: "Just researching / early conversations"
  },
  { value: "one_quote", label: "One quote received" },
  { value: "several_quotes", label: "Comparing multiple quotes" },
  {
    value: "planning",
    label: "Planning to contact installers soon"
  }
] as const;

/** Stored values yes | maybe | no — readiness / next-step preference, not marketing consent. */
const NEXT_STEP_PREFERENCE_OPTIONS = [
  {
    value: "yes",
    label: "I’d like to speak to a professional about next steps"
  },
  {
    value: "maybe",
    label: "I’d prefer to review options on my own first"
  },
  { value: "no", label: "Just exploring for now" }
] as const;

const inputClass =
  "w-full rounded-xl border border-ink-200 bg-white px-3 py-2.5 text-base text-ink-900 shadow-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200";

const chevronBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236a665f'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`;

export type PlannerPanelProps = {
  answers: PlannerAnswers;
  setAnswers: Dispatch<SetStateAction<PlannerAnswers>>;
  onResetPlan?: () => void;
};

function selectClassName() {
  return cn(
    inputClass,
    "appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10"
  );
}

type CardIcon = typeof House;

type PlannerChoiceOption<T extends string> = {
  value: T;
  label: string;
  Icon: CardIcon;
};

function PlannerSingleSelectCard<T extends string>({
  id,
  name,
  option,
  selected,
  onSelect
}: {
  id: string;
  name: string;
  option: PlannerChoiceOption<T>;
  selected: boolean;
  onSelect: (value: T) => void;
}) {
  const Icon = option.Icon;
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex h-full cursor-pointer items-center gap-3 rounded-xl border bg-white px-3.5 py-3 text-sm font-medium text-ink-800 shadow-sm transition",
        "hover:border-teal-300 hover:shadow",
        "focus-within:ring-2 focus-within:ring-teal-300 focus-within:ring-offset-2",
        selected
          ? "border-teal-600 bg-teal-50 text-ink-900 shadow-md"
          : "border-ink-200"
      )}
    >
      <input
        id={id}
        name={name}
        type="radio"
        className="peer sr-only"
        checked={selected}
        onChange={() => onSelect(option.value)}
      />
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-white",
          selected ? "border-teal-200 text-teal-700" : "border-ink-200 text-ink-500"
        )}
      >
        <Icon aria-hidden className="h-4 w-4" />
      </span>
      <span>{option.label}</span>
    </label>
  );
}

function PlannerMultiSelectCard<T extends string>({
  id,
  option,
  selected,
  disabled,
  onToggle,
  showSelectedCheck = false,
  className
}: {
  id: string;
  option: PlannerChoiceOption<T>;
  selected: boolean;
  disabled?: boolean;
  onToggle: (value: T) => void;
  showSelectedCheck?: boolean;
  className?: string;
}) {
  const Icon = option.Icon;
  return (
    <label
      htmlFor={id}
      className={cn(
        "relative flex items-center gap-3 rounded-xl border bg-white px-3.5 py-3 text-sm font-medium text-ink-800 shadow-sm transition duration-150",
        disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer hover:border-teal-300 hover:shadow",
        "focus-within:ring-2 focus-within:ring-teal-300 focus-within:ring-offset-2",
        selected
          ? "border-2 border-teal-600 bg-teal-50/80 text-ink-900 shadow-md"
          : "border-ink-200",
        selected && !disabled && "scale-[1.01]",
        className
      )}
    >
      <input
        id={id}
        type="checkbox"
        className="peer sr-only"
        checked={selected}
        disabled={disabled}
        onChange={() => onToggle(option.value)}
      />
      {showSelectedCheck ? (
        <span
          className={cn(
            "absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full border text-[11px] transition-opacity duration-150",
            selected
              ? "border-teal-700 bg-teal-700 text-white opacity-100"
              : "border-ink-300 bg-white text-ink-500 opacity-80"
          )}
          aria-hidden
        >
          <Check className="h-3.5 w-3.5" />
        </span>
      ) : null}
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-white",
          selected ? "border-teal-200 text-teal-700" : "border-ink-200 text-ink-500"
        )}
      >
        <Icon aria-hidden className="h-4 w-4" />
      </span>
      <span>{option.label}</span>
    </label>
  );
}

const PROPERTY_TYPE_CARD_OPTIONS: PlannerChoiceOption<PropertyType>[] = [
  { value: "detached", label: "Detached house", Icon: House },
  { value: "semi_detached", label: "Semi-detached house", Icon: Home },
  { value: "terraced", label: "Terraced / townhouse", Icon: Building2 },
  { value: "apartment", label: "Apartment / duplex", Icon: Building },
  { value: "other_or_unsure", label: "Other / not sure", Icon: CircleHelp }
];

const UPGRADE_INTEREST_CARD_ICONS: Record<UpgradeInterestId, CardIcon> = {
  heat_pump: Flame,
  attic_insulation: Layers,
  wall_insulation: House,
  windows_doors: DoorOpen,
  solar_pv: Sun,
  full_retrofit: Wrench,
  not_sure: CircleHelp
};

const TIMELINE_CARD_ICONS: Record<(typeof TIMELINE_OPTIONS)[number]["value"], CardIcon> = {
  asap: Clock3,
  six_months: Clock3,
  one_year: Clock3,
  researching: Clock3
};

const QUOTES_INSTALLER_CARD_ICONS: Record<
  (typeof QUOTES_INSTALLER_OPTIONS)[number]["value"],
  CardIcon
> = {
  none: MessageCircleMore,
  informal: MessageCircleMore,
  one_quote: MessageCircleMore,
  several_quotes: MessageCircleMore,
  planning: MessageCircleMore
};

const BUDGET_CARD_ICONS: Record<(typeof BUDGET_OPTIONS)[number]["value"], CardIcon> = {
  under_5k: Euro,
  "5k_15k": Euro,
  "15k_40k": Euro,
  "40k_plus": Euro,
  unsure: Euro
};

const NEXT_STEP_PREFERENCE_CARD_ICONS: Record<
  (typeof NEXT_STEP_PREFERENCE_OPTIONS)[number]["value"],
  CardIcon
> = {
  yes: Route,
  maybe: ArrowRight,
  no: CircleHelp
};

export function StepPropertyProfile({ answers, setAnswers }: PlannerPanelProps) {
  const meta = PLANNER_STEPS[0];
  const hasPropertyType = Boolean(answers.propertyType);
  const hasCounty = Boolean(answers.county);
  const hasYearBuilt = Boolean(answers.yearBuiltBand);
  const revealClass = (isVisible: boolean) =>
    cn(
      "overflow-hidden transition-all duration-200 ease-out",
      isVisible
        ? "max-h-[220px] translate-y-0 opacity-100"
        : "max-h-0 -translate-y-1 opacity-0"
    );

  return (
    <PlannerStepFrame title={meta.title} description={meta.description} compact>
      <div className="space-y-6">
        <div className="space-y-5">
          <PlannerField
            label="What type of home do you have?"
            htmlFor="property-type-detached"
            hint="Choose the closest match — apartments and houses follow different grant caps for some measures."
            required
          >
            <div
              id="property-type"
              role="radiogroup"
              aria-label="What type of home do you have?"
              className="grid gap-3 sm:grid-cols-2 sm:gap-3.5"
            >
              {PROPERTY_TYPE_CARD_OPTIONS.map((option) => (
                <PlannerSingleSelectCard
                  key={option.value}
                  id={`property-type-${option.value}`}
                  name="property-type"
                  option={option}
                  selected={answers.propertyType === option.value}
                  onSelect={(propertyType) => setAnswers((a) => ({ ...a, propertyType }))}
                />
              ))}
            </div>
          </PlannerField>

          <div className={revealClass(hasPropertyType)} aria-hidden={!hasPropertyType}>
            <PlannerField
              label="County"
              htmlFor="county"
              hint="Grants are national; we only use this for local context later."
              required
            >
              <select
                id="county"
                disabled={!hasPropertyType}
                className={cn(selectClassName(), !hasPropertyType && "pointer-events-none")}
                style={{ backgroundImage: chevronBg }}
                value={answers.county}
                onChange={(e) => setAnswers((a) => ({ ...a, county: e.target.value }))}
              >
                <option value="">Choose…</option>
                {IRISH_COUNTIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </PlannerField>
          </div>

          <div className={revealClass(hasCounty)} aria-hidden={!hasCounty}>
            <PlannerField
              label="When was your home built?"
              htmlFor="year-band"
              hint="Pick the era that best matches — exact year is not needed."
              required
            >
              <select
                id="year-band"
                disabled={!hasCounty}
                className={cn(selectClassName(), !hasCounty && "pointer-events-none")}
                style={{ backgroundImage: chevronBg }}
                value={answers.yearBuiltBand}
                onChange={(e) =>
                  setAnswers((a) => ({
                    ...a,
                    yearBuiltBand: e.target.value as YearBuiltBand
                  }))
                }
              >
                <option value="">Choose…</option>
                <option value="pre_1919">Built before 1919</option>
                <option value="1919_1945">1919–1945</option>
                <option value="1946_1960">1946–1960</option>
                <option value="1961_1980">1961–1980</option>
                <option value="1981_2000">1981–2000</option>
                <option value="2001_2010">2001–2010</option>
                <option value="2011_newer">2011 or newer</option>
              </select>
            </PlannerField>
          </div>

          <div className={revealClass(hasYearBuilt)} aria-hidden={!hasYearBuilt}>
            <PlannerField
              label="What best describes your situation?"
              htmlFor="homeowner"
              hint="Some supports differ depending on how the home is used."
              required
            >
              <select
                id="homeowner"
                disabled={!hasYearBuilt}
                className={cn(selectClassName(), !hasYearBuilt && "pointer-events-none")}
                style={{ backgroundImage: chevronBg }}
                value={answers.homeownerStatus}
                onChange={(e) =>
                  setAnswers((a) => ({
                    ...a,
                    homeownerStatus: e.target.value as PlannerAnswers["homeownerStatus"]
                  }))
                }
              >
                <option value="">Choose…</option>
                <option value="owner_occupier">I live in the home (owner-occupier)</option>
                <option value="landlord">I rent it out to tenants</option>
                <option value="other">Other / not sure</option>
              </select>
            </PlannerField>
          </div>
        </div>
      </div>
    </PlannerStepFrame>
  );
}

export function StepCurrentHome({ answers, setAnswers }: PlannerPanelProps) {
  const meta = PLANNER_STEPS[1];
  const showBerBand = answers.berStatus === "know_band";
  const hasNoneYet = answers.previousUpgrades.includes("none_yet");
  const hasOtherPrev = answers.previousUpgrades.some((x) => x !== "none_yet");
  const hasHeatingAndBerStatus = Boolean(answers.heating) && Boolean(answers.berStatus);
  const sectionAComplete =
    hasHeatingAndBerStatus && (!showBerBand || Boolean(answers.berRatingBand));
  const showFabricSection = sectionAComplete;
  const revealClass = (isVisible: boolean) =>
    cn(
      "overflow-hidden transition-all duration-300 ease-out",
      isVisible
        ? "max-h-[1200px] translate-y-0 opacity-100"
        : "max-h-0 -translate-y-1.5 opacity-0"
    );

  const togglePrevious = (id: PreviousUpgradeId) => {
    setAnswers((a) => {
      let next: PreviousUpgradeId[] = [...a.previousUpgrades];
      if (id === "none_yet") {
        next = next.includes("none_yet") ? [] : ["none_yet"];
      } else {
        next = next.filter((x) => x !== "none_yet");
        if (next.includes(id)) next = next.filter((x) => x !== id);
        else next = [...next, id];
      }
      return { ...a, previousUpgrades: next };
    });
  };

  return (
    <PlannerStepFrame
      title={meta.title}
      description={<p>This helps us judge what may be realistic next.</p>}
    >
      <div className="space-y-6 sm:space-y-7">
        <section className="space-y-4 rounded-2xl border border-ink-200 bg-white px-4 py-4 sm:px-5 sm:py-5">
          <div className="space-y-1">
            <h2 className="text-base font-semibold text-ink-900">Your home today</h2>
            <p className="text-sm text-ink-600">Start with heating and BER.</p>
          </div>
          <PlannerField
            label="What is your main heating system?"
            htmlFor="heating"
            hint="Choose the system you rely on most through winter."
            required
          >
            <select
              id="heating"
              className={selectClassName()}
              style={{ backgroundImage: chevronBg }}
              value={answers.heating}
              onChange={(e) => setAnswers((a) => ({ ...a, heating: e.target.value }))}
            >
              <option value="">Choose…</option>
              {HEATING_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </PlannerField>

          <PlannerField
            label="Do you already know your BER?"
            htmlFor="ber-status"
            hint="BER is your Building Energy Rating on the certificate."
            required
          >
            <select
              id="ber-status"
              className={selectClassName()}
              style={{ backgroundImage: chevronBg }}
              value={answers.berStatus}
              onChange={(e) => {
                const value = e.target.value as PlannerAnswers["berStatus"];
                setAnswers((a) => {
                  if (value !== "know_band") {
                    return { ...a, berStatus: value, berRatingBand: "" };
                  }
                  if (a.berStatus !== "know_band") {
                    return { ...a, berStatus: value, berRatingBand: "" };
                  }
                  return { ...a, berStatus: value };
                });
              }}
            >
              <option value="">Choose…</option>
              {BER_STATUS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </PlannerField>

          {showBerBand ? (
            <PlannerField
              label="Which band is on the certificate?"
              htmlFor="ber-band"
              hint="Pick the BER band shown on your cert."
              required
            >
              <select
                id="ber-band"
                className={selectClassName()}
                style={{ backgroundImage: chevronBg }}
                value={answers.berRatingBand}
                onChange={(e) =>
                  setAnswers((a) => ({
                    ...a,
                    berRatingBand: e.target.value as PlannerAnswers["berRatingBand"]
                  }))
                }
              >
                <option value="">Choose…</option>
                {BER_BAND_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </PlannerField>
          ) : null}
        </section>

        <div className={revealClass(showFabricSection)} aria-hidden={!showFabricSection}>
          <section className="space-y-4 rounded-2xl border border-ink-200 bg-white px-4 py-4 sm:px-5 sm:py-5">
            <div className="space-y-1">
              <h2 className="text-base font-semibold text-ink-900">Fabric and upgrades</h2>
              <p className="text-sm text-ink-600">
                Now tell us about insulation, windows, and any work already done.
              </p>
            </div>
            <PlannerField
              label="Attic or roof-space insulation"
              htmlFor="attic"
              required
            >
              <select
                id="attic"
                className={selectClassName()}
                style={{ backgroundImage: chevronBg }}
                value={answers.atticInsulation}
                onChange={(e) =>
                  setAnswers((a) => ({
                    ...a,
                    atticInsulation: e.target.value as PlannerAnswers["atticInsulation"]
                  }))
                }
              >
                <option value="">Choose…</option>
                {ATTIC_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </PlannerField>

            <PlannerField label="Wall insulation" htmlFor="wall" required>
              <select
                id="wall"
                className={selectClassName()}
                style={{ backgroundImage: chevronBg }}
                value={answers.wallInsulation}
                onChange={(e) =>
                  setAnswers((a) => ({
                    ...a,
                    wallInsulation: e.target.value as PlannerAnswers["wallInsulation"]
                  }))
                }
              >
                <option value="">Choose…</option>
                {WALL_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </PlannerField>

            <PlannerField
              label="Windows (glazing and drafts)"
              htmlFor="windows"
              required
            >
              <select
                id="windows"
                className={selectClassName()}
                style={{ backgroundImage: chevronBg }}
                value={answers.windowCondition}
                onChange={(e) =>
                  setAnswers((a) => ({
                    ...a,
                    windowCondition: e.target.value as PlannerAnswers["windowCondition"]
                  }))
                }
              >
                <option value="">Choose…</option>
                {WINDOW_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </PlannerField>

            <PlannerField
              label="Retrofit work already completed"
              htmlFor="prev-attic"
              hint="Choose all that apply, or select “None of these yet”."
              required
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {PREVIOUS_UPGRADE_OPTIONS.map((o) => {
                  const checked = answers.previousUpgrades.includes(o.id);
                  const disabled =
                    (o.id === "none_yet" && hasOtherPrev) ||
                    (o.id !== "none_yet" && hasNoneYet);
                  const option: PlannerChoiceOption<PreviousUpgradeId> = {
                    value: o.id,
                    label: o.label,
                    Icon: PREVIOUS_UPGRADE_CARD_ICONS[o.id]
                  };
                  return (
                    <PlannerMultiSelectCard
                      key={o.id}
                      id={`prev-${o.id}`}
                      option={option}
                      selected={checked}
                      disabled={disabled}
                      onToggle={togglePrevious}
                    />
                  );
                })}
              </div>
            </PlannerField>
          </section>
        </div>
      </div>
    </PlannerStepFrame>
  );
}

export function StepUpgradeInterest({ answers, setAnswers }: PlannerPanelProps) {
  const meta = PLANNER_STEPS[2];
  const interestById = Object.fromEntries(UPGRADE_INTEREST_OPTIONS.map((o) => [o.id, o])) as Record<
    UpgradeInterestId,
    (typeof UPGRADE_INTEREST_OPTIONS)[number]
  >;
  const groupedInterestIds: UpgradeInterestId[][] = [
    ["heat_pump", "solar_pv"],
    ["attic_insulation", "wall_insulation", "windows_doors"]
  ];
  const standaloneInterestIds: UpgradeInterestId[] = ["full_retrofit"];
  const toggleInterest = (id: UpgradeInterestId) => {
    setAnswers((a) => {
      if (id === "not_sure") {
        const has = a.upgradeInterests.includes("not_sure");
        return {
          ...a,
          upgradeInterests: has ? [] : ["not_sure"]
        };
      }
      let next = a.upgradeInterests.filter((x) => x !== "not_sure");
      if (next.includes(id)) next = next.filter((x) => x !== id);
      else next = [...next, id];
      return { ...a, upgradeInterests: next };
    });
  };

  return (
    <PlannerStepFrame title={meta.title} description={meta.description}>
      <div className="space-y-5">
        <section className="space-y-2.5" aria-label="Energy and heating options">
          <p className="text-xs font-semibold tracking-wide text-ink-600">Energy & heating</p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {groupedInterestIds[0].map((id) => {
              const o = interestById[id];
              const checked = answers.upgradeInterests.includes(o.id);
              const muted =
                answers.upgradeInterests.includes("not_sure") && o.id !== "not_sure";
              const option: PlannerChoiceOption<UpgradeInterestId> = {
                value: o.id,
                label: o.label,
                Icon: UPGRADE_INTEREST_CARD_ICONS[o.id]
              };
              return (
                <PlannerMultiSelectCard
                  key={o.id}
                  id={`upgrade-interest-${o.id}`}
                  option={option}
                  selected={checked}
                  disabled={muted}
                  onToggle={toggleInterest}
                  showSelectedCheck
                />
              );
            })}
          </div>
        </section>

        <section className="space-y-2.5 pt-1" aria-label="Insulation and fabric options">
          <p className="text-xs font-semibold tracking-wide text-ink-600">Insulation & fabric</p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {groupedInterestIds[1].map((id) => {
              const o = interestById[id];
              const checked = answers.upgradeInterests.includes(o.id);
              const muted =
                answers.upgradeInterests.includes("not_sure") && o.id !== "not_sure";
              const option: PlannerChoiceOption<UpgradeInterestId> = {
                value: o.id,
                label: o.label,
                Icon: UPGRADE_INTEREST_CARD_ICONS[o.id]
              };
              return (
                <PlannerMultiSelectCard
                  key={o.id}
                  id={`upgrade-interest-${o.id}`}
                  option={option}
                  selected={checked}
                  disabled={muted}
                  onToggle={toggleInterest}
                  showSelectedCheck
                />
              );
            })}
          </div>
        </section>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {standaloneInterestIds.map((id) => {
            const o = interestById[id];
            const checked = answers.upgradeInterests.includes(o.id);
            const muted =
              answers.upgradeInterests.includes("not_sure") && o.id !== "not_sure";
            const option: PlannerChoiceOption<UpgradeInterestId> = {
              value: o.id,
              label: o.label,
              Icon: UPGRADE_INTEREST_CARD_ICONS[o.id]
            };
            return (
              <PlannerMultiSelectCard
                key={o.id}
                id={`upgrade-interest-${o.id}`}
                option={option}
                selected={checked}
                disabled={muted}
                onToggle={toggleInterest}
                showSelectedCheck
                className="sm:col-span-2"
              />
            );
          })}
        </div>

        <div className="pt-1">
          {(() => {
            const o = interestById.not_sure;
            const checked = answers.upgradeInterests.includes(o.id);
            const option: PlannerChoiceOption<UpgradeInterestId> = {
              value: o.id,
              label: o.label,
              Icon: UPGRADE_INTEREST_CARD_ICONS[o.id]
            };
            return (
              <PlannerMultiSelectCard
                id={`upgrade-interest-${o.id}`}
                option={option}
                selected={checked}
                onToggle={toggleInterest}
                showSelectedCheck
                className={cn(
                  "border-ink-300 bg-ink-100/20 hover:border-ink-400",
                  checked && "border-teal-600 bg-teal-50/70"
                )}
              />
            );
          })()}
        </div>
      </div>
    </PlannerStepFrame>
  );
}

// NOTE:
// Step 4 captures readiness and preference signals.
// `openToQualifiedContact` here reflects user intent (how they want to proceed),
// not actual contact consent. Consent is handled later in Step 6.

export function StepIntentReadiness({ answers, setAnswers }: PlannerPanelProps) {
  const meta = PLANNER_STEPS[3];
  const hasTimeline = Boolean(answers.timeline);
  const hasQuoteStage = Boolean(answers.quotesOrInstallerDiscussions);
  const hasBudget = Boolean(answers.budget);
  const revealClass = (isVisible: boolean) =>
    cn(
      "overflow-hidden transition-all duration-300 ease-out",
      isVisible
        ? "max-h-[1000px] translate-y-0 opacity-100"
        : "max-h-0 -translate-y-1 opacity-0"
    );
  const timelineOptions: PlannerChoiceOption<(typeof TIMELINE_OPTIONS)[number]["value"]>[] =
    TIMELINE_OPTIONS.map((option) => ({
      value: option.value,
      label: option.label,
      Icon: TIMELINE_CARD_ICONS[option.value]
    }));
  const quoteOptions: PlannerChoiceOption<
    (typeof QUOTES_INSTALLER_OPTIONS)[number]["value"]
  >[] = QUOTES_INSTALLER_OPTIONS.map((option) => ({
    value: option.value,
    label: option.label,
    Icon: QUOTES_INSTALLER_CARD_ICONS[option.value]
  }));
  const budgetOptions: PlannerChoiceOption<(typeof BUDGET_OPTIONS)[number]["value"]>[] =
    BUDGET_OPTIONS.map((option) => ({
      value: option.value,
      label: option.label,
      Icon: BUDGET_CARD_ICONS[option.value]
    }));
  const nextStepOptions: PlannerChoiceOption<
    (typeof NEXT_STEP_PREFERENCE_OPTIONS)[number]["value"]
  >[] = NEXT_STEP_PREFERENCE_OPTIONS.map((option) => ({
    value: option.value,
    label: option.label,
    Icon: NEXT_STEP_PREFERENCE_CARD_ICONS[option.value]
  }));

  return (
    <PlannerStepFrame title={meta.title} description={meta.description}>
      <div className="space-y-6 sm:space-y-7">
        <section className="space-y-3 rounded-2xl border border-ink-200 bg-white px-4 py-4 sm:px-5 sm:py-5">
          <PlannerField
            label="When would you ideally like to start work?"
            htmlFor="timeline-asap"
            required
          >
            <div
              role="radiogroup"
              aria-label="When would you ideally like to start work?"
              className="grid gap-3 sm:grid-cols-2"
            >
              {timelineOptions.map((option) => (
                <PlannerSingleSelectCard
                  key={option.value}
                  id={`timeline-${option.value}`}
                  name="timeline"
                  option={option}
                  selected={answers.timeline === option.value}
                  onSelect={(timeline) =>
                    setAnswers((a) => ({
                      ...a,
                      timeline,
                      moveWithinSixMonths: moveWithinSixMonthsFromTimeline(timeline)
                    }))
                  }
                />
              ))}
            </div>
          </PlannerField>
        </section>

        <div className={revealClass(hasTimeline)} aria-hidden={!hasTimeline}>
          <section className="space-y-3 rounded-2xl border border-ink-200 bg-white px-4 py-4 sm:px-5 sm:py-5">
            <PlannerField
              label="Where are you in the process with installers or quotes?"
              htmlFor="quotes-installer-none"
              required
            >
              <div
                role="radiogroup"
                aria-label="Where are you in the process with installers or quotes?"
                className="grid gap-3 sm:grid-cols-2"
              >
                {quoteOptions.map((option) => (
                  <PlannerSingleSelectCard
                    key={option.value}
                    id={`quotes-installer-${option.value}`}
                    name="quotes-installer"
                    option={option}
                    selected={answers.quotesOrInstallerDiscussions === option.value}
                    onSelect={(quotesOrInstallerDiscussions) =>
                      setAnswers((a) => ({
                        ...a,
                        quotesOrInstallerDiscussions
                      }))
                    }
                  />
                ))}
              </div>
            </PlannerField>
          </section>
        </div>

        <div className={revealClass(hasQuoteStage)} aria-hidden={!hasQuoteStage}>
          <section className="space-y-3 rounded-2xl border border-ink-200 bg-white px-4 py-4 sm:px-5 sm:py-5">
            <PlannerField
              label="Rough total budget in mind (including your share after grants)"
              htmlFor="budget-under_5k"
              required
            >
              <div
                role="radiogroup"
                aria-label="Rough total budget in mind (including your share after grants)"
                className="grid gap-3 sm:grid-cols-2"
              >
                {budgetOptions.map((option) => (
                  <PlannerSingleSelectCard
                    key={option.value}
                    id={`budget-${option.value}`}
                    name="budget"
                    option={option}
                    selected={answers.budget === option.value}
                    onSelect={(budget) => setAnswers((a) => ({ ...a, budget }))}
                  />
                ))}
              </div>
            </PlannerField>
          </section>
        </div>

        <div className={revealClass(hasBudget)} aria-hidden={!hasBudget}>
          <section className="space-y-3 rounded-2xl border border-ink-200 bg-white px-4 py-4 sm:px-5 sm:py-5">
            <PlannerField
              label="How would you prefer to move forward after this?"
              htmlFor="next-step-preference-yes"
              hint="This only helps us tailor the guidance — you can still view your plan first."
              required
            >
              <div
                role="radiogroup"
                aria-label="How would you prefer to move forward after this?"
                className="grid gap-3 sm:grid-cols-2"
              >
                {nextStepOptions.map((option) => (
                  <PlannerSingleSelectCard
                    key={option.value}
                    id={`next-step-preference-${option.value}`}
                    name="next-step-preference"
                    option={option}
                    selected={answers.openToQualifiedContact === option.value}
                    onSelect={(openToQualifiedContact) =>
                      setAnswers((a) => ({
                        ...a,
                        openToQualifiedContact
                      }))
                    }
                  />
                ))}
              </div>
            </PlannerField>
          </section>
        </div>
      </div>
    </PlannerStepFrame>
  );
}

function step5SupportLine(id: UpgradeInterestId, propertyType: PropertyType): string {
  const cap = grantCapEuro(id, propertyType);
  if (cap > 0) return `Up to €${cap.toLocaleString("en-IE")} support`;
  if (id === "full_retrofit") return "Staged grant support";
  return "Support details in full plan";
}

function step5CardIcon(id: UpgradeInterestId) {
  const className = "h-4 w-4 text-teal-700";
  switch (id) {
    case "solar_pv":
      return <Sun aria-hidden className={className} />;
    case "heat_pump":
      return <Flame aria-hidden className={className} />;
    case "wall_insulation":
      return <House aria-hidden className={className} />;
    case "attic_insulation":
      return <Layers aria-hidden className={className} />;
    case "windows_doors":
      return <DoorOpen aria-hidden className={className} />;
    case "full_retrofit":
    default:
      return <House aria-hidden className={className} />;
  }
}

function PreviewUpgradeTeaserCard({
  card,
  bucket,
  propertyType
}: {
  card: PreviewUpgradeCard;
  bucket: "suit" | "assess";
  propertyType: PropertyType;
}) {
  const shortGrant = step5SupportLine(card.id, propertyType);
  const tag = bucket === "assess" ? "Needs assessment first" : "May suit your home now";
  return (
    <div className="rounded-xl border border-ink-200 bg-white px-4 py-3.5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="rounded-lg border border-teal-100/90 bg-teal-50/80 p-2">
            {step5CardIcon(card.id)}
          </span>
          <h3 className="truncate text-sm font-semibold text-ink-900">{card.title}</h3>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold",
            bucket === "suit"
              ? "bg-teal-50 text-teal-800"
              : "bg-amber-50 text-amber-800"
          )}
        >
          {tag}
        </span>
      </div>
      <p className="mt-1.5 text-sm font-semibold leading-snug text-ink-900">{shortGrant}</p>
    </div>
  );
}

function formatSupportRangeText(minEuro: number, maxEuro: number): string {
  if (maxEuro <= 0) return "Set after selecting measures";
  const min = `€${minEuro.toLocaleString("en-IE")}`;
  const max = `€${maxEuro.toLocaleString("en-IE")}`;
  return minEuro === maxEuro ? min : `${min} - ${max}`;
}

function step5LikelyNextStep(preview: ReturnType<typeof buildPartialPreview>): string {
  if (preview.assessFirst.length > 0) return "Preparation or assessment";
  if (preview.maySuit.length > 0) return "Compare your top options";
  return "Pick one measure to start";
}

function Step5SummaryStat({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border-2 border-black bg-teal-600 px-4 py-4 shadow-[0_9px_20px_rgba(0,0,0,0.12)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_13px_26px_rgba(0,0,0,0.16)] sm:px-5 sm:py-4.5">
      <p className="text-xs font-semibold text-white">{label}</p>
      <p className="mt-1.5 text-sm font-bold leading-snug text-white sm:text-[0.95rem]">{value}</p>
    </div>
  );
}

function SectionTitle({ id, title, note }: { id: string; title: string; note?: string }) {
  return (
    <div className="space-y-1.5">
      <h2 id={id} className="text-base font-semibold text-ink-900">
        {title}
      </h2>
      {note ? <p className="text-xs leading-snug text-ink-500">{note}</p> : null}
    </div>
  );
}

export function StepPartialResult({ answers }: PlannerPanelProps) {
  const meta = PLANNER_STEPS[4];
  const preview = buildPartialPreview(answers);
  const fullPlan = buildFullRetrofitPlan(answers);
  const startMeasure =
    preview.maySuit[0]?.title || preview.assessFirst[0]?.title || "BER or home assessment";
  const supportRange = formatSupportRangeText(
    fullPlan.grantRange.minEuro,
    fullPlan.grantRange.maxEuro
  );
  const likelyNext = step5LikelyNextStep(preview);

  return (
    <PlannerStepFrame
      title={meta.title}
      description={<p>You’re almost done — here’s your snapshot.</p>}
    >
      <div className="mx-auto w-full max-w-3xl space-y-7 sm:space-y-8">
        <section className="space-y-3.5" aria-labelledby="preview-snapshot-heading">
          <SectionTitle id="preview-snapshot-heading" title="Summary snapshot" />
          <div className="grid gap-3.5 sm:grid-cols-3">
            <Step5SummaryStat label="Best place to start" value={startMeasure} />
            <Step5SummaryStat label="Estimated support" value={supportRange} />
            <Step5SummaryStat label="What to do next" value={likelyNext} />
          </div>
        </section>

        {!preview.isNotSureOnly ? (
          <>
            {preview.maySuit.length > 0 ? (
              <section className="space-y-3.5" aria-label="May suit cards">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  {preview.maySuit.map((card) => (
                    <PreviewUpgradeTeaserCard
                      key={card.id}
                      card={card}
                      bucket="suit"
                      propertyType={answers.propertyType}
                    />
                  ))}
                </div>
              </section>
            ) : null}

            {preview.assessFirst.length > 0 ? (
              <section className="space-y-3.5" aria-label="Needs assessment cards">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  {preview.assessFirst.map((card) => (
                    <PreviewUpgradeTeaserCard
                      key={card.id}
                      card={card}
                      bucket="assess"
                      propertyType={answers.propertyType}
                    />
                  ))}
                </div>
              </section>
            ) : null}
          </>
        ) : (
          <section
            className="rounded-xl border border-ink-200 bg-white px-4 py-4 shadow-sm"
            aria-labelledby="preview-next-pick-heading"
          >
            <SectionTitle
              id="preview-next-pick-heading"
              title="May suit your home now"
              note="Pick one or two measures to unlock this preview section."
            />
          </section>
        )}

        <section
          className="rounded-2xl border-2 border-black bg-white px-5 py-5 text-ink-900 shadow-[0_10px_24px_rgba(0,0,0,0.1)]"
          aria-labelledby="preview-unlock-heading"
        >
          <h2 id="preview-unlock-heading" className="text-lg font-semibold text-ink-900">
            See your full retrofit plan
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm font-medium text-ink-800 marker:text-ink-800">
            <li>Clearer next steps for your home</li>
            <li>Recommended upgrade order</li>
            <li>Full grant breakdown</li>
            <li>Avoid costly upgrade mistakes</li>
          </ul>
        </section>

        <p className="pt-0.5 text-center text-xs font-medium leading-snug text-ink-500">
          Get your personalised retrofit plan in seconds
        </p>
      </div>
    </PlannerStepFrame>
  );
}

export function StepLeadCapture({ answers, setAnswers }: PlannerPanelProps) {
  const meta = PLANNER_STEPS[5];
  return (
    <PlannerStepFrame title={meta.title} description={meta.description}>
      <div className="space-y-5 sm:max-w-md">
        <div
          className="rounded-xl border border-teal-200/70 bg-teal-50/45 px-4 py-3.5 shadow-sm"
          role="region"
          aria-label="What you will unlock"
        >
          <p className="text-sm font-semibold text-ink-900">What you’ll unlock:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-ink-700 marker:text-teal-600">
            <li>A fuller breakdown of what may suit your home</li>
            <li>Clearer next steps based on your answers</li>
            <li>Recommended upgrade order</li>
          </ul>
        </div>
        <div className="space-y-3.5">
          <PlannerField label="Your name" htmlFor="lead-name" required>
            <input
              id="lead-name"
              type="text"
              autoComplete="name"
              className={inputClass}
              value={answers.leadName}
              onChange={(e) => setAnswers((a) => ({ ...a, leadName: e.target.value }))}
            />
          </PlannerField>
          <PlannerField label="Email" htmlFor="lead-email" required>
            <input
              id="lead-email"
              type="email"
              autoComplete="email"
              className={inputClass}
              value={answers.leadEmail}
              onChange={(e) => setAnswers((a) => ({ ...a, leadEmail: e.target.value }))}
            />
          </PlannerField>
          <PlannerField
            label="Mobile"
            htmlFor="lead-phone"
            hint="Use your best mobile number for plan follow-up."
            required
          >
            <input
              id="lead-phone"
              type="tel"
              autoComplete="tel"
              className={inputClass}
              value={answers.leadPhone}
              onChange={(e) => setAnswers((a) => ({ ...a, leadPhone: e.target.value }))}
            />
          </PlannerField>
        </div>
        <div className="space-y-2.5">
          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-ink-200 bg-white px-3 py-2.5 text-sm leading-relaxed text-ink-700">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink-300 text-teal-600 focus:ring-teal-500"
              checked={answers.consentContact}
              onChange={(e) =>
                setAnswers((a) => ({ ...a, consentContact: e.target.checked }))
              }
            />
            <span>I’m happy to be contacted about my retrofit plan</span>
          </label>
          <p className="text-center text-xs font-medium leading-snug text-ink-500">
            Get your personalised retrofit plan in seconds
          </p>
        </div>
      </div>
    </PlannerStepFrame>
  );
}

export function StepFullResult({ answers, onResetPlan }: PlannerPanelProps) {
  const meta = PLANNER_STEPS[6];
  const plan = buildFullRetrofitPlan(answers);
  const showGrantNumbers = plan.grantRange.maxEuro > 0;
  const pathFirst = plan.upgradePath[0];
  const grantAtAGlance = showGrantNumbers
    ? `€${plan.grantRange.minEuro.toLocaleString("en-IE")}–€${plan.grantRange.maxEuro.toLocaleString("en-IE")} if measures qualify (indicative).`
    : plan.grantRange.emptyExplanation ||
      "Totals depend on which measures you pursue and on survey outcomes.";
  const firstName = answers.leadName.trim().split(/\s+/)[0];

  return (
    <PlannerStepFrame
      title={meta.title}
      description={
        firstName ? (
          <p>
            Thank you,{" "}
            <span className="font-semibold text-ink-900">{firstName}</span>
            . This is your personalised retrofit plan — based on your answers. It’s guidance, not a grant decision.
          </p>
        ) : (
          meta.description
        )
      }
    >
      <div className="space-y-8 border-t border-ink-100 pt-8">
        <section
          className="rounded-xl border border-teal-200/70 bg-gradient-to-br from-teal-50/90 via-white to-white px-4 py-5 sm:px-6 sm:py-6"
          aria-labelledby="plan-at-a-glance-heading"
        >
          <h2
            id="plan-at-a-glance-heading"
            className="text-xs font-semibold uppercase tracking-wide text-teal-800"
          >
            At a glance
          </h2>
          <dl className="mt-4 grid gap-5 sm:grid-cols-3 sm:gap-6">
            <div className="min-w-0">
              <dt className="text-xs font-medium text-ink-500">Likely starting focus</dt>
              <dd className="mt-1.5 space-y-1">
                {pathFirst ? (
                  <>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-teal-800">
                      {pathFirst.stage}
                    </span>
                    <span className="block text-sm font-medium leading-snug text-ink-900">
                      {pathFirst.detail}
                    </span>
                  </>
                ) : (
                  <span className="block text-sm font-medium leading-snug text-ink-900">
                    A BER or short retrofit chat may help set direction from your answers.
                  </span>
                )}
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-xs font-medium text-ink-500">Indicative support range</dt>
              <dd className="mt-1.5 text-sm font-medium leading-snug text-ink-900">
                {grantAtAGlance}
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-xs font-medium text-ink-500">Where you are now</dt>
              <dd className="mt-1.5 text-sm font-medium leading-snug text-ink-900">
                {plan.readiness.title}
              </dd>
            </div>
          </dl>
        </section>

        <section className="space-y-3" aria-labelledby="plan-grants-heading">
          <h2 id="plan-grants-heading" className="text-lg font-semibold text-ink-900">
            Estimated grant support
          </h2>
          <div className="rounded-xl border border-ink-200 bg-white px-4 py-4 shadow-sm sm:px-5 sm:py-5">
            {showGrantNumbers ? (
              <>
                <p className="text-sm font-medium text-ink-900">
                  €{plan.grantRange.minEuro.toLocaleString("en-IE")} – €
                  {plan.grantRange.maxEuro.toLocaleString("en-IE")} possible support
                  <span className="font-normal text-ink-600"> (indicative only).</span>
                </p>
                <p className="mt-2 text-sm leading-snug text-ink-600">
                  {plan.grantRange.supportingText}
                </p>
              </>
            ) : (
              <p className="text-sm leading-snug text-ink-800">
                {plan.grantRange.emptyExplanation}
              </p>
            )}
          </div>
        </section>

        <section className="space-y-3" aria-labelledby="plan-suit-heading">
          <h2 id="plan-suit-heading" className="text-lg font-semibold text-ink-900">
            Upgrades that may suit your home
          </h2>
          <p className="text-sm leading-snug text-ink-600">
            From your selections — same split as your preview, with fuller detail here.
          </p>
          {plan.maySuit.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {plan.maySuit.map((card) => (
                <div
                  key={card.id}
                  className="rounded-xl border border-ink-200 bg-white p-4 shadow-sm sm:p-5"
                >
                  <h3 className="text-sm font-semibold text-ink-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-snug text-ink-700">
                    {card.explanation}
                  </p>
                  <p className="mt-2 text-xs font-medium text-teal-800">{card.grantRangeShort}</p>
                  <p className="mt-3 border-t border-ink-100 pt-3 text-xs leading-snug text-ink-600">
                    {card.whyMaySuit}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-ink-200 bg-ink-100/30 px-4 py-3 text-sm leading-snug text-ink-700">
              {plan.preview.isNotSureOnly
                ? "No specific measures yet — add some on an earlier step and this section can show what may suit sooner."
                : "Nothing here sat in the “may suit sooner” bucket — see preparation-focused measures below. That’s common when surveys matter."}
            </p>
          )}
        </section>

        <section className="space-y-3" aria-labelledby="plan-prep-heading">
          <h2 id="plan-prep-heading" className="text-lg font-semibold text-ink-900">
            Upgrades that may require preparation or assessment first
          </h2>
          <p className="text-sm leading-snug text-ink-600">
            Preparation is normal — it helps avoid the wrong order of works.
          </p>
          {plan.assessFirst.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {plan.assessFirst.map((card) => (
                <div
                  key={card.id}
                  className="rounded-xl border border-ink-200 bg-white p-4 shadow-sm sm:p-5"
                >
                  <h3 className="text-sm font-semibold text-ink-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-snug text-ink-700">
                    {card.explanation}
                  </p>
                  <p className="mt-2 text-xs font-medium text-teal-800">{card.grantRangeShort}</p>
                  <p className="mt-3 border-t border-ink-100 pt-3 text-xs leading-snug text-ink-700">
                    {card.prepExplanation}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-ink-200 bg-ink-100/30 px-4 py-3 text-sm leading-snug text-ink-700">
              {plan.preview.isNotSureOnly
                ? "When you pick measures, some may land here if surveys or BER clarity should come first."
                : "Nothing was flagged purely as “prepare first” — your path may still change after site visits."}
            </p>
          )}
        </section>

        <section className="space-y-3" aria-labelledby="plan-readiness-heading">
          <h2 id="plan-readiness-heading" className="text-lg font-semibold text-ink-900">
            Readiness
          </h2>
          <div className="rounded-xl border border-teal-200/80 bg-teal-50/40 px-4 py-4">
            <p className="text-sm font-semibold text-ink-900">{plan.readiness.title}</p>
            <p className="mt-2 text-sm leading-snug text-ink-700">
              {plan.readiness.paragraph}
            </p>
          </div>
        </section>

        <section className="space-y-3" aria-labelledby="plan-steps-heading">
          <h2 id="plan-steps-heading" className="text-lg font-semibold text-ink-900">
            Recommended next steps
          </h2>
          <ol className="list-decimal space-y-2.5 pl-5 text-sm leading-snug text-ink-800 marker:font-semibold marker:text-teal-700">
            {plan.orderedNextSteps.map((step, i) => (
              <li key={i} className="pl-1">
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-3" aria-labelledby="plan-path-heading">
          <h2 id="plan-path-heading" className="text-lg font-semibold text-ink-900">
            Recommended upgrade path
          </h2>
          <p className="text-sm leading-snug text-ink-600">
            A suggested order — not a contract. Real projects shift with survey results.
          </p>
          <ul className="space-y-3">
            {plan.upgradePath.map((step, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-xl border border-ink-200 bg-white p-4 shadow-sm"
              >
                <span className="w-32 shrink-0 self-start text-xs font-bold uppercase tracking-wide text-teal-700">
                  {step.stage}
                </span>
                <p className="min-w-0 text-sm leading-snug text-ink-800">{step.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3" aria-labelledby="plan-profile-heading">
          <h2 id="plan-profile-heading" className="text-lg font-semibold text-ink-900">
            Your home profile
          </h2>
          <div className="rounded-xl border border-ink-200 bg-white shadow-sm">
            <dl className="divide-y divide-ink-100">
              {plan.homeProfile.map((row) => (
                <div key={row.label} className="grid gap-1 px-4 py-3 sm:grid-cols-[minmax(8rem,36%)_1fr]">
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-500">
                    {row.label}
                  </dt>
                  <dd className="text-sm font-medium text-ink-900">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="space-y-3" aria-labelledby="plan-important-heading">
          <h2 id="plan-important-heading" className="text-lg font-semibold text-ink-900">
            Important to know
          </h2>
          <ul className="list-inside list-disc space-y-1.5 text-sm leading-snug text-ink-700 marker:text-teal-600">
            {plan.importantToKnow.map((line) => (
              <li key={line} className="pl-1">
                {line}
              </li>
            ))}
          </ul>
        </section>

        <p className="text-sm leading-snug text-ink-600">
          If you choose to move forward, sharing this plan with a qualified installer can help start
          the conversation.
        </p>

        <p className="text-sm leading-snug text-ink-600">{plan.softClose}</p>

        <button
          type="button"
          onClick={() => onResetPlan?.()}
          className="text-sm font-semibold text-teal-700 underline-offset-4 hover:underline"
        >
          Clear answers and start again
        </button>
      </div>
    </PlannerStepFrame>
  );
}

export const PLANNER_STEP_PANELS = [
  StepPropertyProfile,
  StepCurrentHome,
  StepUpgradeInterest,
  StepIntentReadiness,
  StepPartialResult,
  StepLeadCapture,
  StepFullResult
] as const;
