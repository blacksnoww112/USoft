import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowLeft, ArrowRight,
  BarChart3, Users, ShoppingCart, Package, FileText,
  CheckCircle2, Building2, Factory, Briefcase, Truck, Globe2,
  TrendingUp, Eye, GitBranch, Languages, Scale,
} from 'lucide-react'
import useLanguageStore from '../../store/languageStore'
import PublicLayout from '../../components/layout/PublicLayout'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'


/* ─── capability icons ─── */
const CAP_ICONS = {
  accounting: BarChart3,
  sales:      Users,
  purchases:  ShoppingCart,
  inventory:  Package,
  hr:         Briefcase,
  reports:    FileText,
}

const WHY_ICONS = {
  unified:   Eye,
  data:      TrendingUp,
  scale:     Scale,
  branches:  GitBranch,
  bilingual: Languages,
}

const INDUSTRY_ICONS = [Building2, Factory, Briefcase, Truck, Globe2]

const PARTNER_LOGOS = [
  '/images/partners/partner-1.svg',
  '/images/partners/partner-2.svg',
  '/images/partners/partner-3.svg',
  '/images/partners/partner-4.svg',
  '/images/partners/partner-5.svg',
  '/images/partners/partner-6.svg',
  '/images/partners/partner-1.svg',
  '/images/partners/partner-3.svg',
]

const PARTNER_IMAGES = [
  '/images/partners/showcase-1.jpg',
  '/images/partners/showcase-2.jpg',
  '/images/partners/showcase-3.jpg',
  '/images/partners/showcase-4.jpg',
]

/* ─── reusable section wrapper ─── */
function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
function Home() {
  const { t }     = useTranslation('home')
  const { t: tc } = useTranslation('common')
  const { dir }   = useLanguageStore()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <PublicLayout>
      {/* ── 1. HERO: text on the right, image on the left ───────── */}
      <section className="hero-gradient relative flex min-h-[92vh] items-center overflow-hidden" aria-labelledby="hero-heading">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -end-32 -top-32 h-96 w-96 rounded-full bg-[#2F80ED]/15 blur-3xl" />
          <div className="absolute start-[8%] top-[18%] h-32 w-32 animate-[bounce_8s_ease-in-out_infinite] rounded-full bg-[#38BDF8]/20 blur-xl" />
          <div className="absolute bottom-[8%] end-[12%] h-24 w-24 animate-[bounce_10s_ease-in-out_-3s_infinite] rounded-full bg-white/10 blur-lg" />
          <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Image on the left */}
          <div className="relative order-1 animate-slide-right delay-200">
            <div className="absolute -inset-5 animate-pulse rounded-[2rem] bg-[#2F80ED]/20 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
              <img
                src="/images/HeroSection.jpg"
                alt={dir === 'rtl' ? 'معاينة واجهة منصة USoft' : 'USoft platform preview'}
                className="block aspect-[4/3] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute bottom-6 start-6 rounded-xl border border-white/20 bg-[#173B67]/85 px-4 py-3 text-white shadow-xl backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/60"> USoft</p>
                <p className="mt-1 text-sm font-bold">{t('heroVisualCaption')}</p>
              </div>
            </div>
          </div>

          {/* Text on the right */}
          <div className={`relative z-10 order-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/85">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#38BDF8]" aria-hidden="true" />
              {t('heroBadge')}
            </div>
            <h1 id="hero-heading" className="mb-6 mt-6 animate-fade-up text-white font-black leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)' }}>
              {t('heroTitle')}
            </h1>
            <p className="max-w-xl animate-fade-up text-lg leading-relaxed text-white/72 delay-100">{t('heroSubtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up delay-200">
              <Link to="/contact"><Button size="lg" variant="accent">{t('primaryCta')}<ArrowIcon size={18} aria-hidden="true" /></Button></Link>
              <Link to="/solutions"><button className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10">{t('secondaryCta')}</button></Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/55">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#38BDF8]" />{t('heroPoints.unified')}</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#38BDF8]" />{t('heroPoints.decisions')}</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#38BDF8]" />{t('heroPoints.scale')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PARTNERS: moving logo strip + 2x2 image box ─────── */}
      <Section id="partners" className="bg-white py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#2F80ED]">
              {t('partners.eyebrow')}
            </p>
            <h2 className="section-title mb-4">
              {t('partners.title')}
            </h2>
            <p className="section-subtitle max-w-xl">
              {t('partners.subtitle')}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/partnerships">
                <Button size="md" variant="primary">
                  {t('partners.viewAll')}
                  <ArrowIcon size={16} aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E4E7EC] bg-[#F5F7FA] p-3 shadow-card-lg dark:border-[#1E2E48] dark:bg-[#0B1526]">
            <div className="grid grid-cols-2 gap-3">
              {PARTNER_IMAGES.map((image, index) => (
                <div key={image} className="group relative aspect-[1.15] overflow-hidden rounded-2xl bg-[#E8EEF7] dark:bg-[#172A46]">
                  <img
                    src={image}
                    alt={t('partners.imageAlt', { number: index + 1 })}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173B67]/50 via-transparent to-transparent opacity-80" />
                </div>
              ))}
            </div>
            <p className="px-2 pb-1 pt-3.5 text-center text-xs text-[#667085] dark:text-[#94A3B8]">
              {t('partners.galleryCaption')}
            </p>
          </div>
        </div>

        {/* Full-Width Infinite Moving Companies Strip */}
        <div className="mt-14 pt-8 border-t border-[#E4E7EC]/60 dark:border-[#1E2E48]/60">
          <div className="mb-4 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#667085] dark:text-[#94A3B8]">
              {dir === 'rtl' ? 'شركات ومؤسسات تعتمد على حلول USoft' : 'Companies & enterprises powered by USoft'}
            </span>
          </div>

          <div
            className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] group"
            dir="ltr"
          >
            <div className="flex w-max py-2">
              {/* Track 1 */}
              <div className="flex shrink-0 items-center gap-5 pe-5 animate-marquee group-hover:[animation-play-state:paused]">
                {PARTNER_LOGOS.map((logo, index) => {
                  const partner = t(`partners.items.${index % 8}`, { returnObjects: true })
                  return (
                    <Link
                      key={`t1-${logo}-${index}`}
                      to="/partnerships"
                      className="partner-logo-card"
                    >
                      <div className="flex h-10 w-24 items-center justify-center rounded-lg bg-[#F8FAFC] p-1 transition-all duration-300 group-hover:bg-[#EBF2FF] dark:bg-[#1E2E48]/60">
                        <img
                          src={logo}
                          alt={dir === 'rtl' ? partner.ar : partner.en}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col text-start">
                        <span className="text-xs font-bold text-[#172033] dark:text-white leading-tight">
                          {dir === 'rtl' ? partner.ar : partner.en}
                        </span>
                        <span className="text-[10px] font-medium text-[#2F80ED] leading-tight mt-0.5">
                          {dir === 'rtl' ? partner.sector : partner.sectorEn}
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Track 2 */}
              <div className="flex shrink-0 items-center gap-5 pe-5 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
                {PARTNER_LOGOS.map((logo, index) => {
                  const partner = t(`partners.items.${index % 8}`, { returnObjects: true })
                  return (
                    <Link
                      key={`t2-${logo}-${index}`}
                      to="/partnerships"
                      className="partner-logo-card"
                    >
                      <div className="flex h-10 w-24 items-center justify-center rounded-lg bg-[#F8FAFC] p-1 transition-all duration-300 group-hover:bg-[#EBF2FF] dark:bg-[#1E2E48]/60">
                        <img
                          src={logo}
                          alt={dir === 'rtl' ? partner.ar : partner.en}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col text-start">
                        <span className="text-xs font-bold text-[#172033] dark:text-white leading-tight">
                          {dir === 'rtl' ? partner.ar : partner.en}
                        </span>
                        <span className="text-[10px] font-medium text-[#2F80ED] leading-tight mt-0.5">
                          {dir === 'rtl' ? partner.sector : partner.sectorEn}
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 3. CORE CAPABILITIES ─────────────────────────────── */}
      <Section id="capabilities" className="bg-[#F5F7FA]">
        <div className={`text-center mb-12 ${dir === 'rtl' ? '' : ''}`}>
          <h2 className="section-title mb-3">{t('capabilitiesTitle')}</h2>
          <p className="section-subtitle mx-auto text-center">{t('capabilitiesSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(t('capabilities', { returnObjects: true })).map(([key, cap], i) => {
            const Icon = CAP_ICONS[key] ?? BarChart3
            return (
              <Card
                key={key}
                hover
                className={`animate-fade-up flex flex-col`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF2FF] flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#2F80ED]" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[#172033] text-base mb-1.5">{cap.title}</h3>
                <p className="text-sm text-[#667085] leading-relaxed flex-1">{cap.desc}</p>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-1 text-[#2F80ED] text-sm font-semibold mt-4 hover:underline"
                >
                  {tc('learnMore')}
                  <ArrowIcon size={14} aria-hidden="true" />
                </Link>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* ── 4.  USoft IN NUMBERS ───────────────────── */}
      <Section id="showcase" className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#2F80ED]">{t('showcase.eyebrow')}</p>
          <h2 className="section-title mb-4">{t('showcase.title')}</h2>
          <p className="section-subtitle mx-auto">{t('showcase.subtitle')}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {Object.entries(t('showcase.stats', { returnObjects: true })).map(([key, stat], index) => (
            <div key={key} className="showcase-stat group rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#2F80ED]/40 hover:bg-white hover:shadow-card-lg" style={{ animationDelay: `${index * 0.12}s` }}>
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EBF2FF] text-2xl font-black text-[#2F80ED] transition duration-500 group-hover:rotate-6 group-hover:scale-110">{stat.icon}</div>
              <p className="text-4xl font-black text-[#173B67]">{stat.value}</p>
              <p className="mt-2 font-semibold text-[#667085]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 5. WHY USOFT ─────────────────────────────────────── */}
      <Section id="why" className="bg-[#F5F7FA]">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">{t('whyTitle')}</h2>
          <p className="section-subtitle mx-auto">{t('whySubtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(t('why', { returnObjects: true })).map(([key, item], i) => {
            const Icon = WHY_ICONS[key] ?? CheckCircle2
            return (
              <div
                key={key}
                className="group flex gap-4 bg-white rounded-xl p-5 border border-[#E4E7EC] shadow-card animate-fade-up transition-all duration-500 hover:-translate-y-2 hover:border-[#2F80ED]/40 hover:shadow-card-lg"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#EBF2FF] transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#2F80ED]">
                  <Icon size={18} className="text-[#2F80ED] transition-colors duration-500 group-hover:text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#172033] text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-[#667085] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* ── 6. INDUSTRIES ────────────────────────────────────── */}
      <Section id="industries" className="bg-white">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">{t('industriesTitle')}</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.values(t('industries', { returnObjects: true })).map((label, i) => {
            const Icon = INDUSTRY_ICONS[i] ?? Building2
            return (
              <div
                key={i}
                className="group flex min-w-[140px] cursor-default flex-col items-center gap-3 rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] px-8 py-6 animate-fade-up transition-all duration-500 hover:-translate-y-2 hover:border-[#2F80ED] hover:bg-[#EBF2FF] hover:shadow-card-lg"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E7EC] flex items-center justify-center group-hover:bg-[#2F80ED] transition-colors duration-200">
                  <Icon size={22} className="text-[#667085] group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-[#172033] text-center">{label}</span>
              </div>
            )
          })}
        </div>
      </Section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────── */}
      <section
        className="hero-gradient py-20"
        aria-labelledby="final-cta-heading"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            id="final-cta-heading"
            className="text-white font-black mb-4 animate-fade-up"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
          >
            {t('finalCtaTitle')}
          </h2>
          <p className="text-white/70 text-lg mb-8 animate-fade-up delay-100">
            {t('finalCtaSubtitle')}
          </p>
          <Link to="/contact">
            <Button size="lg" variant="accent" className="animate-fade-up delay-200">
              {t('finalCtaBtn')}
              <ArrowIcon size={18} aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}

export default Home
