import React from 'react'
import { Link } from 'react-router-dom'
import {
  Settings as SettingsIcon,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Lock,
  Database,
  Building,
  KeyRound,
  Workflow,
  Globe,
  RefreshCw,
} from 'lucide-react'
import PublicLayout from '../../components/layout/PublicLayout'
import ModuleNav from '../../components/layout/ModuleNav'
import useLanguageStore from '../../store/languageStore'
import { getAssetPath } from '../../utils/assetPath'

function Settings() {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const features = [
    {
      icon: ShieldCheck,
      title: isRtl ? 'الربط المعتمد مع مصلحة الضرائب المصرية (ETA)' : 'Certified Egyptian Tax Authority (ETA) Integration',
      desc: isRtl
        ? 'تهيئة سريعة وسلسة لشهادات التوقيع والختم الإلكتروني (Token)، وتفعيل إرسال الفواتير والإيصالات اللحظي لمصلحة الضرائب دون الحاجة لبرمجيات وسيطة خارجية مكلفة.'
        : 'Native integration with Egyptian Tax Authority (ETA) SDK for electronic signatures, seals, and instant live invoice/receipt dispatch.',
    },
    {
      icon: KeyRound,
      title: isRtl ? 'إدارة الصلاحيات المتقدمة وحوكمة المستخدمين (RBAC)' : 'Granular Role-Based Access Control (RBAC)',
      desc: isRtl
        ? 'تحديد دقيق لصلاحيات كل مستخدم وموظف (عرض، إضافة، تعديل، حذف، طباعة، اعتماد مالي)، وتعيين الفروع والمستودعات المسموح بالوصول إليها لحماية سرية البيانات.'
        : 'Define granular permissions per role (create, edit, post, void, print) with branch-level and warehouse-level access boundaries.',
    },
    {
      icon: Lock,
      title: isRtl ? 'سجل الرقابة والتدقيق التاريخي الصارم (Audit Trail)' : 'Comprehensive Audit Trail & User Activity Logs',
      desc: isRtl
        ? 'تسجيل كل حركة تتم على المنظومة مع تسجيل هوية المستخدم، التاريخ، الوقت بالثانية، وعنوان الـ IP، وتتبع التعديلات السابقة على القيود والفواتير لمنع أي تلاعب.'
        : 'Tamper-proof audit logs recording every creation, modification, and cancellation with timestamp, user ID, and IP tracking.',
    },
    {
      icon: Building,
      title: isRtl ? 'إدارة المنشآت المتعددة والفروع والعملات الأجنبية' : 'Multi-Company, Multi-Branch & Multi-Currency',
      desc: isRtl
        ? 'إمكانية إدارة عدة شركات أو أنشطة تجارية وفروع متعددة ضمن قاعدة بيانات واحدة موحدة، مع دعم أسعار صرف العملات الأجنبية اليومية وحساب فروق العملة.'
        : 'Manage multiple legal entities, branch locations, and international currencies in a single consolidated database.',
    },
    {
      icon: Database,
      title: isRtl ? 'النسخ الاحتياطي السحابي المؤتمت والتشفير الآمن' : 'Automated Cloud Backups & 256-Bit Data Encryption',
      desc: isRtl
        ? 'جدولة دورية لأخذ نسخ احتياطية سحابية مشفرة يومياً وحفظها في مراكز بيانات آمنة، لضمان استرجاع البيانات الفوري في حالات الطوارئ بنسبة أمان 99.9%.'
        : 'Scheduled automated cloud backups with AES 256-bit encryption ensuring instant disaster recovery and business continuity.',
    },
    {
      icon: Globe,
      title: isRtl ? 'واجهات برمجية مفتوحة للربط والتكامل (REST APIs)' : 'Open REST APIs & Third-Party Integration',
      desc: isRtl
        ? 'إمكانية ربط منظومة USoft مع المتاجر الإلكترونية (Shopify, WooCommerce)، بوابات الدفع الإلكتروني، وتطبيقات الجوال من خلال واجهات ربط برمجية آمنة.'
        : 'Secure REST APIs connecting USoft ERP seamlessly with e-commerce portals, CRM systems, payment gateways, and logistics apps.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: isRtl ? 'إدخال بيانات المنشأة' : 'Company Profile',
      desc: isRtl ? 'تسجيل السجل التجاري، البطاقة الضريبية، الفروع، وشعار الشركة.' : 'Set legal tax ID, commercial registry, branches, and branding.',
    },
    {
      step: '02',
      title: isRtl ? 'تفعيل الربط الضريبي' : 'Tax Authentication',
      desc: isRtl ? 'ربط التوكن والشهادة الإلكترونية واعتماد الاتصال مع منظومة ETA.' : 'Link electronic seal token and validate ETA connection.',
    },
    {
      step: '03',
      title: isRtl ? 'توزيع الصلاحيات' : 'User Roles & Security',
      desc: isRtl ? 'إنشاء حسابات المستخدمين وتحديد صلاحيات كل موظف بدقة.' : 'Create user profiles and assign departmental permission matrices.',
    },
    {
      step: '04',
      title: isRtl ? 'ضبط النسخ والأمان' : 'Automated Backups',
      desc: isRtl ? 'تفعيل النسخ الاحتياطي التلقائي وحماية البيانات بأعلى المعايير.' : 'Enable automated encrypted cloud backup schedules.',
    },
  ]

  return (
    <PublicLayout>
      <ModuleNav currentPath="/app/settings" />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 animate-pulse rounded-full bg-[#38BDF8]/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRtl ? 'text-right' : 'text-left'} space-y-6 animate-fade-up`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white">
                <SettingsIcon size={15} className="text-[#38BDF8]" />
                {isRtl ? 'إعدادات المنظومة والربط والتحكم' : 'System Configuration & Security'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {isRtl ? 'منظومة التهيئة والربط الضريبي وحوكمة الأمان' : 'Enterprise ERP Settings, Security & ETA Sync'}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                {isRtl
                  ? 'بنية تحتية تكنولوجية قوية تمنحك الأمان المطلق؛ ربط مباشر مع مصلحة الضرائب المصرية، إدارة دقيقة لصلاحيات المستخدمين، نسخ احتياطي سحابي مشفر، وسجلات رقابة غير قابلة للتعديل.'
                  : 'Robust enterprise architecture built for absolute security: certified tax authority integration, role-based access control, and automated encrypted backups.'}
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
                  src={getAssetPath('/images/solutions/SolutionsSpecialized.jpg')}
                  alt={isRtl ? 'إعدادات المنظومة USoft' : 'USoft Settings System'}
                  className="h-80 sm:h-96 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -start-5 rounded-2xl border border-white/20 bg-[#173B67]/90 p-4 text-white shadow-xl backdrop-blur-md max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-xs mb-1">
                  <CheckCircle2 size={16} />
                  <span>{isRtl ? 'أمان وسرية بيانات بنسبة 99.9%' : 'Enterprise-Grade Security'}</span>
                </div>
                <p className="text-[11px] text-white/80">
                  {isRtl ? 'تشفير كامل لكافة قواعد البيانات والعمليات.' : 'Encrypted databases and automated disaster recovery.'}
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
              {isRtl ? 'الأمان والحوكمة' : 'Security & Governance'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isRtl ? 'حماية بيانات شركتك وضمان استمرارية الأعمال' : 'Protecting Your Corporate Data & Continuity'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'بيانات شركتك المالية والتشغيلية هي أثمن ما تملك. صُمم نظام USoft وفقاً لأعلى معايير الأمن السيبراني مع حماية من الاختراق، سجل تدقيق لكل نقرة، ونسخ احتياطي فوري يضمن عدم فقدان أي معاملة.'
                : 'Your corporate financials and operations require institutional-grade safeguarding. USoft is engineered with military-grade encryption, detailed activity logging, and failover resilience.'}
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
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
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
              {isRtl ? 'التهيئة والإطلاق' : 'Implementation'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {isRtl ? 'كيف يتم إعداد وتهيئة المنظومة لشركتك؟' : 'Streamlined Implementation Process'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-6 shadow-sm">
                <span className="font-mono text-3xl font-black text-slate-600/30 dark:text-slate-400/30 mb-2 block">
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
            {isRtl ? 'جاهز لتهيئة منظومتك وبدء التحول الرقمي؟' : 'Ready to Secure and Scale Your ERP Architecture?'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isRtl
              ? 'تواصل مع فريق USoft التقني واستفسر عن سهولة نقل بياناتك القديمة وتهيئة النظام ليتوافق مع هيكل منشأتك.'
              : 'Consult with our engineering team regarding data migration, ETA setup, and deployment options.'}
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

export default Settings
