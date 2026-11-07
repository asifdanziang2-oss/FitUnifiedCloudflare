export interface ProductFeatureMeta {
  id: string;
  label: string;
  lines: string[];
  circleBg: string;
  iconColor: string;
}

export const FITKHATA_FEATURES_META: ProductFeatureMeta[] = [
  {
    id: "biometric-attendance",
    label: "Biometric Attendance",
    lines: ["Biometric Attendance"],
    circleBg: "bg-[#FFEBEB]",
    iconColor: "text-[#F43F5E]",
  },
  {
    id: "daily-checkin-reports",
    label: "Daily Check-in Reports",
    lines: ["Daily Check-in Reports"],
    circleBg: "bg-[#FFF1E6]",
    iconColor: "text-[#FF6B00]",
  },
  {
    id: "member-management",
    label: "Member Management",
    lines: ["Member Management"],
    circleBg: "bg-[#F3EBFF]",
    iconColor: "text-[#9333EA]",
  },
  {
    id: "documentation-compliance",
    label: "Documentation & Compliance",
    lines: ["Documentation &", "Compliance"],
    circleBg: "bg-[#E8F8EE]",
    iconColor: "text-[#16A34A]",
  },
  {
    id: "payroll-management",
    label: "Payroll Management",
    lines: ["Payroll Management"],
    circleBg: "bg-[#FFF6E0]",
    iconColor: "text-[#F59E0B]",
  },
];

export const FITVYAPAAR_FEATURES_META: ProductFeatureMeta[] = [
  {
    id: "b2b-marketplace",
    label: "B2B Marketplace",
    lines: ["B2B Marketplace"],
    circleBg: "bg-[#FFEBEB]",
    iconColor: "text-[#F43F5E]",
  },
  {
    id: "equipment-procurement",
    label: "Equipment Procurement",
    lines: ["Equipment", "Procurement"],
    circleBg: "bg-[#FFF1E6]",
    iconColor: "text-[#FF6B00]",
  },
  {
    id: "repair-maintenance",
    label: "Repair & Maintenance",
    lines: ["Repair &", "Maintenance"],
    circleBg: "bg-[#F3EBFF]",
    iconColor: "text-[#9333EA]",
  },
  {
    id: "verified-suppliers",
    label: "Verified Suppliers",
    lines: ["Verified", "Suppliers"],
    circleBg: "bg-[#E8F8EE]",
    iconColor: "text-[#16A34A]",
  },
];

export const FITNAUKRI_FEATURES_META: ProductFeatureMeta[] = [
  {
    id: "fitness-job-board",
    label: "Fitness Job Board",
    lines: ["Fitness Job Board"],
    circleBg: "bg-[#FFF0E5]",
    iconColor: "text-[#EE5F1B]",
  },
  {
    id: "verified-profiles",
    label: "Verified Profiles",
    lines: ["Verified Profiles"],
    circleBg: "bg-[#E7F8EE]",
    iconColor: "text-[#18B259]",
  },
  {
    id: "trainer-discovery",
    label: "Trainer Discovery",
    lines: ["Trainer Discovery"],
    circleBg: "bg-[#F3EBFF]",
    iconColor: "text-[#9B51E0]",
  },
  {
    id: "nutritionist-connect",
    label: "Nutritionist Connect",
    lines: ["Nutritionist Connect"],
    circleBg: "bg-[#FFF3E0]",
    iconColor: "text-[#F58216]",
  },
  {
    id: "wellness-careers",
    label: "Wellness Careers",
    lines: ["Wellness Careers"],
    circleBg: "bg-[#FFEBF0]",
    iconColor: "text-[#EC3868]",
  },
];

export function getProductFeatureLabels(features: ProductFeatureMeta[]): string[] {
  return features.map((f) => f.label);
}
