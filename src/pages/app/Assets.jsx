import React from 'react'
import { Link } from 'react-router-dom'
import {
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Layers,
  Wrench,
  TrendingDown,
  ShieldCheck,
  QrCode,
  DollarSign,
  Workflow,
  Calendar,
} from 'lucide-react'
import PublicLayout from '../../components/layout/PublicLayout'
import ModuleNav from '../../components/layout/ModuleNav'
import useLanguageStore from '../../store/languageStore'
import { getAssetPath } from '../../utils/assetPath'

function Assets() {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const features = [
    {
      icon: QrCode,
      title: isRtl ? 'سجل مركزي موحد للأصول والترقيم بالباركود' : 'Centralized Asset Registry & Barcode Tagging',
      desc: isRtl
        ? 'تسجيل وتكويد كافة أصول الشركة (أجهزة، سيارات، ماكينات، عقارات، أثاث) برقم تسلسلي وباركود فريد، مع حفظ فاتورة الشراء، المورد، الضمان، ومركز التكلفة التابع له.'
        : 'Register and tag company assets with unique barcodes, serial numbers, purchase invoices, warranty dates, and designated cost centers.',
    },
    {
      icon: TrendingDown,
      title: isRtl ? 'احتساب أقساط الإهلاك آلياً بضغطة زر' : 'Automated Depreciation Engine',
      desc: isRtl
        ? 'تطبيق طرق الإهلاك المحاسبية والضريبية المعتمدة (القسط الثابت، القسط المتناقص، مجموع سنوات الاستخدام، ووحدات الإنتاج)، مع ترحيل قيود الإهلاك آلياً إلى الأستاذ العام.'
        : 'Automate straight-line, declining balance, or units-of-production depreciation with zero manual journal creation.',
    },
    {
      icon: Layers,
      title: isRtl ? 'تتبع العهد الشخصية والمواقع الجغرافية' : 'Personal Custody & Physical Tracking',
      desc: isRtl
        ? 'ربط كل أصل بموظف محدد كعهدة شخصية (أجهزة لابتوب، سيارات، هواتف)، وتحديد موقع الأصل (الفرع، الدور، الغرفة)، مع نموذج تسليم واستلام رسمي موثق.'
        : 'Assign assets to individual employees as personal custody with official handover vouchers and physical branch/room tagging.',
    },
    {
      icon: Wrench,
      title: isRtl ? 'إدارة الصيانة الدورية وتكاليف التجديد والتحسين' : 'Maintenance Log & Capitalized Improvements',
      desc: isRtl
        ? 'جدولة مواعيد الصيانة الدورية والوقائية، توثيق عقود الصيانة والتأمين، ورسملة التحسينات التي تزيد من العمر الإنتاجي للأصل وإضافتها لقيمته الدفترية.'
        : 'Schedule preventive maintenance, track equipment repair expenses, and capitalize major overhauls extending asset life.',
    },
    {
      icon: DollarSign,
      title: isRtl ? 'معالجة استبعاد وبيع وتخريد الأصول بدقة' : 'Asset Disposal, Sale & Scrap Accounting',
      desc: isRtl
        ? 'توثيق حركات بيع أو إتلاف أو تخريد الأصول المستهلكة، وحساب الأرباح أو الخسائر الرأسمالية الناتجة عن عملية البيع آلياً وترحيلها للحسابات الختامية.'
        : 'Streamline asset retirement, salvage valuation, and capital gain/loss calculation on disposals.',
    },
    {
      icon: ShieldCheck,
      title: isRtl ? 'تقارير القيمة الدفترية ومطابقة الجرد الفعلي' : 'Net Book Value & Asset Verification Audits',
      desc: isRtl
        ? 'استخراج تقارير القيمة الدفترية الحالية، مجمع الإهلاك التراكمي، وتنفيذ الجرد الميداني السنوي لمطابقة الأصول الموجودة فعلياً مع السجلات المحاسبية.'
        : 'Instant Net Book Value (NBV) schedule, accumulated depreciation schedules, and physical verification audit reports.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: isRtl ? 'إضافة الأصل والتكويد' : 'Asset Acquisition',
      desc: isRtl ? 'شراء الأصل وإدخال تكلفته وتثبيت ملصق الباركود وتحديد العهدة والموقع.' : 'Record invoice, affix barcode tag, and assign custody.',
    },
    {
      step: '02',
      title: isRtl ? 'تحديد معايير الإهلاك' : 'Depreciation Setup',
      desc: isRtl ? 'اختيار طريقة الإهلاك ونسبته السنوية وتاريخ بدء التشغيل الفعلي.' : 'Set depreciation rate, method, and in-service date.',
    },
    {
      step: '03',
      title: isRtl ? 'الترحيل الدوري التلقائي' : 'Periodic Posting',
      desc: isRtl ? 'يقوم النظام بحساب وترحيل قسط الإهلاك الشهري لحساب المصروفات والأرباح.' : 'System executes monthly depreciation entries automatically.',
    },
    {
      step: '04',
      title: isRtl ? 'الجرد وتحديث القيمة' : 'Audit & Net Value',
      desc: isRtl ? 'متابعة صافي القيمة الدفترية للأصول وتوثيق حركات الصيانة والاستبعاد.' : 'Track net book value and log maintenance or disposal.',
    },
  ]

  return (
    <PublicLayout>
      <ModuleNav currentPath="/app/assets" />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 animate-pulse rounded-full bg-[#38BDF8]/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRtl ? 'text-right' : 'text-left'} space-y-6 animate-fade-up`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white">
                <Building2 size={15} className="text-[#38BDF8]" />
                {isRtl ? 'الأصول الثابتة والإهلاك' : 'Fixed Assets & Depreciation'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {isRtl ? 'نظام إدارة الأصول الثابتة والإهلاك الآلي' : 'Enterprise Fixed Assets & Asset Lifecycle'}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                {isRtl
                  ? 'حصر كامل لأصول شركتك، رقابة محكمة على العهد والمواقع، واحتساب دوري دقيق لأقساط الإهلاك وفقاً لمعايير المحاسبة والضرائب، لضمان أعلى شفافية لمركزك المالي.'
                  : 'Complete visibility into capital assets, employee custody, automatic depreciation, and scrap/disposal accounting.'}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#38BDF8] px-7 py-3.5 text-sm font-bold text-[#173B67] transition duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>{isRtl ? 'طلب استشارة وعرض تجريبي' : 'Request Free Demo'}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-white/10"
                >
                  <span>{isRtl ? 'الرجوع إلى قائمة الحلول' : 'All Solutions'}</span>
                </Link>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="relative group animate-slide-right">
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-2 shadow-2xl backdrop-blur-md">
                <img
                  src={getAssetPath('/images/solutions/SolutionsFixedAssets.jpg')}
                  alt={isRtl ? 'نظام الأصول الثابتة USoft' : 'USoft Fixed Assets System'}
                  className="h-80 sm:h-96 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -start-5 rounded-2xl border border-white/20 bg-[#173B67]/90 p-4 text-white shadow-xl backdrop-blur-md max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-xs mb-1">
                  <CheckCircle2 size={16} />
                  <span>{isRtl ? 'إهلاك دوري آلي 100%' : '100% Automated Depreciation'}</span>
                </div>
                <p className="text-[11px] text-white/80">
                  {isRtl ? 'حساب دقيق لصافي القيمة الدفترية للأصول.' : 'Audit-ready asset values in real time.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Deep Dive */}
      <section className="py-20 bg-white dark:bg-[#070D18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] dark:text-[#38BDF8]">
              {isRtl ? 'حماية الاستثمارات' : 'Asset Stewardship'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isRtl ? 'السيطرة التامة على ممتلكات المنشأة وعهد العاملين' : 'Absolute Control Over Capital Assets & Custody'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'تمثل الأصول الثابتة الجزء الأكبر من استثمارات الشركات الرأسمالية؛ يمنحك نظام USoft راحة البال بمعرفة مكان كل جهاز وسيارة وماكينة، مع التقييم الدفتري المحاسبي السليم.'
                : 'Capital investments deserve enterprise-grade governance. Track every laptop, vehicle, and production machine across all facilities.'}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-[#F8FAFC] dark:bg-[#0F1B2F] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/40 hover:shadow-card-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Operational Workflow Steps */}
      <section className="py-20 bg-slate-50 dark:bg-[#0B1526] border-y border-[#E4E7EC] dark:border-[#1E2E48]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] dark:text-[#38BDF8]">
              {isRtl ? 'دورة حياة الأصل' : 'Asset Lifecycle'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {isRtl ? 'كيف يدير نظام USoft دورة حياة الأصل الثابت؟' : 'Asset Lifecycle Management'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-6 shadow-sm">
                <span className="font-mono text-3xl font-black text-purple-600/30 dark:text-purple-400/30 mb-2 block">
                  {s.step}
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">{s.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="py-16 bg-white dark:bg-[#070D18]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
            <Sparkles size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'هل تريد ضبط سجل أصولك وحساب إهلاكها آلياً؟' : 'Ready to Automate Your Fixed Asset Accounting?'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isRtl
              ? 'تواصل مع فريق USoft للحصول على استشارة متخصصة واستعراض مباشر لنظام إدارة الأصول الثابتة.'
              : 'Speak with our ERP advisors to evaluate how USoft Fixed Assets streamlines your audit preparedness.'}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2F80ED] hover:bg-[#1C68CC] dark:bg-[#38BDF8] dark:hover:bg-white dark:text-[#0A1220] px-8 py-3.5 text-sm font-bold text-white shadow-md transition"
            >
              <span>{isRtl ? 'احجز موعد عرض توضيحي (Demo)' : 'Book a Live Demo'}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}

export default Assets
