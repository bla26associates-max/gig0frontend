import {
  HardHat,
  HeartPulse,
  Warehouse,
  UtensilsCrossed,
  Truck,
  Factory,
} from "lucide-react"
import { IndustryCard } from "./industry-card" // Standardized sibling import
import { Industry, NEW_INDUSTRY_BOILERPLATE } from "@/lib/types" // Import standardized types

// 1. Extend the base Industry type to include UI-only properties
type IndustryUI = Industry & {
  icon: React.ReactNode;
};

// Standardizing the local data using the Industry interface
const industries: IndustryUI[] = [
  { ...NEW_INDUSTRY_BOILERPLATE, id: "1", icon: <HardHat className="h-6 w-6" />, name: "Construction", professionalsCount: 1240 },
  { ...NEW_INDUSTRY_BOILERPLATE, id: "2", icon: <HeartPulse className="h-6 w-6" />, name: "Healthcare", professionalsCount: 890, trending: true },
  { ...NEW_INDUSTRY_BOILERPLATE, id: "3", icon: <Warehouse className="h-6 w-6" />, name: "Warehousing", professionalsCount: 1050 },
  { ...NEW_INDUSTRY_BOILERPLATE, id: "4", icon: <UtensilsCrossed className="h-6 w-6" />, name: "Hospitality", professionalsCount: 760 },
  { ...NEW_INDUSTRY_BOILERPLATE, id: "5", icon: <Truck className="h-6 w-6" />, name: "Logistics", professionalsCount: 640 },
  { ...NEW_INDUSTRY_BOILERPLATE, id: "6", icon: <Factory className="h-6 w-6" />, name: "Manufacturing", professionalsCount: 530 },
].map(item => ({ ...item, label: "Professionals Available" })); // Enforcing terminology

export function IndustriesSection() {
  return (
    <section id="industries" className="w-full bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 flex flex-col items-center gap-3 text-center sm:mb-14">
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Industries We Serve
          </span>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Talent Across Every Industry
          </h2>
          <p className="max-w-md text-pretty text-sm text-muted-foreground sm:text-base">
            Browse verified, **Accredited Talent** ready to work in your industry today.
          </p>
        </div>

        {/* Mobile: horizontal scroll with snap - Preserving original display features */}
        <div className="-mx-4 px-4 md:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {industries.map((industry) => (
              <div key={industry.id} className="snap-start">
                <IndustryCard
                  icon={industry.icon}
                  industryData={industry}
                  viewContext="public" // Standardized context for pre-login
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid - Preserving original display features */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              icon={industry.icon}
              industryData={industry}
              viewContext="public"
            />
          ))}
        </div>
      </div>
    </section>
  )
}