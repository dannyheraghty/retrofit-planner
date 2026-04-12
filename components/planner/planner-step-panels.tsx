"use client";

import type { Dispatch, SetStateAction } from "react";

import {
  IRISH_COUNTIES,
  PLANNER_STEPS,
  UPGRADE_INTEREST_OPTIONS
} from "@/lib/planner/constants";
import {
  buildFullRetrofitPlan,
  buildPartialPreview,
  indicativeGrantShortLine,
  type PreviewUpgradeCard
} from "@/lib/planner/partial-preview";
import { labelHeating, labelYearBand } from "@/lib/planner/labels";
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

export function StepPropertyProfile({ answers, setAnswers }: PlannerPanelProps) {
  const meta = PLANNER_STEPS[0];
  return (
    <PlannerStepFrame title={meta.title} description={meta.description} compact>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4">
        <PlannerField
          label="Type of home"
          htmlFor="property-type"
          hint="Choose the closest match — apartments and houses follow different grant caps for some measures."
          required
        >
          <select
            id="property-type"
            className={selectClassName()}
            style={{ backgroundImage: chevronBg }}
            value={answers.propertyType}
            onChange={(e) =>
              setAnswers((a) => ({
                ...a,
                propertyType: e.target.value as PropertyType
              }))
            }
          >
            <option value="">Choose…</option>
            <option value="detached">Detached house</option>
            <option value="semi_detached">Semi-detached house</option>
            <option value="terraced">Terraced / townhouse</option>
            <option value="apartment">Apartment / duplex</option>
            <option value="other_or_unsure">Other / not sure</option>
          </select>
        </PlannerField>

        <PlannerField
          label="County"
          htmlFor="county"
          hint="Grants are national; we only use this for local context later."
          required
        >
          <select
            id="county"
            className={selectClassName()}
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

        <PlannerField
          label="When was your home built?"
          htmlFor="year-band"
          hint="Pick the era that best matches — exact year is not needed."
          required
        >
          <select
            id="year-band"
            className={selectClassName()}
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

        <PlannerField
          label="What best describes your situation?"
          htmlFor="homeowner"
          hint="Some supports differ depending on how the home is used."
          required
        >
          <select
            id="homeowner"
            className={selectClassName()}
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
    </PlannerStepFrame>
  );
}

export function StepCurrentHome({ answers, setAnswers }: PlannerPanelProps) {
  const meta = PLANNER_STEPS[1];
  const showBerBand = answers.berStatus === "know_band";
  const hasNoneYet = answers.previousUpgrades.includes("none_yet");
  const hasOtherPrev = answers.previousUpgrades.some((x) => x !== "none_yet");

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
    <PlannerStepFrame title={meta.title} description={meta.description}>
      <div className="space-y-8">
        <PlannerField
          label="What is your main heating system?"
          htmlFor="heating"
          hint="Choose the system you rely on most of the winter."
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
          hint="BER is the Building Energy Rating on a certificate — not a guess at bills."
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
            hint="Pick the letter closest to your cert. If it says exempt, choose exempt."
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
          hint="Select every measure you know you have done, or “None of these yet”."
          required
        >
          <div className="grid gap-2 sm:grid-cols-2">
            {PREVIOUS_UPGRADE_OPTIONS.map((o) => {
              const checked = answers.previousUpgrades.includes(o.id);
              const disabled =
                (o.id === "none_yet" && hasOtherPrev) ||
                (o.id !== "none_yet" && hasNoneYet);
              return (
                <label
                  key={o.id}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border px-3 py-3 text-sm font-medium transition",
                    disabled
                      ? "cursor-not-allowed opacity-60"
                      : "cursor-pointer",
                    checked
                      ? "border-teal-600 bg-teal-50 text-ink-900"
                      : cn(
                          "border-ink-200 bg-white text-ink-700",
                          !disabled && "hover:border-ink-300"
                        )
                  )}
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 shrink-0 rounded border-ink-300 text-teal-600 focus:ring-teal-500 disabled:cursor-not-allowed"
                    checked={checked}
                    disabled={disabled}
                    onChange={() => togglePrevious(o.id)}
                  />
                  {o.label}
                </label>
              );
            })}
          </div>
        </PlannerField>
      </div>
    </PlannerStepFrame>
  );
}

export function StepUpgradeInterest({ answers, setAnswers }: PlannerPanelProps) {
  const meta = PLANNER_STEPS[2];
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
      <div className="grid gap-2 sm:grid-cols-2">
        {UPGRADE_INTEREST_OPTIONS.map((o) => {
          const checked = answers.upgradeInterests.includes(o.id);
          const muted =
            answers.upgradeInterests.includes("not_sure") && o.id !== "not_sure";
          return (
            <label
              key={o.id}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-3 text-sm font-medium transition",
                muted && "pointer-events-none opacity-40",
                checked
                  ? "border-teal-600 bg-teal-50 text-ink-900"
                  : "border-ink-200 bg-white text-ink-700 hover:border-ink-300"
              )}
            >
              <input
                type="checkbox"
                className="h-4 w-4 shrink-0 rounded border-ink-300 text-teal-600 focus:ring-teal-500"
                checked={checked}
                disabled={muted}
                onChange={() => toggleInterest(o.id)}
              />
              {o.label}
            </label>
          );
        })}
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
  return (
    <PlannerStepFrame title={meta.title} description={meta.description}>
      <div className="grid gap-6 sm:grid-cols-2">
        <PlannerField
          label="When would you ideally like to start work?"
          htmlFor="timeline"
          required
        >
          <select
            id="timeline"
            className={selectClassName()}
            style={{ backgroundImage: chevronBg }}
            value={answers.timeline}
            onChange={(e) => {
              const timeline = e.target.value;
              setAnswers((a) => ({
                ...a,
                timeline,
                moveWithinSixMonths: moveWithinSixMonthsFromTimeline(timeline)
              }));
            }}
          >
            <option value="">Choose…</option>
            {TIMELINE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </PlannerField>

        <PlannerField
          label="Where are you in the process with installers or quotes?"
          htmlFor="quotes-installer"
          required
        >
          <select
            id="quotes-installer"
            className={selectClassName()}
            style={{ backgroundImage: chevronBg }}
            value={answers.quotesOrInstallerDiscussions}
            onChange={(e) =>
              setAnswers((a) => ({
                ...a,
                quotesOrInstallerDiscussions: e.target.value
              }))
            }
          >
            <option value="">Choose…</option>
            {QUOTES_INSTALLER_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </PlannerField>

        <PlannerField
          label="Rough total budget in mind (including your share after grants)"
          htmlFor="budget"
          required
        >
          <select
            id="budget"
            className={selectClassName()}
            style={{ backgroundImage: chevronBg }}
            value={answers.budget}
            onChange={(e) => setAnswers((a) => ({ ...a, budget: e.target.value }))}
          >
            <option value="">Choose…</option>
            {BUDGET_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </PlannerField>

        <PlannerField
          label="How would you prefer to move forward after this?"
          htmlFor="next-step-preference"
          hint="This only helps us tailor the guidance — you can still view your plan first."
          required
        >
          <select
            id="next-step-preference"
            className={selectClassName()}
            style={{ backgroundImage: chevronBg }}
            value={answers.openToQualifiedContact}
            onChange={(e) =>
              setAnswers((a) => ({
                ...a,
                openToQualifiedContact: e.target.value
              }))
            }
          >
            <option value="">Choose…</option>
            {NEXT_STEP_PREFERENCE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </PlannerField>
      </div>
    </PlannerStepFrame>
  );
}

/**
 * Step 5 preview only — short, soft lines. Classification comes from the engine (which bucket
 * the card is in); this does not re-run eligibility logic.
 */
function step5CardPreviewSummary(
  id: UpgradeInterestId,
  answers: PlannerAnswers,
  bucket: "suit" | "assess"
): string {
  const heat = labelHeating(answers.heating);
  const age = labelYearBand(answers.yearBuiltBand);

  switch (id) {
    case "heat_pump":
      return bucket === "suit"
        ? `Given you heat with ${heat}, a heat pump may suit exploring — fabric and survey still matter.`
        : "May be worth exploring, but often depends on fabric, BER, and assessment first.";
    case "solar_pv":
      return "May suit once roof and electrical details are checked — indicative only, not a decision.";
    case "attic_insulation":
      return bucket === "suit"
        ? `Often a practical early upgrade for a ${age} home like yours — subject to survey.`
        : "May still help, but ventilation, depth, or prior work may require assessment first.";
    case "wall_insulation":
      return bucket === "suit"
        ? "May suit once wall type is clearer — survey usually pins down what’s realistic."
        : "May qualify for support, but wall build-up almost always needs assessment first.";
    case "windows_doors":
      return bucket === "suit"
        ? "May suit where comfort, glazing, or BER improvements are being explored — caps depend on home type."
        : "May require assessment first to line up comfort goals with programme rules for your home.";
    case "full_retrofit":
      return "Whole-home retrofit may suit staged planning — sequencing often needs professional input first.";
    case "not_sure":
    default:
      return "May suit narrowing options with your answers — your full plan adds more detail.";
  }
}

function PreviewUpgradeTeaserCard({
  card,
  answers,
  bucket,
  propertyType
}: {
  card: PreviewUpgradeCard;
  answers: PlannerAnswers;
  bucket: "suit" | "assess";
  propertyType: PropertyType;
}) {
  const shortGrant = indicativeGrantShortLine(card.id, propertyType);
  const summary = step5CardPreviewSummary(card.id, answers, bucket);
  return (
    <div className="rounded-lg border border-ink-100 bg-white/70 px-3 py-3 shadow-none sm:rounded-xl">
      <h3 className="text-sm font-semibold text-ink-900">{card.title}</h3>
      <p className="mt-1.5 text-sm leading-snug text-ink-600">{summary}</p>
      {shortGrant ? (
        <p className="mt-2 border-t border-ink-100/80 pt-2 text-xs font-medium leading-snug text-teal-800">
          {shortGrant}
        </p>
      ) : null}
    </div>
  );
}

export function StepPartialResult({ answers }: PlannerPanelProps) {
  const meta = PLANNER_STEPS[4];
  const preview = buildPartialPreview(answers);

  return (
    <PlannerStepFrame
      title={meta.title}
      description={
        <>
          <p>{meta.description}</p>
          <p className="text-ink-600">This is guidance, not a grant decision.</p>
        </>
      }
    >
      <div className="space-y-6 rounded-2xl border border-teal-200 bg-teal-50/50 p-5 sm:p-6">
        <div className="rounded-lg border border-ink-200/80 bg-white/90 px-3.5 py-2.5 sm:rounded-xl sm:px-4 sm:py-3">
          <p className="text-sm leading-snug text-ink-800">{preview.readinessSignal}</p>
        </div>

        {!preview.isNotSureOnly ? (
          <>
            {preview.maySuit.length > 0 ? (
              <section className="space-y-2.5" aria-labelledby="preview-suit-heading">
                <h2
                  id="preview-suit-heading"
                  className="text-sm font-semibold text-ink-900"
                >
                  Upgrades that may suit this home sooner
                </h2>
                <p className="text-xs text-ink-600">
                  Indicative only — depends on survey and programme rules.
                </p>
                <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                  {preview.maySuit.map((card) => (
                    <PreviewUpgradeTeaserCard
                      key={card.id}
                      card={card}
                      answers={answers}
                      bucket="suit"
                      propertyType={answers.propertyType}
                    />
                  ))}
                </div>
              </section>
            ) : null}

            {preview.assessFirst.length > 0 ? (
              <section className="space-y-2.5" aria-labelledby="preview-assess-heading">
                <h2
                  id="preview-assess-heading"
                  className="text-sm font-semibold text-ink-900"
                >
                  Upgrades that may require assessment or preparation first
                </h2>
                <p className="text-xs text-ink-600">
                  Often needs clarity on wall type, BER, fabric, or sequencing before support is knowable.
                </p>
                <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                  {preview.assessFirst.map((card) => (
                    <PreviewUpgradeTeaserCard
                      key={card.id}
                      card={card}
                      answers={answers}
                      bucket="assess"
                      propertyType={answers.propertyType}
                    />
                  ))}
                </div>
              </section>
            ) : null}
          </>
        ) : (
          <p className="text-sm leading-snug text-ink-700">
            You haven’t chosen specific measures yet — add interests on an earlier step for
            tailored preview cards. You can still unlock the full plan when you’re ready.
          </p>
        )}

        <div className="rounded-xl border-2 border-teal-500/35 bg-teal-50/90 px-4 py-4 shadow-sm ring-1 ring-teal-700/10 sm:px-5 sm:py-5">
          <p className="text-base font-semibold text-ink-900">Unlock your full plan to see:</p>
          <ul className="mt-2.5 list-inside list-disc space-y-1.5 text-sm font-medium text-ink-800 marker:text-teal-600">
            <li>Clearer next steps</li>
            <li>Recommended upgrade order</li>
            <li>A fuller breakdown of what may suit and what to assess first</li>
          </ul>
        </div>

        <p className="text-center text-xs leading-snug text-ink-500">
          Not an official grant decision — eligibility may require assessment first.
        </p>
      </div>
    </PlannerStepFrame>
  );
}

export function StepLeadCapture({ answers, setAnswers }: PlannerPanelProps) {
  const meta = PLANNER_STEPS[5];
  return (
    <PlannerStepFrame title={meta.title} description={meta.description}>
      <div className="space-y-6 sm:max-w-md">
        <div
          className="rounded-xl border border-teal-200 bg-gradient-to-b from-teal-50/60 to-white px-4 py-4 shadow-sm ring-1 ring-teal-100/60"
          role="region"
          aria-label="What you will unlock"
        >
          <p className="text-sm font-semibold text-ink-900">What you’ll unlock:</p>
          <ul className="mt-2.5 list-inside list-disc space-y-1.5 text-sm leading-relaxed text-ink-700 marker:text-teal-600">
            <li>A fuller breakdown of what may suit your home</li>
            <li>Clearer next steps based on your answers</li>
            <li>Recommended upgrade order</li>
          </ul>
        </div>
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
          label="Mobile (optional)"
          htmlFor="lead-phone"
          hint="Optional — useful if someone needs to reach you about your plan."
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
        <div className="space-y-2">
          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-ink-200 bg-white px-3 py-3 text-sm leading-relaxed text-ink-700">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink-300 text-teal-600 focus:ring-teal-500"
              checked={answers.consentContact}
              onChange={(e) =>
                setAnswers((a) => ({ ...a, consentContact: e.target.checked }))
              }
            />
            <span>
              I understand Retrofit Planner may follow up about this draft plan and related
              grant information.
            </span>
          </label>
          <p className="pl-7 text-xs leading-relaxed text-ink-500">
            Early version: your details are not saved to a server yet.
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
