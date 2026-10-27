import React, { useState } from 'react'
import PublicLayout from '../../components/layout/PublicLayout'
import { useTranslation } from 'react-i18next'
import useLanguageStore from '../../store/languageStore'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  BarChart2,
  Layers,
  Target,
  Settings2,
  Rocket,
  Headphones,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Award,
  Check,
} from 'lucide-react'

const STATS = [
  { valueAr: '+150', valueEn: '150+', labelAr: 'عميل يثق بنا في مصر والشرق الأوسط', labelEn: 'Clients who trust us', icon: Users },
  { valueAr: '12+', valueEn: '12+', labelAr: 'وحدة ونظام ERP متكامل', labelEn: 'Integrated modules', icon: Layers },
  { valueAr: '99.9%', valueEn: '99.9%', labelAr: 'نسبة استقرار وجاهزية المنظومة', labelEn: 'System uptime', icon: ShieldCheck },
  {
    valueAr: 'الأحد - الخميس',
    subValueAr: 'من 9 صباحاً إلى 5 مساءً',
    valueEn: 'Sun - Thu',
    subValueEn: '9:00 AM - 5:00 PM',
    labelAr: 'فريق دعم فني واستشارات متواصل',
    labelEn: 'Technical support',
    icon: Headphones,
  },
]

const MISSION_ICONS = [Layers, BarChart2, CheckCircle2, Users]
const JOURNEY_ICONS = [Target, Settings2, Rocket, Headphones]

const JOURNEY_DETAILS = {
  ar: [
    {
      subtitle: 'الاستكشاف الدقيق وفهم دورة العمل الخاصة بك',
      points: [
        'عقد ورش عمل استكشافية متعمقة مع الإدارة العليا ومدراء الحسابات والمخازن والمبيعات.',
        'تحليل الدورة المستندية الحالية للشركة وتحديد مواطن الهدر والازدواجية لتصحيحها.',
        'حصر المتطلبات الخاصة وفقاً لطبيعة نشاط الشركة (تجاري، صناعي، خدمي، أو مقاولات).',
        'وضع خارطة طريق رقمية واضحة ومجدولة زمنياً وتحديد مؤشرات النجاح المستهدفة.',
      ],
      deliverable: 'مخرجات المرحلة: وثيقة نطاق العمل التفصيلية (Scope of Work) وخطة التحول الرقمي المعتمدة.',
    },
    {
      subtitle: 'هندسة المنظومة والتخصيص المحاسبي والإداري',
      points: [
        'بناء وهيكلة شجرة الحسابات ومراكز التكلفة وفق معايير المحاسبة والضرائب المصرية.',
        'تخصيص مسارات الاعتماد الإداري والمالي وأذون المخازن ونماذج فواتير المبيعات.',
        'تهيئة قوالب الفواتير الإلكترونية المعتمدة وضبط الربط المباشر مع مصلحة الضرائب (ETA).',
        'استيراد وتدقيق البيانات التاريخية، أرصدة العملاء والموردين، والأصناف المخزنية بدقة.',
      ],
      deliverable: 'مخرجات المرحلة: بيئة عمل متكاملة مجهزة ومخصصة بالكامل لخصوصية منشأتك.',
    },
    {
      subtitle: 'التدريب التطبيقي والتشغيل التجريبي الفعلي',
      points: [
        'تدريب مكثف وتطبيقي لكافة المستخدمين (محاسبين، أمناء مستودعات، كاشير، مدراء) على سيناريوهات حية.',
        'تشغيل تجريبي متوازٍ (Parallel Run) لضمان مطابقة العمليات والحسابات بنسبة 100%.',
        'اختبار توافق أجهزة الباركود، طابعات الفواتير الحرارية، ونقاط البيع السريعة في الفروع.',
        'الانطلاق الرسمي (Go-Live) مع مرافقة ميدانية مباشرة من فريق الاستشارات والدعم الفني.',
      ],
      deliverable: 'مخرجات المرحلة: انتقال آمن وسلس للعمل الحي بدون توقف أو ارتباك في العمليات.',
    },
    {
      subtitle: 'شراكة مستمرة وضمان أمان المنظومة وتطويرها',
      points: [
        'دعم فني استباقي ومستمر عبر الهاتف والواتساب والزيارات الميدانية الدورية.',
        'تحديثات دورية مجانية تواكب أحدث القوانين الضريبية والتنظيمية والتطويرات البرمجية.',
        'مراقبة الأداء وأخذ نسخ احتياطية سحابية مشفرة يومياً لحماية البيانات من أي طارئ.',
        'مراجعة دورية للأداء مع الإدارة لتوسيع وتطوير المنظومة مع نمو فروعك وأعمالك.',
      ],
      deliverable: 'مخرجات المرحلة: استقرار تقني دائم وراحة بال تامة تتيح لك التركيز على نمو أعمالك.',
    },
  ],
  en: [
    {
      subtitle: 'In-Depth Discovery & Operations Assessment',
      points: [
        'Comprehensive discovery workshops with key department heads and stakeholders.',
        'Analyzing current document lifecycles to eliminate redundancies and operational waste.',
        'Gathering specialized operational rules specific to your industry vertical.',
        'Drafting a clear digital transformation roadmap with defined success milestones.',
      ],
      deliverable: 'Deliverable: Detailed Scope of Work (SOW) and validated migration roadmap.',
    },
    {
      subtitle: 'System Architecture & Custom Configuration',
      points: [
        'Structuring chart of accounts and multi-dimensional cost center matrices.',
        'Customizing approval hierarchies, warehouse vouchers, and branded sales workflows.',
        'Configuring certified e-invoicing templates and Tax Authority (ETA) sync.',
        'Auditing and migrating opening balances, vendor ledgers, and product catalogs.',
      ],
      deliverable: 'Deliverable: Fully tailored ERP environment ready for user adoption.',
    },
    {
      subtitle: 'Hands-On Training & Live Go-Live Support',
      points: [
        'Role-specific training sessions for accountants, storekeepers, and cashiers on live scenarios.',
        'Parallel run execution to validate numbers against legacy records 100%.',
        'Testing hardware compatibility with barcode scanners, scales, and receipt printers.',
        'Official go-live launch with dedicated on-site engineering oversight.',
      ],
      deliverable: 'Deliverable: Seamless transition to live ERP with zero operational downtime.',
    },
    {
      subtitle: 'Ongoing Partnership & Proactive Scaling',
      points: [
        'Continuous technical assistance via hotline, WhatsApp, and on-site visits.',
        'Regular feature and statutory tax updates delivered automatically.',
        'Daily automated encrypted cloud backups for uninterrupted disaster recovery.',
        'Periodic reviews to optimize system utilization as your business expands.',
      ],
      deliverable: 'Deliverable: Uninterrupted uptime and ongoing technological empowerment.',
    },
  ],
}

function About() {
  const { t } = useTranslation('about')
  const { dir } = useLanguageStore()
  const lang = dir === 'rtl' ? 'ar' : 'en'
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const missionItems = Object.values(t('mission', { returnObjects: true }))
  const journeyItems = Object.values(t('journey', { returnObjects: true }))
  const journeyDetails = JOURNEY_DETAILS[lang] || JOURNEY_DETAILS.ar

  const [expandedJourney, setExpandedJourney] = useState({ 0: true })

  const toggleJourney = (index) => {
    setExpandedJourney((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-24 text-center">
        <div className="pointer-events-none absolute -end-20 -top-20 h-72 w-72 animate-[spin_24s_linear_infinite] rounded-full border border-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -start-16 h-64 w-64 animate-pulse rounded-full bg-[#38BDF8]/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4">
          <span className="mb-5 inline-flex animate-fade-in rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            {t('heroBadge')}
          </span>
          <h1 className="mb-4 animate-fade-up text-white font-black leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.6rem)' }}>
            {t('heroTitle')}
          </h1>
          <p className="animate-fade-up text-lg leading-relaxed text-white/70 delay-100">{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white dark:bg-[#070D18] py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className={`${isRtl ? 'text-right' : 'text-left'} animate-slide-left`}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EBF2FF] dark:bg-slate-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#173B67] dark:text-[#38BDF8]">
              {t('visionTitle')}
            </div>
            <h2 className="section-title mb-4 dark:text-white">{t('visionTitle')}</h2>
            <p className="text-lg leading-relaxed text-[#667085] dark:text-slate-300">{t('visionText')}</p>
            <div className="mt-8 rounded-2xl border border-[#E4E7EC] dark:border-slate-800 bg-[#F5F7FA] dark:bg-[#0F1B2F] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#2F80ED]/40 hover:shadow-card-lg">
              <p className="text-sm font-semibold leading-relaxed text-[#173B67] dark:text-slate-200">{t('visionQuote')}</p>
            </div>
          </div>

          <div className={`${isRtl ? 'text-right' : 'text-left'} animate-slide-right`}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EBF2FF] dark:bg-slate-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#173B67] dark:text-[#38BDF8]">
              {t('missionTitle')}
            </div>
            <h2 className="section-title mb-6 dark:text-white">{t('missionTitle')}</h2>
            <ul className="space-y-4">
              {missionItems.map((item, i) => {
                const Icon = MISSION_ICONS[i] ?? CheckCircle2
                return (
                  <li
                    key={i}
                    className="group flex items-start gap-3.5 animate-fade-up rounded-xl p-2.5 transition-all duration-300 hover:bg-[#F5F7FA] dark:hover:bg-[#0F1B2F]"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EBF2FF] dark:bg-slate-800 transition duration-300 group-hover:bg-[#2F80ED] dark:group-hover:bg-[#38BDF8]">
                      <Icon size={18} className="text-[#2F80ED] dark:text-[#38BDF8] transition-colors group-hover:text-white dark:group-hover:text-[#0A1220]" aria-hidden="true" />
                    </div>
                    <span className="leading-relaxed text-[#667085] dark:text-slate-300 text-sm sm:text-base pt-1.5">{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline / Journey Section with Expandable Details and Centered Icons */}
      <section className="bg-[#F5F7FA] dark:bg-[#0B1526] py-20 border-y border-[#E4E7EC] dark:border-slate-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED] dark:text-[#38BDF8]">{t('journeyEyebrow')}</p>
            <h2 className="section-title mb-4 dark:text-white">{t('journeyTitle')}</h2>
            <p className="section-subtitle mx-auto text-[#667085] dark:text-slate-300">{t('journeySubtitle')}</p>
          </div>

          <div className="relative">
            {/* Perfectly Centered Vertical Line for both RTL and LTR */}
            <div
              className={`absolute bottom-8 top-8 w-0.5 bg-gradient-to-b from-[#2F80ED] via-[#38BDF8] to-transparent ${
                isRtl
                  ? 'right-5 md:right-auto md:left-1/2 md:-translate-x-1/2'
                  : 'left-5 md:left-1/2 md:-translate-x-1/2'
              }`}
              aria-hidden="true"
            />

            <div className="space-y-8 md:space-y-12">
              {journeyItems.map((item, i) => {
                const Icon = JOURNEY_ICONS[i] ?? CheckCircle2
                const isEven = i % 2 === 0
                const isExpanded = !!expandedJourney[i]
                const details = journeyDetails[i]

                return (
                  <div
                    key={i}
                    className={`relative flex items-start md:items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Card container */}
                    <div
                      className={`w-full ${
                        isRtl ? 'pr-14 md:pr-0' : 'pl-14 md:pl-0'
                      } md:w-[calc(50%-2.5rem)]`}
                    >
                      <div className="group rounded-2xl border border-[#E4E7EC] dark:border-slate-800 bg-white dark:bg-[#0F1B2F] p-5 sm:p-6 shadow-card transition-all duration-300 hover:border-[#2F80ED]/40 dark:hover:border-[#38BDF8]/40 hover:shadow-card-lg text-start">
                        {/* Header */}
                        <div className="flex items-center justify-between gap-3 mb-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EBF2FF] dark:bg-slate-800 text-xs font-black text-[#2F80ED] dark:text-[#38BDF8] font-mono">
                              0{i + 1}
                            </span>
                            <h3 className="font-bold text-base sm:text-lg text-[#173B67] dark:text-white">
                              {item.title}
                            </h3>
                          </div>

                          <button
                            onClick={() => toggleJourney(i)}
                            aria-label={isExpanded ? 'Collapse' : 'Expand'}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:bg-[#2F80ED] hover:text-white dark:hover:bg-[#38BDF8] dark:hover:text-[#0A1220] transition-colors"
                          >
                            <ChevronDown
                              size={17}
                              className={`transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        </div>

                        {/* Basic short description */}
                        <p className="text-sm leading-relaxed text-[#667085] dark:text-slate-300">
                          {item.description}
                        </p>

                        {/* Toggle button */}
                        <button
                          onClick={() => toggleJourney(i)}
                          className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#2F80ED] dark:text-[#38BDF8] hover:underline"
                        >
                          <span>
                            {isExpanded
                              ? isRtl
                                ? 'إخفاء الشرح المفصل'
                                : 'Hide Detailed Explanation'
                              : isRtl
                              ? 'عرض الشرح التفصيلي والمخرجات'
                              : 'View Detailed Methodology & Deliverables'}
                          </span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Expanded rich content */}
                        {isExpanded && details && (
                          <div className="mt-4 pt-4 border-t border-[#E4E7EC] dark:border-slate-800 space-y-3.5 animate-fade-in">
                            <div className="text-xs font-bold text-[#173B67] dark:text-slate-200">
                              {details.subtitle}
                            </div>

                            <ul className="space-y-2">
                              {details.points.map((pt, pi) => (
                                <li key={pi} className="flex items-start gap-2 text-xs text-[#667085] dark:text-slate-300 leading-relaxed">
                                  <Check
                                    size={14}
                                    className="mt-0.5 shrink-0 text-[#2F80ED] dark:text-[#38BDF8]"
                                  />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="rounded-xl bg-blue-50/70 dark:bg-slate-800/70 border border-blue-100 dark:border-slate-700/60 p-3 text-[11px] font-semibold text-[#173B67] dark:text-slate-200">
                              <span className="font-bold text-[#2F80ED] dark:text-[#38BDF8] inline-block me-1">
                                ✦
                              </span>
                              {details.deliverable}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Timeline Node Icon: Mathematically Centered for RTL & LTR */}
                    <div
                      className={`absolute top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#F5F7FA] dark:border-[#0B1526] bg-[#173B67] text-white shadow-md transition duration-300 hover:scale-110 hover:bg-[#2F80ED] ${
                        isRtl
                          ? 'right-0 md:right-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2'
                          : 'left-0 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2'
                      }`}
                    >
                      <Icon size={16} aria-hidden="true" className="m-auto" />
                    </div>

                    {/* Opposite spacer on desktop */}
                    <div className="hidden w-[calc(50%-2.5rem)] md:block" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats with Centered Icons */}
      <section className="bg-white dark:bg-[#070D18] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED] dark:text-[#38BDF8]">{t('statsEyebrow')}</p>
            <h2 className="section-title dark:text-white">{t('statsTitle')}</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              const value = dir === 'rtl' ? stat.valueAr : stat.valueEn
              const subValue = dir === 'rtl' ? stat.subValueAr : stat.subValueEn
              const label = dir === 'rtl' ? stat.labelAr : stat.labelEn

              return (
                <div
                  key={i}
                  className="group flex flex-col justify-between rounded-2xl border border-[#E4E7EC] dark:border-slate-800 bg-[#F5F7FA] dark:bg-[#0F1B2F] p-5 text-center shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-[#2F80ED]/40 hover:bg-white dark:hover:bg-[#132238] hover:shadow-card-lg md:p-6"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div>
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-[#E4E7EC] dark:border-slate-700 text-[#2F80ED] dark:text-[#38BDF8] shadow-xs transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                    <div className="mb-2">
                      <p className={`font-black text-[#173B67] dark:text-white transition duration-500 group-hover:scale-105 ${
                        subValue ? 'text-lg sm:text-xl font-bold' : 'text-2xl md:text-3xl font-mono'
                      }`}>
                        {value}
                      </p>
                      {subValue && (
                        <p className="mt-1 text-xs sm:text-sm font-semibold text-[#2F80ED] dark:text-[#38BDF8]">
                          {subValue}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-[#667085] dark:text-slate-300 font-medium leading-relaxed">
                    {label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 animate-fade-up text-3xl font-black text-white">{t('ctaTitle')}</h2>
          <p className="mb-8 animate-fade-up text-lg text-white/70 delay-100">{t('ctaSubtitle')}</p>
          <Link to="/contact">
            <Button size="lg" variant="accent">
              {t('ctaBtn')} <ArrowIcon size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}

export default About
