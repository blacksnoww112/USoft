import React from 'react'
import { NavLink } from 'react-router-dom'
import {
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
} from 'lucide-react'
import useLanguageStore from '../../store/languageStore'

export const MODULE_ITEMS = [
  { path: '/app/accounting', icon: BarChart3, nameAr: 'المحاسبة العامة', nameEn: 'Accounting' },
  { path: '/app/sales', icon: Users, nameAr: 'المبيعات والعملاء', nameEn: 'Sales & CRM' },
  { path: '/app/purchases', icon: ShoppingCart, nameAr: 'المشتريات والموردين', nameEn: 'Purchases' },
  { path: '/app/inventory', icon: Package, nameAr: 'المخزون والمستودعات', nameEn: 'Inventory' },
  { path: '/app/assets', icon: Building2, nameAr: 'الأصول الثابتة', nameEn: 'Fixed Assets' },
  { path: '/app/hr', icon: Briefcase, nameAr: 'الموارد البشرية', nameEn: 'HR Management' },
  { path: '/app/payroll', icon: CreditCard, nameAr: 'الرواتب والأجور', nameEn: 'Payroll' },
  { path: '/app/pos', icon: Monitor, nameAr: 'نقاط البيع (POS)', nameEn: 'Point of Sale' },
  { path: '/app/reports', icon: FileText, nameAr: 'التقارير الذكية', nameEn: 'Reports & BI' },
  { path: '/app/settings', icon: Settings, nameAr: 'التهيئة والربط', nameEn: 'System Config' },
]

function ModuleNav({ currentPath }) {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'

  return (
    <div className="sticky top-16 z-30 border-b border-[#E4E7EC] dark:border-slate-800 bg-white/95 dark:bg-[#0B1526]/95 backdrop-blur-md shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
          {MODULE_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = currentPath === item.path
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold shrink-0 transition-all duration-200 ${
                  isActive
                    ? 'bg-[#2F80ED] text-white shadow-sm dark:bg-[#38BDF8] dark:text-[#0A1220]'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-[#2F80ED] dark:hover:text-[#38BDF8]'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white dark:text-[#0A1220]' : 'text-slate-400'} />
                <span>{isRtl ? item.nameAr : item.nameEn}</span>
              </NavLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ModuleNav
