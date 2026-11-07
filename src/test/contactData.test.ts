import { describe, it, expect } from "vitest";
import {
  contactSchema,
  CONTACT_INFO_ITEMS,
  buildWhatsAppContactUrl,
} from "../lib/contactData";

describe("contactData validation & metadata", () => {
  it("exposes Phone, Email, and Office contact items matching the reference design", () => {
    expect(CONTACT_INFO_ITEMS).toHaveLength(3);
    expect(
      CONTACT_INFO_ITEMS.map((item) => ({ label: item.label, value: item.value }))
    ).toEqual([
      { label: "Phone", value: "+91-8796260440" },
      { label: "Email", value: "connect@fitunified.com" },
      { label: "Office", value: "Bengaluru, Karnataka, India" },
    ]);
  });

  it("validates a complete, valid contact form submission", () => {
    const result = contactSchema.safeParse({
      name: "Aarav Sharma",
      phone: "9876543210",
      gymName: "Iron Pulse Fitness",
      city: "Bengaluru",
      message: "We would like a live demo of FitKhata.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty fields and invalid phone numbers", () => {
    const emptyResult = contactSchema.safeParse({
      name: "",
      phone: "abc",
      gymName: "",
      city: "",
      message: "",
    });
    expect(emptyResult.success).toBe(false);
  });

  it("builds a properly encoded WhatsApp contact URL", () => {
    const url = buildWhatsAppContactUrl({
      name: "Aarav Sharma",
      phone: "9876543210",
      gymName: "Iron Pulse Fitness",
      city: "Bengaluru",
      message: "Need pricing info",
    });
    expect(url.startsWith("https://wa.me/918796260440?text=")).toBe(true);
    expect(url.includes(encodeURIComponent("Iron Pulse Fitness"))).toBe(true);
  });
});
