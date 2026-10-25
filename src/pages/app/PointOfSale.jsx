import React from 'react'
import { Link } from 'react-router-dom'
import {
  Monitor,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  WifiOff,
  Receipt,
  Scale,
  CreditCard,
  QrCode,
  Store,
  Workflow,
  ShieldCheck,
} from 'lucide-react'
import PublicLayout from '../../components/layout/PublicLayout'
import ModuleNav from '../../components/layout/ModuleNav'
import useLanguageStore from '../../store/languageStore'

function PointOfSale() {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const features = [
    {
      icon: Monitor,
      title: isRtl ? 'واجهة كاشير لمسية فائقة السرعة وسهلة الاستخدام' : 'Ultra-Fast Touch-Screen Cashier Interface',
      desc: isRtl
        ? 'تصميم عصري بسيط يُمكن الكاشير من إنجاز الفاتورة في أقل من 3 ثوانٍ، مع دعم شاشات اللمس، البحث السريع بالاسم أو الباركود، واختصارات لوحة المفاتيح للأصناف الأكثر طلباً.'
        : 'Streamlined UI designed to finalize customer sales in under 3 seconds with touch support, quick SKU search, and programmable hotkeys.',
    },
    {
      icon: WifiOff,
      title: isRtl ? 'العمل بكفاءة تامة بدون إنترنت (Offline Mode)' : 'Uninterrupted Offline Mode Operation',
      desc: isRtl
        ? 'استمرار عمليات البيع وإصدار الفواتير وطباعة الإيصالات حتى في حال انقطاع شبكة الإنترنت، مع مزامنة كافة العمليات تلقائياً مع السيرفر الرئيسي فور عودة الاتصال.'
        : 'Keep processing transactions and printing receipts even when offline. System auto-synchronizes data seamlessly once connection restores.',
    },
    {
      icon: Receipt,
      title: isRtl ? 'الربط التام مع منظومة الإيصال الإلكتروني للضرائب (ETA)' : 'Egyptian Tax Authority (ETA) E-Receipt Compliant',
      desc: isRtl
        ? 'توافق كامل ومعتمد مع اشتراطات منظومة الإيصال الإلكتروني لمصلحة الضرائب المصرية لقطاع التجزئة والمستهلك النهائي B2C، مع إصدار رمز الـ QR المعتمد على كل إيصال.'
        : 'Certified B2C electronic receipt issuance complying with Egyptian Tax Authority mandates with dynamic verification QR codes.',
    },
    {
      icon: Store,
      title: isRtl ? 'إدارة ورديات الكاشير وتقفيل الدرج اليومي' : 'Shift Management & Cash Drawer Balancing',
      desc: isRtl
        ? 'تسجيل بدء الوردية بالرصيد الافتتاحي (العوامة)، تتبع حركات السحب والإيداع المؤقتة، وإغلاق الوردية بتقرير مفصل (Z-Report) يوضح مبيعات الكاش والفيزا وعجز أو زيادة الدرج.'
        : 'Manage cashier shifts with opening float checks, mid-shift payouts, and end-of-day Z-Report reconciliation highlighting tender breakdowns.',
    },
    {
      icon: Scale,
      title: isRtl ? 'توافق شامل مع الموازين والطابعات وقارئات الباركود' : 'Plug & Play Retail Hardware Compatibility',
      desc: isRtl
        ? 'دعم مباشر لطابعات الإيصالات الحرارية (Epson, Bixolon, Xprinter)، أدراج النقدية الإلكترونية، قراء الباركود السلكية واللاسلكية، والموازين الإلكترونية المتصلة.'
        : 'Full integration with thermal printers, electronic cash drawers, wireless barcode scanners, and weighing scale barcode systems.',
    },
    {
      icon: CreditCard,
      title: isRtl ? 'تعدد طرق الدفع والدفع الجزئي في الفاتورة الواحدة' : 'Multi-Tender Payments & Split Billing',
      desc: isRtl
        ? 'إمكانية سداد الفاتورة الواحدة بأكثر من وسيلة دفع (جزء كاش + جزء فيزا / ماستركارد / محافظ إلكترونية مثل فودافون كاش وإنستاباي / آجل على حساب العميل).'
        : 'Support split transactions across cash, credit cards, mobile wallets, and customer credit ledger balances on the same receipt.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: isRtl ? 'فتح الوردية واستلام الدرج' : 'Open Shift & Float',
      desc: isRtl ? 'تسجيل دخول الكاشير وإدخال العهدة النقدية الافتتاحية في الدرج.' : 'Cashier logs in and confirms opening cash balance.',
    },
    {
      step: '02',
      title: isRtl ? 'مسح الأصناف وإنشاء الطلب' : 'Scan & Cart Build',
      desc: isRtl ? 'مسح الباركود أو الضغط على الأصناف في شاشة اللمس وتحديد الكميات.' : 'Scan barcode or select touch tiles with instant price pull.',
    },
    {
      step: '03',
      title: isRtl ? 'السداد وإصدار الإيصال' : 'Payment & Receipt',
      desc: isRtl ? 'اختيار طريقة الدفع وطباعة الإيصال الإلكتروني المعتمد فورياً.' : 'Tender transaction and print certified ETA e-receipt.',
    },
    {
      step: '04',
      title: isRtl ? 'تقفيل الوردية وترحيل المخزون' : 'Shift Close & Sync',
      desc: isRtl ? 'طباعة تقرير Z اليومي، ومزامنة مبيعات الوردية وخصم المخزون والقيود.' : 'Print Z-report and post revenue and inventory decrements.',
    },
  ]

  return (
    <PublicLayout>
      <ModuleNav currentPath="/app/pos" />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 animate-pulse rounded-full bg-[#38BDF8]/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRtl ? 'text-right' : 'text-left'} space-y-6 animate-fade-up`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white">
                <Monitor size={15} className="text-[#38BDF8]" />
                {isRtl ? 'نقاط البيع السريعة والكاشير' : 'Point of Sale & Retail POS'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {isRtl ? 'نظام نقاط البيع السحابي المتوافق مع الإيصال الإلكتروني' : 'Cloud POS Terminal with E-Receipt Integration'}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                {isRtl
                  ? 'صُمم خصيصاً لسلاسل التجزئة، السوبرماركت، الصيدليات، والمتاجر؛ سرعة فائقة في تحرير الإيصالات، دعم العمل بدون إنترنت، وربط معتمد مع منظومة الضرائب المصرية.'
                  : 'Engineered for retail chains, pharmacies, and supermarkets: lightning-fast checkouts, seamless offline operation, and certified e-receipt compliance.'}
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
                  alt={isRtl ? 'نظام نقاط البيع USoft' : 'USoft POS System'}
                  className="h-80 sm:h-96 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -start-5 rounded-2xl border border-white/20 bg-[#173B67]/90 p-4 text-white shadow-xl backdrop-blur-md max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-xs mb-1">
                  <CheckCircle2 size={16} />
                  <span>{isRtl ? 'يعمل بدون إنترنت Offline' : '100% Offline Capable'}</span>
                </div>
                <p className="text-[11px] text-white/80">
                  {isRtl ? 'لا يتوقف البيع أبداً حتى مع انقطاع الشبكة.' : 'Continuous sales without connection interruptions.'}
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
              {isRtl ? 'تجربة بيع سريعة' : 'Checkout Speed'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isRtl ? 'خدمة أسرع لعملائك ورقابة محكمة على الدرج والنقدية' : 'Faster Customer Queues and Tighter Cash Control'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'طوابير الكاشير الطويلة تتسبب في خسارة العملاء؛ نظام نقاط بيع USoft يتميز بخفة وسرعة غير مسبوقة تُمكّن الكاشير من مسح الأصناف والتحصيل وطباعة الإيصال في ثوانٍ معدودة.'
                : 'Long checkout queues frustrate customers. USoft POS empowers your cashiers with snappy item scanning, instant pricing logic, and quick tender completion.'}
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
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400">
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
              {isRtl ? 'حركة الكاشير' : 'POS Workflow'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {isRtl ? 'كيف يدير النظام وردية نقطة البيع باحترافية؟' : 'Daily POS Terminal Workflow'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-6 shadow-sm">
                <span className="font-mono text-3xl font-black text-rose-600/30 dark:text-rose-400/30 mb-2 block">
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
          <div className="inline-flex p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
            <Sparkles size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'هل تريد تسريع نقاط البيع ومطابقة الإيصال الإلكتروني؟' : 'Ready to Modernize Your Retail Point of Sale?'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isRtl
              ? 'تواصل مع فريق USoft وشاهد تجربة تشغيلية حية لنظام الكاشير ونقاط البيع المتوافقة مع أحدث أجهزة الهاردوير.'
              : 'Consult with our POS specialists to test-drive hardware compatibility and ETA e-receipt generation.'}
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

export default PointOfSale
