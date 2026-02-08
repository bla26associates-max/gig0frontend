import type { ReactNode } from "react"

interface HiringFlowStepCardProps {
  icon: ReactNode
  stepNumber: number
  title: string
  description: string
}

export function HiringFlowStepCard({
  icon,
  stepNumber,
  title,
  description,
}: HiringFlowStepCardProps) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-xl bg-card p-6 text-center shadow-sm ring-1 ring-border/50 transition-all duration-300 ease-in-out hover:shadow-md hover:ring-accent/30">
      {/* Step number indicator */}
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
        {stepNumber}
      </span>

      {/* Icon */}
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs text-muted-foreground sm:text-sm">{description}</p>
    </div>
  )
}