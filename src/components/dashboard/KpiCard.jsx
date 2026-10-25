import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

function KpiCard({
  title,
  value,
  change,
  isPositive = true,
  period = 'مقارنة بالشهر الماضي',
  icon: Icon,
  color = 'blue',
  subtitle,
}) {
  const colorMap = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-950/40',
      text: 'text-[#2F80ED] dark:text-[#38BDF8]',
      border: 'border-blue-100 dark:border-blue-900/50',
    },
    emerald: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/40',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-100 dark:border-emerald-900/50',
    },
    violet: {
      bg: 'bg-violet-50 dark:bg-violet-950/40',
      text: 'text-violet-600 dark:text-violet-400',
      border: 'border-violet-100 dark:border-violet-900/50',
    },
    amber: {
      bg: 'bg-amber-50 dark:bg-amber-950/40',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-100 dark:border-amber-900/50',
    },
    rose: {
      bg: 'bg-rose-50 dark:bg-rose-950/40',
      text: 'text-rose-600 dark:text-rose-400',
      border: 'border-rose-100 dark:border-rose-900/50',
    },
  }

  const theme = colorMap[color] || colorMap.blue

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-md">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{title}</p>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {value}
          </h3>
        </div>

        {Icon && (
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl border ${theme.border} ${theme.bg} ${theme.text}`}
          >
            <Icon size={20} />
          </div>
        )}
      </div>

      {(change !== undefined || subtitle) && (
        <div className="mt-4 flex items-center gap-2 text-xs">
          {change !== undefined && (
            <span
              className={`inline-flex items-center gap-1 font-bold rounded-md px-1.5 py-0.5 ${
                isPositive
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
                  : 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400'
              }`}
            >
              {isPositive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
              {change}
            </span>
          )}
          <span className="text-slate-400 dark:text-slate-500 text-[11px]">
            {subtitle || period}
          </span>
        </div>
      )}
    </div>
  )
}

export default KpiCard
