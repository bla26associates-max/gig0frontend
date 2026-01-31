// /src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './lib/pages/landingpage'
//import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <AppShell>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes here */}
        </Routes>
      </AppShell>
    </Router>
  )
}

export default App
