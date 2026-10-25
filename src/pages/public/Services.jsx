import React from 'react'
import PublicLayout from '../../components/layout/PublicLayout'
import { useTranslation } from 'react-i18next'
import useLanguageStore from '../../store/languageStore'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import { getAssetPath } from '../../utils/assetPath'
import {
  HeadphonesIcon, Wrench, GraduationCap, BarChart2, Plug,
  ArrowRight, ArrowLeft, CheckCircle2, Sparkles, ShieldCheck, MessageCircle,
} from 'lucide-react'

const SERVICE_ICONS = [HeadphonesIcon, Wrench, GraduationCap, BarChart2, Plug]
const SERVICE_IMAGES = [
  getAssetPath('/images/services/Servicessupport.jpg'),
  getAssetPath('/images/services/ServicesImplementation.jpg'),
  getAssetPath('/images/services/ServicesTraining.jpg'),
  getAssetPath('/images/services/ServicesReporting.jpg'),
  getAssetPath('/images/services/ServicesIntegration.jpg'),
]

function Services() {
  const { t } = useTranslation('services')
  const { dir } = useLanguageStore()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  const services = t('services', { returnObjects: true })
  const process = t('process', { returnObjects: true })

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute -end-24 -top-28 h-96 w-96 animate-[spin_30s_linear_infinite] rounded-full border border-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 start-0 h-80 w-80 animate-pulse rounded-full bg-[#38BDF8]/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className={`${dir === 'rtl' ? 'text-right' : 'text-left'} animate-fade-up`}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-white/85"><Sparkles size={14} className="text-[#38BDF8]" />{t('heroBadge')}</span>
            <h1 className="mb-5 text-white font-black leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}>{t('heroTitle')}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/72">{t('heroSubtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link to="/contact"><Button size="lg" variant="accent">{t('heroCta')}<ArrowIcon size={18} /></Button></Link><span className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/80"><ShieldCheck size={17} className="text-[#38BDF8]" />{t('heroTrust')}</span></div>
          </div>
          <div className="grid grid-cols-2 gap-3 animate-slide-right">
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/20 shadow-2xl"><img src={getAssetPath('/images/services/ServicesHero1.jpg')} alt={t('heroImageAlt')} className="h-48 w-full object-cover transition duration-700 hover:scale-110 sm:h-64" /></div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/20 shadow-2xl"><img src={getAssetPath('/images/services/ServicesHero2.jpg')} alt={t('heroImageAlt')} className="h-48 w-full object-cover transition duration-700 hover:scale-110 sm:h-64" /></div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="relative overflow-hidden bg-white py-16">
        <div className="pointer-events-none absolute end-0 top-0 h-72 w-72 rounded-full bg-[#EBF2FF] blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="group overflow-hidden rounded-[2rem] bg-[#F5F7FA] p-3 shadow-card-lg animate-slide-left"><img src={getAssetPath('/images/services/ServicesOverView.jpg')} alt={t('overviewImageAlt')} className="h-72 w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-105" /></div>
          <div className={`${dir === 'rtl' ? 'text-right' : 'text-left'} animate-slide-right`}><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED]">{t('overviewEyebrow')}</p><h2 className="section-title mb-4">{t('overviewTitle')}</h2><p className="text-lg leading-relaxed text-[#667085]">{t('overviewText')}</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{Object.values(t('overviewPoints', { returnObjects: true })).map((point, i) => <div key={i} className="flex items-center gap-2 text-sm font-semibold text-[#173B67]"><CheckCircle2 size={17} className="text-[#27AE60]" />{point}</div>)}</div></div>
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden bg-[#F5F7FA] py-20">
        <div className="pointer-events-none absolute -start-32 top-28 h-72 w-72 rounded-full bg-[#38BDF8]/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED]">{t('servicesEyebrow')}</p><h2 className="section-title mb-4">{t('servicesTitle')}</h2><p className="section-subtitle mx-auto">{t('servicesSubtitle')}</p></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {Object.entries(services).map(([key, service], i) => { const Icon = SERVICE_ICONS[i] ?? CheckCircle2; return <article key={key} className="group overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-[#2F80ED]/40 hover:shadow-card-lg animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}><div className="relative overflow-hidden"><img src={SERVICE_IMAGES[i]} alt={service.title} className="h-44 w-full object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-[#173B67]/75 to-transparent" /><div className="absolute bottom-4 start-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-white backdrop-blur-md transition duration-500 group-hover:rotate-6 group-hover:bg-[#2F80ED]"><Icon size={22} /></div></div><div className="p-6"><h3 className="mb-2 text-lg font-bold text-[#172033]">{service.title}</h3><p className="mb-5 text-sm leading-relaxed text-[#667085]">{service.desc}</p><ul className="space-y-2">{service.features.map((feature, fi) => <li key={fi} className="flex items-start gap-2 text-xs leading-relaxed text-[#667085]"><CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 text-[#27AE60]" />{feature}</li>)}</ul></div></article> })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="mx-auto mb-12 max-w-2xl text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED]">{t('processEyebrow')}</p><h2 className="section-title mb-4">{t('processTitle')}</h2><p className="section-subtitle mx-auto">{t('processSubtitle')}</p></div><div className="relative grid gap-8 md:grid-cols-4"><div className="absolute start-[12%] end-[12%] top-8 hidden h-px bg-gradient-to-r from-[#2F80ED] via-[#38BDF8] to-[#2F80ED] md:block" aria-hidden="true" />{Object.values(process).map((step, i) => <div key={i} className="group relative text-center animate-fade-up" style={{ animationDelay: `${i * 0.12}s` }}><div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#173B67] text-xl font-black text-white shadow-xl transition duration-500 group-hover:scale-110 group-hover:bg-[#2F80ED]">0{i + 1}</div><h3 className="mb-2 font-bold text-[#173B67]">{step.title}</h3><p className="text-sm leading-relaxed text-[#667085]">{step.desc}</p></div>)}</div></div></section>

      {/* CTA */}
      <section className="hero-gradient relative overflow-hidden py-20 text-center"><div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 animate-pulse rounded-full bg-[#38BDF8]/10 blur-3xl" aria-hidden="true" /><div className="relative mx-auto max-w-2xl px-4"><MessageCircle size={34} className="mx-auto mb-4 text-[#38BDF8]" /><h2 className="mb-3 text-3xl font-black text-white">{t('ctaTitle')}</h2><p className="mb-8 text-white/70">{t('ctaSubtitle')}</p><Link to="/contact"><Button size="lg" variant="accent">{t('ctaBtn')}<ArrowIcon size={18} /></Button></Link></div></section>
    </PublicLayout>
  )
}

export default Services
