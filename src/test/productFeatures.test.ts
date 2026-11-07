import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  FITKHATA_FEATURES_META,
  FITVYAPAAR_FEATURES_META,
  FITNAUKRI_FEATURES_META,
  getProductFeatureLabels,
} from "../lib/productFeatures.ts";

describe("productFeatures metadata", () => {
  it("defines all 5 FitKhata features in the expected order", () => {
    assert.deepEqual(getProductFeatureLabels(FITKHATA_FEATURES_META), [
      "Biometric Attendance",
      "Daily Check-in Reports",
      "Member Management",
      "Documentation & Compliance",
      "Payroll Management",
    ]);
  });

  it("defines all 4 FitVyapaar features in the expected order", () => {
    assert.deepEqual(getProductFeatureLabels(FITVYAPAAR_FEATURES_META), [
      "B2B Marketplace",
      "Equipment Procurement",
      "Repair & Maintenance",
      "Verified Suppliers",
    ]);
  });

  it("defines all 5 FitNaukri Hiring Platform features in the expected order with distinct circle colors", () => {
    assert.deepEqual(getProductFeatureLabels(FITNAUKRI_FEATURES_META), [
      "Fitness Job Board",
      "Verified Profiles",
      "Trainer Discovery",
      "Nutritionist Connect",
      "Wellness Careers",
    ]);
    for (const item of FITNAUKRI_FEATURES_META) {
      assert.ok(item.circleBg.startsWith("bg-["), `Expected custom circleBg on ${item.id}`);
      assert.ok(item.iconColor.startsWith("text-["), `Expected custom iconColor on ${item.id}`);
    }
  });
});
