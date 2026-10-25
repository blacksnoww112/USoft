import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Package,
  Building2,
  Briefcase,
  CreditCard,
  Monitor,
  FileText,
  Settings,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  X,
} from 'lucide-react'
import useLanguageStore from '../../store/languageStore'
import useThemeStore from '../../store/themeStore'
import { getAssetPath } from '../../utils/assetPath'

export const APP_NAVIGATION = [
  {
    groupAr: 'نظرة عامة',
    groupEn: 'Overview',
    items: [
      {
        path: '/app/dashboard',
        key: 'dashboard',
        nameAr: 'لوحة التحكم المركزية',
        nameEn: 'Main Dashboard',
        icon: LayoutDashboard,
        badge: 'Live',
      },
    ],
  },
  {
    groupAr: 'المالية والمحاسبة',
    groupEn: 'Financials',
    items: [
      {
        path: '/app/accounting',
        key: 'accounting',
        nameAr: 'المحاسبة العامة',
        nameEn: 'General Accounting',
        icon: BarChart3,
      },
      {
        path: '/app/assets',
        key: 'assets',
        nameAr: 'الأصول الثابتة',
        nameEn: 'Fixed Assets',
        icon: Building2,
      },
    ],
  },
  {
    groupAr: 'التجارة والعمليات',
    groupEn: 'Operations & Sales',
    items: [
      {
        path: '/app/sales',
        key: 'sales',
        nameAr: 'المبيعات والعملاء',
        nameEn: 'Sales & CRM',
        icon: Users,
      },
      {
        path: '/app/purchases',
        key: 'purchases',
        nameAr: 'المشتريات والموردين',
        nameEn: 'Purchases & Vendors',
        icon: ShoppingCart,
      },
      {
        path: '/app/inventory',
        key: 'inventory',
        nameAr: 'المخزون والمستودعات',
        nameEn: 'Inventory Management',
        icon: Package,
      },
      {
        path: '/app/pos',
        key: 'pos',
        nameAr: 'نقاط البيع (POS)',
        nameEn: 'Point of Sale',
        icon: Monitor,
        badge: 'POS',
      },
    ],
  },
  {
    groupAr: 'رأس المال البشري',
    groupEn: 'Human Capital',
    items: [
      {
        path: '/app/hr',
        key: 'hr',
        nameAr: 'الموارد البشرية',
        nameEn: 'Human Resources',
        icon: Briefcase,
      },
      {
        path: '/app/payroll',
        key: 'payroll',
        nameAr: 'الرواتب والأجور',
        nameEn: 'Payroll & Salaries',
        icon: CreditCard,
      },
    ],
  },
  {
    groupAr: 'الذكاء والتحليلات',
    groupEn: 'Intelligence & Config',
    items: [
      {
        path: '/app/reports',
        key: 'reports',
        nameAr: 'التقارير الذكية والقوائم',
        nameEn: 'Reports & BI',
        icon: FileText,
      },
      {
        path: '/app/settings',
        key: 'settings',
        nameAr: 'إعدادات المنظومة',
        nameEn: 'System Settings',
        icon: Settings,
      },
    ],
  },
]

function Sidebar({ mobileOpen = false, onCloseMobile = () => {} }) {
  const { dir } = useLanguageStore()
  const { theme } = useThemeStore()
  const isDark = theme === 'dark'
  const isRtl = dir === 'rtl'

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 z-50 flex w-72 flex-col border-r border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0A1220] transition-transform duration-300 ease-in-out ${
          isRtl ? 'right-0 border-l border-r-0' : 'left-0'
        } ${
          mobileOpen
            ? 'translate-x-0'
            : isRtl
            ? 'translate-x-full lg:translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header / Brand */}
        <div className="flex h-16 items-center justify-between px-5 border-b border-[#E4E7EC] dark:border-[#1E2E48]">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={getAssetPath(isDark ? '/images/brand/USoftDarkMode.png' : '/images/brand/USoftLightMode.png')}
              alt="USoft"
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] dark:text-[#38BDF8]">
                ERP Suite
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                {isRtl ? 'النسخة التجريبية الحية' : 'Live Interactive Demo'}
              </span>
            </div>
          </Link>

          <button
            onClick={onCloseMobile}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Close Sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-6 custom-scrollbar">
          {APP_NAVIGATION.map((group, gi) => (
            <div key={gi}>
              <div className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {isRtl ? group.groupAr : group.groupEn}
              </div>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={onCloseMobile}
                      className={({ isActive }) =>
                        `group flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-semibold transition-all duration-200 ${
                          isActive
                            ? 'bg-[#2F80ED] text-white shadow-md shadow-[#2F80ED]/25 dark:bg-[#38BDF8] dark:text-[#0A1220] font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#132238] hover:text-[#2F80ED] dark:hover:text-[#38BDF8]'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                            <Icon
                              size={17}
                              className={`transition-transform duration-200 group-hover:scale-110 ${
                                isActive
                                  ? 'text-white dark:text-[#0A1220]'
                                  : 'text-slate-400 dark:text-slate-500 group-hover:text-[#2F80ED] dark:group-hover:text-[#38BDF8]'
                              }`}
                            />
                            <span>{isRtl ? item.nameAr : item.nameEn}</span>
                          </div>
                          {item.badge && (
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                                isActive
                                  ? 'bg-white/20 text-white dark:bg-black/15 dark:text-[#0A1220]'
                                  : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Back to website CTA */}
        <div className="p-3.5 border-t border-[#E4E7EC] dark:border-[#1E2E48] bg-slate-50 dark:bg-[#070D18]/70">
          <div className="rounded-xl border border-sky-200 dark:border-sky-900/60 bg-sky-50 dark:bg-sky-950/30 p-3 mb-3">
            <div className="flex items-center gap-2 text-sky-800 dark:text-sky-300 text-xs font-bold mb-1">
              <ShieldCheck size={15} />
              <span>{isRtl ? 'بيئة استعراض تفاعلية' : 'Live ERP Simulation'}</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              {isRtl
                ? 'يمكنك التنقل بين الحلول وتجربة جميع الشاشات والتقارير والعمليات.'
                : 'Freely navigate modules to preview real workflows and ERP UI.'}
            </p>
          </div>

          <Link
            to="/solutions"
            className="flex items-center justify-center gap-2 rounded-xl bg-slate-200/80 dark:bg-slate-800 hover:bg-[#2F80ED] hover:text-white dark:hover:bg-[#38BDF8] dark:hover:text-[#0A1220] px-3.5 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all duration-200"
          >
            <ExternalLink size={14} />
            <span>{isRtl ? 'العودة لصفحة الحلول' : 'Back to Solutions'}</span>
          </Link>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
