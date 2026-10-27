import React, { useState, useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, MessageSquare, PhoneCall } from 'lucide-react'
import useLanguageStore from '../../store/languageStore'

const AR_MESSAGE = 'مرحباً USoft، أود الاستفسار عن تفاصيل حلولكم البرمجية'
const EN_MESSAGE = 'Hello USoft, I would like to inquire about your software solutions.'

const CONTACT_NUMBERS = [
  {
    id: 'sales',
    phone: '201022264121',
    display: '01022264121',
    formatted: '+20 102 226 4121',
    nameAr: 'المبيعات وخدمة العملاء',
    nameEn: 'Sales & Customer Care',
    descAr: 'استفسارات الأنظمة والأسعار وحجز العروض',
    descEn: 'Software solutions, pricing & demos',
  },
  {
    id: 'support',
    phone: '201022411116',
    display: '201022411116',
    formatted: '+20 102 241 1116',
    nameAr: 'الدعم الفني والاستشارات',
    nameEn: 'Technical Support & Consulting',
    descAr: 'الاستشارات التقنية والمساعدة الفورية',
    descEn: 'Technical inquiries & assistance',
  },
]

export default function WhatsAppButton() {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef(null)

  const message = isRtl ? AR_MESSAGE : EN_MESSAGE
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const openWhatsApp = (phone) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  return (
    <aside
      ref={popupRef}
      className="fixed bottom-6 end-6 z-50 flex flex-col items-end"
      aria-label={isRtl ? 'زر محادثة واتساب' : 'WhatsApp Chat Button'}
    >
      {/* Contact Options Popup Card */}
      {isOpen && (
        <div
          className={`mb-3 w-80 sm:w-88 rounded-3xl border border-[#E4E7EC] dark:border-slate-800 bg-white dark:bg-[#0F1B2F] shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right animate-fade-up ${
            isRtl ? 'text-right' : 'text-left'
          }`}
        >
          {/* Header */}
          <div className="bg-linear-to-r from-[#128C7E] to-[#075E54] p-4 text-white relative">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                  <svg
                    className="w-6 h-6 fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.73 7.34C8.54 7.34 8.24 7.41 7.99 7.68C7.74 7.95 7.03 8.61 7.03 9.96C7.03 11.31 8.02 12.61 8.15 12.79C8.29 12.97 10.08 15.74 12.83 16.92C15.11 17.9 15.58 17.7 16.08 17.65C16.58 17.61 17.68 17 17.91 16.36C18.14 15.72 18.14 15.17 18.07 15.06C18 14.95 17.82 14.88 17.54 14.74C17.27 14.6 15.93 13.94 15.68 13.85C15.43 13.76 15.25 13.71 15.06 13.99C14.88 14.26 14.36 14.88 14.2 15.06C14.05 15.25 13.89 15.27 13.62 15.13C13.34 15 12.46 14.71 11.41 13.78C10.59 13.05 10.04 12.15 9.9 11.9C9.76 11.65 9.88 11.52 10.02 11.38C10.15 11.25 10.31 11.04 10.45 10.88C10.59 10.72 10.63 10.61 10.72 10.43C10.82 10.24 10.77 10.08 10.7 9.95C10.63 9.81 10.08 8.47 9.85 7.92C9.63 7.39 9.4 7.46 9.23 7.45C9.07 7.45 8.89 7.34 8.73 7.34Z" />
                  </svg>
                  <span className="absolute -top-0.5 -inset-e-0.5 h-3 w-3 rounded-full bg-[#25D366] border-2 border-white animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight text-white">
                    {isRtl ? 'فريق USoft عبر واتساب' : 'USoft WhatsApp Support'}
                  </h3>
                  <p className="text-[11px] text-white/80 mt-0.5 flex items-center gap-1.5">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#25D366]" />
                    <span>{isRtl ? 'جاهزون للرد على استفسارك' : 'Online & ready to help'}</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-white/70 hover:text-white hover:bg-white/15 transition"
                aria-label={isRtl ? 'إغلاق' : 'Close'}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Numbers Selection List */}
          <div className="p-3.5 space-y-2.5 bg-slate-50/50 dark:bg-[#070D18]/50">
            <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 px-1">
              {isRtl ? 'اختر الرقم المناسب للتواصل مباشرة:' : 'Choose a contact number to chat:'}
            </p>

            {CONTACT_NUMBERS.map((contact) => (
              <button
                key={contact.id}
                type="button"
                onClick={() => openWhatsApp(contact.phone)}
                className="w-full flex items-center justify-between gap-3 p-3 rounded-2xl border border-[#E4E7EC] dark:border-slate-800 bg-white dark:bg-[#0F1B2F] hover:border-[#25D366] dark:hover:border-[#25D366]/60 hover:bg-green-50/40 dark:hover:bg-green-950/20 shadow-xs hover:shadow-md transition-all duration-200 group text-start"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 dark:bg-green-950/60 text-[#25D366] group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white transition duration-200">
                    <PhoneCall size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-[#128C7E] dark:group-hover:text-[#25D366] transition">
                      {isRtl ? contact.nameAr : contact.nameEn}
                    </div>
                    <div className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mt-0.5" dir="ltr">
                      {contact.display}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {isRtl ? contact.descAr : contact.descEn}
                    </div>
                  </div>
                </div>

                <div className="text-slate-400 group-hover:text-[#25D366] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition shrink-0">
                  <ChevronIcon size={18} />
                </div>
              </button>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-4 py-2.5 bg-white dark:bg-[#0F1B2F] border-t border-[#E4E7EC] dark:border-slate-800/80 text-center">
            <span className="text-[10px] text-slate-400 dark:text-slate-500">
              {isRtl ? 'يتم التحويل تلقائياً لتطبيق واتساب الرسمي' : 'Redirects directly to official WhatsApp'}
            </span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isRtl ? 'تواصل معنا عبر واتساب' : 'Chat with us on WhatsApp'}
        className="relative flex items-center group focus:outline-none focus:ring-4 focus:ring-green-400/40 rounded-full cursor-pointer"
      >
        {/* Glow & ping effect (active when closed) */}
        {!isOpen && (
          <span
            className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm group-hover:bg-[#25D366]/60 transition-all duration-300 animate-pulse"
            aria-hidden="true"
          />
        )}

        {/* Button container */}
        <div
          className={`relative flex items-center text-white rounded-full p-3.5 sm:px-4 sm:py-3.5 transition-all duration-300 shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.6)] ${
            isOpen
              ? 'bg-[#173B67] hover:bg-[#0F1B2F] rotate-90 scale-95'
              : 'bg-[#25D366] hover:bg-[#20ba5c] hover:scale-105 active:scale-95'
          }`}
        >
          {isOpen ? (
            <X size={26} className="text-white shrink-0 -rotate-90 transition duration-300" />
          ) : (
            <>
              {/* WhatsApp SVG Icon */}
              <svg
                className="w-7 h-7 fill-current shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.73 7.34C8.54 7.34 8.24 7.41 7.99 7.68C7.74 7.95 7.03 8.61 7.03 9.96C7.03 11.31 8.02 12.61 8.15 12.79C8.29 12.97 10.08 15.74 12.83 16.92C15.11 17.9 15.58 17.7 16.08 17.65C16.58 17.61 17.68 17 17.91 16.36C18.14 15.72 18.14 15.17 18.07 15.06C18 14.95 17.82 14.88 17.54 14.74C17.27 14.6 15.93 13.94 15.68 13.85C15.43 13.76 15.25 13.71 15.06 13.99C14.88 14.26 14.36 14.88 14.2 15.06C14.05 15.25 13.89 15.27 13.62 15.13C13.34 15 12.46 14.71 11.41 13.78C10.59 13.05 10.04 12.15 9.9 11.9C9.76 11.65 9.88 11.52 10.02 11.38C10.15 11.25 10.31 11.04 10.45 10.88C10.59 10.72 10.63 10.61 10.72 10.43C10.82 10.24 10.77 10.08 10.7 9.95C10.63 9.81 10.08 8.47 9.85 7.92C9.63 7.39 9.4 7.46 9.23 7.45C9.07 7.45 8.89 7.34 8.73 7.34Z" />
              </svg>

              {/* Label with smooth slide-out expansion */}
              <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-out font-bold text-sm text-white ms-0 group-hover:ms-2">
                {isRtl ? 'تواصل معنا' : 'Chat with us'}
              </span>
            </>
          )}
        </div>

        {/* Floating tooltip when closed */}
        {!isOpen && (
          <span className="pointer-events-none absolute bottom-full mb-2 end-0 hidden group-hover:block whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-slate-700/50 transition-opacity">
            {isRtl ? 'تواصل معنا عبر واتساب' : 'Chat with us on WhatsApp'}
          </span>
        )}
      </button>
    </aside>
  )
}
