// /src/layouts/AppShell.tsx

import Header from '../components/landing/Header'
import Footer from '../components/landing/Footer'

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white text-black">
      <Header />
      <main className="min-h-screen p-4">{children}</main>
      <Footer />
    </div>
  )
}

export default AppShell
