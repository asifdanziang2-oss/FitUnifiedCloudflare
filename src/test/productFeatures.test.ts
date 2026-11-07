import { describe, it, expect } from "vitest";
import {
  FITKHATA_FEATURES_META,
  FITVYAPAAR_FEATURES_META,
  FITNAUKRI_FEATURES_META,
  getProductFeatureLabels,
} from "../lib/productFeatures";

describe("productFeatures metadata", () => {
  it("defines all 5 FitKhata features in the expected order", () => {
    expect(getProductFeatureLabels(FITKHATA_FEATURES_META)).toEqual([
      "Biometric Attendance",
      "Daily Check-in Reports",
      "Member Management",
      "Documentation & Compliance",
      "Payroll Management",
    ]);
  });

  it("defines all 4 FitVyapaar features in the expected order", () => {
    expect(getProductFeatureLabels(FITVYAPAAR_FEATURES_META)).toEqual([
      "B2B Marketplace",
      "Equipment Procurement",
      "Repair & Maintenance",
      "Verified Suppliers",
    ]);
  });

  it("defines all 5 FitNaukri Hiring Platform features in the expected order with distinct circle colors", () => {
    expect(getProductFeatureLabels(FITNAUKRI_FEATURES_META)).toEqual([
      "Fitness Job Board",
      "Verified Profiles",
      "Trainer Discovery",
      "Nutritionist Connect",
      "Wellness Careers",
    ]);
    for (const item of FITNAUKRI_FEATURES_META) {
      expect(item.circleBg.startsWith("bg-[")).toBe(true);
      expect(item.iconColor.startsWith("text-[")).toBe(true);
    }
  });
});
