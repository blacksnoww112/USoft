import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDownLeft, FileText, ChevronRight, ChevronLeft } from 'lucide-react'
import useLanguageStore from '../../store/languageStore'

function RecentTransactions({ transactions = [] }) {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const Arrow = isRtl ? ChevronLeft : ChevronRight

  const defaultList = [
    {
      id: 'TX-9021',
      partyAr: 'شركة النيل للتوكيلات والتجارة',
      partyEn: 'Nile Agencies Co.',
      type: 'sale',
      amount: 'EGP 145,200',
      date: '2026-10-24',
      statusAr: 'مدفوعة بالكامل',
      statusEn: 'Completed',
      statusColor: 'emerald',
    },
    {
      id: 'TX-9020',
      partyAr: 'مجموعة الأهرام للتوريدات',
      partyEn: 'Al-Ahram Supplies Group',
      type: 'purchase',
      amount: 'EGP 82,400',
      date: '2026-10-24',
      statusAr: 'بانتظار الصرف',
      statusEn: 'Pending',
      statusColor: 'amber',
    },
    {
      id: 'TX-9019',
      partyAr: 'المهندس للتكنولوجيا والمعلومات',
      partyEn: 'Al-Muhandis Tech',
      type: 'sale',
      amount: 'EGP 210,000',
      date: '2026-10-23',
      statusAr: 'مدفوعة بالكامل',
      statusEn: 'Completed',
      statusColor: 'emerald',
    },
    {
      id: 'TX-9018',
      partyAr: 'فاتورة سداد إيجار المستودع الرئيسي',
      partyEn: 'Warehouse Rent Payment',
      type: 'expense',
      amount: 'EGP 35,000',
      date: '2026-10-22',
      statusAr: 'معتمدة',
      statusEn: 'Approved',
      statusColor: 'sky',
    },
    {
      id: 'TX-9017',
      partyAr: 'مستشفى السلام الدولي (قطاع الخدمات)',
      partyEn: 'Al-Salam International Hospital',
      type: 'sale',
      amount: 'EGP 78,900',
      date: '2026-10-22',
      statusAr: 'مدفوعة جزئياً',
      statusEn: 'Partial',
      statusColor: 'amber',
    },
  ]

  const list = transactions.length > 0 ? transactions : defaultList

  const badgeColor = {
    emerald: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40',
    amber: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/40',
    sky: 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-800/40',
    rose: 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800/40',
  }

  return (
    <div className="rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            {isRtl ? 'آخر العمليات والحركات المالية' : 'Recent Transactions'}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {isRtl ? 'حركات البيع والشراء والتحصيلات المسجلة اليوم' : 'Latest sales, purchases and ledger movements'}
          </p>
        </div>
        <Link
          to="/app/accounting"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#2F80ED] dark:text-[#38BDF8] hover:underline"
        >
          <span>{isRtl ? 'عرض القيود بالكامل' : 'View full ledger'}</span>
          <Arrow size={14} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-start text-xs">
          <thead>
            <tr className="border-b border-[#E4E7EC] dark:border-[#1E2E48] text-slate-400 font-semibold">
              <th className="py-2.5 px-3 text-start">{isRtl ? 'المعرف' : 'ID'}</th>
              <th className="py-2.5 px-3 text-start">{isRtl ? 'الطرف / الوصف' : 'Party / Description'}</th>
              <th className="py-2.5 px-3 text-start">{isRtl ? 'النوع' : 'Type'}</th>
              <th className="py-2.5 px-3 text-start">{isRtl ? 'المبلغ' : 'Amount'}</th>
              <th className="py-2.5 px-3 text-start">{isRtl ? 'التاريخ' : 'Date'}</th>
              <th className="py-2.5 px-3 text-start">{isRtl ? 'الحالة' : 'Status'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E4E7EC]/60 dark:divide-[#1E2E48]/60">
            {list.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-slate-50/80 dark:hover:bg-[#132238] transition-colors"
              >
                <td className="py-3 px-3 font-mono font-bold text-[#2F80ED] dark:text-[#38BDF8]">
                  {row.id}
                </td>
                <td className="py-3 px-3 font-semibold text-slate-800 dark:text-slate-200">
                  {isRtl ? row.partyAr : row.partyEn}
                </td>
                <td className="py-3 px-3">
                  <span className="inline-flex items-center gap-1 font-medium text-slate-500 dark:text-slate-400">
                    {row.type === 'sale' ? (
                      <ArrowUpRight size={13} className="text-emerald-500" />
                    ) : row.type === 'purchase' ? (
                      <ArrowDownLeft size={13} className="text-amber-500" />
                    ) : (
                      <FileText size={13} className="text-sky-500" />
                    )}
                    {row.type === 'sale'
                      ? isRtl ? 'مبيعات' : 'Sale'
                      : row.type === 'purchase'
                      ? isRtl ? 'مشتريات' : 'Purchase'
                      : isRtl ? 'مصروف' : 'Expense'}
                  </span>
                </td>
                <td className="py-3 px-3 font-bold font-mono text-slate-900 dark:text-white">
                  {row.amount}
                </td>
                <td className="py-3 px-3 text-slate-400 font-mono text-[11px]">{row.date}</td>
                <td className="py-3 px-3">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold border ${
                      badgeColor[row.statusColor] || badgeColor.emerald
                    }`}
                  >
                    {isRtl ? row.statusAr : row.statusEn}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentTransactions
