"use client"

import { useEffect, useRef, useState } from "react"
import {
  Search,
  ShieldCheck,
  Send,
  UserCheck,
  CalendarCheck,
  Star,
} from "lucide-react"
import { HiringFlowStepCard } from "./hiringflow-stepcard"
import { StaffStatus } from "@/lib/types" // Standardized terminology import

interface HowHiringWorksSectionProps {
  /**
   * viewContext allows the section to pivot its descriptions based on 
   * who is viewing the page (e.g., Employer vs Worker).
   */
  viewContext?: 'public' | 'employer' | 'employee' | 'admin'
}

export function HowHiringWorksSection({ viewContext = 'public' }: HowHiringWorksSectionProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  // Standardized terminology applied to step descriptions
  const steps = [
    {
      icon: <Search className="h-5 w-5" />,
      title: "Search for Talent",
      description: `Browse available, ${StaffStatus.ACCREDITED.toLowerCase()} workers by industry.`,
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Review Credentials",
      description: `View ${StaffStatus.VERIFIED.toLowerCase()} profiles, skills, and ratings.`,
    },
    {
      icon: <Send className="h-5 w-5" />,
      title: "Send Request",
      description: "Reach out to the professionals you need instantly.",
    },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Confirm Match",
      description: "Accept the best fit for your open role in Philadelphia.",
    },
    {
      icon: <CalendarCheck className="h-5 w-5" />,
      title: "Schedule Start",
      description: "Set the date and get them on-site fast.",
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Rate & Review",
      description: "Maintain the high standard of our local community.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[i] = true
                return newState
              })
            }, i * 100)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="how-it-works" className="w-full bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-2 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How Hiring Works
          </h2>
          <p className="text-pretty text-sm font-medium text-muted-foreground sm:text-base">
            Fast. {StaffStatus.VERIFIED}. Easy.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connector line - Preserving original design feature */}
          <div
            className="absolute top-[72px] right-[calc(8.33%+12px)] left-[calc(8.33%+12px)] hidden h-px bg-border lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="transition-all duration-500 ease-out"
                style={{
                  opacity: visibleCards[i] ? 1 : 0,
                  transform: visibleCards[i] ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <HiringFlowStepCard
                  icon={step.icon}
                  stepNumber={i + 1}
                  title={step.title}
                  description={step.description}
                  viewContext={viewContext} // Passing context to child card
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}