import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import useLanguageStore from '../../store/languageStore'

function AppLayout({ children, activeModule }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#070D18] text-[#172033] dark:text-[#F8FAFC] transition-colors duration-300">
      {/* Sidebar (Desktop & Mobile Drawer) */}
      <Sidebar mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      {/* Main Content Area */}
      <div
        className={`flex min-h-screen flex-col transition-all duration-300 ${
          isRtl ? 'lg:mr-72' : 'lg:ml-72'
        }`}
      >
        <Topbar onOpenMobile={() => setMobileOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>

        <footer className="border-t border-[#E4E7EC] dark:border-[#1E2E48] bg-white/50 dark:bg-[#0A1220]/50 py-4 px-6 text-center text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto">
            <span>
              {isRtl
                ? 'منظومة USoft ERP — جميع الحقوق محفوظة © 2026'
                : 'USoft ERP Suite — All rights reserved © 2026'}
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {isRtl ? 'الخوادم متصلة وقيد العمل (Online)' : 'System Operational (Online)'}
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default AppLayout
