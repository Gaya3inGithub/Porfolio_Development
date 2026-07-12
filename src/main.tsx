import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Always open or refresh at the hero section, rather than restoring a previous
// document position or fragment target.
window.history.scrollRestoration = 'manual'
window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)

const resetInitialScroll = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

resetInitialScroll()
requestAnimationFrame(resetInitialScroll)
window.addEventListener('load', resetInitialScroll, { once: true })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
