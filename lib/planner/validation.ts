import type { PlannerAnswers } from "./types";

const emailOk = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export function validatePlannerStep(
  stepIndex: number,
  answers: PlannerAnswers
): string | null {
  switch (stepIndex) {
    case 0: {
      if (!answers.propertyType) return "Choose the type of home you have.";
      if (!answers.county.trim()) return "Select the county the home is in.";
      if (!answers.yearBuiltBand) return "Select when your home was built.";
      if (!answers.homeownerStatus) {
        return "Select the option that best describes your situation.";
      }
      return null;
    }
    case 1: {
      if (!answers.heating) return "Select your main heating system.";
      if (!answers.berStatus) return "Say whether you already know your BER.";
      if (answers.berStatus === "know_band" && !answers.berRatingBand) {
        return "Select the BER band shown on your certificate — or pick “Exempt” if that applies.";
      }
      if (!answers.atticInsulation) return "Describe the attic insulation as best you can.";
      if (!answers.wallInsulation) return "Describe the wall insulation as best you can.";
      if (!answers.windowCondition) return "Describe the windows as best you can.";
      if (answers.previousUpgrades.length === 0) {
        return "Tick any retrofit work you have already done, or choose “None of these yet”.";
      }
      return null;
    }
    case 2: {
      if (answers.upgradeInterests.length === 0) {
        return "Select at least one area you want to explore, or “Not sure yet”.";
      }
      return null;
    }
    case 3: {
      if (!answers.timeline) {
        return "Choose when you would ideally like to start work.";
      }
      if (!answers.budget) return "Pick the budget range that feels closest.";
      if (!answers.quotesOrInstallerDiscussions) {
        return "Tell us where you are in the process with installers or quotes.";
      }
      if (!answers.openToQualifiedContact) {
        return "Say how you would prefer to move forward after this.";
      }
      return null;
    }
    case 4:
      return null;
    case 5: {
      if (!answers.leadName.trim()) return "Add your name so we can label your plan.";
      if (!answers.leadEmail.trim()) return "Add an email address for your plan.";
      if (!emailOk(answers.leadEmail)) return "Check that your email address looks correct.";
      if (!answers.consentContact) {
        return "Confirm you are happy for us to follow up about this plan.";
      }
      return null;
    }
    case 6:
      return null;
    default:
      return null;
  }
}
