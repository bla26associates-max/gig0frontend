import { Link } from "react-router-dom" // Changed from next/link [cite: 85]
import { Search, ArrowRight } from "lucide-react"
import { Button } from "./ui/button" // Updated to use the @/ alias we configured 

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden">
      {/* Philadelphia Map Background */}
      <div className="absolute inset-0 z-0">
        <PhiladelphiaMapSVG />
        {/* Tailwind v4 using OKLCH variables from index.css */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        {/* Floating Action Card */}
        <div className="w-full max-w-lg">
          <div className="rounded-2xl bg-card p-6 shadow-xl sm:p-8 border border-border">
            {/* Headline */}
            <h1 className="text-balance text-center text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Find the Right Staff, Right Now
            </h1>
            
            {/* Subtext */}
            <p className="mt-4 text-pretty text-center text-base text-muted-foreground sm:text-lg">
              In real-time, based on industry + availability
            </p>

            {/* Primary CTA */}
            <Button
              size="lg"
              className="mt-8 w-full gap-2 text-base font-semibold"
              asChild
            >
              <Link to="/search"> {/* Changed href to to for React Router  */}
                <Search className="h-5 w-5" />
                Search Available Staff
              </Link>
            </Button>

            {/* Secondary CTA */}
            <div className="mt-4 flex items-center justify-center">
              <Link
                to="/get-started" // Changed href to to [cite: 90]
                className="group inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">Trusted by businesses across Philadelphia</p>
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-muted text-xs font-medium text-muted-foreground"
                  aria-hidden="true"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">500+ businesses</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhiladelphiaMapSVG() {
  return (
    <svg
      className="h-full w-full object-cover opacity-40"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
        </pattern>
        <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.25" className="text-border/50" />
        </pattern>
      </defs>
      
      <rect width="800" height="600" fill="url(#smallGrid)" />
      <rect width="800" height="600" fill="url(#grid)" />
      
      <g className="text-muted-foreground/30">
        <line x1="400" y1="0" x2="400" y2="600" stroke="currentColor" strokeWidth="4" />
        <line x1="0" y1="280" x2="800" y2="280" stroke="currentColor" strokeWidth="4" />
        <path d="M 150 0 Q 120 150, 100 300 Q 80 450, 60 600" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
        <path d="M 750 0 Q 780 150, 800 300" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
        <path d="M 0 400 Q 200 380, 400 350 Q 600 320, 800 300" stroke="currentColor" strokeWidth="3" strokeDasharray="8 4" />
        <path d="M 700 0 Q 720 150, 740 300 Q 760 450, 780 600" stroke="currentColor" strokeWidth="3" strokeDasharray="8 4" />
      </g>
      
      <circle cx="400" cy="280" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/20" />
      <circle cx="400" cy="280" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/30" />
      <circle cx="400" cy="280" r="8" fill="currentColor" className="text-accent/40" />
    </svg>
  )
}