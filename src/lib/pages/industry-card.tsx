// industrycard.tsx
import type { ReactNode } from "react"
import { Industry, StaffStatus } from "@/lib/types" // Importing from your new shared types file

interface IndustryCardProps {
  icon: ReactNode
  industryData: Industry // Using the standardized Industry interface
}

export function IndustryCard({
  icon,
  industryData,
}: IndustryCardProps) {
  // Logic to determine badge status based on trending or accreditation status
  const badgeLabel = industryData.trending ? "Trending" : StaffStatus.ACCREDITED;

  return (
    <div className="group relative flex min-w-[160px] shrink-0 cursor-pointer flex-col items-center gap-3 rounded-xl bg-card p-6 shadow-sm ring-1 ring-border/50 transition-all duration-300 ease-in-out hover:shadow-md hover:ring-accent/30 sm:min-w-[200px]">
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {industryData.name}
      </h3>

      {/* Dynamic Badge */}
      <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
        <svg className="h-3 w-3 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {badgeLabel}
      </span>

      {/* Metadata Overlay utilizing standardized labels */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center rounded-b-xl bg-accent/95 px-3 py-2.5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
        <p className="text-xs font-medium text-accent-foreground">
          {industryData.professionalsCount.toLocaleString()} {industryData.label}
        </p>
      </div>
    </div>
  )
}