import React, { useState } from 'react'
import PublicLayout from '../../components/layout/PublicLayout'
import { useTranslation } from 'react-i18next'
import useLanguageStore from '../../store/languageStore'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Mail, Phone, Clock, MapPin, CheckCircle2, ArrowLeft, ArrowRight,
  Sparkles, Send, MessageCircle, ExternalLink, Navigation,
} from 'lucide-react'
import Button from '../../components/common/Button'
import { getAssetPath } from '../../utils/assetPath'
import { getEmailLink, getEmailTarget } from '../../utils/emailLink'

const PHONES = ['01022264121', '01022264123', '+20222638031', '+20222638041']
const EMAILS = ['info@usoft-eg.com', 'Sales@usoft-eg.com']
const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/s87mR7HJXAhFhcMJ6'
const GOOGLE_MAPS_EMBED = 'https://maps.google.com/maps?q=30.0800274,31.3149486&t=&z=17&ie=UTF8&iwloc=&output=embed'

function Contact() {
  const { t } = useTranslation('contact')
  const { dir } = useLanguageStore()
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  const schema = z.object({
    name: z.string().min(2, t('validation.required')), company: z.string().min(2, t('validation.required')),
    email: z.string().email(t('validation.email')), phone: z.string().min(7, t('validation.phone')),
    sector: z.string().min(1, t('validation.required')), module: z.string().min(1, t('validation.required')),
    message: z.string().min(10, t('validation.message')),
  })
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })
  const onSubmit = async (formData) => {
    try {
      setErrorMsg('')
      const apiUrl =
        import.meta.env.VITE_CONTACT_API_URL ||
        (typeof window !== 'undefined' && window.location.hostname.includes('github.io')
          ? 'https://u-soft-website.vercel.app/api/contact'
          : '/api/contact')

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send message')
      }
      setSubmitted(true)
    } catch (err) {
      console.error('Contact form submission error:', err)
      setErrorMsg(
        dir === 'rtl'
          ? 'تعذر إرسال الرسالة في الوقت الحالي. يرجى المحاولة مرة أخرى أو التواصل معنا عبر الهاتف/واتساب.'
          : 'Unable to send message at this time. Please try again or contact us via phone/WhatsApp.'
      )
    }
  }
  const sectors = t('sectors', { returnObjects: true })
  const modules = t('modules', { returnObjects: true })
  const fields = t('fields', { returnObjects: true })
  const ph = t('placeholders', { returnObjects: true })
  const inputClass = (error) =>
    `form-input w-full rounded-xl border bg-white dark:bg-[#070D18] text-[#172033] dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 py-3 text-sm outline-none transition duration-300 focus:border-[#2F80ED] dark:focus:border-[#38BDF8] focus:ring-4 focus:ring-[#2F80ED]/10 dark:focus:ring-[#38BDF8]/15 ${
      error
        ? 'border-red-400 dark:border-red-500/70 focus:border-red-500 dark:focus:border-red-400'
        : 'border-[#E4E7EC] dark:border-[#1E2E48] hover:border-slate-300 dark:hover:border-slate-600'
    }`

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute -end-24 -top-24 h-96 w-96 animate-[spin_30s_linear_infinite] rounded-full border border-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 start-0 h-80 w-80 animate-pulse rounded-full bg-[#38BDF8]/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className={`${dir === 'rtl' ? 'text-right' : 'text-left'} animate-fade-up`}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-white/85">
              <Sparkles size={14} className="text-[#38BDF8]" />{t('heroBadge')}
            </span>
            <h1 className="mb-5 text-white font-black leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}>{t('heroTitle')}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/72">{t('heroSubtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={getEmailLink(EMAILS[0])}
                target={getEmailTarget()}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-3 font-bold text-white hover:text-black transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl dark:shadow-[0_0_24px_rgba(56,189,248,0.25)]"
              >
                <Mail size={18} />{t('emailUs')}
              </a>
              <a href={`tel:${PHONES[0].replaceAll(' ', '')}`} className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                <Phone size={17} />{t('callUs')}
              </a>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-3 animate-slide-right">
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/20 shadow-2xl">
              <img src={getAssetPath('/images/contact/contact-hero.jpg')} alt={t('heroImageAlt')} className="h-56 w-full object-cover transition duration-700 hover:scale-110" />
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/20 shadow-2xl">
              <img src={getAssetPath('/images/contact/team.jpg')} alt={t('teamImageAlt')} className="h-56 w-full object-cover transition duration-700 hover:scale-110" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070D18] py-16">
        <div className="pointer-events-none absolute end-0 top-0 h-72 w-72 rounded-full bg-[#EBF2FF] dark:bg-[#38BDF8]/5 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED] dark:text-[#38BDF8]">{t('contactEyebrow')}</p>
            <h2 className="section-title dark:text-white">{t('contactTitle')}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {/* Email card */}
            <div className="group rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-[#F5F7FA] dark:bg-[#0F1B2F] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#2F80ED]/40 dark:hover:border-[#38BDF8]/40 hover:bg-white dark:hover:bg-[#132238] hover:shadow-card-lg dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBF2FF] dark:bg-[#172A45] border border-transparent dark:border-[#1E3A5F] text-[#2F80ED] dark:text-[#38BDF8] transition duration-300 group-hover:rotate-6 group-hover:bg-[#2F80ED] dark:group-hover:bg-[#38BDF8] group-hover:text-white dark:group-hover:text-[#0F1B2F]">
                <Mail size={22} />
              </div>
              <h3 className="mb-3 font-bold text-[#173B67] dark:text-white">{t('cards.emailTitle')}</h3>
              <div className="space-y-2">
                {EMAILS.map((email) => (
                  <a
                    key={email}
                    href={getEmailLink(email)}
                    target={getEmailTarget()}
                    rel="noopener noreferrer"
                    className="block text-start text-sm text-[#667085] dark:text-slate-300 transition duration-200 hover:text-[#2F80ED] dark:hover:text-[#38BDF8] hover:underline"
                  >
                    <span dir="ltr" className="inline-block">{email}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Phone card */}
            <div className="group rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-[#F5F7FA] dark:bg-[#0F1B2F] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#2F80ED]/40 dark:hover:border-[#38BDF8]/40 hover:bg-white dark:hover:bg-[#132238] hover:shadow-card-lg dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBF2FF] dark:bg-[#172A45] border border-transparent dark:border-[#1E3A5F] text-[#2F80ED] dark:text-[#38BDF8] transition duration-300 group-hover:rotate-6 group-hover:bg-[#2F80ED] dark:group-hover:bg-[#38BDF8] group-hover:text-white dark:group-hover:text-[#0F1B2F]">
                <Phone size={22} />
              </div>
              <h3 className="mb-3 font-bold text-[#173B67] dark:text-white">{t('cards.phoneTitle')}</h3>
              <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-1">
                {PHONES.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replaceAll(' ', '')}`}
                    className="block text-start text-sm font-medium text-[#667085] dark:text-slate-300 transition duration-200 hover:text-[#2F80ED] dark:hover:text-[#38BDF8] hover:underline font-mono"
                  >
                    <span dir="ltr" className="inline-block">{phone}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location card */}
            <div className="group rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-[#F5F7FA] dark:bg-[#0F1B2F] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#2F80ED]/40 dark:hover:border-[#38BDF8]/40 hover:bg-white dark:hover:bg-[#132238] hover:shadow-card-lg dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBF2FF] dark:bg-[#172A45] border border-transparent dark:border-[#1E3A5F] text-[#2F80ED] dark:text-[#38BDF8] transition duration-300 group-hover:rotate-6 group-hover:bg-[#2F80ED] dark:group-hover:bg-[#38BDF8] group-hover:text-white dark:group-hover:text-[#0F1B2F]">
                <MapPin size={22} />
              </div>
              <h3 className="mb-3 font-bold text-[#173B67] dark:text-white">{t('cards.locationTitle')}</h3>
              <p className="text-sm leading-relaxed text-[#667085] dark:text-slate-300">{t('contactInfo.address')}</p>
              <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#173B67] dark:text-slate-200">
                <Clock size={14} className="text-[#2F80ED] dark:text-[#38BDF8]" />
                {t('contactInfo.hours')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + office visual */}
      <section className="relative overflow-hidden bg-[#F5F7FA] dark:bg-[#070D18] py-20">
        <div className="pointer-events-none absolute -start-32 bottom-0 h-80 w-80 rounded-full bg-[#38BDF8]/10 dark:bg-[#38BDF8]/5 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className={`${dir === 'rtl' ? 'text-right' : 'text-left'} animate-slide-left space-y-6`}>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED] dark:text-[#38BDF8]">{t('visitEyebrow')}</p>
              <h2 className="section-title mb-4 dark:text-white">{t('visitTitle')}</h2>
              <p className="text-lg leading-relaxed text-[#667085] dark:text-slate-300">{t('visitText')}</p>
            </div>

            {/* Office photo */}
            <div className="group overflow-hidden rounded-[2rem] border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-3 shadow-card-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <img
                src={getAssetPath('/images/contact/Office.jpg')}
                alt={t('officeImageAlt')}
                className="h-64 w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Interactive Google Map */}
            <div className="overflow-hidden rounded-2xl border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] shadow-card-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="relative h-72 w-full bg-slate-100 dark:bg-[#070D18]">
                <iframe
                  title={dir === 'rtl' ? 'موقع شركة USoft على خرائط Google' : 'USoft Location on Google Maps'}
                  src={GOOGLE_MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border-t border-[#E4E7EC] dark:border-[#1E2E48] bg-[#F8FAFC] dark:bg-[#0B1526]">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#173B67] dark:text-slate-200">
                  <MapPin size={18} className="text-[#2F80ED] dark:text-[#38BDF8] shrink-0" />
                  <span>{t('contactInfo.address')}</span>
                </div>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#2F80ED] hover:bg-[#173B67] dark:bg-[#38BDF8] dark:hover:bg-white dark:text-[#0F1B2F] px-4 py-2 text-xs font-bold text-white shadow-sm transition duration-300 hover:shadow-md dark:shadow-[0_0_16px_rgba(56,189,248,0.25)]"
                >
                  <Navigation size={13} />
                  <span>{dir === 'rtl' ? 'فتح في خرائط Google' : 'Open in Google Maps'}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] border border-[#E4E7EC] dark:border-[#1E2E48] bg-white dark:bg-[#0F1B2F] p-6 shadow-card-lg dark:shadow-[0_12px_36px_rgba(0,0,0,0.45)] animate-fade-up sm:p-8">
            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F7EE] dark:bg-emerald-950/50 border border-emerald-500/20 animate-bounce">
                  <CheckCircle2 size={48} className="text-[#27AE60] dark:text-emerald-400" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-[#172033] dark:text-white">{t('successTitle')}</h3>
                <p className="max-w-md text-[#667085] dark:text-slate-300">{t('successMessage')}</p>
              </div>
            ) : (
              <>
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black text-[#172033] dark:text-white">{t('formTitle')}</h2>
                    <p className="mt-2 text-sm text-[#667085] dark:text-slate-300">{t('formSubtitle')}</p>
                  </div>
                  <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-[#EBF2FF] dark:bg-[#172A45] border border-transparent dark:border-[#1E3A5F] text-[#2F80ED] dark:text-[#38BDF8] sm:flex">
                    <Send size={21} />
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {['name', 'company', 'email', 'phone'].map((field) => (
                    <div key={field}>
                      <label className="mb-1.5 block text-sm font-semibold text-[#344054] dark:text-slate-200">
                        {fields[field]} *
                      </label>
                      <input
                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                        {...register(field)}
                        className={inputClass(errors[field])}
                        placeholder={ph[field]}
                      />
                      {errors[field] && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors[field].message}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#344054] dark:text-slate-200">
                      {fields.sector} *
                    </label>
                    <select {...register('sector')} className={inputClass(errors.sector)}>
                      <option value="" className="dark:bg-[#0F1B2F] dark:text-slate-400">{ph.sector}</option>
                      {sectors.map((value, i) => (
                        <option key={i} value={value} className="dark:bg-[#0F1B2F] dark:text-slate-100">
                          {value}
                        </option>
                      ))}
                    </select>
                    {errors.sector && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.sector.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#344054] dark:text-slate-200">
                      {fields.module} *
                    </label>
                    <select {...register('module')} className={inputClass(errors.module)}>
                      <option value="" className="dark:bg-[#0F1B2F] dark:text-slate-400">{ph.module}</option>
                      {modules.map((value, i) => (
                        <option key={i} value={value} className="dark:bg-[#0F1B2F] dark:text-slate-100">
                          {value}
                        </option>
                      ))}
                    </select>
                    {errors.module && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.module.message}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-semibold text-[#344054] dark:text-slate-200">
                      {fields.message}
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className={`${inputClass(errors.message)} resize-none`}
                      placeholder={ph.message}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.message.message}</p>}
                  </div>
                  {errorMsg && (
                    <div className="sm:col-span-2 rounded-xl border border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/30 p-3.5 text-sm text-red-600 dark:text-red-400">
                      {errorMsg}
                    </div>
                  )}
                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      variant="accent"
                      fullWidth
                      size="lg"
                      loading={isSubmitting}
                      className="dark:bg-[#38BDF8] dark:text-[#0F1B2F] dark:hover:bg-white dark:hover:text-[#0F1B2F] dark:shadow-[0_0_24px_rgba(56,189,248,0.25)] font-bold transition-all duration-300 shadow-md"
                    >
                      {t('submitBtn')}
                      <ArrowIcon size={18} />
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Quick contact */}
      <section className="hero-gradient py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <MessageCircle size={34} className="mx-auto mb-4 text-[#38BDF8]" />
          <h2 className="mb-3 text-3xl font-black text-white">{t('bottomTitle')}</h2>
          <p className="mb-7 text-white/70">{t('bottomSubtitle')}</p>
          <a
            href={getEmailLink(EMAILS[1])}
            target={getEmailTarget()}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#38BDF8] px-7 py-3 font-bold text-white hover:text-black transition hover:-translate-y-1 hover:bg-white hover:shadow-xl dark:shadow-[0_0_24px_rgba(56,189,248,0.3)]"
          >
            <Mail size={18} />{EMAILS[1]}
          </a>
        </div>
      </section>
    </PublicLayout>
  )
}

export default Contact
