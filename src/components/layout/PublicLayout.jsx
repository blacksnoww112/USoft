import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Home,
  Info,
  Layers,
  Briefcase,
  Handshake,
  PhoneCall,
  BarChart3,
  Users,
  ShoppingCart,
  Package,
  Building2,
  CreditCard,
  Monitor,
  FileText,
  Factory,
  Landmark,
  HardHat,
  Stethoscope,
  BedDouble,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from '../common/ThemeToggle'
import Button from '../common/Button'
import WhatsAppButton from '../common/WhatsAppButton'
import StarryBackground from '../common/StarryBackground'
import useLanguageStore from '../../store/languageStore'
import useThemeStore from '../../store/themeStore'
import { getAssetPath } from '../../utils/assetPath'
import { getEmailLink, getEmailTarget } from '../../utils/emailLink'

const NAV_LINKS = [
  { to: '/',             key: 'home',         icon: Home },
  { to: '/about',        key: 'about',        icon: Info },
  { to: '/solutions',    key: 'solutions',    icon: Layers, hasDropdown: true },
  { to: '/services',     key: 'services',     icon: Briefcase },
  { to: '/partnerships', key: 'partnerships', icon: Handshake },
  { to: '/contact',      key: 'contact',      icon: PhoneCall },
]

export const SOLUTIONS_DROPDOWN_ITEMS = [
  {
    key: 'accounting',
    to: '/app/accounting',
    icon: BarChart3,
    color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/50 group-hover/item:bg-blue-500 group-hover/item:text-white',
  },
  {
    key: 'sales',
    to: '/app/sales',
    icon: Users,
    color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 group-hover/item:bg-emerald-500 group-hover/item:text-white',
  },
  {
    key: 'purchases',
    to: '/app/purchases',
    icon: ShoppingCart,
    color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/50 group-hover/item:bg-amber-500 group-hover/item:text-white',
  },
  {
    key: 'inventory',
    to: '/app/inventory',
    icon: Package,
    color: 'text-teal-500 bg-teal-50 dark:bg-teal-950/50 group-hover/item:bg-teal-500 group-hover/item:text-white',
  },
  {
    key: 'assets',
    to: '/app/assets',
    icon: Building2,
    color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/50 group-hover/item:bg-indigo-500 group-hover/item:text-white',
  },
  {
    key: 'production',
    to: '/app/production',
    icon: Factory,
    color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/50 group-hover/item:bg-orange-500 group-hover/item:text-white',
  },
  {
    key: 'realestate',
    to: '/app/real-estate',
    icon: Landmark,
    color: 'text-violet-500 bg-violet-50 dark:bg-violet-950/50 group-hover/item:bg-violet-500 group-hover/item:text-white',
  },
  {
    key: 'contracting',
    to: '/app/contracting',
    icon: HardHat,
    color: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950/50 group-hover/item:bg-yellow-600 group-hover/item:text-white',
  },
  {
    key: 'pos',
    to: '/app/pos',
    icon: Monitor,
    color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-950/50 group-hover/item:bg-cyan-500 group-hover/item:text-white',
  },
  {
    key: 'outpatient',
    to: '/app/outpatient',
    icon: Stethoscope,
    color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/50 group-hover/item:bg-rose-500 group-hover/item:text-white',
  },
  {
    key: 'inpatient',
    to: '/app/inpatient',
    icon: BedDouble,
    color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/50 group-hover/item:bg-pink-500 group-hover/item:text-white',
  },
  {
    key: 'hr',
    to: '/app/hr',
    icon: Briefcase,
    color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/50 group-hover/item:bg-purple-500 group-hover/item:text-white',
  },
  {
    key: 'payroll',
    to: '/app/payroll',
    icon: CreditCard,
    color: 'text-green-600 bg-green-50 dark:bg-green-950/50 group-hover/item:bg-green-600 group-hover/item:text-white',
  },
  {
    key: 'reports',
    to: '/app/reports',
    icon: FileText,
    color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50 group-hover/item:bg-sky-500 group-hover/item:text-white',
  },
]

const FOOTER_EMAILS = ['info@usoft-eg.com', 'Sales@usoft-eg.com']
const FOOTER_PHONES = ['01022264121', '01022264123', '+20222638031', '+20222638041']
const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/s87mR7HJXAhFhcMJ6'

function PublicLayout({ children }) {
  const { t } = useTranslation('navigation')
  const { t: tc } = useTranslation('common')
  const { dir } = useLanguageStore()
  const { theme } = useThemeStore()
  const location = useLocation()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const dropdownTimerRef = useRef(null)
  const isDark = theme === 'dark'
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const isSolutionsActive =
    location.pathname === '/solutions' || location.pathname.startsWith('/app/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false)
    setDesktopSolutionsOpen(false)
  }, [location.pathname])

  const handleMouseEnterSolutions = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
    setDesktopSolutionsOpen(true)
  }

  const handleMouseLeaveSolutions = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDesktopSolutionsOpen(false)
    }, 200)
  }

  return (
    <div className="flex flex-col min-h-dvh bg-white dark:bg-[#070D18] text-[#172033] dark:text-[#F8FAFC] transition-colors duration-300 relative">
      {/* ── Space Starfield Dots (Behind Content at z-0, Dark Mode only) ── */}
      <StarryBackground />

      {/* ── Fixed Navbar (Sticky at Top) ────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 dark:bg-[#0B1526]/95 backdrop-blur-md border-b border-[#E4E7EC] dark:border-slate-800 shadow-xs transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" aria-label="USoft Home">
              <img
                src={getAssetPath(isDark ? '/images/brand/USoftDarkMode.png' : '/images/brand/USoftLightMode.png')}
                alt="USoft"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main navigation">
              {NAV_LINKS.map(({ to, key, icon: Icon, hasDropdown }) => {
                if (hasDropdown) {
                  return (
                    <div
                      key={key}
                      className="relative"
                      onMouseEnter={handleMouseEnterSolutions}
                      onMouseLeave={handleMouseLeaveSolutions}
                    >
                      <Link
                        to={to}
                        onClick={() => setDesktopSolutionsOpen(false)}
                        className={`group relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          isSolutionsActive
                            ? 'text-[#2F80ED] dark:text-[#38BDF8]'
                            : 'text-[#525E75] dark:text-slate-300 hover:text-[#173B67] dark:hover:text-white'
                        }`}
                        aria-expanded={desktopSolutionsOpen}
                      >
                        <Icon
                          size={16}
                          className={`transition-transform duration-300 group-hover:scale-110 ${
                            isSolutionsActive
                              ? 'text-[#2F80ED] dark:text-[#38BDF8]'
                              : 'text-slate-400 group-hover:text-[#2F80ED] dark:group-hover:text-[#38BDF8]'
                          }`}
                        />
                        <span>{t(key)}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 opacity-70 group-hover:opacity-100 ${
                            desktopSolutionsOpen ? 'rotate-180 text-[#2F80ED] dark:text-[#38BDF8]' : ''
                          }`}
                        />

                        {/* Animated Underline Effect on Hover / Active */}
                        <span
                          className={`absolute bottom-0 inset-x-2 h-[2.5px] rounded-full transition-all duration-300 ease-out origin-center ${
                            isSolutionsActive
                              ? 'bg-linear-to-r from-[#2F80ED] to-[#38BDF8] scale-x-100 opacity-100 shadow-[0_0_8px_rgba(47,128,237,0.5)]'
                              : 'bg-linear-to-r from-[#2F80ED] to-[#38BDF8] scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                          }`}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      {desktopSolutionsOpen && (
                        <div
                          className={`absolute top-full mt-2 w-[620px] rounded-2xl bg-white/98 dark:bg-[#0B1526]/98 backdrop-blur-xl border border-[#E4E7EC] dark:border-slate-800 shadow-2xl p-4 transition-all duration-200 animate-in fade-in zoom-in-95 z-50 ${
                            isRtl ? 'right-0' : 'left-0'
                          }`}
                        >
                          {/* Header of Dropdown */}
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800/80 px-2">
                            <div className="flex items-center gap-2">
                              <span className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#2F80ED]">
                                <Sparkles size={16} />
                              </span>
                              <div>
                                <h4 className="text-xs font-bold text-[#173B67] dark:text-white uppercase tracking-wider">
                                  {t('solutionsDropdownTitle') || (isRtl ? 'حلول ومنظومات USoft ERP' : 'USoft ERP Modules')}
                                </h4>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                  {isRtl ? 'تصفح الأنظمة أو انتقل للواجهة التفاعلية' : 'Browse modules or experience live interactive demos'}
                                </p>
                              </div>
                            </div>

                            <Link
                              to="/solutions"
                              onClick={() => setDesktopSolutionsOpen(false)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F80ED] hover:text-[#173B67] dark:hover:text-[#38BDF8] transition-colors py-1 px-2.5 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800"
                            >
                              <span>{t('viewAllSolutions') || (isRtl ? 'صفحة الحلول' : 'All Solutions')}</span>
                              <ArrowIcon size={12} />
                            </Link>
                          </div>

                          {/* Grid of Solutions */}
                          <div className="grid grid-cols-2 gap-1.5 max-h-[380px] overflow-y-auto custom-scrollbar p-1">
                            {SOLUTIONS_DROPDOWN_ITEMS.map((item) => {
                              const ItemIcon = item.icon
                              const isCurrentItem = location.pathname === item.to
                              return (
                                <Link
                                  key={item.key}
                                  to={item.to}
                                  onClick={() => setDesktopSolutionsOpen(false)}
                                  className={`group/item flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 text-start border ${
                                    isCurrentItem
                                      ? 'bg-blue-50/80 dark:bg-slate-800/80 border-[#2F80ED]/30'
                                      : 'border-transparent hover:border-slate-200 dark:hover:border-slate-700/60 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                                  }`}
                                >
                                  <div className={`p-2 rounded-xl transition-all duration-300 shrink-0 ${item.color}`}>
                                    <ItemIcon size={18} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover/item:text-[#2F80ED] dark:group-hover/item:text-[#38BDF8] transition-colors truncate">
                                      {t(item.key)}
                                    </p>
                                    <span className="text-[10px] text-slate-400 dark:text-slate-500 block truncate">
                                      {isRtl ? 'استعراض النظام وتفاصيله' : 'View module & live demo'}
                                    </span>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>

                          {/* Bottom banner */}
                          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 px-2 flex items-center justify-between bg-slate-50/60 dark:bg-slate-800/30 rounded-xl p-2.5">
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                              {isRtl ? 'هل تريد استشارة مخصصة لنشاطك؟' : 'Need custom enterprise consultation?'}
                            </span>
                            <Link
                              to="/contact"
                              onClick={() => setDesktopSolutionsOpen(false)}
                              className="text-xs font-bold text-[#2F80ED] hover:underline"
                            >
                              {tc('requestDemo')}
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <NavLink
                    key={key}
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `group relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? 'text-[#2F80ED] dark:text-[#38BDF8]'
                          : 'text-[#525E75] dark:text-slate-300 hover:text-[#173B67] dark:hover:text-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          size={16}
                          className={`transition-transform duration-300 group-hover:scale-110 ${
                            isActive
                              ? 'text-[#2F80ED] dark:text-[#38BDF8]'
                              : 'text-slate-400 group-hover:text-[#2F80ED] dark:group-hover:text-[#38BDF8]'
                          }`}
                        />
                        <span>{t(key)}</span>

                        {/* Animated Underline Effect on Hover / Active */}
                        <span
                          className={`absolute bottom-0 inset-x-2 h-[2.5px] rounded-full transition-all duration-300 ease-out origin-center ${
                            isActive
                              ? 'bg-linear-to-r from-[#2F80ED] to-[#38BDF8] scale-x-100 opacity-100 shadow-[0_0_8px_rgba(47,128,237,0.5)]'
                              : 'bg-linear-to-r from-[#2F80ED] to-[#38BDF8] scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                )
              })}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              <ThemeToggle compact />
              <LanguageSwitcher />
              <Link to="/contact">
                <Button size="sm">{tc('requestDemo')}</Button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle compact />
              <button
                className="p-2 rounded-lg text-[#667085] dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
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
          <div className="lg:hidden bg-white dark:bg-[#0B1526] border-t border-[#E4E7EC] dark:border-slate-800 shadow-xl animate-fade-in max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1.5" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ to, key, icon: Icon, hasDropdown }) => {
                if (hasDropdown) {
                  return (
                    <div key={key} className="rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                      <div className="flex items-center justify-between p-2.5 bg-slate-50/50 dark:bg-slate-800/40">
                        <NavLink
                          to="/solutions"
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-2 text-sm font-bold ${
                            isSolutionsActive
                              ? 'text-[#2F80ED] dark:text-[#38BDF8]'
                              : 'text-slate-700 dark:text-slate-200'
                          }`}
                        >
                          <Icon size={18} className="text-[#2F80ED]" />
                          <span>{t(key)}</span>
                        </NavLink>

                        <button
                          type="button"
                          onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                          className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-transform"
                          aria-label="Toggle solutions list"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              mobileSolutionsOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {mobileSolutionsOpen && (
                        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5 bg-white dark:bg-[#0B1526]">
                          {SOLUTIONS_DROPDOWN_ITEMS.map((item) => {
                            const ItemIcon = item.icon
                            return (
                              <Link
                                key={item.key}
                                to={item.to}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-[#2F80ED] transition-colors"
                              >
                                <span className={`p-1.5 rounded-lg ${item.color}`}>
                                  <ItemIcon size={15} />
                                </span>
                                <span>{t(item.key)}</span>
                              </Link>
                            )
                          })}
                          <Link
                            to="/solutions"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-center gap-1.5 p-2.5 mt-1 rounded-lg text-xs font-bold text-[#2F80ED] bg-blue-50/80 dark:bg-blue-950/40 col-span-full text-center"
                          >
                            <span>{t('viewAllSolutions') || (isRtl ? 'عرض كل الحلول' : 'View All Solutions')}</span>
                            <ArrowIcon size={14} />
                          </Link>
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <NavLink
                    key={key}
                    to={to}
                    end={to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'text-[#2F80ED] bg-blue-50 dark:bg-slate-800 dark:text-[#38BDF8]'
                          : 'text-[#667085] dark:text-slate-300 hover:text-[#173B67] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800/60'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          size={18}
                          className={isActive ? 'text-[#2F80ED] dark:text-[#38BDF8]' : 'text-slate-400'}
                        />
                        <span>{t(key)}</span>
                      </>
                    )}
                  </NavLink>
                )
              })}

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

      {/* ── Page Content (Above Starfield) ─────────────────────── */}
      <main className="flex-1 pt-16 relative z-10">{children}</main>

      {/* ── Footer (Above Starfield) ───────────────────────────── */}
      <footer className="bg-[#0A1629] border-t border-slate-800 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* 1. Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={getAssetPath('/images/brand/USoftDarkMode.png')}
                  alt="USoft"
                  className="h-11 w-auto object-contain"
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {isRtl
                  ? 'منظومة Key Business Suite المتكاملة لإدارة وتطوير أعمال الشركات والمؤسسات بثقة واحترافية.'
                  : 'Key Business Suite - Integrated enterprise management platform to scale your business with confidence.'}
              </p>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h3 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">
                {isRtl ? 'روابط سريعة' : 'Quick Links'}
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
                {isRtl ? 'الاتصال والبريد' : 'Contact Us'}
              </h3>

              {/* Emails */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Mail size={14} />
                  {isRtl ? 'البريد الإلكتروني' : 'Email'}
                </span>
                <ul className="space-y-1.5">
                  {FOOTER_EMAILS.map((email) => (
                    <li key={email}>
                      <a
                        href={getEmailLink(email)}
                        target={getEmailTarget()}
                        rel="noopener noreferrer"
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
                  {isRtl ? 'أرقام الهاتف' : 'Phone Numbers'}
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
                {isRtl ? 'المقر الرئيسي' : 'Headquarters'}
              </h3>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-white/80">
                  <MapPin size={18} className="text-[#38BDF8] shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-medium">
                    {isRtl
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
                  <span>{isRtl ? 'عرض على خرائط Google' : 'View on Google Maps'}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
            <span>© 2026 USoft. {isRtl ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/70 transition-colors">
                {isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                {isRtl ? 'الشروط والأحكام' : 'Terms & Conditions'}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  )
}

export default PublicLayout
