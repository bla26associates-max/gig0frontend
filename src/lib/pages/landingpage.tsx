// landingpage.tsx

import React from "react"
import { Header } from "./header"
import { HeroSection } from "./herosection"
import { IndustriesSection } from "./industries-section"
import { HowHiringWorksSection } from "./howhiringworks-section"
import { TestimonialsSection } from "./testimonials-section"
import { CTASection } from "./cta-section"
import { StaffStatus } from "@/lib/types" // Standardized terminology

/**
 * LandingPage component acting as the primary coordinator for the 
 * Philadelphia StaffHub pre-login experience.
 * * Standardized to integrate social proof and conversion layers while 
 * maintaining high-fidelity Vercel styling.
 */
export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      {/* 1. Navigation Header */}
      <Header />
      
      <main className="flex-auto">
        {/* 2. Hero Section: Visual entry point for the Philadelphia market */}
        <HeroSection />

        {/* 3. Industries Section: Horizontal scroll (mobile) / Grid (desktop) 
            Displays standardized "Accredited Talent" counts.
        */}
        <IndustriesSection />

        {/* 4. How Hiring Works Section: Animated process flow 
            Prop-driven 'viewContext' ensures marketing terminology.
        */}
        <HowHiringWorksSection viewContext="public" />

        {/* 5. Testimonials Section: Mobile snap-scroll social proof carousel
            Displays "Verified Company" and "Long-term Client" badges.
        */}
        <TestimonialsSection viewContext="public" />

        {/* 6. Conversion CTA Section: Full-width primary-themed call to action
            Dynamically injects "Verified" and "Accredited Talent" terminology.
        */}
        <CTASection viewContext="public" />
      </main>

      {/* 7. Standardized Footer: Utilizing immutable status strings */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex justify-center space-x-6 text-sm font-medium text-muted-foreground">
             <a href="#industries" className="hover:text-foreground">Industries</a>
             <a href="#how-it-works" className="hover:text-foreground">Process</a>
             <a href="#testimonials" className="hover:text-foreground">Success Stories</a>
             <a href="/login" className="hover:text-foreground">Login</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Philadelphia StaffHub. 
            All talent is **{StaffStatus.VERIFIED}** and vetted for local compliance.
          </p>
        </div>
      </footer>
    </div>
  )
}