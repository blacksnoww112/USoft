import React from 'react'
import { Link } from 'react-router-dom'
import {
  ShoppingCart,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  FileCheck2,
  Scale,
  ShieldCheck,
  Building2,
  Clock,
  Workflow,
  DollarSign,
  PackageCheck,
} from 'lucide-react'
import PublicLayout from '../../components/layout/PublicLayout'
import ModuleNav from '../../components/layout/ModuleNav'
import useLanguageStore from '../../store/languageStore'
import { getAssetPath } from '../../utils/assetPath'

function Purchases() {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const features = [
    {
      icon: FileCheck2,
      title: isRtl ? 'دورة طلبات الشراء والاعتمادات الهرمية' : 'Purchase Requisitions & Multi-Level Approvals',
      desc: isRtl
        ? 'تمكين الأقسام والمستودعات من رفع طلبات الشراء إلكترونياً، مع توجيهها للمدراء المعنيين للاعتماد المالي والإداري بحسب صلاحيات وسقوف المبالغ المحددة قبل إصدار أي أمر شراء.'
        : 'Enable departments to submit purchase requests routed through configurable approval hierarchies based on budget thresholds.',
    },
    {
      icon: Scale,
      title: isRtl ? 'مقارنة عروض أسعار الموردين واختيار الأفضل' : 'Vendor RFQs & Comparison Matrix',
      desc: isRtl
        ? 'تسجيل ومقارنة عروض أسعار الموردين المختلفة على مستوى السعر، شروط السداد، ومواعيد التوريد وجودة الخامات لاختيار العرض الأنسب وحفظ تاريخ الأسعار التنافسية.'
        : 'Compare vendor quotation terms, unit costs, payment facilities, and lead times to select optimal procurement terms.',
    },
    {
      icon: PackageCheck,
      title: isRtl ? 'المطابقة الثلاثية الصارمة (Three-Way Matching)' : 'Strict 3-Way Matching Verification',
      desc: isRtl
        ? 'مطابقة تلقائية صارمة بين ما تم الاتفاق عليه في أمر الشراء (PO)، وما تم استلامه فعلياً في إذن استلام المخزن (GRN)، وما ورد في فاتورة المورد، لمنع سداد أي فروقات أو كميات لم تصل.'
        : 'Automatic validation comparing Purchase Order against Goods Received Note and Vendor Invoice to prevent financial discrepancies.',
    },
    {
      icon: Building2,
      title: isRtl ? 'سجل الموردين وتقييم الأداء والجودة' : 'Vendor Registry & Performance Scoring',
      desc: isRtl
        ? 'قاعدة بيانات شاملة لبيانات الموردين والملفات الضريبية، مع تقييم آلي لجودة المنتجات، الالتزام بمواعيد التوريد، ونسبة المرتجعات لتحديد أفضل شركاء النجاح.'
        : 'Centralized vendor profiles with tax IDs, commercial records, and performance ratings based on punctuality and quality adherence.',
    },
    {
      icon: DollarSign,
      title: isRtl ? 'إدارة استحقاقات الموردين وجدولة المدفوعات' : 'Payables Management & Cash Outflow Planning',
      desc: isRtl
        ? 'متابعة الفواتير الآجلة، دفعات الموردين، أوراق الدفع والشيكات المصدرة، مع تقارير السيولة المستقبلية للتخطيط المالي السليم وتجنب التعثر.'
        : 'Track credit terms, payment schedules, and post-dated checks to forecast cash requirements accurately.',
    },
    {
      icon: ShieldCheck,
      title: isRtl ? 'حساب تكلفة الشراء الحقيقية والرسوم الملحقة' : 'Landed Cost & Landed Expenses Allocation',
      desc: isRtl
        ? 'توزيع تكاليف الشحن، الجمارك، التأمين، والتفريغ آلياً على أصناف الشحنة، لمعرفة تكلفة الصنف الحقيقية الدقيقة لضبط هوامش أرباح البيع لاحقاً.'
        : 'Distribute freight, customs, clearance, and insurance overheads directly onto SKU unit cost for accurate margin analysis.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: isRtl ? 'طلب الشراء والاعتماد' : 'Purchase Request',
      desc: isRtl ? 'رفع طلب الاحتياج من القسم المختص واعتماده من الإدارة المالية.' : 'Submit requisition and obtain management approval.',
    },
    {
      step: '02',
      title: isRtl ? 'استدراج العروض وأمر الشراء' : 'Quotation & PO',
      desc: isRtl ? 'مقارنة عروض الموردين وإصدار أمر الشراء الرسمي وتوجيهه للمورد.' : 'Evaluate vendor quotes and issue certified PO.',
    },
    {
      step: '03',
      title: isRtl ? 'الاستلام والفحص المخزني' : 'Goods Receipt & Inspection',
      desc: isRtl ? 'فحص البضائع الواردة، وإصدار إذن الإضافة المخزني بالكميات الفعلية.' : 'Verify shipment physical count and register stock in warehouse.',
    },
    {
      step: '04',
      title: isRtl ? 'مطابقة الفاتورة وجدولة السداد' : '3-Way Match & Pay',
      desc: isRtl ? 'مطابقة فاتورة المورد مع أمر الشراء وإذن الإضافة، وجدولة الاستحقاق.' : 'Execute three-way match and schedule accounting payment.',
    },
  ]

  return (
    <PublicLayout>
      <ModuleNav currentPath="/app/purchases" />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 animate-pulse rounded-full bg-[#38BDF8]/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRtl ? 'text-right' : 'text-left'} space-y-6 animate-fade-up`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white">
                <ShoppingCart size={15} className="text-[#38BDF8]" />
                {isRtl ? 'المشتريات وسلاسل الإمداد' : 'Procurement & Supply Chain'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {isRtl ? 'نظام المشتريات الذكي وإدارة الموردين' : 'Enterprise Procurement & Vendor Management'}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                {isRtl
                  ? 'وفر التكاليف وأحكم رقابتك على المشتريات من خلال دورة مستندية محكمة تبدأ بطلب الاحتياج ومقارنة عروض الموردين وتنتهي بالمطابقة الثلاثية الدقيقة مع المخازن.'
                  : 'Optimize operational expenditure with a structured procurement workflow: requisition approvals, RFQ comparisons, and strict three-way matching.'}
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
                  src={getAssetPath('/images/solutions/SolutionsPurchases.jpg')}
                  alt={isRtl ? 'نظام المشتريات USoft' : 'USoft Purchases System'}
                  className="h-80 sm:h-96 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -start-5 rounded-2xl border border-white/20 bg-[#173B67]/90 p-4 text-white shadow-xl backdrop-blur-md max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-xs mb-1">
                  <CheckCircle2 size={16} />
                  <span>{isRtl ? 'مطابقة ثلاثية تمنع الهدر المالي' : '3-Way Match Protection'}</span>
                </div>
                <p className="text-[11px] text-white/80">
                  {isRtl ? 'لا يتم صرف أي فاتورة دون مطابقتها مع ما تم استلامه فعلياً.' : 'Zero payment without physical receipt validation.'}
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
              {isRtl ? 'كفاءة الإنفاق' : 'Cost Optimization'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isRtl ? 'إدارة مشتريات احترافية تضمن أفضل سعر وأعلى جودة' : 'Strategic Sourcing & Spend Visibility'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'يُمكّن نظام مشتريات USoft فريق التوريد لديك من التفاوض على شروط أفضل، متابعة مواعيد التسليم، وضبط ميزانيات الأقسام بحيث لا تتجاوز أي إدارة سقفها المالي المعتمد.'
                : 'Empower your procurement department with real-time vendor insights, contract tracking, and strict budgetary controls.'}
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
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400">
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
              {isRtl ? 'المسار المستندي' : 'Workflow'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {isRtl ? 'مراحل دورة المشتريات داخل منظومة USoft' : 'Procurement Cycle from Request to Payment'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-6 shadow-sm">
                <span className="font-mono text-3xl font-black text-amber-600/30 dark:text-amber-400/30 mb-2 block">
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
          <div className="inline-flex p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
            <Sparkles size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'جاهز لترشيد نفقات التوريد وضبط مشتريات شركتك؟' : 'Ready to Optimize Your Corporate Spend?'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isRtl
              ? 'تواصل مع فريق USoft الآن للحصول على استشارة فنية واستعراض حي لمنظومة المشتريات والموردين.'
              : 'Contact our procurement specialists and schedule a tailored live demonstration today.'}
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

export default Purchases
