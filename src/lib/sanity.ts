import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "gt4686wt";
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2024-01-01";
const token = import.meta.env.VITE_SANITY_API_TOKEN || "";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: token || undefined,
  useCdn: false, // Must be false for writes
});

export interface DemoBookingData {
  name: string;
  phone: string;
  gymName: string;
  city: string;
  message?: string;
}

export interface ContactSubmissionData {
  name: string;
  phone: string;
  gymName: string;
  city: string;
  message: string;
}

export interface LeadCaptureData {
  phone: string;
  source?: string;
}

/**
 * Submit a Book Demo inquiry to Sanity CMS
 */
export async function submitDemoBooking(data: DemoBookingData) {
  if (!token) {
    console.warn(
      "[Sanity] VITE_SANITY_API_TOKEN is not configured in .env. Document creation skipped."
    );
    return null;
  }

  const doc = {
    _type: "demoBooking",
    name: data.name.trim(),
    phone: data.phone.trim(),
    gymName: data.gymName.trim(),
    city: data.city.trim(),
    message: (data.message || "").trim(),
    status: "new",
    submittedAt: new Date().toISOString(),
  };

  return await sanityClient.create(doc);
}

/**
 * Submit a Contact Form inquiry to Sanity CMS
 */
export async function submitContactForm(data: ContactSubmissionData) {
  if (!token) {
    console.warn(
      "[Sanity] VITE_SANITY_API_TOKEN is not configured in .env. Document creation skipped."
    );
    return null;
  }

  const doc = {
    _type: "contactSubmission",
    name: data.name.trim(),
    phone: data.phone.trim(),
    gymName: data.gymName.trim(),
    city: data.city.trim(),
    message: data.message.trim(),
    status: "new",
    submittedAt: new Date().toISOString(),
  };

  return await sanityClient.create(doc);
}

/**
 * Submit a Quick Lead (Hero Phone Input) to Sanity CMS
 */
export async function submitLeadCapture(data: LeadCaptureData) {
  if (!token) {
    console.warn(
      "[Sanity] VITE_SANITY_API_TOKEN is not configured in .env. Document creation skipped."
    );
    return null;
  }

  const doc = {
    _type: "leadCapture",
    phone: data.phone.trim(),
    source: data.source || "Homepage Hero",
    status: "pending_call",
    submittedAt: new Date().toISOString(),
  };

  return await sanityClient.create(doc);
}

