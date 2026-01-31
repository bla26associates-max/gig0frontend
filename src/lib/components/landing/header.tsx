"use client"

import { useState } from "react"
// 1. Change from "next/link" to "react-router-dom"
import { Link } from "react-router-dom" 
// 2. Ensure icons are imported from lucide-react
import { Menu, X } from "lucide-react"
// 3. Fix the @/ alias by using a relative path
import { Button } from "../ui/button"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm shadow-sm transition-shadow duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">SH</span>
          </div>
          <span className="text-lg font-semibold text-foreground">StaffHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm" className="font-medium bg-transparent">
            Sign In
          </Button>
          <Button size="sm" className="font-medium">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="border-t border-border bg-card px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
            <Button variant="outline" className="w-full font-medium bg-transparent">
              Sign In
            </Button>
            <Button className="w-full font-medium">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}