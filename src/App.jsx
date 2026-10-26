import React, { useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './components/common/ScrollToTop'
import SplashScreen from './components/common/SplashScreen'
import useLanguageStore from './store/languageStore'
import useThemeStore from './store/themeStore'
import './config/i18n.js'

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
    <HashRouter>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <ScrollToTop />
      <AppRoutes />
      <Toaster
        position={dir === 'rtl' ? 'bottom-right' : 'bottom-left'}
        richColors
        closeButton
        toastOptions={{ duration: 4000 }}
      />
    </HashRouter>
  )
}

export default App
