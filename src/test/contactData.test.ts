import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  contactSchema,
  CONTACT_INFO_ITEMS,
  buildWhatsAppContactUrl,
} from "../lib/contactData.ts";

describe("contactData validation & metadata", () => {
  it("exposes Phone, Email, and Office contact items matching the reference design", () => {
    assert.equal(CONTACT_INFO_ITEMS.length, 3);
    assert.deepEqual(
      CONTACT_INFO_ITEMS.map((item) => ({ label: item.label, value: item.value })),
      [
        { label: "Phone", value: "+91-8796260440" },
        { label: "Email", value: "connect@fitunified.com" },
        { label: "Office", value: "Bengaluru, Karnataka, India" },
      ]
    );
  });

  it("validates a complete, valid contact form submission", () => {
    const result = contactSchema.safeParse({
      name: "Aarav Sharma",
      phone: "9876543210",
      gymName: "Iron Pulse Fitness",
      city: "Bengaluru",
      message: "We would like a live demo of FitKhata.",
    });
    assert.equal(result.success, true);
  });

  it("rejects empty fields and invalid phone numbers", () => {
    const emptyResult = contactSchema.safeParse({
      name: "",
      phone: "abc",
      gymName: "",
      city: "",
      message: "",
    });
    assert.equal(emptyResult.success, false);
  });

  it("builds a properly encoded WhatsApp contact URL", () => {
    const url = buildWhatsAppContactUrl({
      name: "Aarav Sharma",
      phone: "9876543210",
      gymName: "Iron Pulse Fitness",
      city: "Bengaluru",
      message: "Need pricing info",
    });
    assert.ok(url.startsWith("https://wa.me/918796260440?text="));
    assert.ok(url.includes(encodeURIComponent("Iron Pulse Fitness")));
  });
});
