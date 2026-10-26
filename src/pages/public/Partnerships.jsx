import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowLeft, ArrowRight, CheckCircle2,
  Sparkles, Handshake, ShieldCheck, X,
  ExternalLink, Award,
} from 'lucide-react'
import PublicLayout from '../../components/layout/PublicLayout'
import useLanguageStore from '../../store/languageStore'
import Button from '../../components/common/Button'
import { PARTNERS_LIST } from '../../data/partnersData'

function Partnerships() {
  const { t } = useTranslation('partnerships')
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const [selectedPartner, setSelectedPartner] = useState(null)
  const stats = t('stats', { returnObjects: true })

  // Lock body scroll & listen to Escape key when modal is open
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPartner(null)
    }
    if (selectedPartner) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedPartner])

  return (
    <PublicLayout>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="hero-gradient relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 animate-[spin_32s_linear_infinite] rounded-full border border-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 start-0 h-80 w-80 animate-pulse rounded-full bg-[#38BDF8]/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-white/85">
            <Handshake size={15} className="text-[#38BDF8]" />
            {t('heroBadge')}
          </span>

          <h1
            className="mb-6 animate-fade-up text-white font-black leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)' }}
          >
            {t('heroTitle')}
          </h1>

          <p className="mx-auto max-w-2xl animate-fade-up text-lg leading-relaxed text-white/75 delay-100">
            {t('heroSubtitle')}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-up delay-200">
            <Link to="/contact">
              <Button size="lg" variant="accent">
                {t('heroCta')}
                <ArrowIcon size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. METRICS STRIP ─────────────────────────────────── */}
      <section className="border-b border-[#E4E7EC] dark:border-slate-800 bg-white dark:bg-[#0B1526] py-10 shadow-sm transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {Object.entries(stats).map(([key, stat], idx) => (
              <div
                key={key}
                className="group rounded-2xl border border-[#E4E7EC] dark:border-slate-800 bg-[#F5F7FA] dark:bg-[#070D18] p-5 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-[#2F80ED]/40 dark:hover:border-[#38BDF8]/40 hover:bg-white dark:hover:bg-[#0F1B2F] hover:shadow-card-md"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <p className="text-3xl font-black text-[#173B67] dark:text-white transition-transform duration-300 group-hover:scale-105 md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold text-[#667085] dark:text-slate-300 md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SECTION INTRO ─────────────────────────────────── */}
      <section className="bg-[#F8FAFC] dark:bg-[#070D18] pt-16 pb-6 text-center transition-colors">
        <div className="mx-auto max-w-3xl px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED] dark:text-[#38BDF8] mb-2">
            {isRtl ? 'شركاء النجاح الرائدون' : 'Leading Success Partners'}
          </span>
          <h2 className="section-title dark:text-white mb-3">
            {isRtl ? 'شركات ومؤسسات تعتمد على حلول USoft' : 'Companies & Enterprises Powered by USoft'}
          </h2>
          <p className="text-sm md:text-base text-[#667085] dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isRtl
              ? 'اضغط على أي شركة لاستعراض تفاصيل الشراكة وقصة النجاح وأبرز المخرجات التشغيلية.'
              : 'Click on any partner to view partnership details, success story, and key operational impact.'}
          </p>
        </div>
      </section>

      {/* ── 4. ALL PARTNERS DIRECT GRID ──────────────────────── */}
      <section className="bg-[#F8FAFC] dark:bg-[#070D18] pb-24 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS_LIST.map((partner, idx) => (
              <article
                key={partner.id}
                onClick={() => setSelectedPartner(partner)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedPartner(partner)
                  }
                }}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E4E7EC] dark:border-slate-800 bg-white dark:bg-[#0B1526] p-6 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-[#2F80ED]/50 dark:hover:border-[#38BDF8]/50 hover:shadow-card-lg animate-fade-up cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/40 text-start"
                style={{ animationDelay: `${(idx % 6) * 0.08}s` }}
              >
                <div>
                  {/* Logo Container */}
                  <div className="flex h-28 w-full items-center justify-center rounded-xl border border-[#E4E7EC] dark:border-slate-800 bg-white p-4 shadow-2xs transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                      src={partner.logo}
                      alt={isRtl ? partner.nameAr : partner.nameEn}
                      className="max-h-full max-w-full object-contain filter contrast-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Sector Tag & Status */}
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="inline-block rounded-md bg-[#EBF2FF] dark:bg-[#172A45] px-2.5 py-1 text-[11px] font-bold text-[#2F80ED] dark:text-[#38BDF8]">
                      {isRtl ? partner.sectorAr : partner.sectorEn}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={13} />
                      {isRtl ? 'شريك معتمد' : 'Verified Partner'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-3 text-lg font-bold text-[#173B67] dark:text-white leading-snug group-hover:text-[#2F80ED] dark:group-hover:text-[#38BDF8] transition-colors">
                    {isRtl ? partner.nameAr : partner.nameEn}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#667085] dark:text-slate-300 line-clamp-3">
                    {isRtl ? partner.descAr : partner.descEn}
                  </p>
                </div>

                {/* View Details Action Link */}
                <div className="mt-5 pt-3.5 border-t border-[#E4E7EC]/70 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#2F80ED] dark:text-[#38BDF8]">
                  <span>{isRtl ? 'عرض تفاصيل الشراكة' : 'View Partnership Details'}</span>
                  <ExternalLink size={14} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. POPUP MODAL (بوبس بيدج لعرض تفاصيل الشريك) ─────── */}
      {selectedPartner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-partner-title"
        >
          {/* Backdrop with blur */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-fade-in"
            onClick={() => setSelectedPartner(null)}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[#E4E7EC] dark:border-slate-700/80 bg-white dark:bg-[#0B1526] shadow-2xl transition-all animate-scale-in max-h-[90vh] flex flex-col z-10">
            {/* Top Bar with Close Button */}
            <div className="relative bg-gradient-to-r from-[#173B67] via-[#1E4E8C] to-[#2F80ED] p-6 text-white shrink-0">
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-4 end-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 hover:rotate-90 transition-all duration-300 focus:outline-none"
                aria-label={isRtl ? 'إغلاق' : 'Close'}
              >
                <X size={20} />
              </button>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pe-8">
                {/* Logo Box */}
                <div className="flex h-20 w-32 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 shadow-md">
                  <img
                    src={selectedPartner.logo}
                    alt={isRtl ? selectedPartner.nameAr : selectedPartner.nameEn}
                    className="max-h-full max-w-full object-contain filter contrast-105"
                  />
                </div>

                {/* Header Information */}
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold backdrop-blur-sm text-white mb-1.5">
                    <Award size={13} className="text-[#38BDF8]" />
                    <span>{isRtl ? selectedPartner.sectorAr : selectedPartner.sectorEn}</span>
                  </div>
                  <h3 id="modal-partner-title" className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {isRtl ? selectedPartner.nameAr : selectedPartner.nameEn}
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    {isRtl ? selectedPartner.nameEn : selectedPartner.nameAr}
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable Body Content */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-start">
              {/* 1. Partnership Overview */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-[#173B67] dark:text-[#38BDF8] uppercase tracking-wider mb-2.5">
                  <Handshake size={17} />
                  <span>{isRtl ? 'نبذة عن الشراكة وقصة النجاح' : 'Partnership & Success Story'}</span>
                </h4>
                <div className="rounded-2xl bg-[#F8FAFC] dark:bg-[#070D18] p-5 border border-[#E4E7EC] dark:border-slate-800">
                  <p className="text-sm sm:text-base leading-relaxed text-[#475569] dark:text-slate-200">
                    {isRtl ? selectedPartner.descAr : selectedPartner.descEn}
                  </p>
                </div>
              </div>

              {/* 2. Key Achievements & Value Delivered */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-[#173B67] dark:text-[#38BDF8] uppercase tracking-wider mb-3">
                  <ShieldCheck size={17} />
                  <span>{isRtl ? 'أبرز المخرجات والقيمة المضافة' : 'Key Value & Operational Impact'}</span>
                </h4>
                <div className="grid gap-3">
                  {[
                    isRtl
                      ? 'مزامنة لحظية للبيانات وسلاسل الإمداد عبر جميع المستودعات والمصانع والفروع.'
                      : 'Real-time synchronization of operations and supply chains across branches and plants.',
                    isRtl
                      ? 'رقابة مالية ومحاسبية دقيقة على التكاليف وهوامش الربحية وتدفقات السيولة.'
                      : 'Rigorous financial and costing control with automated cash flow oversight.',
                    isRtl
                      ? 'تقارير إحصائية وتحليلية تدعم الإدارة التنفيذية في سرعة اتخاذ القرارات اليومية.'
                      : 'Automated executive KPI dashboards empowering rapid strategic business decisions.',
                  ].map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl bg-[#F8FAFC] dark:bg-[#070D18]/60 p-3.5 border border-[#E4E7EC]/70 dark:border-slate-800/80 text-xs sm:text-sm text-[#475569] dark:text-slate-200"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#EBF2FF] dark:bg-[#172A45] text-[#2F80ED] dark:text-[#38BDF8] mt-0.5">
                        <CheckCircle2 size={15} />
                      </div>
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E4E7EC] dark:border-slate-800 bg-[#F8FAFC] dark:bg-[#070D18] px-6 py-4 shrink-0">
              <span className="text-xs text-[#667085] dark:text-slate-400">
                {isRtl ? 'هل تريد تطبيق نظام مماثل في شركتك؟' : 'Interested in a tailored solution?'}
              </span>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="w-1/2 sm:w-auto rounded-xl border border-[#CBD5E1] dark:border-slate-700 px-4 py-2 text-xs font-bold text-[#475569] dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition"
                >
                  {isRtl ? 'إغلاق' : 'Close'}
                </button>
                <Link
                  to="/contact"
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#2F80ED] hover:bg-[#173B67] dark:bg-[#38BDF8] dark:hover:bg-white dark:text-[#0F1B2F] px-4 py-2 text-xs font-bold text-white shadow-sm transition"
                  onClick={() => setSelectedPartner(null)}
                >
                  <span>{isRtl ? 'طلب استشارة' : 'Contact Sales'}</span>
                  <ArrowIcon size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 6. VALUE PROPOSITION ─────────────────────────────── */}
      <section className="bg-white dark:bg-[#0B1526] py-20 border-t border-[#E4E7EC] dark:border-slate-800 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED] dark:text-[#38BDF8]">
                {t('trustEyebrow')}
              </p>
              <h2 className="section-title mb-4 dark:text-white">{t('trustTitle')}</h2>
              <p className="text-base leading-relaxed text-[#667085] dark:text-slate-300">
                {t('trustSubtitle')}
              </p>

              <div className="mt-8 space-y-3">
                {[
                  isRtl
                    ? 'دعم فني واستشاري مخصص لكل شريك يضمن استقرار المنظومة'
                    : 'Dedicated technical and advisory support ensuring system continuity',
                  isRtl
                    ? 'تحديثات دورية تلبي المتطلبات المحاسبية والضريبية المعتمدة'
                    : 'Periodic updates fulfilling statutory accounting and compliance criteria',
                  isRtl
                    ? 'قابلية استيعاب التوسعات وإضافة فروع ومستودعات جديدة فوراً'
                    : 'Instant scalability to add new branches, warehouses, and users seamlessly',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="shrink-0 text-[#27AE60]" />
                    <span className="text-sm font-semibold text-[#173B67] dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-[#E4E7EC] dark:border-slate-800 bg-[#F5F7FA] dark:bg-[#070D18] p-8 shadow-card-lg">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2F80ED] text-white shadow-md">
                    <ShieldCheck size={26} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#173B67] dark:text-white">
                      {isRtl ? 'معايير اعتماد الشراكة' : 'Partnership Standards'}
                    </h4>
                    <p className="text-xs text-[#667085] dark:text-slate-400">
                      {isRtl ? 'جودة التشغيل وضمان النتائج' : 'Operational quality & verified outcomes'}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[#667085] dark:text-slate-300">
                  {isRtl
                    ? 'كل قصة نجاح تبدأ بفهم عميق لاحتياجات الشركة، ثم ضبط مسارات العمل وتهيئة فرق العمل بأعلى درجات الاحترافية.'
                    : 'Every success story begins with a profound understanding of client workflows, aligning processes and empowering teams with utmost professionalism.'}
                </p>

                <div className="mt-6 flex items-center justify-between rounded-xl bg-white dark:bg-[#0F1B2F] p-4 border border-[#E4E7EC] dark:border-slate-800">
                  <span className="text-xs font-bold text-[#173B67] dark:text-white">
                    {isRtl ? 'جاهز للانطلاق معنا؟' : 'Ready to start with us?'}
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F80ED] dark:text-[#38BDF8] hover:underline"
                  >
                    {isRtl ? 'اطلب استشارة' : 'Get a consultation'}
                    <ArrowIcon size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────── */}
      <section className="hero-gradient relative overflow-hidden py-20 text-center">
        <div className="relative mx-auto max-w-3xl px-4">
          <Sparkles size={36} className="mx-auto mb-4 text-[#38BDF8]" />
          <h2 className="mb-4 animate-fade-up text-3xl font-black text-white">
            {t('ctaTitle')}
          </h2>
          <p className="mb-8 animate-fade-up text-lg text-white/70 delay-100">
            {t('ctaSubtitle')}
          </p>
          <Link to="/contact">
            <Button size="lg" variant="accent">
              {t('ctaBtn')}
              <ArrowIcon size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}

export default Partnerships
