import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "This field is required.").max(100),
  phone: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(/^\d{7,15}$/, "Enter a valid phone number."),
  gymName: z.string().trim().min(1, "This field is required.").max(100),
  city: z.string().trim().min(1, "This field is required.").max(100),
  message: z.string().trim().min(1, "This field is required.").max(1000),
});

export type ContactValues = z.infer<typeof contactSchema>;

export interface ContactInfoItem {
  id: "phone" | "email" | "office";
  label: string;
  value: string;
  href?: string;
}

export const CONTACT_INFO_ITEMS: ContactInfoItem[] = [
  {
    id: "phone",
    label: "Phone",
    value: "+91-8796260440",
    href: "tel:+918796260440",
  },
  {
    id: "email",
    label: "Email",
    value: "connect@fitunified.com",
    href: "mailto:connect@fitunified.com",
  },
  {
    id: "office",
    label: "Office",
    value: "Bengaluru, Karnataka, India",
  },
];

export function buildWhatsAppContactUrl(data: ContactValues): string {
  const text = encodeURIComponent(
    `Hi, I'd like to get in touch.\n\nName: ${data.name.trim()}\nPhone: ${data.phone.trim()}\nGym: ${data.gymName.trim()}\nCity: ${data.city.trim()}\nMessage: ${data.message.trim()}`
  );
  return `https://wa.me/918796260440?text=${text}`;
}
