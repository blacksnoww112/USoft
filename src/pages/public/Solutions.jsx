import React, { useState } from 'react'
import PublicLayout from '../../components/layout/PublicLayout'
import { useTranslation } from 'react-i18next'
import useLanguageStore from '../../store/languageStore'
import { Link } from 'react-router-dom'
import {
  BarChart3, Users, ShoppingCart, Package, Building2, Briefcase, CreditCard,
  Monitor, FileText, PieChart, GitMerge, Settings, ArrowRight, ArrowLeft,
  CheckCircle2, ChevronDown, Sparkles, ShieldCheck, Layers3,
} from 'lucide-react'

const MODULE_ICONS = {
  accounting: BarChart3, sales: Users, purchases: ShoppingCart, inventory: Package,
  assets: Building2, hr: Briefcase, payroll: CreditCard, pos: Monitor,
  reports: FileText, shareholders: PieChart, specialized: Settings, attendance: GitMerge,
}

const MODULE_IMAGES = {
  accounting: '/images/solutions/SolutionsAccounting.jpg',
  sales: '/images/solutions/SolutionsSales.jpg',
  purchases: '/images/solutions/SolutionsPurchases.jpg',
  inventory: '/images/solutions/SolutionsInventory.jpg',
  assets: '/images/solutions/SolutionsFixedAssets.jpg',
  hr: '/images/solutions/SolutionsHumanResources.jpg',
  payroll: '/images/solutions/SolutionsPayroll.jpg',
  pos: '/images/solutions/SolutionsSales.jpg',
  reports: '/images/solutions/SolutionsReports.jpg',
  shareholders: '/images/solutions/SolutionsReports.jpg',
  specialized: '/images/solutions/SolutionsSpecialized.jpg',
  attendance: '/images/solutions/SolutionsAttendance.jpg',
}

const CATEGORY_FILTER = {
  ar: { all: 'الكل', financial: 'المالية', commercial: 'التجارية', hr: 'الموارد البشرية', specialized: 'متخصصة' },
  en: { all: 'All', financial: 'Financial', commercial: 'Commercial', hr: 'Human Resources', specialized: 'Specialized' },
}

const MODULE_CATEGORIES = {
  accounting: 'financial', sales: 'commercial', purchases: 'commercial', inventory: 'commercial',
  assets: 'financial', hr: 'hr', payroll: 'hr', pos: 'commercial', reports: 'specialized',
  shareholders: 'financial', specialized: 'specialized', attendance: 'hr',
}

function Solutions() {
  const { t } = useTranslation('solutions')
  const { dir } = useLanguageStore()
  const lang = dir === 'rtl' ? 'ar' : 'en'
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  const [activeFilter, setActiveFilter] = useState('all')
  const [expanded, setExpanded] = useState(null)
  const filters = CATEGORY_FILTER[lang]
  const modules = t('modules', { returnObjects: true })
  const filtered = Object.entries(modules).filter(([key]) => activeFilter === 'all' || MODULE_CATEGORIES[key] === activeFilter)

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute -end-20 -top-24 h-80 w-80 animate-[spin_28s_linear_infinite] rounded-full border border-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 start-0 h-72 w-72 animate-pulse rounded-full bg-[#38BDF8]/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className={`${dir === 'rtl' ? 'text-right' : 'text-left'} animate-fade-up`}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-white/85">
              <Sparkles size={14} className="text-[#38BDF8]" />{t('heroBadge')}
            </span>
            <h1 className="mb-5 text-white font-black leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}>{t('heroTitle')}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/72">{t('heroSubtitle')}</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-3 font-bold text-[#173B67] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
              {t('heroCta')}<ArrowIcon size={18} />
            </Link>
          </div>
          <div className="relative grid grid-cols-2 gap-3 animate-slide-right">
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/20 shadow-2xl"><img src="/images/solutions/SolutionsHero1.jpg" alt={t('heroImageAlt')} className="h-48 w-full object-cover transition duration-700 hover:scale-110 sm:h-64" /></div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/20 shadow-2xl"><img src="/images/solutions/SolutionsHero2.jpg" alt={t('heroImageAlt')} className="h-48 w-full object-cover transition duration-700 hover:scale-110 sm:h-64" /></div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative overflow-hidden bg-white py-16">
        <div className="pointer-events-none absolute end-0 top-0 h-64 w-64 rounded-full bg-[#EBF2FF] blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className={`${dir === 'rtl' ? 'text-right' : 'text-left'} animate-slide-left`}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED]">{t('introEyebrow')}</p>
            <h2 className="section-title mb-4">{t('introTitle')}</h2>
            <p className="text-lg leading-relaxed text-[#667085]">{t('introText')}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[t('introPoints.one'), t('introPoints.two'), t('introPoints.three'), t('introPoints.four')].map((point, i) => <div key={i} className="flex items-center gap-2 text-sm font-semibold text-[#173B67]"><CheckCircle2 size={17} className="text-[#27AE60]" />{point}</div>)}
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-[2rem] bg-[#F5F7FA] p-3 shadow-card-lg animate-slide-right">
            <img src="/images/solutions/SolutionsOverView.jpg" alt={t('overviewImageAlt')} className="h-72 w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute bottom-7 start-7 rounded-xl border border-white/20 bg-[#173B67]/85 px-4 py-3 text-white backdrop-blur-md"><p className="text-xs text-white/60"> USoft</p><p className="mt-1 text-sm font-bold">{t('overviewCaption')}</p></div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 border-b border-[#E4E7EC] bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8"><div className="flex min-w-max gap-2 py-3">
          {Object.entries(filters).map(([key, label]) => <button key={key} onClick={() => setActiveFilter(key)} className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${activeFilter === key ? 'bg-[#173B67] text-white shadow-lg' : 'text-[#667085] hover:-translate-y-0.5 hover:bg-[#EBF2FF] hover:text-[#173B67]'}`}>{label}</button>)}
        </div></div>
      </section>

      {/* Modules */}
      <section className="relative overflow-hidden bg-[#F5F7FA] py-20">
        <div className="pointer-events-none absolute -start-32 top-24 h-72 w-72 rounded-full bg-[#38BDF8]/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED]">{t('modulesEyebrow')}</p><h2 className="section-title mb-4">{t('modulesTitle')}</h2><p className="section-subtitle mx-auto">{t('modulesSubtitle')}</p></div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(([key, mod], i) => {
              const Icon = MODULE_ICONS[key] ?? BarChart3
              const isOpen = expanded === key
              return <article key={key} className="group overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-[#2F80ED]/40 hover:shadow-card-lg animate-fade-up" style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="relative overflow-hidden"><img src={MODULE_IMAGES[key]} alt={mod.title} className="h-40 w-full object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-[#173B67]/70 to-transparent" /><div className="absolute bottom-4 start-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-white backdrop-blur-md transition duration-500 group-hover:rotate-6 group-hover:bg-[#2F80ED]"><Icon size={20} /></div></div>
                <div className="p-5"><h3 className="mb-2 font-bold text-[#172033]">{mod.title}</h3><p className="mb-4 text-sm leading-relaxed text-[#667085]">{mod.desc}</p>
                  <button onClick={() => setExpanded(isOpen ? null : key)} className="flex w-full items-center gap-1.5 text-start text-xs font-semibold text-[#2F80ED]" aria-expanded={isOpen}><span>{t('featuresLabel')}</span><ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} /></button>
                  {isOpen && <ul className="mt-3 space-y-2 animate-fade-in">{mod.features.map((feature, fi) => <li key={fi} className="flex items-start gap-2 text-xs leading-relaxed text-[#667085]"><CheckCircle2 size={13} className="mt-0.5 flex-shrink-0 text-[#27AE60]" />{feature}</li>)}</ul>}
                </div>
                <div className="border-t border-[#E4E7EC] px-5 py-3"><Link to="/contact" className="inline-flex items-center gap-1 text-xs font-semibold text-[#173B67] transition hover:gap-2 hover:text-[#2F80ED]">{t('requestDemo')}<ArrowIcon size={12} /></Link></div>
              </article>
            })}
          </div>
        </div>
      </section>

      {/* Closing promise */}
      <section className="bg-white py-16"><div className="mx-auto grid max-w-5xl items-center gap-8 px-4 text-center md:grid-cols-3 md:text-start"><div className="md:col-span-2"><div className="mb-3 flex justify-center text-[#2F80ED] md:justify-start"><ShieldCheck size={34} /></div><h2 className="section-title mb-3">{t('closingTitle')}</h2><p className="text-[#667085]">{t('closingText')}</p></div><Link to="/contact" className="mx-auto inline-flex items-center gap-2 rounded-xl bg-[#173B67] px-6 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#2F80ED] hover:shadow-xl md:mx-0">{t('closingCta')}<ArrowIcon size={18} /></Link></div></section>
    </PublicLayout>
  )
}

export default Solutions
