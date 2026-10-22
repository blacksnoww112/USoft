import React from 'react'
import PublicLayout from '../../components/layout/PublicLayout'
import { useTranslation } from 'react-i18next'
import useLanguageStore from '../../store/languageStore'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  BarChart2,
  Layers,
  Target,
  Settings2,
  Rocket,
  Headphones,
} from 'lucide-react'

const STATS = [
  { valueAr: '+150', valueEn: '150+', labelAr: 'عميل يثق بنا', labelEn: 'Clients who trust us' },
  { valueAr: '12+', valueEn: '12+', labelAr: 'وحدة متكاملة', labelEn: 'Integrated modules' },
  { valueAr: '99.9%', valueEn: '99.9%', labelAr: 'نسبة التشغيل', labelEn: 'System uptime' },
  { valueAr: 'الأحد - الخميس', valueEn: 'Sun - Thu', labelAr: 'دعم فني', labelEn: 'Technical support' },
]

const MISSION_ICONS = [Layers, BarChart2, CheckCircle2, Users]
const JOURNEY_ICONS = [Target, Settings2, Rocket, Headphones]

function About() {
  const { t } = useTranslation('about')
  const { dir } = useLanguageStore()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  const missionItems = Object.values(t('mission', { returnObjects: true }))
  const journeyItems = Object.values(t('journey', { returnObjects: true }))

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-24 text-center">
        <div className="pointer-events-none absolute -end-20 -top-20 h-72 w-72 animate-[spin_24s_linear_infinite] rounded-full border border-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -start-16 h-64 w-64 animate-pulse rounded-full bg-[#38BDF8]/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4">
          <span className="mb-5 inline-flex animate-fade-in rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            {t('heroBadge')}
          </span>
          <h1 className="mb-4 animate-fade-up text-white font-black leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.6rem)' }}>
            {t('heroTitle')}
          </h1>
          <p className="animate-fade-up text-lg leading-relaxed text-white/70 delay-100">{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className={`${dir === 'rtl' ? 'text-right' : 'text-left'} animate-slide-left`}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EBF2FF] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#173B67]">{t('visionTitle')}</div>
            <h2 className="section-title mb-4">{t('visionTitle')}</h2>
            <p className="text-lg leading-relaxed text-[#667085]">{t('visionText')}</p>
            <div className="mt-8 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#2F80ED]/40 hover:shadow-card-lg">
              <p className="text-sm font-semibold leading-relaxed text-[#173B67]">{t('visionQuote')}</p>
            </div>
          </div>

          <div className={`${dir === 'rtl' ? 'text-right' : 'text-left'} animate-slide-right`}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EBF2FF] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#173B67]">{t('missionTitle')}</div>
            <h2 className="section-title mb-6">{t('missionTitle')}</h2>
            <ul className="space-y-4">
              {missionItems.map((item, i) => {
                const Icon = MISSION_ICONS[i] ?? CheckCircle2
                return (
                  <li key={i} className="group flex items-start gap-3 animate-fade-up rounded-xl p-2 transition-all duration-300 hover:-translate-x-1 hover:bg-[#F5F7FA]" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#EBF2FF] transition duration-300 group-hover:rotate-6 group-hover:bg-[#2F80ED]">
                      <Icon size={16} className="text-[#2F80ED] transition-colors group-hover:text-white" aria-hidden="true" />
                    </div>
                    <span className="leading-relaxed text-[#667085]">{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED]">{t('journeyEyebrow')}</p>
            <h2 className="section-title mb-4">{t('journeyTitle')}</h2>
            <p className="section-subtitle mx-auto">{t('journeySubtitle')}</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute bottom-8 start-5 top-8 w-px bg-gradient-to-b from-[#2F80ED] via-[#38BDF8] to-transparent md:start-1/2 md:-translate-x-1/2" aria-hidden="true" />
            <div className="space-y-10 md:space-y-0">
              {journeyItems.map((item, i) => {
                const Icon = JOURNEY_ICONS[i] ?? CheckCircle2
                const isEven = i % 2 === 0
                return (
                  <div key={i} className={`relative flex items-start gap-6 md:min-h-[150px] md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full ps-14 md:w-[calc(50%-2.5rem)] md:ps-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="group rounded-2xl border border-[#E4E7EC] bg-white p-6 text-left shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-[#2F80ED]/40 hover:shadow-card-lg rtl:text-right">
                        <div className={`mb-3 flex items-center gap-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="text-xs font-black tracking-[0.2em] text-[#2F80ED]">0{i + 1}</span>
                          <h3 className="font-bold text-[#173B67]">{item.title}</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-[#667085]">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute start-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#F5F7FA] bg-[#173B67] text-white shadow-lg transition duration-500 hover:scale-125 hover:bg-[#2F80ED] md:start-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                      <Icon size={16} aria-hidden="true" />
                    </div>
                    <div className="hidden w-[calc(50%-2.5rem)] md:block" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED]">{t('statsEyebrow')}</p>
            <h2 className="section-title">{t('statsTitle')}</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="group rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5 text-center shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-[#2F80ED]/40 hover:bg-white hover:shadow-card-lg md:p-6" style={{ animationDelay: `${i * 0.1}s` }}>
                <p className="mb-2 text-2xl font-black text-[#173B67] transition duration-500 group-hover:scale-105 md:text-4xl">{dir === 'rtl' ? stat.valueAr : stat.valueEn}</p>
                <p className="text-xs text-[#667085] md:text-sm">{dir === 'rtl' ? stat.labelAr : stat.labelEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 animate-fade-up text-3xl font-black text-white">{t('ctaTitle')}</h2>
          <p className="mb-8 animate-fade-up text-lg text-white/70 delay-100">{t('ctaSubtitle')}</p>
          <Link to="/contact"><Button size="lg" variant="accent">{t('ctaBtn')} <ArrowIcon size={18} /></Button></Link>
        </div>
      </section>
    </PublicLayout>
  )
}

export default About
