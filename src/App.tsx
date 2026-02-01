// /src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './lib/pages/landingpage'
//import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
