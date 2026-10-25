import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Menu,
  Search,
  Bell,
  Building,
  Calendar,
  Sparkles,
  User,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ExternalLink,
} from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from '../common/ThemeToggle'
import useLanguageStore from '../../store/languageStore'

function Topbar({ onOpenMobile = () => {} }) {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const navigate = useNavigate()
  const [showNotifications, setShowNotifications] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBranch, setSelectedBranch] = useState('main')

  const branches = [
    { id: 'main', ar: 'الفرع الرئيسي — القاهرة', en: 'Headquarters — Cairo' },
    { id: 'alex', ar: 'فرع الإسكندرية — سموحة', en: 'Alexandria Branch — Smouha' },
    { id: 'giza', ar: 'فرع الجيزة — الشيخ زايد', en: 'Giza Branch — Zayed' },
  ]

  const notifications = [
    {
      id: 1,
      titleAr: 'فاتورة مبيعات جديدة #INV-2026-089',
      titleEn: 'New Sales Invoice #INV-2026-089',
      timeAr: 'منذ 5 دقائق',
      timeEn: '5m ago',
      type: 'success',
      path: '/app/sales',
    },
    {
      id: 2,
      titleAr: 'تنبيه: صنف "شاشة 27 بوصة" وصل لحد إعادة الطلب',
      titleEn: 'Alert: Item "27-inch Monitor" reached reorder limit',
      timeAr: 'منذ 25 دقيقة',
      timeEn: '25m ago',
      type: 'warning',
      path: '/app/inventory',
    },
    {
      id: 3,
      titleAr: 'تم اعتماد مسير رواتب شهر أكتوبر بنجاح',
      titleEn: 'October payroll sheet approved',
      timeAr: 'منذ ساعتين',
      timeEn: '2h ago',
      type: 'info',
      path: '/app/payroll',
    },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    const q = searchQuery.toLowerCase()
    if (q.includes('محاسب') || q.includes('حساب') || q.includes('acc')) {
      navigate('/app/accounting')
    } else if (q.includes('بيع') || q.includes('عميل') || q.includes('sale')) {
      navigate('/app/sales')
    } else if (q.includes('شراء') || q.includes('مورد') || q.includes('pur')) {
      navigate('/app/purchases')
    } else if (q.includes('مخزن') || q.includes('صنف') || q.includes('inv')) {
      navigate('/app/inventory')
    } else if (q.includes('اصل') || q.includes('أصل') || q.includes('asset')) {
      navigate('/app/assets')
    } else if (q.includes('موظف') || q.includes('hr')) {
      navigate('/app/hr')
    } else if (q.includes('راتب') || q.includes('رواتب') || q.includes('pay')) {
      navigate('/app/payroll')
    } else if (q.includes('كاشير') || q.includes('pos')) {
      navigate('/app/pos')
    } else if (q.includes('تقرير') || q.includes('report')) {
      navigate('/app/reports')
    } else {
      navigate('/app/dashboard')
    }
    setSearchQuery('')
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-[#E4E7EC] dark:border-[#1E2E48] bg-white/95 dark:bg-[#0A1220]/95 px-4 sm:px-6 backdrop-blur-md">
      {/* Left (or Right in RTL): Toggle & Search */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobile}
          className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          aria-label="Open Navigation Drawer"
        >
          <Menu size={20} />
        </button>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="relative hidden md:block w-64 lg:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isRtl
                ? 'ابحث عن صنف، فاتورة، حساب، أو شاشة...'
                : 'Search invoices, accounts, items...'
            }
            className="w-full rounded-xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-slate-50 dark:bg-[#070D18] py-2 px-9 text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-[#2F80ED] dark:focus:border-[#38BDF8] focus:bg-white dark:focus:bg-[#0A1220]"
          />
          <Search
            size={15}
            className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-slate-400 ${
              isRtl ? 'right-3' : 'left-3'
            }`}
          />
        </form>

        {/* Branch dropdown */}
        <div className="hidden xl:flex items-center gap-1.5 rounded-xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-slate-50 dark:bg-[#070D18] px-3 py-1.5 text-xs">
          <Building size={14} className="text-[#2F80ED] dark:text-[#38BDF8]" />
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="bg-transparent font-medium text-slate-700 dark:text-slate-300 outline-none cursor-pointer text-xs"
          >
            {branches.map((b) => (
              <option key={b.id} value={b.id} className="dark:bg-[#0A1220] dark:text-slate-200">
                {isRtl ? b.ar : b.en}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Right (or Left in RTL): Quick actions, controls, notifications & user profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Fiscal Period badge */}
        <div className="hidden sm:flex items-center gap-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
          <Calendar size={13} />
          <span>{isRtl ? 'السنة المالية 2026' : 'Fiscal Year 2026'}</span>
        </div>

        {/* Request Demo link */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#2F80ED] to-[#1F5BB8] dark:from-[#38BDF8] dark:to-[#0284C7] px-3.5 py-1.5 text-xs font-bold text-white dark:text-[#0A1220] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
        >
          <Sparkles size={14} />
          <span>{isRtl ? 'طلب ديمو خاص' : 'Request Custom Demo'}</span>
        </Link>

        {/* Theme and Lang */}
        <div className="flex items-center gap-1">
          <ThemeToggle compact />
          <LanguageSwitcher />
        </div>

        {/* Notification bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative rounded-xl p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </button>

          {showNotifications && (
            <div
              className={`absolute top-12 z-50 w-80 rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-4 shadow-xl animate-fade-in ${
                isRtl ? 'left-0 sm:left-auto sm:right-0' : 'right-0 sm:right-auto sm:left-0'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E4E7EC] dark:border-[#1E2E48]">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  {isRtl ? 'الإشعارات والتنبيهات' : 'Notifications'}
                </h4>
                <span className="rounded-full bg-sky-100 dark:bg-sky-950 px-2 py-0.5 text-[10px] font-bold text-sky-700 dark:text-sky-400">
                  3 {isRtl ? 'جديد' : 'new'}
                </span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800/80 my-1">
                {notifications.map((n) => (
                  <Link
                    key={n.id}
                    to={n.path}
                    onClick={() => setShowNotifications(false)}
                    className="flex flex-col gap-1 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg px-2 transition"
                  >
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {isRtl ? n.titleAr : n.titleEn}
                    </span>
                    <span className="text-[10px] text-slate-400">{isRtl ? n.timeAr : n.timeEn}</span>
                  </Link>
                ))}
              </div>
              <button
                onClick={() => setShowNotifications(false)}
                className="w-full mt-2 pt-2 border-t border-[#E4E7EC] dark:border-[#1E2E48] text-center text-xs font-bold text-[#2F80ED] dark:text-[#38BDF8]"
              >
                {isRtl ? 'تحديد الكل كمقروء' : 'Mark all as read'}
              </button>
            </div>
          )}
        </div>

        {/* User profile avatar / pill */}
        <div className="flex items-center gap-2 border-l border-[#E4E7EC] dark:border-[#1E2E48] pl-2 sm:pl-3 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-2 sm:rtl:pr-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-[#2F80ED] to-[#38BDF8] text-white font-bold text-xs shadow-sm">
            US
          </div>
          <div className="hidden sm:flex flex-col text-start">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
              {isRtl ? 'م/ أحمد النجار' : 'Eng. Ahmed Najar'}
            </span>
            <span className="text-[10px] text-slate-400">
              {isRtl ? 'مدير المنظومة (Admin)' : 'System Admin'}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar
