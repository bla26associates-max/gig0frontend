import type { ReactNode } from "react"
import { cn } from "@/lib/utils" // For standardized style merging
import { StaffStatus } from "@/lib/types" // For consistent terminology

interface HiringFlowStepCardProps {
  icon: ReactNode
  stepNumber: number
  title: string
  description: string
  /**
   * viewContext allows the card to accept different data shapes and 
   * terminology based on the user's role (Employer, Employee, Admin).
   */
  viewContext?: 'public' | 'employer' | 'employee' | 'admin'
}

export function HiringFlowStepCard({
  icon,
  stepNumber,
  title,
  description,
  viewContext = 'public',
}: HiringFlowStepCardProps) {
  
  // Logic to determine if a step requires a "Verified" badge for Admin oversight
  const isActionableStep = viewContext === 'admin' && (title.includes("Review") || title.includes("Confirm"));

  return (
    <div className={cn(
      "group flex flex-col items-center gap-3 rounded-xl bg-card p-6 text-center shadow-sm ring-1 ring-border/50 transition-all duration-300 ease-in-out hover:shadow-md hover:ring-accent/30",
      // Context-aware background shift for active Admin steps
      isActionableStep && "bg-accent/5 ring-accent/20"
    )}>
      {/* Step number indicator - Maintaining Vercel branding */}
      <span className={cn(
        "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors",
        isActionableStep ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground"
      )}>
        {stepNumber}
      </span>

      {/* Icon Container */}
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
        {icon}
      </div>

      {/* Title utilizing standardized Geist font weights */}
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
        {description}
      </p>

      {/* Standardized Status Indicator for Post-Login Contexts */}
      {isActionableStep && (
        <div className="mt-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-accent">
          <span className="h-1 w-1 rounded-full bg-accent animate-pulse" />
          {StaffStatus.VERIFIED} Required
        </div>
      )}
    </div>
  )
}