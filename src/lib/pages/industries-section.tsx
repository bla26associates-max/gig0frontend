import {
    HardHat,
    HeartPulse,
    Warehouse,
    UtensilsCrossed,
    Truck,
    Factory,
  } from "lucide-react"
  import { IndustryCard } from "@/components/industry-card"
  
  const industries = [
    { icon: <HardHat className="h-6 w-6" />, title: "Construction", count: 1240 },
    { icon: <HeartPulse className="h-6 w-6" />, title: "Healthcare", count: 890 },
    { icon: <Warehouse className="h-6 w-6" />, title: "Warehousing", count: 1050 },
    {
      icon: <UtensilsCrossed className="h-6 w-6" />,
      title: "Hospitality",
      count: 760,
    },
    { icon: <Truck className="h-6 w-6" />, title: "Logistics", count: 640 },
    { icon: <Factory className="h-6 w-6" />, title: "Manufacturing", count: 530 },
  ]
  
  export function IndustriesSection() {
    return (
      <section className="w-full bg-background py-16 sm:py-24">
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
              Browse verified, accredited professionals ready to work in your
              industry today.
            </p>
          </div>
  
          {/* Mobile: horizontal scroll with snap */}
          <div className="-mx-4 px-4 md:hidden">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {industries.map((industry) => (
                <div key={industry.title} className="snap-start">
                  <IndustryCard
                    icon={industry.icon}
                    title={industry.title}
                    professionalsCount={industry.count}
                  />
                </div>
              ))}
            </div>
          </div>
  
          {/* Desktop: 3-column grid */}
          <div className="hidden gap-6 md:grid md:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.title}
                icon={industry.icon}
                title={industry.title}
                professionalsCount={industry.count}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }