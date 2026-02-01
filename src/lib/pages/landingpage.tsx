import { Header } from "./lib/components/landing/header"; // Import directly here

export function LandingPage() {
  return (
    <>
      <Header /> {/* Header only exists on this page  */}
      <main>
        {/* Your StaffHub landing page content */}
      </main>
      <footer>{/* Page-specific footer */}</footer>
    </>
  );
}