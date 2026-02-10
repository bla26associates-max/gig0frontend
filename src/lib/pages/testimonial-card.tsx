// testimonial-card.tsx

import { ShieldCheck, Clock } from "lucide-react"
import { cn } from "@/lib/utils" // Standardized style merging
import { Testimonial, ClientStatus } from "@/lib/types" // Standardized terminology

interface TestimonialCardProps {
  /**
   * Data object following the standardized Testimonial interface
   */
  data: Testimonial
  /**
   * viewContext allows the card to adapt signaling based on the viewer's role
   */
  viewContext?: 'public' | 'employer' | 'employee' | 'admin'
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={cn("h-4 w-4", filled ? "text-chart-4" : "text-border")}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export function TestimonialCard({
  data,
  viewContext = 'public',
}: TestimonialCardProps) {
  const { name, photo, quote, logo, rating, status, role } = data

  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Header with Avatar and Rating */}
      <div className="flex items-center gap-3">
        <img
          src={photo}
          alt={name}
          className="h-10 w-10 rounded-full object-cover ring-1 ring-border"
        />
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-semibold text-foreground">{name}</span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{role}</span>
          {/* Star rating */}
          <div className="mt-1 flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < rating} />
            ))}
          </div>
        </div>
        {logo && (
          <img
            src={logo}
            alt={`${name}'s company logo`}
            className="h-8 w-auto object-contain opacity-60"
          />
        )}
      </div>

      {/* Quote with Vercel-inspired blockquote styling */}
      <blockquote className="flex-1 text-sm leading-relaxed text-foreground sm:text-base">
        {`"${quote}"`}
      </blockquote>

      {/* Trust badges mapped to standardized ClientStatus terminology */}
      <div className="flex flex-wrap items-center gap-2">
        {status === ClientStatus.VERIFIED_COMPANY && (
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">
            <ShieldCheck className="h-3 w-3" />
            {ClientStatus.VERIFIED_COMPANY}
          </span>
        )}
        {status === ClientStatus.LONG_TERM && (
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
            <Clock className="h-3 w-3" />
            {ClientStatus.LONG_TERM}
          </span>
        )}
      </div>
    </div>
  )
}