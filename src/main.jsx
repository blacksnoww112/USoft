import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './config/i18n.js'
import App from './App.jsx'

// Clean up legacy hash routing URLs if user lands with #/ (e.g. /#/about -> /about)
if (typeof window !== 'undefined' && window.location.hash && window.location.hash.startsWith('#/')) {
  const hashPath = window.location.hash.slice(1)
  const isGitHub = window.location.hostname.includes('github.io')
  const base = isGitHub ? '/USoft' : ''
  window.history.replaceState(null, '', base + hashPath)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
