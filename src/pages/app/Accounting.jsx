import React from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart3,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  FileText,
  DollarSign,
  Layers,
  Building,
  TrendingUp,
  Workflow,
  Check,
  PieChart,
} from 'lucide-react'
import PublicLayout from '../../components/layout/PublicLayout'
import ModuleNav from '../../components/layout/ModuleNav'
import useLanguageStore from '../../store/languageStore'

function Accounting() {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const features = [
    {
      icon: Layers,
      title: isRtl ? 'دليل وشجرة حسابات ديناميكية متعددة المستويات' : 'Multi-Level Dynamic Chart of Accounts',
      desc: isRtl
        ? 'بناء دليل محاسبي مرن يتناسب مع كافة الأنشطة التجارية والصناعية والخدمية وفقاً لمعايير المحاسبة المصرية (EAS) والدولية (IFRS)، مع ترقيم هرمي وتصنيف دقيق للأصول، الخصوم، حقوق الملكية، الإيرادات والمصروفات.'
        : 'Flexible chart of accounts compliant with Egyptian and International (IFRS) standards with hierarchical coding and clear classifications.',
    },
    {
      icon: Workflow,
      title: isRtl ? 'الترحيل الآلي للقيود اليومية من كافة الأقسام' : 'Automated Journal Entry Posting',
      desc: isRtl
        ? 'يتم توليد وترحيل قيود اليومية تلقائياً من حركات المبيعات، المشتريات، أذون المخازن، الرواتب، وإهلاك الأصول دون أي تدخل يدوي، مما يقضي تماماً على احتمالات الخطأ البشري ويوفر مئات الساعات شهرياً.'
        : 'Automatic posting of entries generated across sales, procurement, inventory, payroll, and assets without human intervention.',
    },
    {
      icon: PieChart,
      title: isRtl ? 'مراكز التكلفة والمشاريع متعددة الأبعاد' : 'Multi-Dimensional Cost Centers',
      desc: isRtl
        ? 'توزيع الإيرادات والمصروفات بدقة متناهية على مستوى الفروع، المشاريع، خطوط الإنتاج، أو الأقسام، مما يمكنك من معرفة ربحية كل نشاط أو فرع بشكل منفصل وبمنتهى الشفافية.'
        : 'Allocate revenue and expenditures across branches, projects, or production lines to evaluate standalone profitability.',
    },
    {
      icon: Building,
      title: isRtl ? 'إدارة الخزائن والحسابات البنكية والتسويات' : 'Cash & Bank Management with Reconciliation',
      desc: isRtl
        ? 'متابعة لحظية لأرصدة الخزائن النقدية والحسابات البنكية المتعددة والعملات الأجنبية، مع إمكانية استيراد كشوف الحساب البنكية وإجراء التسويات التلقائية وتتبع الشيكات الصادرة والواردة.'
        : 'Real-time multi-currency bank account and cash drawer tracking, automated bank reconciliation, and check register.',
    },
    {
      icon: ShieldCheck,
      title: isRtl ? 'التوافق التام مع منظومة الفاتورة الإلكترونية والضرائب' : 'ETA E-Invoicing & Tax Compliance',
      desc: isRtl
        ? 'ربط مباشر وموثق مع مصلحة الضرائب المصرية (ETA) لإصدار الفواتير والإيصالات الإلكترونية وحساب ضريبة القيمة المضافة 14% وضريبة الخصم والإضافة وإعداد الإقرارات الدورية بضغطة زر.'
        : 'Full integration with the Egyptian Tax Authority (ETA) for certified e-invoices, VAT 14%, and automated statutory returns.',
    },
    {
      icon: FileText,
      title: isRtl ? 'القوائم المالية الختامية وموازين المراجعة اللحظية' : 'Real-Time Financial Statements & Trial Balance',
      desc: isRtl
        ? 'توليد ميزان المراجعة بالأرصدة والمجاميع، قائمة الدخل الشامل (الأرباح والخسائر)، الميزانية العمومية، وقائمة التدفقات النقدية في أي لحظة مع مقارنات سنوية ودورية دقيقة.'
        : 'Instant generation of Trial Balance, Comprehensive P&L, Balance Sheet, and Cash Flow statements with period comparisons.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: isRtl ? 'تسجيل العمليات والحركات' : 'Operations & Inception',
      desc: isRtl ? 'تتم العمليات في نقاط البيع، الفواتير، المشتريات، وصرف الرواتب وتغذية النظام بالبيانات الأولية.' : 'Transactions initiate across sales, POS, purchasing, and payroll.',
    },
    {
      step: '02',
      title: isRtl ? 'توليد القيود المحاسبية آلياً' : 'Automated Ledger Creation',
      desc: isRtl ? 'يقوم محرك USoft المالي بإنشاء قيود مزدوجة متوازنة تلقائياً وفقاً للتوجيه المحاسبي المعتمد.' : 'Engine creates balanced double-entry vouchers automatically.',
    },
    {
      step: '03',
      title: isRtl ? 'الترحيل للأستاذ ومراكز التكلفة' : 'Posting & Cost Center Allocation',
      desc: isRtl ? 'ترحيل فوري لأرصدة الحسابات وربط المصروفات والإيرادات بمراكز التكلفة المعنية.' : 'Instant posting to general ledger and related cost centers.',
    },
    {
      step: '04',
      title: isRtl ? 'استخراج التقارير والقرارات' : 'Financial Intelligence & Reports',
      desc: isRtl ? 'إتاحة القوائم المالية اللحظية للإدارة المالية وأصحاب القرار لمتابعة ربحية الشركة بدقة.' : 'Audited reports and P&L statements made available for executives.',
    },
  ]

  return (
    <PublicLayout>
      <ModuleNav currentPath="/app/accounting" />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 animate-pulse rounded-full bg-[#38BDF8]/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRtl ? 'text-right' : 'text-left'} space-y-6 animate-fade-up`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white">
                <BarChart3 size={15} className="text-[#38BDF8]" />
                {isRtl ? 'الإدارة المالية والمحاسبة العامة' : 'Financial Accounting Engine'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {isRtl ? 'نظام المحاسبة العامة وشجرة الحسابات المتكاملة' : 'General Ledger & Financial Accounting'}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                {isRtl
                  ? 'القلب المالي النابض لشركتك؛ صُمم ليمنح الإدارة المالية دقة متناهية، رقابة صارمة على التدفقات النقدية، وإقفالاً سنوياً وشهرياً ميسراً وفقاً لأعلى معايير المحاسبة والامتثال الضريبي.'
                  : 'The financial backbone of your business, built for maximum accuracy, total cash flow oversight, and effortless period closures in full compliance with accounting standards.'}
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
                  src="/images/solutions/SolutionsAccounting.jpg"
                  alt={isRtl ? 'نظام المحاسبة العامة USoft' : 'USoft Accounting System'}
                  className="h-80 sm:h-96 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -start-5 rounded-2xl border border-white/20 bg-[#173B67]/90 p-4 text-white shadow-xl backdrop-blur-md max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-xs mb-1">
                  <CheckCircle2 size={16} />
                  <span>{isRtl ? 'توازن محاسبي لحظي 100%' : '100% Balanced Ledgers'}</span>
                </div>
                <p className="text-[11px] text-white/80">
                  {isRtl ? 'توليد موازين المراجعة والقوائم المالية آلياً بدون انتظار إقفال الشهر.' : 'Instant real-time financial reporting.'}
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
              {isRtl ? 'رؤية المنظومة' : 'Core Architecture'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isRtl ? 'كيف يُحدث نظام المحاسبة في USoft فارقاً حقيقياً في شركتك؟' : 'Why USoft General Ledger is Built Differently'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'في الشركات المتنامية، يؤدي تشتت البيانات بين الفواتير وأذون المخازن وحسابات البنوك إلى تأخر القوائم المالية وضياع هوامش الأرباح. يربط نظام USoft المحاسبي كافة أطراف المنشأة في قاعدة بيانات موحدة تنعكس فيها كل حركة تشغيلية كقيد مالي فوري متوازن.'
                : 'Eliminate isolated financial silos. Every warehouse movement, customer sale, vendor invoice, and payroll expense translates into automatic double-entry ledgers instantly.'}
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
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950/70 text-[#2F80ED] dark:text-[#38BDF8]">
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
              {isRtl ? 'تسلسل العمليات' : 'Workflow'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {isRtl ? 'دورة تدفق البيانات المالية داخل المنظومة' : 'Financial Workflow Step-by-Step'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-6 shadow-sm">
                <span className="font-mono text-3xl font-black text-[#2F80ED]/30 dark:text-[#38BDF8]/30 mb-2 block">
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
          <div className="inline-flex p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#2F80ED] dark:text-[#38BDF8]">
            <Sparkles size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'جاهز للارتقاء بالإدارة المالية لشركتك لمستوى احترافي؟' : 'Ready to Transform Your Corporate Financials?'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isRtl
              ? 'تواصل مع مستشاري USoft اليوم وشاهد عرضاً توضيحياً حياً لكيفية إدارة القيود وشجرة الحسابات والقوائم المالية لمنشأتك.'
              : 'Speak with our ERP advisors today and schedule a live walkthrough tailored to your industry.'}
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

export default Accounting
