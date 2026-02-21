/**
 * PHILADELPHIA STAFFHUB - DATA DICTIONARY
 * Version: 1.1.0
 * Strategy: Database-Driven, Four-State Logic
 */

/**
 * Standardized User Roles
 * Drives the viewContext pivot throughout the application.
 * Matches expected backend role categorization.
 */
export type UserRole = 'public' | 'employer' | 'employee' | 'admin';

/**
 * Authentication Modes
 * Defines the UI state for the Modular Auth System.
 */
export type AuthMode = 'signin' | 'signup';

/**
 * Immutable Brand Terminology
 * Replaces all hardcoded strings to ensure consistency across 
 * Hero, Industries, and Registration forms.
 */
export enum StaffStatus {
  ACCREDITED = "Accredited Talent",
  VERIFIED = "Verified Professional",
  CERTIFIED = "Certified Staff",
  PHILADELPHIA_VERIFIED = "Philadelphia Verified"
}

/**
 * Auth Modal Options
 * The interface for the openAuthModal trigger used by Header and Hero components.
 */
export interface AuthModalOptions {
  mode: AuthMode;
  viewContext: UserRole;
}

/**
 * Global Branding Constants
 */
export const PLATFORM_NAME = "StaffHub Philadelphia";
export const AUTH_TAGLINE = "Secure, Locally-Verified Professional Staffing";

/**
 * Zod-Ready Interface: Employer Profile
 * This interface acts as the blueprint for the Employer Database Schema.
 */
export interface EmployerProfile {
  companyName: string;
  ein: string; // Required for 'employer' context verification
  industry: string;
  location: string;
}

/**
 * Zod-Ready Interface: Employee Profile
 * This interface acts as the blueprint for the Employee Database Schema.
 */
export interface EmployeeProfile {
  fullName: string;
  specialization: string;
  yearsExperience: number;
  status: StaffStatus;
}