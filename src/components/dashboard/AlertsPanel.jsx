import React from 'react'
import { AlertCircle, AlertTriangle, Info, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import useLanguageStore from '../../store/languageStore'

function AlertsPanel({ alerts = [] }) {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const Arrow = isRtl ? ChevronLeft : ChevronRight

  const defaultAlerts = [
    {
      id: 1,
      title: isRtl ? 'أصناف أوشكت على النفاد في المستودع' : 'Low stock warning in central warehouse',
      desc: isRtl ? '4 أصناف تجاوزت حد الأمان وتتطلب أمر شراء عاجل' : '4 items reached reorder threshold',
      type: 'warning',
      link: '/app/inventory',
      linkText: isRtl ? 'عرض المستودع' : 'View stock',
    },
    {
      id: 2,
      title: isRtl ? 'فواتير عملاء متأخرة السداد' : 'Overdue customer receivables',
      desc: isRtl ? '3 فواتير بقيمة 142,500 ج.م تجاوزت موعد الاستحقاق' : '3 invoices totaling EGP 142.5k overdue',
      type: 'error',
      link: '/app/sales',
      linkText: isRtl ? 'متابعة التحصيل' : 'Follow up',
    },
    {
      id: 3,
      title: isRtl ? 'موعد تقديم الإقرار الضريبي للقيمة المضافة' : 'VAT Return submission deadline',
      desc: isRtl ? 'متبقي 4 أيام على إغلاق الفترة الضريبية' : '4 days remaining to finalize tax period',
      type: 'info',
      link: '/app/accounting',
      linkText: isRtl ? 'تجهيز الإقرار' : 'Prepare VAT',
    },
  ]

  const items = alerts.length > 0 ? alerts : defaultAlerts

  const iconMap = {
    warning: { icon: AlertTriangle, bg: 'bg-amber-50 dark:bg-amber-950/40', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-900/50' },
    error: { icon: AlertCircle, bg: 'bg-rose-50 dark:bg-rose-950/40', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-900/50' },
    info: { icon: Info, bg: 'bg-sky-50 dark:bg-sky-950/40', text: 'text-sky-600 dark:text-sky-400', border: 'border-sky-200 dark:border-sky-900/50' },
    success: { icon: CheckCircle2, bg: 'bg-emerald-50 dark:bg-emerald-950/40', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-900/50' },
  }

  return (
    <div className="rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <AlertCircle size={17} className="text-[#2F80ED] dark:text-[#38BDF8]" />
          <span>{isRtl ? 'التنبيهات التشغيلية والمالية' : 'Operational & Financial Alerts'}</span>
        </h3>
        <span className="text-xs font-semibold text-slate-400">
          {items.length} {isRtl ? 'تنبيه نشط' : 'active alerts'}
        </span>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const cfg = iconMap[item.type] || iconMap.info
          const Icon = cfg.icon

          return (
            <div
              key={item.id}
              className={`flex items-start justify-between gap-3 rounded-xl border p-3 transition-colors ${cfg.border} ${cfg.bg}`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 shrink-0 ${cfg.text}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">
                    {item.title}
                  </h4>
                  <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {item.link && (
                <Link
                  to={item.link}
                  className={`shrink-0 inline-flex items-center gap-1 text-xs font-bold ${cfg.text} hover:underline`}
                >
                  <span>{item.linkText}</span>
                  <Arrow size={13} />
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AlertsPanel
