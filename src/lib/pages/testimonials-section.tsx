// testimonials-section.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button" // Aligned with established UI path
import { TestimonialCard } from "./testimonial-card"
import { Testimonial, ClientStatus } from "@/lib/types" // Standardized types

interface TestimonialsSectionProps {
  /**
   * viewContext allows the section to pivot its data or CTA 
   * based on the viewer (e.g., Worker vs Employer).
   */
  viewContext?: 'public' | 'employer' | 'employee' | 'admin'
}

// Standardized testimonial data grounded in the Testimonial interface
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Operations Manager",
    photo: "https://i.pravatar.cc/96?img=1",
    quote: "StaffHub completely transformed how we hire temporary staff. We filled three warehouse positions in under an hour.",
    rating: 5,
    status: ClientStatus.LONG_TERM,
  },
  {
    id: "2",
    name: "James Rodriguez",
    role: "Facility Director",
    photo: "https://i.pravatar.cc/96?img=3",
    quote: "The verified profiles give us confidence. Every worker we've booked has shown up prepared and on time.",
    rating: 5,
    status: ClientStatus.VERIFIED_COMPANY,
  },
  {
    id: "3",
    name: "Angela Torres",
    role: "HR Lead",
    photo: "https://i.pravatar.cc/96?img=5",
    quote: "As a healthcare facility manager, finding certified staff quickly is critical. StaffHub delivers every time.",
    rating: 4,
    status: ClientStatus.LONG_TERM,
  },
  {
    id: "4",
    name: "David Kim",
    role: "Logistics Coordinator",
    photo: "https://i.pravatar.cc/96?img=11",
    quote: "Simple, fast, and local. The quality of talent in Philadelphia has never been easier to access.",
    rating: 5,
    status: ClientStatus.VERIFIED_COMPANY,
  },
]

export function TestimonialsSection({ viewContext = 'public' }: TestimonialsSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full bg-background py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Standardized Section Header Pattern */}
        <div className="mb-12 flex flex-col items-center gap-2 text-center">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            Social Proof
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Philly Businesses
          </h2>
          <p className="max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base">
            See how our local community is scaling their operations with verified professionals.
          </p>
        </div>

        {/* Mobile: Horizontal snap-scroll carousel */}
        <div className="-mx-4 px-4 md:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((t) => (
              <div key={t.id} className="min-w-[300px] shrink-0 snap-start">
                <TestimonialCard data={t} viewContext={viewContext} />
              </div>
            ))}
            
            {/* CTA slide - preserving Vercel mobile-first conversion design */}
            <div className="flex min-w-[300px] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/30 p-6 text-center">
              <p className="text-base font-semibold text-foreground">
                Ready to experience it yourself?
              </p>
              <Button asChild className="font-semibold">
                <a href="/login">Get Started</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop: 2-column grid with staggered fade-in */}
        <div className="hidden gap-8 md:grid md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 100}ms`,
              }}
              className="transition-all duration-500 ease-out"
            >
              <TestimonialCard data={t} viewContext={viewContext} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}