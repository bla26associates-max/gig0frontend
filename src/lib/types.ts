// types.ts

/**
 * Standardized Terminology Enums
 * These match your backend database requirements exactly.
 */
export enum StaffStatus {
  VERIFIED = "Verified",
  ACCREDITED = "Accredited Talent",
  PENDING = "Pending Review",
  INACTIVE = "Inactive"
}

/**
 * NEW: Standardized Client & Trust Terminology
 * Grounding the TestimonialCard badges in immutable logic.
 */
export enum ClientStatus {
  VERIFIED_COMPANY = "Verified Company",
  LONG_TERM = "Long-term Client"
}

export interface Industry {
  id: string;
  name: string; // e.g., "Healthcare", "Logistics"
  professionalsCount: number;
  label: string; // Standardized: "Professionals Available"
  trending?: boolean;
}

export interface Professional {
  id: string;
  fullName: string;
  industry: string;
  status: StaffStatus;
  yearsExperience: number;
  location: string; // e.g., "North Philly", "Center City"
  verifiedAt?: string; // ISO date string
}

/**
 * NEW: Testimonial Interface
 * Supporting the Vercel-inspired mobile snap-scroll carousel.
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  photo: string;
  logo?: string;
  rating: number; // 1-5 scale
  status: ClientStatus;
}

/**
 * NEW: CTA Section Interface
 * Ensuring headline/subtext remain prop-driven for different login states.
 */
export interface CTAData {
  headline: string;
  subtext: string;
  buttonLabel: string;
  buttonLink: string;
}

/** * Boilerplates for New Data
 * Use these when adding new items to your local state or database.
 */
export const NEW_INDUSTRY_BOILERPLATE: Industry = {
  id: "",
  name: "New Industry",
  professionalsCount: 0,
  label: "Professionals Available", //
  trending: false,
};

export const NEW_PROFESSIONAL_BOILERPLATE: Professional = {
  id: "",
  fullName: "",
  industry: "",
  status: StaffStatus.PENDING, //
  yearsExperience: 0,
  location: "Philadelphia, PA", //
};

/**
 * NEW: Testimonial Boilerplate
 * Standardized for the TestimonialsSection.
 */
export const NEW_TESTIMONIAL_BOILERPLATE: Testimonial = {
  id: "",
  name: "Client Name",
  role: "Company Owner",
  quote: "Standardized feedback goes here.",
  photo: "/assets/placeholders/avatar.png",
  rating: 5,
  status: ClientStatus.VERIFIED_COMPANY
};