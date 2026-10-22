import React from 'react'
import { Sun, Moon } from 'lucide-react'
import useThemeStore from '../../store/themeStore'
import useLanguageStore from '../../store/languageStore'

function ThemeToggle({ className = '', compact = false }) {
  const { theme, toggleTheme } = useThemeStore()
  const { dir } = useLanguageStore()

  const isDark = theme === 'dark'
  const label = isDark
    ? dir === 'rtl' ? 'الوضع المضيء' : 'Light Mode'
    : dir === 'rtl' ? 'الوضع الداكن' : 'Dark Mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`relative inline-flex items-center justify-center rounded-xl p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/40 ${
        isDark
          ? 'bg-slate-800 text-amber-400 hover:bg-slate-700 hover:text-amber-300 border border-slate-700 shadow-sm'
          : 'bg-white/80 text-[#173B67] hover:bg-white hover:text-[#2F80ED] border border-[#E4E7EC] shadow-sm'
      } ${className}`}
    >
      <div className="relative h-5 w-5">
        <Sun
          size={20}
          className={`absolute inset-0 transition-transform duration-500 ${
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
        <Moon
          size={20}
          className={`absolute inset-0 transition-transform duration-500 ${
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
      </div>
      {!compact && (
        <span className="ms-2 hidden text-xs font-semibold sm:inline-block">
          {label}
        </span>
      )}
    </button>
  )
}

export default ThemeToggle
