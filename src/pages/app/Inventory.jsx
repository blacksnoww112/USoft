import React from 'react'
import { Link } from 'react-router-dom'
import {
  Package,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Boxes,
  QrCode,
  AlertTriangle,
  RotateCcw,
  ShieldCheck,
  Building,
  Workflow,
  BarChart,
} from 'lucide-react'
import PublicLayout from '../../components/layout/PublicLayout'
import ModuleNav from '../../components/layout/ModuleNav'
import useLanguageStore from '../../store/languageStore'
import { getAssetPath } from '../../utils/assetPath'

function Inventory() {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const features = [
    {
      icon: Boxes,
      title: isRtl ? 'إدارة المستودعات المتعددة والتحويلات اللحظية' : 'Multi-Warehouse & Stock Transfers',
      desc: isRtl
        ? 'التحكم في فروع ومستودعات لا نهائية (مستودع رئيسي، مستودعات فروع، سيارات توزيع، أمانات لدى الغير)، مع تتبع أذون التحويل اللحظية واستلام البضائع برقم الإذن والتأكيد الفعلي.'
        : 'Manage unlimited warehouses, branch hubs, transit vans, and consignment inventory with automated inter-branch transfer workflows.',
    },
    {
      icon: QrCode,
      title: isRtl ? 'التتبع بالباركود، أرقام التشغيلات (Batches)، وتواريخ الصلاحية' : 'Barcode, Batch & Serial Tracking',
      desc: isRtl
        ? 'توليد وطباعة ملصقات الباركود والـ QR Code للأصناف، وتتبع أرقام التشغيلات وتواريخ انتهاء الصلاحية للمنتجات الدوائية والغذائية لمنع بيع أصناف منتهية بنظام (FEFO/FIFO).'
        : 'Print custom barcode & QR labels, track batch/lot numbers, expiration dates, and unique serial numbers with First-Expired, First-Out logic.',
    },
    {
      icon: AlertTriangle,
      title: isRtl ? 'نظام الإنذار المبكر لحدود إعادة الطلب والنواقص' : 'Automated Reorder Level & Safety Stock Triggers',
      desc: isRtl
        ? 'تحديد حد أمان وحد طلب لكل صنف في كل مستودع، ليقوم النظام بإرسال تنبيهات تلقائية وإعداد مقترحات أوامر شراء فور اقتراب الرصيد من النفاد لضمان استمرارية البيع.'
        : 'Set custom safety buffers and reorder thresholds per SKU per location. System triggers purchase suggestions automatically.',
    },
    {
      icon: BarChart,
      title: isRtl ? 'تقييم المخزون المالي بالمتوسط المرجح المعتمد' : 'Weighted Average Inventory Valuation',
      desc: isRtl
        ? 'احتساب تكلفة المخزون آلياً بأسلوب المتوسط المتحرك المرجح (Moving Average) المعتمد ضريبياً ومحاسبياً، مع ترحيل فوري لتكلفة البضاعة المباعة (COGS) إلى الأستاذ العام.'
        : 'Real-time financial valuation using moving weighted average cost with automatic Cost of Goods Sold (COGS) general ledger posting.',
    },
    {
      icon: RotateCcw,
      title: isRtl ? 'الجرد الدوري المستمر ومعالجة الفروقات' : 'Continuous Cycle Counting & Reconciliation',
      desc: isRtl
        ? 'تنفيذ الجرد المخزني بدون إيقاف حركة البيع باستخدام الهواتف الذكية وأجهزة قارئ الباركود، مع رصد فروقات الجرد وعمل تسويات الزيادة أو العجز باعتمادات إدارية رسمية.'
        : 'Conduct cycle counts without shutting down warehouse operations using mobile handhelds with automated variance reconciliations.',
    },
    {
      icon: ShieldCheck,
      title: isRtl ? 'الرقابة على أذون الصرف والإضافة وتسكين المواقع' : 'Bin Locations & Movement Authorization',
      desc: isRtl
        ? 'تحديد مواقع التخزين بدقة (الممر، الرف، الخانة - Bin Location)، وإلزامية ربط الصرف بأمر بيع أو أمر تشغيل لمنع خروج أي قطعة بضاعة بدون مستند رسمي موثق.'
        : 'Assign precise warehouse bin locations and mandate authorized dispatch vouchers linked directly to sales or production orders.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: isRtl ? 'استلام البضائع والتكويد' : 'Receiving & Barcoding',
      desc: isRtl ? 'فحص الشحنة وطباعة باركود الأصناف وإصدار إذن الإضافة المخزني.' : 'Scan incoming goods, generate barcodes, and post stock-in.',
    },
    {
      step: '02',
      title: isRtl ? 'التخزين والتسكين على الرفوف' : 'Bin Allocation',
      desc: isRtl ? 'تسكين المنتجات في أماكنها المحددة بالمستودع وفقاً للفئات وسرعة الحركة.' : 'Assign goods to designated bins for fast picking.',
    },
    {
      step: '03',
      title: isRtl ? 'الصرف بناءً على أوامر رسمية' : 'Picking & Dispatch',
      desc: isRtl ? 'تجهيز بوليصة الصرف وخصم الكميات من الرصيد اللحظي فور إتمام البيع.' : 'Pick items and decrement on-hand inventory instantly upon sale.',
    },
    {
      step: '04',
      title: isRtl ? 'المطابقة والتقييم المالي' : 'Valuation & Audits',
      desc: isRtl ? 'تحديث قيمة المخزون الدفترية وترحيل تكلفة المبيعات للقوائم المالية.' : 'Recalculate weighted cost and reconcile financial ledgers.',
    },
  ]

  return (
    <PublicLayout>
      <ModuleNav currentPath="/app/inventory" />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 animate-pulse rounded-full bg-[#38BDF8]/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRtl ? 'text-right' : 'text-left'} space-y-6 animate-fade-up`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white">
                <Package size={15} className="text-[#38BDF8]" />
                {isRtl ? 'المخزون والمستودعات المتعددة' : 'Warehouses & Inventory Control'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {isRtl ? 'نظام إدارة المخزون والمستودعات الذكي' : 'Intelligent Multi-Warehouse Inventory System'}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                {isRtl
                  ? 'وداعاً لعجز المخازن والركود وتلف المنتجات؛ منظومة متكاملة تمنحك رقابة لحظية على حركة كل صنف بدقة الباركود ورقم التشغيلة، مع تنبيهات استباقية لإعادة الطلب.'
                  : 'Total control over stock levels, batch tracking, warehouse transfers, and real-time inventory valuations without human error.'}
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
                  src={getAssetPath('/images/solutions/SolutionsInventory.jpg')}
                  alt={isRtl ? 'نظام المخزون USoft' : 'USoft Inventory System'}
                  className="h-80 sm:h-96 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -start-5 rounded-2xl border border-white/20 bg-[#173B67]/90 p-4 text-white shadow-xl backdrop-blur-md max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-xs mb-1">
                  <CheckCircle2 size={16} />
                  <span>{isRtl ? 'مخزون منضبط وموثق 100%' : '100% Accurate Stock'}</span>
                </div>
                <p className="text-[11px] text-white/80">
                  {isRtl ? 'تتبع فوري لكل صنف بالباركود وسيريال التشغيلة.' : 'Real-time serial & batch tracking.'}
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
              {isRtl ? 'كفاءة المستودعات' : 'Storage Efficiency'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isRtl ? 'حماية رأس المال المجمد في المستودعات' : 'Protect and Optimize Your Working Capital'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'المخزون هو أموال مجمدة في بضائع؛ لذا يقدم نظام مخزون USoft تقارير تحليلية عن الأصناف الأكثر مبيعاً والأصناف الراكدة، لتتمكن من تدوير رأس مالك بأقصى سرعة ممكنة ومنع التلف والخسائر.'
                : 'Inventory is frozen cash. USoft helps you identify slow-moving stock, prevent stock-outs, and accelerate inventory turnover.'}
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
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400">
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
              {isRtl ? 'حركة الصنف' : 'SKU Movement'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {isRtl ? 'رحلة الصنف من الاستلام وحتى الصرف والتقييم' : 'Inventory Lifecycle in USoft'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-6 shadow-sm">
                <span className="font-mono text-3xl font-black text-indigo-600/30 dark:text-indigo-400/30 mb-2 block">
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
          <div className="inline-flex p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
            <Sparkles size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'هل تريد ضبط مستودعاتك بدقة وقضاء تام على النواقص؟' : 'Ready to Transform Your Warehouse Management?'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isRtl
              ? 'تحدث مع خبراء USoft اليوم واكتشف كيف يُمكن تطبيق المنظومة في مستودعاتك وفروعك بأعلى كفاءة.'
              : 'Consult with our inventory experts today for a comprehensive workflow presentation.'}
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

export default Inventory
