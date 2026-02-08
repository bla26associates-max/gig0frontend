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
import { HiringFlowStepCard } from "@/components/hiring-flow-step-card"

const steps = [
  {
    icon: <Search className="h-5 w-5" />,
    title: "Search for Talent",
    description: "Browse available, accredited workers by industry.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Review Credentials",
    description: "View verified profiles, skills, and ratings.",
  },
  {
    icon: <Send className="h-5 w-5" />,
    title: "Send Request",
    description: "Reach out to the professionals you need.",
  },
  {
    icon: <UserCheck className="h-5 w-5" />,
    title: "Confirm Match",
    description: "Accept the best fit for your open role.",
  },
  {
    icon: <CalendarCheck className="h-5 w-5" />,
    title: "Schedule Start",
    description: "Set the date and get them on-site fast.",
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: "Rate + Pay",
    description: "Complete the job, leave a review, and pay securely.",
  },
]

export function HowHiringWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            if (!isNaN(index)) {
              setVisibleCards((prev) => {
                const next = [...prev]
                next[index] = true
                return next
              })
            }
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full bg-secondary/50 py-16 sm:py-24">
      <div
        ref={sectionRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <div className="mb-10 flex flex-col items-center gap-3 text-center sm:mb-14">
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Simple Process
          </span>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            How Hiring Works
          </h2>
          <p className="text-pretty text-sm font-medium text-muted-foreground sm:text-base">
            Fast. Verified. Easy.
          </p>
        </div>

        {/* Desktop: connector line behind the grid */}
        <div className="relative">
          {/* Horizontal connector line (desktop only) */}
          <div
            className="absolute top-[72px] right-[calc(8.33%+12px)] left-[calc(8.33%+12px)] hidden h-px bg-border lg:block"
            aria-hidden="true"
          />

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                data-index={i}
                className="transition-all duration-500 ease-out"
                style={{
                  opacity: visibleCards[i] ? 1 : 0,
                  transform: visibleCards[i]
                    ? "translateY(0)"
                    : "translateY(24px)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <HiringFlowStepCard
                  icon={step.icon}
                  stepNumber={i + 1}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}