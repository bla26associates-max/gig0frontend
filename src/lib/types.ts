// src/lib/types.ts

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
  
  /** * Boilerplates for New Data
   * Use these when adding new items to your local state or database.
   */
  export const NEW_INDUSTRY_BOILERPLATE: Industry = {
    id: "",
    name: "New Industry",
    professionalsCount: 0,
    label: "Professionals Available",
    trending: false,
  };
  
  export const NEW_PROFESSIONAL_BOILERPLATE: Professional = {
    id: "",
    fullName: "",
    industry: "",
    status: StaffStatus.PENDING,
    yearsExperience: 0,
    location: "Philadelphia, PA",
  };