import React from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  PieChart,
  Sliders,
  FileSpreadsheet,
  Mail,
  ShieldCheck,
  TrendingUp,
  Workflow,
  Download,
} from 'lucide-react'
import PublicLayout from '../../components/layout/PublicLayout'
import ModuleNav from '../../components/layout/ModuleNav'
import useLanguageStore from '../../store/languageStore'
import { getAssetPath } from '../../utils/assetPath'

function Reports() {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const features = [
    {
      icon: FileText,
      title: isRtl ? 'حزمة القوائم المالية المعتمدة للمراجعين القانونيين' : 'Auditor-Certified Financial Statements',
      desc: isRtl
        ? 'استخراج قائمة الدخل الشامل (الأرباح والخسائر)، الميزانية العمومية، التدفقات النقدية، وميزان المراجعة بالمجاميع والأرصدة وفقاً لمعايير المحاسبة المصرية والدولية IFRS.'
        : 'Generate Comprehensive P&L, Balance Sheet, Cash Flow, and Trial Balance compliant with Egyptian Accounting Standards and IFRS.',
    },
    {
      icon: TrendingUp,
      title: isRtl ? 'تحليلات هوامش الربحية ومراكز التكلفة' : 'Multi-Level Profitability & Margin Analytics',
      desc: isRtl
        ? 'تقارير دقيقة توضح ربحية كل صنف، كل عميل، كل فرع، وكل خط إنتاج على حدة، لتوجيه استثمارات الشركة نحو الأنشطة الأكثر دراً للأرباح وتجنب الخسائر.'
        : 'Drill down into standalone profitability per product, customer account, branch, and project to direct strategic capital.',
    },
    {
      icon: ShieldCheck,
      title: isRtl ? 'تقارير الفحص والامتثال الضريبي المعتمدة' : 'Tax Inspection & Regulatory Filing Reports',
      desc: isRtl
        ? 'إعداد إقرارات ضريبة القيمة المضافة الشهرية، نماذج ضريبة الخصم والتحصيل (نموذج 41)، وتقارير مطابقة الفواتير الإلكترونية المعتمدة لتقديمها مباشرة لمأمورية الضرائب.'
        : 'Generate automated VAT returns, withholding tax declarations (Form 41), and ETA reconciliation schedules ready for statutory submission.',
    },
    {
      icon: Sliders,
      title: isRtl ? 'محرك تصميم التقارير المخصصة والفلاتر الذكية' : 'Custom Report Designer & Advanced Query Filters',
      desc: isRtl
        ? 'أداة مرنة تتيح للإدارة تصميم تقارير خاصة وتحديد الحقول المطلوبة والتصفية حسب الفترات التاريخية، الفروع، المناديب، أو فئات العملاء بمنتهى السهولة.'
        : 'Flexible query builder enabling users to customize data columns, apply multi-branch filters, and aggregate custom business metrics.',
    },
    {
      icon: Mail,
      title: isRtl ? 'الجدولة التلقائية وإرسال التقارير للمدراء دورياً' : 'Scheduled Report Delivery via Email',
      desc: isRtl
        ? 'إمكانية ضبط النظام لإنشاء تقارير المبيعات أو الإيرادات اليومية أو الأسبوعية وإرسالها تلقائياً بصيغة PDF إلى البريد الإلكتروني لأصحاب القرار في مواعيد محددة.'
        : 'Configure automated scheduled dispatch of daily executive sales recaps and monthly financial summaries directly to leadership emails.',
    },
    {
      icon: Download,
      title: isRtl ? 'تصدير سلس لكافة التنسيقات (Excel / PDF / Word)' : 'Universal Format Exports (Excel, PDF, CSV)',
      desc: isRtl
        ? 'تصدير أي تقرير بنقرة زر واحدة إلى ملفات Excel منسقة رياضياً للتحليل الإضافي، أو ملفات PDF رسمية مجهزة بشعار الشركة والترويسة للطباعة والتوثيق.'
        : 'One-click formatted export to Microsoft Excel formulas, publication-ready PDF documents with corporate letterheads, and CSV files.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: isRtl ? 'اختيار التقرير ونوعه' : 'Select Report',
      desc: isRtl ? 'تحديد التقرير المطلوب من مكتبة تضم أكثر من 150 تقريراً قياسياً.' : 'Choose from over 150 standard operational and financial templates.',
    },
    {
      step: '02',
      title: isRtl ? 'تطبيق الفلاتر والمحددات' : 'Configure Filters',
      desc: isRtl ? 'تحديد الفترة الزمنية، الفرع، العملة، مركز التكلفة، أو الحساب المعني.' : 'Set date bounds, branches, currencies, and cost center criteria.',
    },
    {
      step: '03',
      title: isRtl ? 'المعالجة واستعراض البيانات' : 'Generate & Drill Down',
      desc: isRtl ? 'استعراض البيانات مع إمكانية الضغط على أي رقم للوصول لمستنده الأصلي.' : 'Instant calculation with interactive drill-down to source vouchers.',
    },
    {
      step: '04',
      title: isRtl ? 'التصدير والاعتماد' : 'Export & Share',
      desc: isRtl ? 'تصدير التقرير لإكسيل أو بي دي إف أو طباعته بتنسيق رسمي معتمد.' : 'Export to Excel, generate signed PDF, or send via scheduled email.',
    },
  ]

  return (
    <PublicLayout>
      <ModuleNav currentPath="/app/reports" />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 animate-pulse rounded-full bg-[#38BDF8]/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRtl ? 'text-right' : 'text-left'} space-y-6 animate-fade-up`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white">
                <FileText size={15} className="text-[#38BDF8]" />
                {isRtl ? 'التقارير والذكاء المالي والتحليلات' : 'Business Intelligence & Reporting'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {isRtl ? 'نظام التقارير الذكية ولوحات المؤشرات التنفيذية' : 'Financial BI & Executive Reporting Suite'}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                {isRtl
                  ? 'حوّل بيانات شركتك إلى رؤى وقرارات استراتيجية دقيقة؛ مكتبة تقارير شاملة للقوائم المالية، هوامش الأرباح، حركة المخازن، والامتثال الضريبي، مع مرونة التصدير لإكسيل وبي دي إف.'
                  : 'Turn fragmented transactional data into strategic corporate clarity: comprehensive P&L, cash flow audits, and exportable operational analytics.'}
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
                  src={getAssetPath('/images/solutions/SolutionsReports.jpg')}
                  alt={isRtl ? 'نظام التقارير USoft' : 'USoft Reports System'}
                  className="h-80 sm:h-96 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -start-5 rounded-2xl border border-white/20 bg-[#173B67]/90 p-4 text-white shadow-xl backdrop-blur-md max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-xs mb-1">
                  <CheckCircle2 size={16} />
                  <span>{isRtl ? 'أكثر من 150 تقريراً قياسياً' : '150+ Standard Reports'}</span>
                </div>
                <p className="text-[11px] text-white/80">
                  {isRtl ? 'قوائم مالية معتمدة تدعم اتخاذ القرارات السليمة.' : 'Accurate statements for audit readiness.'}
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
              {isRtl ? 'الرؤية الاستراتيجية' : 'Executive Clarity'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isRtl ? 'بيانات لحظية دقيقة تبني قرارات استثمارية ناجحة' : 'Actionable Intelligence for Business Leaders'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'لا يمكن إدارة ما لا يمكن قياسه بدقة. يضع نظام تقارير USoft في يد الإدارة التنفيذية والمالية الصورة الكاملة لأداء الفروع، الأرباح، الالتزامات والسيولة في أي لحظة وبأعلى موثوقية.'
                : 'You cannot manage what you cannot measure. USoft reporting equips corporate executives with real-time transparency into branch performance, margins, and obligations.'}
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
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-950/70 text-sky-600 dark:text-sky-400">
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
              {isRtl ? 'توليد التقارير' : 'Reporting Process'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {isRtl ? 'كيف يتم استخراج وتحليل التقارير في المنظومة؟' : 'From Data Gathering to Executive Export'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-6 shadow-sm">
                <span className="font-mono text-3xl font-black text-sky-600/30 dark:text-sky-400/30 mb-2 block">
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
          <div className="inline-flex p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
            <Sparkles size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'هل تريد تقارير مالية وتشغيلية موثوقة بنقرة زر واحدة؟' : 'Ready for Instant, Audit-Ready Financial Statements?'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isRtl
              ? 'تواصل مع مستشاري USoft واكتشف كيف يُمكّنك نظام التقارير من معرفة أدق تفاصيل شركتك المالية والتشغيلية.'
              : 'Consult with our ERP advisors to explore our standard and custom reporting capabilities.'}
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

export default Reports
