import { Header } from "./header"; // 
import { HeroSection } from "./herosection"; // Import the newly updated hero section sibling

export function LandingPage() {
  return (
    <>
      <Header /> {/*  */}
      
      <main>
        {/* Integrating the HeroSection as the primary design component.
            This replaces the previous placeholder comment.
        */}
        <HeroSection /> 
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        {/* Page-specific footer styling aligned with StaffHub design */}
        © {new Date().getFullYear()} Philadelphia StaffHub. All rights reserved.
      </footer>
    </>
  );
} // [cite: 104]