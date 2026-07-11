import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Run before React renders so browser/Vite scroll restoration cannot reopen a lower section.
window.history.scrollRestoration = 'manual'
window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#home`)
window.scrollTo(0, 0)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
