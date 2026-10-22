import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from '../common/ThemeToggle'
import Button from '../common/Button'
import useLanguageStore from '../../store/languageStore'
import useThemeStore from '../../store/themeStore'

const NAV_LINKS = [
  { to: '/',             key: 'home'         },
  { to: '/about',        key: 'about'        },
  { to: '/solutions',    key: 'solutions'    },
  { to: '/services',     key: 'services'     },
  { to: '/partnerships', key: 'partnerships' },
  { to: '/contact',      key: 'contact'      },
]

const FOOTER_EMAILS = ['info@usoft-eg.com', 'Sales@usoft-eg.com']
const FOOTER_PHONES = ['+20222638031', '+20222638041', '+20 01022264121', '+20 01022264123']
const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/s87mR7HJXAhFhcMJ6'

function PublicLayout({ children }) {
  const { t } = useTranslation('navigation')
  const { t: tc } = useTranslation('common')
  const { dir } = useLanguageStore()
  const { theme } = useThemeStore()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isDark = theme === 'dark'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-dvh bg-white dark:bg-[#070D18] text-[#172033] dark:text-[#F8FAFC] transition-colors duration-300">
      {/* ── Navbar ─────────────────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0B1526]/95 backdrop-blur-md shadow-card border-b border-[#E4E7EC] dark:border-slate-800'
            : 'bg-white/80 dark:bg-[#070D18]/80 backdrop-blur-md border-b border-transparent dark:border-slate-800/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" aria-label="USoft Home">
              <img
                src={isDark ? '/images/brand/USoftDarkMode.png' : '/images/brand/USoftLightMode.png'}
                alt="USoft"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map(({ to, key }) => (
                <NavLink
                  key={key}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                      isActive
                        ? 'text-[#2F80ED] bg-[#EBF2FF] dark:bg-slate-800 dark:text-[#38BDF8]'
                        : 'text-[#667085] dark:text-slate-300 hover:text-[#173B67] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800/60'
                    }`
                  }
                >
                  {t(key)}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-2.5">
              <ThemeToggle compact />
              <LanguageSwitcher />
              <Link to="/contact">
                <Button size="sm">{tc('requestDemo')}</Button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle compact />
              <button
                className="p-2 rounded-lg text-[#667085] dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-white dark:bg-[#0B1526] border-t border-[#E4E7EC] dark:border-slate-800 shadow-xl animate-fade-in">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ to, key }) => (
                <NavLink
                  key={key}
                  to={to}
                  end={to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-[#2F80ED] bg-[#EBF2FF] dark:bg-slate-800 dark:text-[#38BDF8]'
                        : 'text-[#667085] dark:text-slate-300 hover:text-[#173B67] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800/60'
                    }`
                  }
                >
                  {t(key)}
                </NavLink>
              ))}
              <div className="flex items-center gap-3 pt-3 border-t border-[#E4E7EC] dark:border-slate-800 mt-2">
                <LanguageSwitcher />
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="flex-1">
                  <Button size="sm" fullWidth>{tc('requestDemo')}</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ── Page Content ───────────────────────────────────────── */}
      <main className="flex-1 pt-16">{children}</main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="bg-[#0A1629] border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* 1. Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/images/brand/USoftDarkMode.png"
                  alt="USoft"
                  className="h-11 w-auto object-contain"
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {dir === 'rtl'
                  ? 'منظومة Key Business Suite المتكاملة لإدارة وتطوير أعمال الشركات والمؤسسات بثقة واحترافية.'
                  : 'Key Business Suite - Integrated enterprise management platform to scale your business with confidence.'}
              </p>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h3 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">
                {dir === 'rtl' ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <ul className="space-y-2.5">
                {NAV_LINKS.map(({ to, key }) => (
                  <li key={key}>
                    <Link
                      to={to}
                      className="text-white/60 text-sm hover:text-[#38BDF8] transition-colors inline-block"
                    >
                      {t(key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Communication / Phones & Emails */}
            <div>
              <h3 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">
                {dir === 'rtl' ? 'الاتصال والبريد' : 'Contact Us'}
              </h3>

              {/* Emails */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Mail size={14} />
                  {dir === 'rtl' ? 'البريد الإلكتروني' : 'Email'}
                </span>
                <ul className="space-y-1.5">
                  {FOOTER_EMAILS.map((email) => (
                    <li key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="text-white/70 text-sm hover:text-white hover:underline transition-colors block"
                        dir="ltr"
                      >
                        {email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phones */}
              <div>
                <span className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Phone size={14} />
                  {dir === 'rtl' ? 'أرقام الهاتف' : 'Phone Numbers'}
                </span>
                <ul className="space-y-1.5">
                  {FOOTER_PHONES.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone.replaceAll(' ', '')}`}
                        className="text-white/70 text-sm hover:text-white hover:underline transition-colors block font-mono"
                        dir="ltr"
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. Location & Map */}
            <div>
              <h3 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">
                {dir === 'rtl' ? 'المقر الرئيسي' : 'Headquarters'}
              </h3>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-white/80">
                  <MapPin size={18} className="text-[#38BDF8] shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-medium">
                    {dir === 'rtl'
                      ? 'مصر الجديدة، عمارات العبور، عمارة 4'
                      : 'Building 4, Obour Buildings, Salah Salem, Heliopolis, Cairo'}
                  </p>
                </div>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] hover:text-white transition-colors pt-1"
                >
                  <span>{dir === 'rtl' ? 'عرض على خرائط Google' : 'View on Google Maps'}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
            <span>© {new Date().getFullYear()} USoft. {dir === 'rtl' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/70 transition-colors">
                {dir === 'rtl' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                {dir === 'rtl' ? 'الشروط والأحكام' : 'Terms & Conditions'}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PublicLayout
