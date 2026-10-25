import React from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Users,
  Fingerprint,
  CalendarDays,
  Network,
  FileBadge,
  Award,
  Workflow,
  ShieldCheck,
} from 'lucide-react'
import PublicLayout from '../../components/layout/PublicLayout'
import ModuleNav from '../../components/layout/ModuleNav'
import useLanguageStore from '../../store/languageStore'

function HumanResources() {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const features = [
    {
      icon: Users,
      title: isRtl ? 'الملف الوظيفي الإلكتروني الشامل والوثائق' : '360° Digital Employee Profile & Document Archive',
      desc: isRtl
        ? 'أرشيف رقمي كامل لكل موظف يحتوي على البيانات الشخصية، المؤهلات، صورة العقد، الرقم التأميني، مع تنبيهات تلقائية باقتراب انتهاء عقود العمل أو التراخيص الرسمية.'
        : 'Comprehensive digital dossiers for all employees with contracts, national IDs, social security, and automated renewal alerts.',
    },
    {
      icon: Fingerprint,
      title: isRtl ? 'الربط المباشر مع أجهزة البصمة اللحظية' : 'Direct Biometric Attendance Machine Integration',
      desc: isRtl
        ? 'سحب سجلات الحضور والانصراف آلياً من أجهزة البصمة، مع دعم أوقات العمل المرنة، الورديات المتعددة، احتساب التأخيرات، الانصراف المبكر، والعمل الإضافي بدقة ثانية بثانية.'
        : 'Real-time biometric data sync supporting multi-shift patterns, flexible working hours, overtime, and punctuality rules.',
    },
    {
      icon: CalendarDays,
      title: isRtl ? 'إدارة رصيد الإجازات والأذونات وبوابة الخدمة الذاتية' : 'Leave Balance Engine & Employee Self-Service (ESS)',
      desc: isRtl
        ? 'بوابة للموظف لتقديم طلبات الإجازات السنوية والمرضية والعارضة والأذونات، مع تحديث رصيد الإجازات المستحق تلقائياً وإشعار المدير المباشر للاعتماد الفوري.'
        : 'Self-service portal for leave requests with automatic balance entitlement updates and hierarchical approvals.',
    },
    {
      icon: Network,
      title: isRtl ? 'الهيكل الإداري والتنظيمي وتوصيف الوظائف' : 'Organizational Hierarchy & Job Profiles',
      desc: isRtl
        ? 'رسم الهيكل الإداري للشركة (إدارات، أقسام، فروع)، وتحديد خطوط التبعية والمسؤوليات، مع توصيف وظيفي واضح لكل مسمى وربطها بالسلالم الوظيفية.'
        : 'Interactive corporate organizational structure mapping reporting lines, job descriptions, and salary bands.',
    },
    {
      icon: Award,
      title: isRtl ? 'تقييمات الأداء ومؤشرات الإنجاز (KPIs)' : 'Performance Appraisals & Periodic KPIs',
      desc: isRtl
        ? 'تصميم نماذج تقييم دورية (شهرية/ربع سنوية/سنوية) مبنية على أهداف واضحة ومؤشرات أداء قابلة للقياس، لمساعدة الإدارة على تحديد الترقيات والمكافآت بموضوعية.'
        : 'Configurable periodic appraisal frameworks linking individual targets to department goals for fair talent evaluation.',
    },
    {
      icon: ShieldCheck,
      title: isRtl ? 'الامتثال التام لقوانين العمل والتأمينات الاجتماعية' : 'Labor Law & Social Security Compliance',
      desc: isRtl
        ? 'صياغة اللائحة الداخلية للجزاءات والمكافآت بما يتطابق مع نصوص قانون العمل المصري، وحساب مدد الخدمة ومكافأة نهاية الخدمة بضغطة زر.'
        : 'Strict adherence to Egyptian labor code regulations, official disciplinary ladders, and severance pay computations.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: isRtl ? 'تسجيل بيانات الموظف والتعيين' : 'Onboarding & Profile',
      desc: isRtl ? 'إدخال بيانات الموظف، العقد، الراتب، وربطه بالقسم والمدير المباشر.' : 'Create employee record, attach documents, and assign position.',
    },
    {
      step: '02',
      title: isRtl ? 'تسجيل البصمة والورديات' : 'Biometric Assignment',
      desc: isRtl ? 'تعريف كود البصمة وتعيين الوردية ونظام الحضور المطلوب.' : 'Link device ID, shift pattern, and grace periods.',
    },
    {
      step: '03',
      title: isRtl ? 'متابعة الدوام والإجازات' : 'Attendance & Leaves',
      desc: isRtl ? 'مراقبة الحضور اليومي آلياً واعتماد طلبات الإجازات والأذونات.' : 'Automated daily attendance logging and leave management.',
    },
    {
      step: '04',
      title: isRtl ? 'الترحيل التلقائي للرواتب' : 'Payroll Sync',
      desc: isRtl ? 'ترحيل ساعات العمل والغياب والتأخيرات لمسير الرواتب دون تدخل يدوي.' : 'Send attendance adjustments directly into monthly payroll.',
    },
  ]

  return (
    <PublicLayout>
      <ModuleNav currentPath="/app/hr" />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 animate-pulse rounded-full bg-[#38BDF8]/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRtl ? 'text-right' : 'text-left'} space-y-6 animate-fade-up`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white">
                <Briefcase size={15} className="text-[#38BDF8]" />
                {isRtl ? 'الموارد البشرية وشؤون العاملين' : 'Human Capital Management'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {isRtl ? 'نظام إدارة الموارد البشرية وشؤون العاملين (HR)' : 'Enterprise Human Resources Management'}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                {isRtl
                  ? 'منظومة إدارية تضع فريق عملك في قلب الاهتمام؛ من الحضور بالبصمة وإدارة الإجازات، وحتى الهيكل التنظيمي وتقييمات الأداء، في بيئة عمل رقمية ترفع الإنتاجية.'
                  : 'Empower your workforce with automated biometric attendance, digital self-service leave workflows, and performance governance.'}
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
                  src="/images/solutions/SolutionsHumanResources.jpg"
                  alt={isRtl ? 'نظام الموارد البشرية USoft' : 'USoft HR System'}
                  className="h-80 sm:h-96 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -start-5 rounded-2xl border border-white/20 bg-[#173B67]/90 p-4 text-white shadow-xl backdrop-blur-md max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-xs mb-1">
                  <CheckCircle2 size={16} />
                  <span>{isRtl ? 'ربط لحظي مع أجهزة البصمة' : 'Live Biometric Synchronization'}</span>
                </div>
                <p className="text-[11px] text-white/80">
                  {isRtl ? 'سحب فوري لسجلات الحضور دون تأخير.' : 'Zero manual timesheet errors.'}
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
              {isRtl ? 'إدارة الكفاءات' : 'Workforce Empowerment'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isRtl ? 'حوكمة رقمية متكاملة لشؤون الموظفين' : 'Digital Workforce Governance in One Place'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'وفّر على فريق الموارد البشرية مئات الساعات المهدرة في حساب ساعات الغياب والتأخير ومطابقة الإجازات الورقية. نظام USoft يربط البصمة بملف الموظف بالرواتب في دورة آلية سلسة.'
                : 'Free your HR department from tedious paperwork and manual spreadsheets. Connect attendance, approvals, and compliance directly into enterprise operations.'}
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
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400">
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
              {isRtl ? 'المسار الإداري' : 'Workflow'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {isRtl ? 'كيف تتدفق عمليات شؤون العاملين داخل المنظومة؟' : 'Daily Workforce Management Cycle'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-6 shadow-sm">
                <span className="font-mono text-3xl font-black text-teal-600/30 dark:text-teal-400/30 mb-2 block">
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
          <div className="inline-flex p-3 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
            <Sparkles size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'هل تريد تطوير إدارة مواردك البشرية وضبط الحضور؟' : 'Ready to Elevate Your HR Management?'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isRtl
              ? 'تحدث مع مستشاري USoft واطلع على كيفية تكامل شؤون العاملين مع بصمة الحضور ومسير الرواتب.'
              : 'Consult with our team to experience how USoft HR seamlessly connects people and processes.'}
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

export default HumanResources
