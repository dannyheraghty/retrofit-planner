import { UPGRADE_INTEREST_OPTIONS } from "./constants";
import {
  labelAttic,
  labelBerSummary,
  labelHeating,
  labelHomeownerStatus,
  labelPropertyType,
  labelUpgradeInterests,
  labelWall,
  labelWindows,
  labelYearBand
} from "./labels";
import type {
  PlannerAnswers,
  PropertyType,
  UpgradeInterestId,
  YearBuiltBand
} from "./types";

const ORDER: UpgradeInterestId[] = [
  "heat_pump",
  "attic_insulation",
  "wall_insulation",
  "windows_doors",
  "solar_pv",
  "full_retrofit"
];

export type PreviewUpgradeCard = {
  id: UpgradeInterestId;
  title: string;
  /** Short, personalized explanation — soft language only */
  explanation: string;
  /** Indicative grant line — never guaranteed */
  grantHint: string;
};

export type PartialPreviewModel = {
  introParagraphs: string[];
  readinessSignal: string;
  maySuit: PreviewUpgradeCard[];
  assessFirst: PreviewUpgradeCard[];
  nextSteps: string[];
  /** When only “not sure” is selected — no per-upgrade grant cards */
  isNotSureOnly: boolean;
};

export function windowsGrantCapEuro(propertyType: PropertyType): number {
  switch (propertyType) {
    case "apartment":
      return 1500;
    case "terraced":
      return 1800;
    case "semi_detached":
      return 3000;
    case "detached":
      return 4000;
    case "other_or_unsure":
      return 3000;
    default:
      return 3000;
  }
}

function grantHeatPump() {
  return "Possible support (indicative): up to €12,500 — not a promise; depends on scheme rules, BER, and survey.";
}

function grantSolar() {
  return "Possible support (indicative): up to €1,800 — subject to scheme caps, installer, and your roof or electrical setup.";
}

function grantAttic() {
  return "Possible support (indicative): up to €2,000 — actual value may require assessment first.";
}

function grantWall() {
  return "Possible support (indicative): up to €8,000 depending on wall type and measure — survey usually needed.";
}

function grantWindows(propertyType: PropertyType) {
  const cap = windowsGrantCapEuro(propertyType);
  return `Possible support (indicative): up to €${cap.toLocaleString("en-IE")} for your property type — programme rules still apply.`;
}

function grantWholeHome() {
  return "Support is usually staged across measures; totals depend on sequencing, survey, and individual grant caps — not one fixed cheque.";
}

function upgradeTitle(id: UpgradeInterestId): string {
  return UPGRADE_INTEREST_OPTIONS.find((o) => o.id === id)?.label ?? id;
}

function fabricWeakForHeatPump(a: PlannerAnswers): boolean {
  const atticWeak =
    a.atticInsulation === "none_or_unknown" || a.atticInsulation === "some_but_patchy";
  const wallWeak =
    a.wallInsulation === "unknown" || a.wallInsulation === "unlikely_or_none";
  const windowsWeak =
    a.windowCondition === "mostly_single_glazed" ||
    a.windowCondition === "mix_old_and_new";
  return atticWeak || wallWeak || windowsWeak;
}

function berNeedsClarity(a: PlannerAnswers): boolean {
  return (
    a.berStatus === "dont_know_yet" ||
    a.berStatus === "assessment_booked" ||
    a.berStatus === "rough_idea"
  );
}

function berBandOnLowerSide(a: PlannerAnswers): boolean {
  if (a.berStatus !== "know_band") return false;
  return (
    a.berRatingBand === "d" ||
    a.berRatingBand === "e" ||
    a.berRatingBand === "f_or_g"
  );
}

function atticLooksStrong(a: PlannerAnswers): boolean {
  return a.atticInsulation === "recent_or_well_insulated";
}

function atticEligibleForEarlyWork(a: PlannerAnswers): boolean {
  if (a.previousUpgrades.includes("attic")) return false;
  return (
    a.atticInsulation === "none_or_unknown" ||
    a.atticInsulation === "some_but_patchy" ||
    a.atticInsulation === "upgraded_older"
  );
}

function wallNeedsTypeWork(a: PlannerAnswers): boolean {
  return (
    a.wallInsulation === "unknown" ||
    a.wallInsulation === "unlikely_or_none" ||
    a.wallInsulation === "some_cavity_or_partial"
  );
}

function windowsFeelOlder(a: PlannerAnswers): boolean {
  return (
    a.windowCondition === "mostly_single_glazed" ||
    a.windowCondition === "mix_old_and_new"
  );
}

function windowsFeelModern(a: PlannerAnswers): boolean {
  return a.windowCondition === "mostly_double_or_newer";
}

function yearNarrative(band: YearBuiltBand): string {
  if (!band) return "";
  if (
    band === "pre_1919" ||
    band === "1919_1945" ||
    band === "1946_1960" ||
    band === "1961_1980"
  ) {
    return "Older homes like yours often benefit from fabric upgrades before or alongside heating changes — always depends on survey.";
  }
  if (band === "1981_2000" || band === "2001_2010") {
    return "Homes from this era can sit in the middle for fabric performance — what you’ve described helps narrow what may be worth exploring.";
  }
  if (band === "2011_newer") {
    return "Newer builds may already perform reasonably well, but comfort issues still happen — site detail decides what may suit.";
  }
  return "";
}

function classify(
  id: UpgradeInterestId,
  a: PlannerAnswers
): "suit" | "assess" {
  switch (id) {
    case "solar_pv":
      return "suit";
    case "heat_pump":
      if (fabricWeakForHeatPump(a)) return "assess";
      if (berNeedsClarity(a) || berBandOnLowerSide(a)) return "assess";
      if (a.heating === "heat_pump") return "assess";
      return "suit";
    case "attic_insulation":
      if (a.previousUpgrades.includes("attic")) return "assess";
      if (atticLooksStrong(a)) return "assess";
      if (atticEligibleForEarlyWork(a)) return "suit";
      return "assess";
    case "wall_insulation":
      return wallNeedsTypeWork(a) ? "assess" : "suit";
    case "windows_doors":
      if (windowsFeelModern(a)) return "assess";
      if (windowsFeelOlder(a)) return "suit";
      return "assess";
    case "full_retrofit":
      return "assess";
    default:
      return "assess";
  }
}

function buildCard(id: UpgradeInterestId, a: PlannerAnswers): PreviewUpgradeCard {
  const title = upgradeTitle(id);
  const yearBit = yearNarrative(a.yearBuiltBand);
  const heatLabel = labelHeating(a.heating);
  const ageLabel = labelYearBand(a.yearBuiltBand);

  let explanation = "";
  switch (id) {
    case "solar_pv":
      explanation =
        `Solar PV may suit many homes once roof and electrics are checked. With ${heatLabel}, PV is often weighed alongside — or apart from — heating choices. Sizing and export still depend on survey.`;
      break;
    case "heat_pump":
      if (a.heating === "heat_pump") {
        explanation =
          `You already use a heat-pump-style system — further efficiency, controls, or fabric work may still help. What matters most may require assessment first from your fabric answers.`;
      } else {
        explanation =
          `Heating with ${heatLabel}, a heat pump may be worth exploring if the home can hold heat. ` +
          (fabricWeakForHeatPump(a)
            ? `Walls, attic, or windows you described suggest fabric prep may need to come first. `
            : `Fabric looks workable on paper — emitters, hot water, and grants still depend on site detail and survey. `) +
          (berNeedsClarity(a)
            ? `A settled BER may help before you commit.`
            : "");
      }
      break;
    case "attic_insulation":
      if (a.previousUpgrades.includes("attic")) {
        explanation =
          `You’ve had attic work before — a top-up may still pay off, or it may not. Depth, ventilation, and rules usually need assessment first.`;
      } else if (atticLooksStrong(a)) {
        explanation =
          `You said the attic is already in good shape — more work may help only if a survey finds gaps; otherwise focus may lie elsewhere.`;
      } else {
        explanation =
          `For a ${ageLabel} home and your attic answers, insulation is often an early fabric step when a check confirms it’s safe and suitable — still subject to survey.`;
      }
      break;
    case "wall_insulation":
      explanation =
        `Wall insulation may qualify for support, but type and what’s already there decide technique. Assessment almost always comes first. ` +
        (yearBit || "Confirming the wall build-up on site is the usual next step.");
      break;
    case "windows_doors":
      if (windowsFeelModern(a)) {
        explanation =
          `Newer glazing means replacements may help only in pockets. Comfort, BER, and programme rules may require assessment before grants are clear.`;
      } else {
        explanation =
          `Older or mixed glazing often lines up with comfort and BER work. Packages and caps depend on survey and your property type.`;
      }
      break;
    case "full_retrofit":
      explanation =
        `Whole-home retrofit suits when you want fabric, heating, and renewables planned together. Grants and sequencing are complex — expect professional assessment before anything is assured.`;
      break;
    default:
      explanation =
        `This measure may be worth exploring once a survey confirms what your home needs — we stay cautious on purpose.`;
  }

  const grantHint =
    id === "heat_pump"
      ? grantHeatPump()
      : id === "solar_pv"
        ? grantSolar()
        : id === "attic_insulation"
          ? grantAttic()
          : id === "wall_insulation"
            ? grantWall()
            : id === "windows_doors"
              ? grantWindows(a.propertyType)
              : grantWholeHome();

  return {
    id,
    title,
    explanation: explanation.replace(/\s+/g, " ").trim(),
    grantHint
  };
}

function sortByOrder(cards: PreviewUpgradeCard[]): PreviewUpgradeCard[] {
  const idx = (id: UpgradeInterestId) => {
    const i = ORDER.indexOf(id);
    return i === -1 ? 99 : i;
  };
  return [...cards].sort((a, b) => idx(a.id) - idx(b.id));
}

function readinessSignalText(a: PlannerAnswers): string {
  const fabric = fabricWeakForHeatPump(a);
  const ber = berNeedsClarity(a) || berBandOnLowerSide(a);

  if (!fabric && !ber && a.berStatus === "know_band") {
    return (
      "Readiness signal (informal): your answers suggest you’re in a reasonable place to compare measures — " +
      "still, any grant or installer path may require assessment first."
    );
  }
  if (ber && fabric) {
    return (
      "Readiness signal (informal): a BER or home survey may be worth prioritising before locking in big-ticket items — " +
      "fabric and rating both look like moving parts from what you shared."
    );
  }
  if (ber) {
    return (
      "Readiness signal (informal): nailing down your BER (or getting an assessment booked) may help clarify what could qualify — " +
      "this preview stays non-official."
    );
  }
  return (
    "Readiness signal (informal): improving fabric or draughts may make other upgrades easier later — " +
    "what comes first still depends on home details and survey."
  );
}

function buildNextSteps(
  interests: UpgradeInterestId[],
  a: PlannerAnswers
): string[] {
  const steps: string[] = [];
  if (interests.length === 0) {
    steps.push(
      "When you narrow your interests to specific measures, a later pass of this planner can show indicative “up to” amounts — we’ve kept this step light on purpose."
    );
  }
  if (berNeedsClarity(a)) {
    steps.push(
      "Arranging or completing a BER assessment may be a sensible next step — it may clarify what measures could qualify for support, depending on programme rules."
    );
  }
  if (interests.includes("heat_pump") && fabricWeakForHeatPump(a)) {
    steps.push(
      "If a heat pump is on your mind, asking a retrofit professional to look at attic, walls, and windows together may be worth exploring — fabric often affects what may suit."
    );
  }
  if (interests.some((i) => i === "wall_insulation" || i === "full_retrofit")) {
    steps.push(
      "For walls or whole-home plans, a technical survey that identifies construction type may require assessment first — that conversation is usually worth having early."
    );
  }
  if (
    interests.includes("solar_pv") &&
    (a.quotesOrInstallerDiscussions === "none" || a.quotesOrInstallerDiscussions === "informal")
  ) {
    steps.push(
      "Collecting one or two written quotes for solar (after a roof/electrical check) may help you see realistic costs alongside possible grant support."
    );
  }
  steps.push(
    "Continue to save your plan — a fuller breakdown and clearer step order can be unlocked next (still not an official eligibility decision)."
  );
  return steps;
}

export function buildPartialPreview(a: PlannerAnswers): PartialPreviewModel {
  const interests = a.upgradeInterests.filter((i) => i !== "not_sure");
  const isNotSureOnly =
    a.upgradeInterests.length === 1 && a.upgradeInterests[0] === "not_sure";

  const selectedLabels = interests.map(upgradeTitle).join(", ");
  const heatLabel = labelHeating(a.heating);
  const ageLabel = labelYearBand(a.yearBuiltBand);

  const introParagraphs: string[] = [
    "This is a partial preview — useful context, not a grant decision. We use soft language on purpose: measures may suit, may qualify for support, or may require assessment first, depending on home details and survey."
  ];

  if (isNotSureOnly) {
    introParagraphs.push(
      `You’re still weighing options — that’s common. Your home is roughly in the ${ageLabel} band and heated mainly with ${heatLabel}; a BER or retrofit conversation may help narrow what could be worth exploring.`
    );
  } else {
    introParagraphs.push(
      `Based on your home’s age band (${ageLabel}), your heating setup (${heatLabel}), and the interests you ticked (${selectedLabels}), ` +
        `below is how a few measures might sit — split into what may suit sooner versus what may need preparation or survey first.`
    );
  }

  const maySuit: PreviewUpgradeCard[] = [];
  const assessFirst: PreviewUpgradeCard[] = [];

  for (const id of interests) {
    const bucket = classify(id, a);
    const card = buildCard(id, a);
    if (bucket === "suit") maySuit.push(card);
    else assessFirst.push(card);
  }

  return {
    introParagraphs,
    readinessSignal: readinessSignalText(a),
    maySuit: sortByOrder(maySuit),
    assessFirst: sortByOrder(assessFirst),
    nextSteps: buildNextSteps(interests, a),
    isNotSureOnly
  };
}

/** Euro cap used for range math — whole-home returns 0 here (bundle handled separately). */
export function grantCapEuro(
  id: UpgradeInterestId,
  propertyType: PropertyType
): number {
  switch (id) {
    case "heat_pump":
      return 12500;
    case "solar_pv":
      return 1800;
    case "attic_insulation":
      return 2000;
    case "wall_insulation":
      return 8000;
    case "windows_doors":
      return windowsGrantCapEuro(propertyType);
    case "full_retrofit":
    case "not_sure":
    default:
      return 0;
  }
}

export type IndicativeGrantRange = {
  minEuro: number;
  maxEuro: number;
  /** When no measures contribute caps (e.g. “not sure” only) */
  emptyExplanation: string;
  /** Short caveat under the euro line when numbers exist */
  supportingText: string;
};

function collectCapsForRange(a: PlannerAnswers): number[] {
  const ids = a.upgradeInterests.filter((i) => i !== "not_sure");
  if (ids.length === 0) return [];
  const pt = a.propertyType;
  const caps: number[] = [];
  for (const id of ids) {
    if (id === "full_retrofit") continue;
    const n = grantCapEuro(id, pt);
    if (n > 0) caps.push(n);
  }
  if (ids.includes("full_retrofit") && caps.length === 0) {
    return [
      2000,
      1800,
      8000,
      12500,
      windowsGrantCapEuro(pt)
    ].filter((n) => n > 0);
  }
  return caps;
}

function computeIndicativeGrantRange(a: PlannerAnswers): IndicativeGrantRange {
  const caps = collectCapsForRange(a);
  if (caps.length === 0) {
    return {
      minEuro: 0,
      maxEuro: 0,
      emptyExplanation:
        "Totals stay open until you pick specific measures. Schemes use separate caps per upgrade; survey usually decides what proceeds.",
      supportingText: ""
    };
  }
  const minEuro = Math.min(...caps);
  const maxEuro = caps.reduce((s, c) => s + c, 0);
  const same = minEuro === maxEuro;
  const supportingText = same
    ? "Assumes your selection could reach its published cap if it qualified — many homes see less after assessment."
    : "Lowest cap among your picks vs sum if each qualified — real projects often fall in between, depending on survey.";
  return { minEuro, maxEuro, emptyExplanation: "", supportingText };
}

export type FullPlanUpgradeCard = PreviewUpgradeCard & {
  whyMaySuit: string;
  grantRangeShort: string;
};

export type PrepUpgradeCard = PreviewUpgradeCard & {
  prepExplanation: string;
  grantRangeShort: string;
};

export type ReadinessTierResult = {
  tier: "ready" | "prep" | "early";
  title: string;
  paragraph: string;
};

export type PathStep = {
  stage: "Start with" | "Then consider";
  detail: string;
};

export type FullRetrofitPlanModel = {
  /** Phase 5 snapshot — same classification and copy baseline */
  preview: PartialPreviewModel;
  grantRange: IndicativeGrantRange;
  maySuit: FullPlanUpgradeCard[];
  assessFirst: PrepUpgradeCard[];
  readiness: ReadinessTierResult;
  orderedNextSteps: string[];
  upgradePath: PathStep[];
  homeProfile: Array<{ label: string; value: string }>;
  importantToKnow: string[];
  softClose: string;
};

function grantRangeShortForId(
  id: UpgradeInterestId,
  propertyType: PropertyType
): string {
  const n = grantCapEuro(id, propertyType);
  if (id === "full_retrofit") {
    return "Staged grants — no single fixed cap; depends on which measures proceed.";
  }
  if (n <= 0) return "";
  return `Up to €${n.toLocaleString("en-IE")} possible support (indicative).`;
}

/** Same caps as full-plan cards — for preview UI only. */
export function indicativeGrantShortLine(
  id: UpgradeInterestId,
  propertyType: PropertyType
): string {
  return grantRangeShortForId(id, propertyType);
}

function buildWhyMaySuit(id: UpgradeInterestId, a: PlannerAnswers): string {
  const heat = labelHeating(a.heating);
  switch (id) {
    case "solar_pv":
      return `Solar pairs with many heating setups. With ${heat}, sizing may need assessment first — PV can still be worth exploring in parallel.`;
    case "heat_pump":
      return fabricWeakForHeatPump(a)
        ? `Moving off ${heat} may appeal long term; fabric answers suggest prep so comfort and efficiency line up.`
        : `Fabric alongside ${heat} may mean a heat pump is worth serious exploration — emitters and hot water need confirmation on site.`;
    case "attic_insulation":
      return atticEligibleForEarlyWork(a)
        ? `Your attic answers suggest room to improve a “quick win” layer before bigger heating spend.`
        : `Some attic work done already — surveys sometimes still find gaps; ask whether a top-up makes sense.`;
    case "wall_insulation":
      return `Walls drive much heat loss in many Irish homes. Your wall answers point to confirming type so support isn’t guessed.`;
    case "windows_doors":
      return windowsFeelOlder(a)
        ? `Older or mixed glazing often matches comfort and BER goals — support depends on rules for your home type.`
        : `Selective upgrades can still help; survey and programme rules usually decide the case.`;
    case "full_retrofit":
      return `Whole-home intent often fits staged grants and coordinated advice — not one-off impulse works.`;
    default:
      return `Your answers mark this as worth exploring — subject to survey and rules.`;
  }
}

function buildPrepExplanation(id: UpgradeInterestId, a: PlannerAnswers): string {
  switch (id) {
    case "heat_pump":
      if (fabricWeakForHeatPump(a)) {
        return `Attic, wall, or window answers suggest heat may be leaving faster than a new system alone can fix — assessment may put fabric first.`;
      }
      if (berNeedsClarity(a)) {
        return `Without a settled BER, grant and sizing talk often stays open — clarifying that may come first.`;
      }
      if (a.heating === "heat_pump") {
        return `You already use a heat pump — next steps may be optimisation, controls, or fabric, not a repeat purchase. Survey usually decides.`;
      }
      return `Emitters, hot water, and electrical headroom often need checking before specification — normal, not a setback.`;
    case "attic_insulation":
      if (a.previousUpgrades.includes("attic")) {
        return `Prior attic work means ventilation, depth, and moisture need a careful look before any top-up.`;
      }
      if (atticLooksStrong(a)) {
        return `You said the attic is already strong — a survey may show whether more insulation helps or effort belongs elsewhere.`;
      }
      return `Standard attic jobs still need access and safety checks; paperwork may require assessment first.`;
    case "wall_insulation":
      return `Cavity, solid, and internal routes follow different grant and safety rules — confirm wall type before picking a technique.`;
    case "windows_doors":
      if (windowsFeelModern(a)) {
        return `Newer glazing means a “simple swap” story is weaker — someone needs to judge if selective work still justifies support.`;
      }
      return `Openings vary; installers need sizing, structure, and sometimes BER alignment before accurate quotes.`;
    case "solar_pv":
      return `Roof structure, shading, and board/export setup may need assessment first — often still compatible with going ahead.`;
    case "full_retrofit":
      return `Whole-home work needs a clear sequence of grants and trades — One Stop Shop or an adviser may require assessment first.`;
    default:
      return `Home-specific survey and rules apply before anything is assured.`;
  }
}

function enrichMaySuitCard(
  card: PreviewUpgradeCard,
  id: UpgradeInterestId,
  a: PlannerAnswers
): FullPlanUpgradeCard {
  return {
    ...card,
    whyMaySuit: buildWhyMaySuit(id, a),
    grantRangeShort: grantRangeShortForId(id, a.propertyType)
  };
}

function enrichPrepCard(
  card: PreviewUpgradeCard,
  id: UpgradeInterestId,
  a: PlannerAnswers
): PrepUpgradeCard {
  return {
    ...card,
    prepExplanation: buildPrepExplanation(id, a),
    grantRangeShort: grantRangeShortForId(id, a.propertyType)
  };
}

function buildReadinessTier(
  a: PlannerAnswers,
  partial: PartialPreviewModel
): ReadinessTierResult {
  const interests = a.upgradeInterests.filter((i) => i !== "not_sure");

  if (partial.isNotSureOnly) {
    return {
      tier: "early",
      title: "Early research stage",
      paragraph:
        "You haven’t named specific measures yet — that’s a normal place to start. A BER assessment or short retrofit chat may help turn general interest into a shortlist. Nothing here locks you into works."
    };
  }

  const prepDominant =
    berNeedsClarity(a) ||
    berBandOnLowerSide(a) ||
    (fabricWeakForHeatPump(a) &&
      (interests.includes("heat_pump") || interests.includes("full_retrofit"))) ||
    (interests.length > 0 &&
      partial.assessFirst.length > 0 &&
      partial.maySuit.length === 0);

  if (prepDominant) {
    return {
      tier: "prep",
      title: "May need preparation first",
      paragraph:
        "From your BER, fabric, or wall answers, surveys may come before big commitments. That usually narrows what may qualify and in what order. It’s sequencing, not a no."
    };
  }

  if (a.timeline === "researching" || a.quotesOrInstallerDiscussions === "none") {
    return {
      tier: "early",
      title: "Early research stage",
      paragraph:
        "Your timeline suggests you’re still learning — that’s fine. Treat this plan as a reading list. Move to written quotes when numbers would help more than more browsing."
    };
  }

  return {
    tier: "ready",
    title: "Ready to explore next steps",
    paragraph:
      "BER and fabric look relatively settled for where you are. Comparing written quotes — with grant assumptions spelled out — may be realistic next, always subject to survey."
  };
}

function buildOrderedFullNextSteps(
  a: PlannerAnswers,
  partial: PartialPreviewModel
): string[] {
  const interests = a.upgradeInterests.filter((i) => i !== "not_sure");
  const steps: string[] = [];

  if (berNeedsClarity(a)) {
    steps.push(
      "Book or complete a certified BER — many grants lean on an accurate, current rating."
    );
  }

  if (
    fabricWeakForHeatPump(a) &&
    (interests.includes("heat_pump") || interests.includes("full_retrofit"))
  ) {
    steps.push(
      "Ask a retrofit professional to review attic, walls, and draughts before you commit to a new heating system — fabric changes what may suit."
    );
  }

  if (interests.includes("attic_insulation") && atticEligibleForEarlyWork(a)) {
    steps.push(
      "Ask whether attic insulation can be improved safely and whether it should lead your sequence — often an early fabric step when surveys agree."
    );
  }

  if (
    interests.includes("wall_insulation") ||
    (interests.includes("full_retrofit") && wallNeedsTypeWork(a))
  ) {
    steps.push(
      "Arrange a wall-type survey before picking internal, external, or cavity work — grant routes follow how the building is built."
    );
  }

  if (interests.includes("solar_pv")) {
    steps.push(
      fabricWeakForHeatPump(a)
        ? "Keep solar PV in mind, but run roof and electrical checks alongside your fabric plan — it may stay parallel or later."
        : "Explore solar PV after a roof and electrical check — it may run in parallel while heating plans firm up."
    );
  }

  if (
    interests.includes("heat_pump") &&
    !fabricWeakForHeatPump(a) &&
    !steps.some((s) => s.includes("heating system"))
  ) {
    steps.push(
      "When fabric is clearer, talk to heat-pump installers about emitters and hot water — compare written quotes that state grant assumptions clearly."
    );
  }

  if (
    a.quotesOrInstallerDiscussions === "none" ||
    a.quotesOrInstallerDiscussions === "informal" ||
    a.quotesOrInstallerDiscussions === "planning"
  ) {
    steps.push(
      "Request written quotes from qualified installers when you’re ready — two comparisons, where practical, usually clarify trade-offs."
    );
  } else if (a.quotesOrInstallerDiscussions === "one_quote") {
    steps.push(
      "Seek a second written quote for contrast — especially if grant stacking or sequencing matters."
    );
  }

  steps.push(
    "Check contracts against SEAI programme guidance. If eligibility sounds guaranteed, pause — surveys and administrators confirm support, not sales wording."
  );

  if (partial.isNotSureOnly && steps.length <= 1) {
    steps.unshift(
      "Pick one or two measures to explore (even tentatively) so advisers can tie numbers to real options."
    );
  }

  const seen = new Set<string>();
  return steps.filter((s) => {
    const k = s.slice(0, 48);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function buildRecommendedUpgradePath(
  a: PlannerAnswers,
  interests: UpgradeInterestId[]
): PathStep[] {
  const path: PathStep[] = [];
  const has = (id: UpgradeInterestId) => interests.includes(id);
  const age = labelYearBand(a.yearBuiltBand);

  const startedWallFirst =
    has("wall_insulation") &&
    wallNeedsTypeWork(a) &&
    !has("attic_insulation");

  if (has("attic_insulation") && atticEligibleForEarlyWork(a)) {
    path.push({
      stage: "Start with",
      detail: `Attic insulation for your ${age} home — a common opening fabric step when depth and ventilation look sound on survey.`
    });
  } else if (has("windows_doors") && windowsFeelOlder(a)) {
    path.push({
      stage: "Start with",
      detail:
        "Windows and draught reduction where glazing is weakest — comfort-led work sometimes comes before heating swaps."
    });
  } else if (startedWallFirst) {
    path.push({
      stage: "Start with",
      detail:
        "Clarify wall build-up first — know the construction before you choose an insulation route or grant path."
    });
  }

  if (has("wall_insulation") && !(startedWallFirst && path.length === 1)) {
    path.push({
      stage: path.length ? "Then consider" : "Start with",
      detail:
        "Wall insulation once type and moisture risk are agreed — technique follows survey, not the other way around."
    });
  }

  if (has("heat_pump")) {
    path.push({
      stage: path.length ? "Then consider" : "Start with",
      detail: fabricWeakForHeatPump(a)
        ? `Heat pump options after fabric improves — many homes tackle roof and wall loss before moving off ${labelHeating(a.heating)}.`
        : `Heat pump options when fabric and emitters are clearer — moving from ${labelHeating(a.heating)} may qualify for support; survey decides.`
    });
  }

  if (has("windows_doors") && !windowsFeelOlder(a) && path.length > 0) {
    path.push({
      stage: "Then consider",
      detail:
        "Targeted window upgrades where a survey still shows weak spots — often after larger fabric choices."
    });
  } else if (has("windows_doors") && !windowsFeelOlder(a) && path.length === 0) {
    path.push({
      stage: "Start with",
      detail:
        "Targeted window work where a survey shows benefit — newer homes sometimes need piecemeal work, not full replacement."
    });
  }

  if (has("solar_pv")) {
    path.push({
      stage: "Then consider",
      detail:
        "Solar PV alongside or after heating and main fabric — export, roof load, and inverter choice may need assessment first."
    });
  }

  if (has("full_retrofit")) {
    path.push({
      stage: "Then consider",
      detail:
        "Coordinate grants, contractors, and staged works — whole-home retrofit rarely finishes in one step."
    });
  }

  if (path.length === 0) {
    path.push({
      stage: "Start with",
      detail:
        "A BER or short retrofit consultation to rank measures — helpful when you’re still choosing where to focus."
    });
  }

  return path.slice(0, 6);
}

function buildHomeProfileRows(a: PlannerAnswers): Array<{ label: string; value: string }> {
  const prev =
    a.previousUpgrades.includes("none_yet") && a.previousUpgrades.length === 1
      ? "None recorded yet"
      : a.previousUpgrades
          .filter((p) => p !== "none_yet")
          .map((p) =>
            p === "attic"
              ? "Attic"
              : p === "wall"
                ? "Walls"
                : p === "windows"
                  ? "Windows/doors"
                  : p === "heat_pump"
                    ? "Heat pump"
                    : p === "solar"
                      ? "Solar PV"
                      : p === "heating_upgrade"
                        ? "Heating upgrade (boiler)"
                        : p
          )
          .join(", ") || "—";

  return [
    { label: "Property type", value: labelPropertyType(a.propertyType) },
    { label: "County", value: a.county || "—" },
    { label: "Rough build period", value: labelYearBand(a.yearBuiltBand) },
    { label: "Occupancy", value: labelHomeownerStatus(a.homeownerStatus) },
    { label: "Main heating", value: labelHeating(a.heating) },
    { label: "BER", value: labelBerSummary(a.berStatus, a.berRatingBand) },
    { label: "Attic insulation (your view)", value: labelAttic(a.atticInsulation) },
    { label: "Wall insulation (your view)", value: labelWall(a.wallInsulation) },
    { label: "Windows (your view)", value: labelWindows(a.windowCondition) },
    { label: "Previous retrofit work", value: prev },
    { label: "Selected interests", value: labelUpgradeInterests(a.upgradeInterests) }
  ];
}

const IMPORTANT_TO_KNOW = [
  "This plan reflects your answers — not an official SEAI or government eligibility decision.",
  "Grants and rules change; what may qualify depends on SEAI requirements, BER, surveys, and competent installers.",
  "Suitability varies room to room; what happens on site matters more than any online summary.",
  "Ask that quotes and contracts state grant assumptions clearly so you can check them calmly."
];

const SOFT_CLOSE =
  "Use this plan at your own pace. Speak with qualified installers when that feels right — no pressure implied.";

/** Full “Retrofit Plan” after lead capture — extends Phase 5 via buildPartialPreview. */
export function buildFullRetrofitPlan(a: PlannerAnswers): FullRetrofitPlanModel {
  const preview = buildPartialPreview(a);
  const interests = a.upgradeInterests.filter((i) => i !== "not_sure");

  const maySuit: FullPlanUpgradeCard[] = preview.maySuit.map((c) =>
    enrichMaySuitCard(c, c.id, a)
  );
  const assessFirst: PrepUpgradeCard[] = preview.assessFirst.map((c) =>
    enrichPrepCard(c, c.id, a)
  );

  return {
    preview,
    grantRange: computeIndicativeGrantRange(a),
    maySuit,
    assessFirst,
    readiness: buildReadinessTier(a, preview),
    orderedNextSteps: buildOrderedFullNextSteps(a, preview),
    upgradePath: buildRecommendedUpgradePath(a, interests),
    homeProfile: buildHomeProfileRows(a),
    importantToKnow: IMPORTANT_TO_KNOW,
    softClose: SOFT_CLOSE
  };
}
