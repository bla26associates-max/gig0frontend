import React from "react"
import { Header } from "./header"
import { HeroSection } from "./herosection"
import { IndustriesSection } from "./industries-section"
import { HowHiringWorksSection } from "./howhiringworks-section"
import { StaffStatus } from "@/lib/types" // Standardized terminology

/**
 * LandingPage component acting as the primary coordinator for the 
 * Philadelphia StaffHub pre-login experience.
 */
export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      {/* 1. Navigation Header */}
      <Header />
      
      <main className="flex-auto">
        {/* 2. Hero Section: Grounds the design in the Philadelphia context */}
        <HeroSection />

        {/* 3. Industries Section: Displays standardized "Accredited Talent" counts */}
        <IndustriesSection />

        {/* 4. How Hiring Works Section: 
            Prop-driven animation section utilizing the HiringFlowStepCard.
            'viewContext="public"' ensures marketing-focused terminology.
        */}
        <HowHiringWorksSection viewContext="public" />

        {/* 5. Pre-login Call to Action */}
        <section className="bg-accent py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
              Ready to find your next professional?
            </h2>
            <p className="mt-4 text-lg text-accent-foreground/80">
              Join the growing community of Philadelphia businesses utilizing **{StaffStatus.ACCREDITED}**.
            </p>
          </div>
        </section>
      </main>

      {/* 6. Standardized Footer: Utilizing immutable verified status */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Philadelphia StaffHub. 
            All talent is **{StaffStatus.VERIFIED}** and vetted for local compliance.
          </p>
        </div>
      </footer>
    </div>
  )
}