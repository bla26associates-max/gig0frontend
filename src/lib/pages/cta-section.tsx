// cta-section.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button" // Aligned with established UI path
import { StaffStatus, CTAData } from "@/lib/types" // Standardized types and terminology

interface CTASectionProps {
  /**
   * Optional data object to override defaults for specific campaigns
   */
  data?: Partial<CTAData>
  /**
   * viewContext allows the section to pivot its messaging 
   * based on the viewer (e.g., Employer vs Worker).
   */
  viewContext?: 'public' | 'employer' | 'employee' | 'admin'
}

export function CTASection({
  data,
  viewContext = 'public',
}: CTASectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Determine defaults based on the login instance (viewContext)
  const isWorkerContext = viewContext === 'employee'
  
  const defaultHeadline = isWorkerContext 
    ? "Ready to Start Working?" 
    : "Ready to Hire Today?"
    
  const defaultSubtext = isWorkerContext
    ? `Access the best local shifts and maintain your ${StaffStatus.ACCREDITED} status.`
    : `Book ${StaffStatus.VERIFIED.toLowerCase()} staff in minutes.`

  const headline = data?.headline || defaultHeadline
  const subtext = data?.subtext || defaultSubtext
  const buttonLabel = data?.buttonLabel || (isWorkerContext ? "Find a Shift" : "Create a Free Account")
  const buttonLink = data?.buttonLink || "/login"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-primary py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Text Content - Preserving Vercel-inspired fade-in animation */}
          <div
            className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.5s ease-out",
            }}
          >
            <h2 className="text-balance text-3xl font-bold text-primary-foreground sm:text-4xl">
              {headline}
            </h2>
            {subtext && (
              <p className="text-lg text-primary-foreground/80">
                {subtext}
              </p>
            )}
          </div>

          {/* Action Button - Synchronized with standardized navigation */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.5s ease-out 0.15s",
            }}
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 px-8 font-bold transition-transform hover:scale-105 active:scale-95"
            >
              <a href={buttonLink}>{buttonLabel}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}