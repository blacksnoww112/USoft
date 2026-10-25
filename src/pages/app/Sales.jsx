import React from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  FileCheck,
  CreditCard,
  Target,
  BadgePercent,
  TrendingUp,
  Workflow,
  Send,
  Building2,
} from 'lucide-react'
import PublicLayout from '../../components/layout/PublicLayout'
import ModuleNav from '../../components/layout/ModuleNav'
import useLanguageStore from '../../store/languageStore'

function Sales() {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const features = [
    {
      icon: FileCheck,
      title: isRtl ? 'الفاتورة الإلكترونية المعتمدة والربط مع مصلحة الضرائب' : 'Certified E-Invoicing & Tax Authority Integration',
      desc: isRtl
        ? 'إصدار فواتير بيع معتمدة ومطابقة كلياً لمتطلبات مصلحة الضرائب المصرية (ETA) مع التوقيع الإلكتروني والرمز التعريفي الموحد (UUID) والباركود الذكي QR Code دون الحاجة لبرامج وسيطة.'
        : 'Instant certified e-invoices fully compliant with Egyptian Tax Authority (ETA) requirements with electronic signature and UUID generation.',
    },
    {
      icon: Target,
      title: isRtl ? 'دورة متكاملة من عرض السعر حتى أمر التوريد' : 'End-to-End Quotations & Sales Orders',
      desc: isRtl
        ? 'إنشاء عروض أسعار احترافية وتتبع مراحل موافقة العميل، وتحويلها بضغطة زر واحدة إلى أمر بيع أو إذن تسليم أو فاتورة نهائية مع حجز الكميات فورياً في المستودعات.'
        : 'Create branded quotations, track customer approvals, and convert seamlessly into sales orders or delivery notes with instant stock reservation.',
    },
    {
      icon: BadgePercent,
      title: isRtl ? 'سياسات تسعير مرنة وقوائم أسعار وخصومات متعددة' : 'Dynamic Price Lists & Multi-Tier Discounts',
      desc: isRtl
        ? 'تحديد قوائم أسعار خاصة بكل فئة عملاء (جملة، قطاعي، موزعين، VIP)، مع دعم الخصومات الترويجية، الخصم التجاري، وخصم تعجيل الدفع، وحساب ضريبة القيمة المضافة آلياً.'
        : 'Configurable price tiers for wholesalers, distributors, and VIPs with advanced promotional discounts and automated tax calculations.',
    },
    {
      icon: Users,
      title: isRtl ? 'إدارة علاقات العملاء (CRM) والحدود الائتمانية' : 'Customer Relationship Management & Credit Limits',
      desc: isRtl
        ? 'سجل مركزي شامل لكل عميل يضم جهات الاتصال، تاريخ المعاملات، أرصدة الحساب، وفترات السماح، مع خاصية الإيقاف التلقائي للفواتير عند تجاوز العميل لحد الائتمان المسموح.'
        : 'Unified customer profiles with contact logs, purchase history, outstanding balances, and automated credit limit enforcement.',
    },
    {
      icon: TrendingUp,
      title: isRtl ? 'متابعة أداء المندوبين وحساب العمولات آلياً' : 'Sales Rep Tracking & Commission Engine',
      desc: isRtl
        ? 'توزيع خطط المبيعات ومناطق التوزيع على المندوبين، وربط كل فاتورة بمندوب ومشرف بيع، مع حساب نسب العمولات والأهداف المستهدفة (Targets) بناءً على البيع الفعلي أو التحصيل.'
        : 'Assign sales quotas, track territories, and compute commissions automatically based on invoiced sales or cash collections.',
    },
    {
      icon: CreditCard,
      title: isRtl ? 'متابعة أعمار الديون والتحصيلات النقدية والآجلة' : 'Receivables Aging & Collections Monitoring',
      desc: isRtl
        ? 'تقارير فورية لأعمار الديون (30، 60، 90 يوماً)، مع تنبيهات بمواعيد الاستحقاق القريبة ومتابعة أوراق القبض والشيكات المؤجلة لتحسين دورة رأس المال العامل.'
        : 'Automated aging reports across 30, 60, and 90 days with maturity alerts and check receivables tracking to optimize liquidity.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: isRtl ? 'إنشاء وإرسال عرض السعر' : 'Quotation Issuance',
      desc: isRtl ? 'تصميم عرض سعر احترافي للعميل مع تحديد الأصناف والأسعار وفترة الصلاحية.' : 'Draft and send formatted quotation with valid pricing terms.',
    },
    {
      step: '02',
      title: isRtl ? 'اعتماد أمر البيع وحجز المخزون' : 'Order Approval & Reservation',
      desc: isRtl ? 'تحويل العرض لأمر بيع رسمي وحجز البضائع المطلوبة تلقائياً في المستودع المختار.' : 'Approve order and immediately reserve SKUs in warehouse.',
    },
    {
      step: '03',
      title: isRtl ? 'إصدار الفاتورة والربط الضريبي' : 'E-Invoicing & ETA Sync',
      desc: isRtl ? 'توليد الفاتورة الإلكترونية المعتمدة وإرسالها مباشرة لمنظومة الضرائب المصرية.' : 'Dispatch certified invoice with UUID to tax authority.',
    },
    {
      step: '04',
      title: isRtl ? 'التحصيل وإغلاق المستحقات' : 'Cash Collection & Settling',
      desc: isRtl ? 'تسجيل سندات القبض، تسوية حساب العميل، والترحيل الآلي للقيود المحاسبية.' : 'Record receipt voucher, balance ledger, and archive order.',
    },
  ]

  return (
    <PublicLayout>
      <ModuleNav currentPath="/app/sales" />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 animate-pulse rounded-full bg-[#38BDF8]/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRtl ? 'text-right' : 'text-left'} space-y-6 animate-fade-up`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white">
                <Users size={15} className="text-[#38BDF8]" />
                {isRtl ? 'المبيعات والعملاء والفواتير' : 'Commercial Sales & CRM'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {isRtl ? 'نظام المبيعات المتكامل وإدارة علاقات العملاء' : 'Enterprise Sales & CRM Pipeline'}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                {isRtl
                  ? 'منظومة تجارية متطورة تُسرّع وتيرة إغلاق الصفقات، تدير عروض الأسعار والعمولات، وتصدر الفواتير الإلكترونية المعتمدة مع تحكم كامل في حسابات وتحصيلات العملاء.'
                  : 'Accelerate deal cycles, automate quotes and commission rules, and issue compliant e-invoices with comprehensive receivables control.'}
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
                  src="/images/solutions/SolutionsSales.jpg"
                  alt={isRtl ? 'نظام المبيعات USoft' : 'USoft Sales System'}
                  className="h-80 sm:h-96 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -start-5 rounded-2xl border border-white/20 bg-[#173B67]/90 p-4 text-white shadow-xl backdrop-blur-md max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-xs mb-1">
                  <CheckCircle2 size={16} />
                  <span>{isRtl ? 'فواتير إلكترونية معتمدة ETA' : 'Certified E-Invoicing'}</span>
                </div>
                <p className="text-[11px] text-white/80">
                  {isRtl ? 'ربط آلي مع الضرائب دون تأخير وبدقة 100%.' : 'Seamless tax compliance built-in.'}
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
              {isRtl ? 'القوة البيعية والتنفيذ' : 'Commercial Growth'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isRtl ? 'تحكم كامل في مسار المبيعات من الطلب حتى التحصيل' : 'Master Every Step of Your Revenue Cycle'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'لا مزيد من الفواتير الورقية أو ضياع المستحقات؛ يقدم لك نظام مبيعات USoft رؤية متكاملة لربحية العملاء، نشاط مناديب المبيعات، والسيولة النقدية المتوقعة مع التوافق التام مع التحول الرقمي والضرائب.'
                : 'Say goodbye to fragmented invoicing and delayed receivables. Gain absolute transparency into sales rep velocity, profit margins, and collections.'}
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
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400">
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
              {isRtl ? 'خطوات البيع' : 'Pipeline'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {isRtl ? 'كيف تسير دورة المبيعات بسلاسة داخل المنظومة؟' : 'End-to-End Sales Process'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-6 shadow-sm">
                <span className="font-mono text-3xl font-black text-emerald-600/30 dark:text-emerald-400/30 mb-2 block">
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
          <div className="inline-flex p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
            <Sparkles size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'هل تريد زيادة مبيعاتك وتنظيم تحصيلاتك بثقة؟' : 'Ready to Supercharge Your Sales Velocity?'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isRtl
              ? 'احجز جلستك الاستشارية الآن وتعرف على كيفية تطبيق نظام USoft للمبيعات في منشأتك.'
              : 'Book your consultative session now and see how USoft Sales fits your commercial model.'}
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

export default Sales
