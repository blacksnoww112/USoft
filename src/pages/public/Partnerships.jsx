import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Building2, Factory, Truck, ShoppingBag, HeartPulse,
  Cpu, ArrowLeft, ArrowRight, Search, CheckCircle2,
  ExternalLink, Sparkles, Handshake, Users, ShieldCheck,
} from 'lucide-react'
import PublicLayout from '../../components/layout/PublicLayout'
import useLanguageStore from '../../store/languageStore'
import Button from '../../components/common/Button'

const SECTOR_ICONS = {
  trade: Truck,
  manufacturing: Factory,
  services: Building2,
  retail: ShoppingBag,
  healthcare: HeartPulse,
  tech: Cpu,
}

const PARTNERS_DATA = [
  {
    id: 'p1',
    nameAr: 'مجموعة الأفق للتجارة والاستيراد',
    nameEn: 'Al-Ofuq Trading & Import Group',
    sector: 'trade',
    logo: '/images/partners/partner-1.svg',
    branches: 14,
    year: '2016',
    descAr: 'إدارة متكاملة لـ 14 فرعاً ومستودعاً مركزياً مع تتبع دقيق للمبيعات وسلاسل الإمداد.',
    descEn: 'Unified management for 14 branches & warehouses with real-time supply chain tracking.',
    modules: ['الحسابات', 'المبيعات', 'المخازن', 'التقارير'],
    modulesEn: ['Accounting', 'Sales', 'Inventory', 'Reports'],
  },
  {
    id: 'p2',
    nameAr: 'شركة الرواد للصناعات الهندسية',
    nameEn: 'Al-Rowad Engineering Industries',
    sector: 'manufacturing',
    logo: '/images/partners/partner-2.svg',
    branches: 3,
    year: '2018',
    descAr: 'ربط خطوط الإنتاج وحسابات التكاليف ومراقبة المواد الخام وإدارة أصول المصنع.',
    descEn: 'Connecting production lines, job-costing, raw material monitoring & asset tracking.',
    modules: ['التكاليف', 'المشتريات', 'المخازن', 'الأصول'],
    modulesEn: ['Costing', 'Purchases', 'Inventory', 'Assets'],
  },
  {
    id: 'p3',
    nameAr: 'مؤسسة النخبة للخدمات والاستشارات',
    nameEn: 'Elite Services & Consulting Corp',
    sector: 'services',
    logo: '/images/partners/partner-3.svg',
    branches: 6,
    year: '2019',
    descAr: 'تنظيم العقود والفوترة الدورية وإدارة شؤون الموظفين والرواتب بدقة عالية.',
    descEn: 'Streamlining service contracts, recurring invoicing, workforce HR & automated payroll.',
    modules: ['الموارد البشرية', 'الرواتب', 'الحسابات'],
    modulesEn: ['HR', 'Payroll', 'Accounting'],
  },
  {
    id: 'p4',
    nameAr: 'الشركة المتحدة للمراكز اللوجستية والتوزيع',
    nameEn: 'United Logistics & Distribution Co.',
    sector: 'trade',
    logo: '/images/partners/partner-4.svg',
    branches: 22,
    year: '2017',
    descAr: 'ربط شبكات التوزيع وسيارات النقل بالمستودعات والمبيعات اللحظية.',
    descEn: 'Fleet delivery synchronization, multi-depot stock sync and mobile collections.',
    modules: ['المخازن', 'المبيعات', 'المشتريات'],
    modulesEn: ['Inventory', 'Sales', 'Purchases'],
  },
  {
    id: 'p5',
    nameAr: 'مجموعة الفلاح للإنشاءات والمقاولات',
    nameEn: 'Al-Falah Contracting & Construction',
    sector: 'services',
    logo: '/images/partners/partner-5.svg',
    branches: 8,
    year: '2015',
    descAr: 'متابعة مراكز تكلفة المشاريع والمستخلصات ومدفوعات الموردين وإهلاك المعدات.',
    descEn: 'Project cost centers, subcontractor payment certs & heavy equipment lifecycle.',
    modules: ['الحسابات', 'الأصول', 'المشتريات'],
    modulesEn: ['Accounting', 'Assets', 'Purchases'],
  },
  {
    id: 'p6',
    nameAr: 'شركة قمم لتطوير الأعمال والأنظمة',
    nameEn: 'Qimam Business Systems & Tech',
    sector: 'tech',
    logo: '/images/partners/partner-6.svg',
    branches: 2,
    year: '2021',
    descAr: 'شراكة تكامل تقني لتوفير خدمات التحول الرقمي والربط البرمجي السحابي.',
    descEn: 'Integration partnership delivering cloud transformation and API connectivity.',
    modules: ['التكامل', 'التقارير', 'حلول مخصصة'],
    modulesEn: ['Integration', 'Reports', 'Custom Solutions'],
  },
  {
    id: 'p7',
    nameAr: 'سلسلة أسواق البركة للتجزئة',
    nameEn: 'Al-Baraka Retail Supermarket Chain',
    sector: 'retail',
    logo: '/images/partners/partner-1.svg',
    branches: 18,
    year: '2020',
    descAr: 'تشغيل شاشات نقاط البيع (POS) عبر الفروع مع مزامنة لحظية للأصناف والمخزون.',
    descEn: 'Operating high-traffic POS registers across branches with real-time stock sync.',
    modules: ['نقاط البيع', 'المخازن', 'المبيعات'],
    modulesEn: ['POS', 'Inventory', 'Sales'],
  },
  {
    id: 'p8',
    nameAr: 'مجموعة النور الطبية والصيدليات',
    nameEn: 'Al-Noor Medical & Pharma Chain',
    sector: 'healthcare',
    logo: '/images/partners/partner-3.svg',
    branches: 11,
    year: '2019',
    descAr: 'إدارة تواريخ الصلاحية والتشغيلات الدوائية ومتابعة مبيعات الفروع المترابطة.',
    descEn: 'Batch numbers, expiration tracking and unified multi-pharmacy procurement.',
    modules: ['المخازن', 'نقاط البيع', 'المشتريات'],
    modulesEn: ['Inventory', 'POS', 'Purchasing'],
  },
  {
    id: 'p9',
    nameAr: 'مصانع الدلتا للتعبئة والتغليف',
    nameEn: 'Delta Packaging Industries',
    sector: 'manufacturing',
    logo: '/images/partners/partner-2.svg',
    branches: 4,
    year: '2018',
    descAr: 'متابعة أوامر التشغيل، التالف الصناعي، وحساب تكلفة الوحدة المصنعة بدقة.',
    descEn: 'Work order management, scrap accounting, and unit cost breakdown analysis.',
    modules: ['التكاليف', 'المخازن', 'الحسابات'],
    modulesEn: ['Costing', 'Inventory', 'Accounting'],
  },
]

function Partnerships() {
  const { t } = useTranslation('partnerships')
  const { dir } = useLanguageStore()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  const [activeSector, setActiveSector] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const sectors = t('sectors', { returnObjects: true })
  const stats = t('stats', { returnObjects: true })

  // Filtering
  const filteredPartners = useMemo(() => {
    return PARTNERS_DATA.filter((partner) => {
      const matchesSector = activeSector === 'all' || partner.sector === activeSector
      const q = searchQuery.trim().toLowerCase()
      if (!q) return matchesSector

      const nameMatch =
        partner.nameAr.toLowerCase().includes(q) ||
        partner.nameEn.toLowerCase().includes(q)
      const descMatch =
        partner.descAr.toLowerCase().includes(q) ||
        partner.descEn.toLowerCase().includes(q)

      return matchesSector && (nameMatch || descMatch)
    })
  }, [activeSector, searchQuery])

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
      <section className="border-b border-[#E4E7EC] bg-white py-10 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {Object.entries(stats).map(([key, stat], idx) => (
              <div
                key={key}
                className="group rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-[#2F80ED]/40 hover:bg-white hover:shadow-card-md"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <p className="text-3xl font-black text-[#173B67] transition-transform duration-300 group-hover:scale-105 md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold text-[#667085] md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FILTER TABS & SEARCH ──────────────────────────── */}
      <section className="sticky top-16 z-30 border-b border-[#E4E7EC] bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Sector Tabs */}
            <div className="flex overflow-x-auto pb-1 md:pb-0 gap-1.5 no-scrollbar">
              <button
                onClick={() => setActiveSector('all')}
                className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-bold transition-all duration-300 ${
                  activeSector === 'all'
                    ? 'bg-[#173B67] text-white shadow-md'
                    : 'bg-[#F5F7FA] text-[#667085] hover:bg-[#EBF2FF] hover:text-[#173B67]'
                }`}
              >
                {t('filterAll')}
              </button>

              {Object.entries(sectors).map(([key, label]) => {
                const Icon = SECTOR_ICONS[key] || Building2
                const isSelected = activeSector === key
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSector(key)}
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-4 py-2 text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#2F80ED] text-white shadow-md'
                        : 'bg-[#F5F7FA] text-[#667085] hover:bg-[#EBF2FF] hover:text-[#173B67]'
                    }`}
                  >
                    <Icon size={14} />
                    {label}
                  </button>
                )
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search
                size={16}
                className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-[#667085]"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] py-2 pe-3 ps-9 text-xs outline-none transition duration-300 focus:border-[#2F80ED] focus:bg-white focus:ring-2 focus:ring-[#2F80ED]/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PARTNERS GRID ─────────────────────────────────── */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredPartners.length === 0 ? (
            <div className="rounded-2xl border border-[#E4E7EC] bg-white py-16 text-center shadow-card">
              <Users size={40} className="mx-auto mb-3 text-[#667085]/60" />
              <p className="font-bold text-[#172033]">
                {dir === 'rtl' ? 'لا توجد نتائج تطابق بحثك' : 'No partners match your search'}
              </p>
              <button
                onClick={() => {
                  setActiveSector('all')
                  setSearchQuery('')
                }}
                className="mt-4 rounded-lg bg-[#EBF2FF] px-4 py-2 text-xs font-bold text-[#2F80ED] transition hover:bg-[#2F80ED] hover:text-white"
              >
                {dir === 'rtl' ? 'إعادة ضبط التصفية' : 'Reset filters'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPartners.map((partner, idx) => {
                const Icon = SECTOR_ICONS[partner.sector] || Building2
                const sectorLabel = sectors[partner.sector] || partner.sector
                return (
                  <article
                    key={partner.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-[#2F80ED]/40 hover:shadow-card-lg animate-fade-up"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div>
                      {/* Card Header */}
                      <div className="mb-5 flex items-start justify-between gap-3">
                        <div className="flex h-14 w-28 items-center justify-center rounded-xl border border-[#E4E7EC] bg-[#F8FAFC] p-2 transition duration-500 group-hover:scale-105 group-hover:border-[#2F80ED]/30">
                          <img
                            src={partner.logo}
                            alt={dir === 'rtl' ? partner.nameAr : partner.nameEn}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full bg-[#EBF2FF] px-3 py-1 text-[11px] font-bold text-[#2F80ED]">
                          <Icon size={12} />
                          {sectorLabel}
                        </span>
                      </div>

                      {/* Title & Desc */}
                      <h3 className="mb-2 text-base font-bold text-[#172033] transition-colors group-hover:text-[#2F80ED]">
                        {dir === 'rtl' ? partner.nameAr : partner.nameEn}
                      </h3>

                      <p className="mb-4 text-xs leading-relaxed text-[#667085]">
                        {dir === 'rtl' ? partner.descAr : partner.descEn}
                      </p>
                    </div>

                    <div>
                      {/* Meta info */}
                      <div className="mb-4 flex items-center justify-between border-t border-[#E4E7EC]/70 pt-3 text-[11px] text-[#667085]">
                        <span>
                          {dir === 'rtl' ? 'عدد الفروع:' : 'Branches:'}{' '}
                          <strong className="text-[#172033]">{partner.branches}</strong>
                        </span>
                        <span>
                          {dir === 'rtl' ? 'شريك منذ:' : 'Partner since:'}{' '}
                          <strong className="text-[#172033]">{partner.year}</strong>
                        </span>
                      </div>

                      {/* Modules tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {(dir === 'rtl' ? partner.modules : partner.modulesEn).map((mod, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-[#F5F7FA] px-2 py-0.5 text-[10px] font-medium text-[#173B67]"
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── 5. VALUE PROPOSITION ─────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED]">
                {t('trustEyebrow')}
              </p>
              <h2 className="section-title mb-4">{t('trustTitle')}</h2>
              <p className="text-base leading-relaxed text-[#667085]">
                {t('trustSubtitle')}
              </p>

              <div className="mt-8 space-y-3">
                {[
                  dir === 'rtl'
                    ? 'دعم فني واستشاري مخصص لكل شريك يضمن استقرار المنظومة'
                    : 'Dedicated technical and advisory support ensuring system continuity',
                  dir === 'rtl'
                    ? 'تحديثات دورية تلبي المتطلبات المحاسبية والضريبية المعتمدة'
                    : 'Periodic updates fulfilling statutory accounting and compliance criteria',
                  dir === 'rtl'
                    ? 'قابلية استيعاب التوسعات وإضافة فروع ومستودعات جديدة فوراً'
                    : 'Instant scalability to add new branches, warehouses, and users seamlessly',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 text-[#27AE60]" />
                    <span className="text-sm font-semibold text-[#173B67]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-[#E4E7EC] bg-[#F5F7FA] p-8 shadow-card-lg">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2F80ED] text-white shadow-md">
                    <ShieldCheck size={26} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#173B67]">
                      {dir === 'rtl' ? 'معايير اعتماد الشراكة' : 'Partnership Standards'}
                    </h4>
                    <p className="text-xs text-[#667085]">
                      {dir === 'rtl' ? 'جودة التشغيل وضمان النتائج' : 'Operational quality & verified outcomes'}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[#667085]">
                  {dir === 'rtl'
                    ? 'كل قصة نجاح تبدأ بفهم عميق لاحتياجات الشركة، ثم ضبط مسارات العمل وتهيئة فرق العمل بأعلى درجات الاحترافية.'
                    : 'Every success story begins with a profound understanding of client workflows, aligning processes and empowering teams with utmost professionalism.'}
                </p>

                <div className="mt-6 flex items-center justify-between rounded-xl bg-white p-4 border border-[#E4E7EC]">
                  <span className="text-xs font-bold text-[#173B67]">
                    {dir === 'rtl' ? 'جاهز للانطلاق معنا؟' : 'Ready to start with us?'}
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F80ED] hover:underline"
                  >
                    {dir === 'rtl' ? 'اطلب استشارة' : 'Get a consultation'}
                    <ArrowIcon size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ─────────────────────────────────────── */}
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
