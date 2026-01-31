import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Activates Tailwind v4 and StaffHub design tokens
import App from './App.tsx' // Imports the centralized routing switch

// Mounts the React application to the 'root' div in index.html
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
