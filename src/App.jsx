import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './components/common/ScrollToTop'
import SplashScreen from './components/common/SplashScreen'
import useLanguageStore from './store/languageStore'
import useThemeStore from './store/themeStore'
import './config/i18n.js'

const getBasename = () => {
  if (typeof window !== 'undefined') {
    if (window.location.hostname.includes('github.io')) {
      return '/USoft'
    }
    return '/'
  }
  return import.meta.env.BASE_URL || '/'
}

function App() {
  const { language, dir } = useLanguageStore()
  const { theme } = useThemeStore()
  const [showSplash, setShowSplash] = useState(true)

  /* apply RTL / LTR and dark mode to <html> on mount + change */
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir  = dir
  }, [language, dir])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <BrowserRouter basename={getBasename()}>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <ScrollToTop />
      <AppRoutes />
      <Toaster
        position={dir === 'rtl' ? 'bottom-right' : 'bottom-left'}
        richColors
        closeButton
        toastOptions={{ duration: 4000 }}
      />
    </BrowserRouter>
  )
}

export default App
