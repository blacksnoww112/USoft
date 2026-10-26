const b = import.meta.env.BASE_URL || '/'
const BASE = b.endsWith('/') ? b : `${b}/`

const RAW_PARTNERS = [
  // ── 1. Top Priority Partner 1: بنك نكست ────────────────────────
  {
    id: 'bank-nxt',
    nameAr: 'بنك نكست (Bank NXT)',
    nameEn: 'Bank NXT',
    sectorAr: 'القطاع المصرفي والخدمات المالية',
    sectorEn: 'Banking & Financial Services',
    logo: '/images/Partnerships/بنك نكست.jpg',
    descAr: 'شراكة مصرفية استراتيجية لإدارة دورة الأصول الثابتة، عمليات المشتريات والمناقصات، والرقابة التشغيلية والمالية وفق أعلى المعايير المصرفية.',
    descEn: 'Strategic enterprise partnership managing fixed asset lifecycles, corporate procurement, and financial governance adhering to rigorous banking standards.',
    tagsAr: ['الأصول الثابتة', 'المشتريات والمناقصات', 'الرقابة المالية', 'التقارير'],
    tagsEn: ['Fixed Assets', 'Procurement', 'Financial Control', 'Reports'],
  },

  // ── 2. Top Priority Partner 2: أمانة المراكز الطبية المتخصصة ──────────────────────────
  {
    id: 'smc',
    nameAr: 'أمانة المراكز الطبية المتخصصة',
    nameEn: 'Specialized Medical Centers (SMC)',
    sectorAr: 'الرعاية الصحية والقطاع الطبي',
    sectorEn: 'Healthcare & Specialized Medical Centers',
    logo: '/images/Partnerships/أمانه المراكز الطبيه المتخصصه.jpg',
    descAr: 'منظومة إدارية ومخزنية متكاملة لتنظيم التوريدات والمستلزمات والأصول الطبية والمخازن التابعة للمراكز الطبية التخصصية.',
    descEn: 'Unified enterprise system organizing medical supplies, equipment assets, central warehousing, and procurement across medical centers.',
    tagsAr: ['المستلزمات الطبية', 'المخازن المركزية', 'الأصول والمعدات', 'المشتريات'],
    tagsEn: ['Medical Supplies', 'Central Inventory', 'Assets', 'Procurement'],
  },

  // ── 3. Top Priority Partner 3: شاي العروسة ─────────────────────
  {
    id: 'el-arosa',
    nameAr: 'شاي العروسة ',
    nameEn: 'El Arosa Tea ',
    sectorAr: 'صناعات غذائية وتوزيع',
    sectorEn: 'Food & Distribution',
    logo: '/images/Partnerships/El Arosa Tea.jpg',
    descAr: 'إدارة أسطول التوزيع والمستودعات اللوجستية الكبرى وحسابات المبيعات وسلاسل الإمداد على مستوى الجمهورية.',
    descEn: 'Managing nationwide distribution logistics, large-scale warehouses, and FMCG wholesale billing.',
    tagsAr: ['التوزيع والأسطول', 'المخازن المركزية', 'المبيعات', 'التقارير'],
    tagsEn: ['Distribution', 'Warehouses', 'Sales', 'Reports'],
  },

  // ── 4. Top Priority Partner 4: مكرونة حواء ─────────────────────
  {
    id: 'hawa',
    nameAr: 'مكرونة حواء',
    nameEn: 'Hawaa Pasta',
    sectorAr: 'صناعات غذائية وتوزيع',
    sectorEn: 'Food Industries & Pasta Manufacturing',
    logo: '/images/Partnerships/Hawa.jpg',
    descAr: 'إدارة خطوط إنتاج وتعبئة المعكرونة، ضبط التكاليف الصناعية والمواد الخام، ومتابعة حركة المستودعات وسلاسل التوزيع الكبرى.',
    descEn: 'Managing high-volume pasta manufacturing, industrial recipe costing, central warehousing, and nationwide retail distribution networks.',
    tagsAr: ['إدارة الإنتاج', 'حسابات التكاليف', 'المخازن المركزية', 'المبيعات'],
    tagsEn: ['Production', 'Costing', 'Warehouses', 'Sales'],
  },

  // ── 5. Top Priority Partner 5: معهد ناصر ───────────────────────
  {
    id: 'nasser-institute',
    nameAr: 'معهد ناصر للبحوث والعلاج',
    nameEn: 'Nasser Institute for Research & Treatment',
    sectorAr: 'الرعاية الصحية والمستشفيات الكبرى',
    sectorEn: 'Healthcare & Specialized Medical Institutes',
    logo: '/images/Partnerships/معهد ناصر.jpg',
    descAr: 'ميكنة متطورة لإدارة الصيدليات والمستلزمات الطبية، المستودعات، الأصول والمعدات الطبية، والرقابة على الموازنات التشغيلية للمستشفى.',
    descEn: 'Advanced medical supply chain automation, hospital pharmacy inventory, clinical equipment asset management, and budget oversight.',
    tagsAr: ['المستلزمات الطبية', 'إدارة الأصول', 'المخازن', 'الرقابة المالية'],
    tagsEn: ['Medical Supplies', 'Asset Management', 'Inventory', 'Budget Control'],
  },

  // ── 6. Top Priority Partner 6: وادي دجلة للتنمية الزراعية ──────
  {
    id: 'wadi-degla',
    nameAr: 'وادي دجلة للتنمية الزراعية',
    nameEn: 'Wadi Degla Agricultural Development',
    sectorAr: 'تنمية زراعية واستثمار',
    sectorEn: 'Agricultural Development & Agribusiness',
    logo: '/images/Partnerships/Wadi Degla.jpeg',
    descAr: 'منظومة متكاملة لإدارة المشاريع الزراعية والإنتاج، مراكز التكلفة التشغيلية، ومتابعة حركة المستودعات والتوريدات وسلاسل الإمداد.',
    descEn: 'Enterprise management for agribusiness operations, crop yields, operational cost centers, equipment assets, and supply logistics.',
    tagsAr: ['مراكز التكلفة', 'إدارة المشاريع', 'المخازن', 'الحسابات'],
    tagsEn: ['Cost Centers', 'Projects', 'Warehouses', 'Accounting'],
  },

  // ── 7. Top Priority Partner 7: أكتيف أبو علاء (Active) ─────────
  {
    id: 'active',
    nameAr: 'أكتيف أبو علاء (Active Abou Alaa)',
    nameEn: 'Active Abou Alaa Sportswear',
    sectorAr: 'ملابس ومستلزمات رياضية وتجزئة',
    sectorEn: 'Sportswear Retail Chain',
    logo: '/images/Partnerships/active.jpg',
    descAr: 'إدارة شبكة الفروع ونقاط البيع السريعة مع مزامنة لحظية للمخزون والباركود والخصومات والعروض الترويجية عبر الجمهورية.',
    descEn: 'POS store synchronization, multi-branch stock transfers, barcode tracking, and loyalty promotions across nationwide outlets.',
    tagsAr: ['نقاط البيع', 'المخازن المركزية', 'المبيعات', 'الباركود'],
    tagsEn: ['POS', 'Central Stock', 'Sales', 'Barcode'],
  },

  // ── 8. Top Priority Partner 8: CPC الصناعي ────────────────────
  {
    id: 'cpc',
    nameAr: 'مجمع CPC مصر للمناطق الصناعية',
    nameEn: 'CPC Egypt Industrial Parks',
    sectorAr: 'تطوير وتشغيل المدن والمجمعات الصناعية',
    sectorEn: 'Industrial Parks & Facilities Management',
    logo: '/images/Partnerships/مجمع CPC الصناعي.jpeg',
    descAr: 'إدارة مرافق المناطق الصناعية، عقود المستثمرين والمصانع، والتحصيل والفوترة الدورية للخدمات والصيانة والمرافق العامة.',
    descEn: 'Industrial facility administration, investor contracts, recurring utility and maintenance billing, and service management.',
    tagsAr: ['إدارة المرافق والعقود', 'الفوترة والتحصيل', 'التقارير'],
    tagsEn: ['Facility Management', 'Billing', 'Reports'],
  },

  // ── 9. دايس للملابس الجاهزة ──────────────────────────────────
  {
    id: 'dice',
    nameAr: 'دايس للملابس الجاهزة',
    nameEn: 'Dice Ready-Made Garments',
    sectorAr: 'صناعة وملابس جاهزة',
    sectorEn: 'Textiles & Apparel',
    logo: '/images/Partnerships/Dice.jpg',
    descAr: 'تطبيق أنظمة USoft المتكاملة لإدارة خطوط الإنتاج، المستودعات المركزية، وسلاسل الإمداد وشبكة الفروع.',
    descEn: 'Enterprise ERP deployment managing production lines, central logistics, and retail store networks.',
    tagsAr: ['إدارة الإنتاج', 'المخازن', 'نقاط البيع', 'الحسابات'],
    tagsEn: ['Production', 'Inventory', 'POS', 'Accounting'],
  },

  // ── 10. شركة الجيزة للغزل والنسيج ────────────────────────────
  {
    id: 'giza-textiles',
    nameAr: 'شركة الجيزة للغزل والنسيج',
    nameEn: 'Giza Spinning & Weaving',
    sectorAr: 'غزل ونسيج وتصدير',
    sectorEn: 'Spinning & Textiles Export',
    logo: '/images/Partnerships/Giza.jpg',
    descAr: 'متابعة تكاليف الإنتاج الصناعي والمواد الخام وإدارة الأصول والمعدات وحسابات العمليات التصديرية.',
    descEn: 'Industrial job-costing, raw material batch tracking, fixed assets lifecycle, and export operations.',
    tagsAr: ['حسابات التكاليف', 'إدارة الأصول', 'المشتريات', 'المخازن'],
    tagsEn: ['Costing', 'Fixed Assets', 'Purchasing', 'Inventory'],
  },

  // ── 11. جولسان مصر ───────────────────────────────────────────
  {
    id: 'gulsan',
    nameAr: 'جولسان مصر (Gülsan Egypt)',
    nameEn: 'Gülsan Egypt Nonwoven',
    sectorAr: 'صناعات النسيج غير المنسوج والبلاستيك',
    sectorEn: 'Nonwoven & Industrial Textiles',
    logo: '/images/Partnerships/Gulsan.jpg',
    descAr: 'ربط مالي وتشغيلي للمصانع والعمليات الإنتاجية مع تقارير متقدمة ومؤشرات أداء لحظية للإدارة.',
    descEn: 'Financial and operational enterprise control across production facilities with real-time analytics.',
    tagsAr: ['المحاسبة المتقدمة', 'المخزون', 'التكاليف'],
    tagsEn: ['Financials', 'Inventory', 'Cost Control'],
  },

  // ── 12. شركة الإسماعيلية مصر للدواجن ─────────────────────────
  {
    id: 'ismailia-poultry',
    nameAr: 'شركة الإسماعيلية مصر للدواجن',
    nameEn: 'Ismailia Misr Poultry Company',
    sectorAr: 'صناعات غذائية وثروة داجنة',
    sectorEn: 'Poultry & Food Production',
    logo: '/images/Partnerships/Ismailia Misr Poultry Company.jpg',
    descAr: 'إدارة العمليات الإنتاجية، محطات التربية والمجازر، وسلاسل التبريد والتوزيع اليومي للمنتجات.',
    descEn: 'Farm cycle operations, feed & hatchery costing, cold chain logistics, and fresh distribution.',
    tagsAr: ['التكاليف والتشغيل', 'المخازن', 'سلاسل الإمداد'],
    tagsEn: ['Costing', 'Warehousing', 'Supply Chain'],
  },

  // ── 13. مجموعة كي سي جي للنسيج ───────────────────────────────
  {
    id: 'kcg',
    nameAr: 'مجموعة كي سي جي للنسيج (KCG)',
    nameEn: 'KCG Textile Group',
    sectorAr: 'صناعة المنسوجات والأقمشة',
    sectorEn: 'Textiles & Fabric Manufacturing',
    logo: '/images/Partnerships/KCG.jpg',
    descAr: 'ميكنة دورة الإنتاج وحسابات التكاليف وإدارة شؤون آلاف العاملين والرواتب إلكترونياً.',
    descEn: 'Digitizing plant production workflows, workforce HR administration, and mass monthly payroll.',
    tagsAr: ['الموارد البشرية', 'الرواتب', 'التكاليف', 'المخازن'],
    tagsEn: ['HR', 'Payroll', 'Costing', 'Inventory'],
  },

  // ── 14. شركة كارمكو للصناعات الهندسية ─────────────────────────
  {
    id: 'karmko',
    nameAr: 'شركة كارمكو للصناعات الهندسية',
    nameEn: 'Karmko Industrial & Engineering',
    sectorAr: 'صناعات هندسية ومعدنية',
    sectorEn: 'Engineering & Metal Industries',
    logo: '/images/Partnerships/Karmko.jpg',
    descAr: 'تخطيط أوامر التصنيع، مراقبة الجودة، وضبط مدخلات ومخرجات الإنتاج بدقة عالية.',
    descEn: 'Manufacturing order planning, quality compliance, and precision raw-material yield control.',
    tagsAr: ['التصنيع', 'مراقبة التكاليف', 'الأصول'],
    tagsEn: ['Manufacturing', 'Cost Control', 'Assets'],
  },

  // ── 15. شركة سينجر مصر ───────────────────────────────────────
  {
    id: 'singer',
    nameAr: 'شركة سينجر مصر (Singer Egypt)',
    nameEn: 'Singer Egypt',
    sectorAr: 'أجهزة ومعدات ومنافذ بيع',
    sectorEn: 'Home Appliances & Equipment',
    logo: '/images/Partnerships/Singer.jpg',
    descAr: 'ربط الفروع والمعارض ومراكز الصيانة وقطع الغيار بنظام موحد ومتصل للمبيعات والمخزون.',
    descEn: 'Connecting retail showrooms, after-sales service centers, and spare parts inventory.',
    tagsAr: ['نقاط البيع', 'الصيانة', 'المخازن', 'المبيعات'],
    tagsEn: ['POS', 'Maintenance', 'Inventory', 'Sales'],
  },

  // ── 16. شركة تي آند سي للملابس ───────────────────────────────
  {
    id: 'tc-garments',
    nameAr: 'شركة تي آند سي للملابس (T&C Garments)',
    nameEn: 'T&C Garments',
    sectorAr: 'صناعة الملابس الجاهزة والتصدير',
    sectorEn: 'Apparel Manufacturing & Export',
    logo: '/images/Partnerships/T&C.jpg',
    descAr: 'إدارة متقدمة لخطوط تصنيع الملابس التصديرية وتتبع التكاليف ومراحل التشغيل والعمالة.',
    descEn: 'High-volume export apparel production management, stage tracking, and operational analytics.',
    tagsAr: ['الإنتاج', 'التكاليف', 'المخازن', 'الموارد البشرية'],
    tagsEn: ['Production', 'Costing', 'Inventory', 'HR'],
  },

  // ── 17. الإسكندرية للاستثمارات والتنمية العمرانية ────────────
  {
    id: 'alex-urban',
    nameAr: 'الإسكندرية للاستثمارات والتنمية العمرانية',
    nameEn: 'Alexandria Investments & Urban Dev.',
    sectorAr: 'تطوير واستثمار عقاري',
    sectorEn: 'Real Estate & Urban Development',
    logo: '/images/Partnerships/الاسكندرية للإستثمارات والتنمية العمرانية.jpg',
    descAr: 'إدارة عقود العملاء وأقساط الوحدات السكنية والتجارية ومراكز تكلفة المشروعات العمرانية.',
    descEn: 'Unit contract management, installment scheduling, project cost centers, and escrow reporting.',
    tagsAr: ['إدارة العقود والأقساط', 'مراكز التكلفة', 'الحسابات'],
    tagsEn: ['Contracts & Installments', 'Cost Centers', 'Accounting'],
  },

  // ── 18. الجيزة العامة للمقاولات والاستثمار العقاري ───────────
  {
    id: 'giza-contracting',
    nameAr: 'الجيزة العامة للمقاولات والاستثمار العقاري',
    nameEn: 'Giza General Contracting & Real Estate',
    sectorAr: 'مقاولات عامة وبنية تحتية',
    sectorEn: 'General Contracting & Infrastructure',
    logo: '/images/Partnerships/الجيزة العامة للمقاولات والإستثمار العقاري.jpg',
    descAr: 'تنظيم المستخلصات المالية للمشاريع، متابعة مقاولي الباطن، وضبط مشتريات وتوريدات المواقع.',
    descEn: 'Site requisition management, contractor billing certs, subcontractor accounting, and machinery tracking.',
    tagsAr: ['المستخلصات', 'المقاولات', 'المشتريات', 'الأصول'],
    tagsEn: ['Certificates', 'Contracting', 'Procurement', 'Assets'],
  },

  // ── 19. مجموعة الرضوان للتجارة والتوريدات ───────────────────
  {
    id: 'al-radwan',
    nameAr: 'مجموعة الرضوان للتجارة والتوريدات',
    nameEn: 'Al-Radwan Trading Group',
    sectorAr: 'تجارة عامة وتوريدات',
    sectorEn: 'General Trading & Supplies',
    logo: '/images/Partnerships/الرضوان.jpg',
    descAr: 'إدارة العمليات التجارية والمستودعات ومتابعة حسابات الموردين والعملاء وحركة البضائع.',
    descEn: 'Streamlining wholesale distribution, warehouse stock control, and automated billing cycles.',
    tagsAr: ['المبيعات', 'المشتريات', 'المخازن', 'الحسابات'],
    tagsEn: ['Sales', 'Purchases', 'Inventory', 'Accounting'],
  },

  // ── 20. الشركة المتحدة للإسكان والتعمير ───────────────────────
  {
    id: 'united-housing',
    nameAr: 'الشركة المتحدة للإسكان والتعمير',
    nameEn: 'United Housing & Development Co.',
    sectorAr: 'إسكان وتعمير وتطوير عقاري',
    sectorEn: 'Housing & Urban Development',
    logo: '/images/Partnerships/المتحدة للاسكان والتعمير.jpg',
    descAr: 'إدارة المشاريع السكنية والتجارية، حسابات الأراضي والأصول، وتخطيط التدفقات النقدية.',
    descEn: 'Residential and commercial portfolio management, asset amortization, and cashflow budgeting.',
    tagsAr: ['التطوير العقاري', 'الأصول', 'الحسابات العامة'],
    tagsEn: ['Real Estate', 'Assets', 'Financials'],
  },

  // ── 21. شركة مطاحن المنهاري للحبوب ────────────────────────────
  {
    id: 'al-menhary',
    nameAr: 'شركة مطاحن المنهاري للحبوب',
    nameEn: 'Al-Menhary Grain Mills Co.',
    sectorAr: 'مطاحن وصناعات غذائية وغلال',
    sectorEn: 'Grain Milling & Food Processing',
    logo: '/images/Partnerships/مطاحن المنهاري للحبوب.jpg',
    descAr: 'متابعة أوزان القبان، حركة استلام وصرف الغلال، وتكاليف تشغيل المطاحن وجودة الإنتاج.',
    descEn: 'Weighbridge automation, silo grain intake & dispatch, milling batch costs, and lab quality control.',
    tagsAr: ['إدارة الصوامع والمطاحن', 'التكاليف', 'المخازن'],
    tagsEn: ['Silos & Milling', 'Costing', 'Warehousing'],
  },
]

export const PARTNERS_LIST = RAW_PARTNERS.map(p => ({
  ...p,
  logo: `${BASE}${p.logo.replace(/^\//, '')}`
}))
