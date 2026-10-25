import React from 'react'
import { Link } from 'react-router-dom'
import {
  CreditCard,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  Send,
  Printer,
  ShieldCheck,
  Building,
  Workflow,
  Calculator,
  Percent,
} from 'lucide-react'
import PublicLayout from '../../components/layout/PublicLayout'
import ModuleNav from '../../components/layout/ModuleNav'
import useLanguageStore from '../../store/languageStore'
import { getAssetPath } from '../../utils/assetPath'

function Payroll() {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const features = [
    {
      icon: Calculator,
      title: isRtl ? 'حسابات مسير الرواتب الآلية المستندة إلى الحضور' : 'Automated Attendance-Driven Salary Calculation',
      desc: isRtl
        ? 'ربط تلقائي بين سجلات الحضور والانصراف ومسير الرواتب لاحتساب ساعات العمل الفعلية، ساعات العمل الإضافي (Overtime)، وتطبيق قواعد خصم التأخيرات والغياب بدون أي معادلات يدوية.'
        : 'Direct synchronization between biometric attendance records and salary computation: automatic overtime bonuses and tardiness deductions.',
    },
    {
      icon: Percent,
      title: isRtl ? 'حساب دقيق لضريبة كسب العمل والتأمينات الاجتماعية' : 'Statutory Payroll Tax & Social Insurance Automation',
      desc: isRtl
        ? 'برمجة دقيقة لشرائح ضريبة كسب العمل المصرية وفقاً لأحدث التعديلات التشريعية، مع حساب حصة الموظف وحصة الشركة في التأمينات الاجتماعية وإعداد استمارات التأمينات الرسمية.'
        : 'Accurate tiered income tax brackets and social security splits (employee and employer shares) computed in full statutory compliance.',
    },
    {
      icon: DollarSign,
      title: isRtl ? 'هيكل بدلات ومكافآت وحوافز مرن وغير محدود' : 'Flexible Allowances, Incentives & Bonus Matrices',
      desc: isRtl
        ? 'تحديد بنود بدلات ثابتة أو متغيرة (بدل انتقال، سكن، هاتف، طبيعة عمل)، مع ربط حوافز المبيعات بنسب التحقيق وإمكانية تطبيق المكافآت الاستثنائية بقرارات إدارية.'
        : 'Configure custom fixed or variable allowances (transportation, accommodation, mobile) alongside performance bonuses and commissions.',
    },
    {
      icon: Send,
      title: isRtl ? 'ملفات التحويل البنكي المعتمدة (WPS / ACH)' : 'Certified Bank Salary Transfer Files (WPS / ACH)',
      desc: isRtl
        ? 'توليد ملفات التحويل البنكي المباشرة متوافقة مع متطلبات البنوك المصرية والعربية (البنك الأهلي، CIB، بنك مصر، بنك QNB وغيرها)، لإيداع الرواتب في حسابات العاملين بضغطة زر.'
        : 'Generate compliant electronic salary dispatch files formatted to Egyptian and regional banking standards for instant batch transfers.',
    },
    {
      icon: Printer,
      title: isRtl ? 'قسائم رواتب إلكترونية ومطبوعة مفصلة (Payslips)' : 'Digital & Printable Itemized Employee Payslips',
      desc: isRtl
        ? 'إصدار قسائم رواتب تفصيلية توضح كافة عناصر الاستحقاق والاستقطاع وصافي المبلغ المحول، مع إمكانية إرسالها بالبريد الإلكتروني أو تحميلها عبر بوابة الموظف الذاتية.'
        : 'Detailed payslips outlining basic salary, gross allowances, statutory deductions, and net payable accessible digitally or via print.',
    },
    {
      icon: ShieldCheck,
      title: isRtl ? 'الترحيل التلقائي لقيود الرواتب إلى المحاسبة العامة' : 'Instant General Ledger Payroll Journal Posting',
      desc: isRtl
        ? 'توليد قيود استحقاق وصرف الرواتب تلقائياً وتوزيع تكلفة الأجور على مراكز التكلفة والأقسام دون حاجة المحاسب لكتابة قيد يدوي واحد.'
        : 'Automatic generation of salary accrual and payment vouchers mapped directly to designated departmental cost centers.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: isRtl ? 'إقفال الشهر وسحب البصمة' : 'Attendance Cut-off',
      desc: isRtl ? 'سحب كافة حركات الحضور والغياب والإجازات المعتمدة خلال الشهر.' : 'Lock monthly attendance and import validated leave balances.',
    },
    {
      step: '02',
      title: isRtl ? 'احتساب المسير آلياً' : 'Automated Calculation',
      desc: isRtl ? 'يقوم المحرك بحساب البدلات والاستقطاعات وضريبة الدخل في ثوانٍ.' : 'Engine calculates net compensation and statutory taxes.',
    },
    {
      step: '03',
      title: isRtl ? 'المراجعة والاعتماد المالي' : 'Management Approval',
      desc: isRtl ? 'مراجعة كشف الرواتب واعتماده من المدير المالي والإدارة التنفيذية.' : 'Executive sign-off on company-wide salary register.',
    },
    {
      step: '04',
      title: isRtl ? 'التحويل وتوزيع القسائم' : 'Bank Transfer & Payslips',
      desc: isRtl ? 'تصدير ملف البنك لتحويل الأجور وإرسال قسائم الرواتب للموظفين.' : 'Export bank file for direct deposit and distribute payslips.',
    },
  ]

  return (
    <PublicLayout>
      <ModuleNav currentPath="/app/payroll" />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 animate-pulse rounded-full bg-[#38BDF8]/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRtl ? 'text-right' : 'text-left'} space-y-6 animate-fade-up`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white">
                <CreditCard size={15} className="text-[#38BDF8]" />
                {isRtl ? 'الرواتب والأجور ومسير الاستحقاق' : 'Payroll & Compensation'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {isRtl ? 'نظام إدارة الرواتب والأجور والتحويل البنكي' : 'Automated Corporate Payroll & Salary System'}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                {isRtl
                  ? 'حوّل عملية إعداد الرواتب من أيام مرهقة إلى دقائق معدودة؛ حساب آلي دقيق للبدلات والضرائب والتأمينات، مع إصدار ملفات التحويل البنكي وقسائم الرواتب فورياً.'
                  : 'Transform month-end payroll from tedious days into effortless minutes with automatic tax compliance and batch bank transfers.'}
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
                  src={getAssetPath('/images/solutions/SolutionsPayroll.jpg')}
                  alt={isRtl ? 'نظام الرواتب USoft' : 'USoft Payroll System'}
                  className="h-80 sm:h-96 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -start-5 rounded-2xl border border-white/20 bg-[#173B67]/90 p-4 text-white shadow-xl backdrop-blur-md max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-xs mb-1">
                  <CheckCircle2 size={16} />
                  <span>{isRtl ? 'تحويل بنكي آمن ومباشر' : 'Compliant Bank Direct Deposit'}</span>
                </div>
                <p className="text-[11px] text-white/80">
                  {isRtl ? 'توليد ملفات الرواتب لجميع البنوك المصرية.' : 'One-click bank transfer file exports.'}
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
              {isRtl ? 'دقة وسرعة' : 'Speed & Precision'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isRtl ? 'وداعاً لأخطاء كشوف الرواتب اليدوية وتأخير الصرف' : 'Zero Discrepancies, Guaranteed On-Time Paydays'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'تعتبر الرواتب أكثر بنود المصروفات حساسية وتأثيراً على معنويات الموظفين؛ لذا صممت USoft نظام رواتب متقدماً يحسب كل دقيقة عمل ويستقطع الضرائب والتأمينات بنزاهة وشفافية مطلقة.'
                : 'Salaries are the most sensitive operational expenditure. Ensure error-free calculations that build organizational trust and strictly satisfy statutory criteria.'}
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
              {isRtl ? 'مسير الصرف' : 'Payroll Cycle'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {isRtl ? 'كيف تكتمل دورة الرواتب الشهرية في 4 خطوات؟' : 'The 4-Step Effortless Payroll Workflow'}
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
            {isRtl ? 'هل تريد أتمتة مسير رواتب شركتك بدقة وسهولة؟' : 'Ready to Automate Your Monthly Payroll Workflow?'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isRtl
              ? 'تحدث مع خبراء USoft اليوم وشاهد استعراضاً شاملاً لكيفية احتساب الرواتب والضرائب والتأمينات آلياً.'
              : 'Consult with our payroll solutions specialists for an exhaustive system walkthrough.'}
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

export default Payroll
