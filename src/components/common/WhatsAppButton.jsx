import React from 'react'
import useLanguageStore from '../../store/languageStore'

const PHONE_NUMBER = '201022264121'
const AR_MESSAGE = 'مرحباً USoft، أود الاستفسار عن تفاصيل حلولكم البرمجية'
const EN_MESSAGE = 'Hello USoft, I would like to inquire about your software solutions.'

export default function WhatsAppButton() {
  const { dir } = useLanguageStore()
  const isRtl = dir === 'rtl'

  const message = isRtl ? AR_MESSAGE : EN_MESSAGE
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <aside aria-label={isRtl ? 'زر محادثة واتساب' : 'WhatsApp Chat Button'}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isRtl ? 'تواصل معنا عبر واتساب' : 'Chat with us on WhatsApp'}
        className="fixed bottom-6 end-6 z-50 flex items-center group focus:outline-none focus:ring-4 focus:ring-green-400/40 rounded-full"
      >
        {/* Glow & ping effect */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm group-hover:bg-[#25D366]/60 transition-all duration-300 animate-pulse"
          aria-hidden="true"
        />

        {/* Button container */}
        <div className="relative flex items-center bg-[#25D366] hover:bg-[#20ba5c] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.6)] rounded-full p-3 sm:px-4 sm:py-3.5 transition-all duration-300 hover:scale-105 active:scale-95">
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
        </div>

        {/* Floating tooltip for mobile / extra clarity */}
        <span
          className="pointer-events-none absolute bottom-full mb-2 end-0 hidden group-hover:block whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-slate-700/50 transition-opacity"
        >
          {isRtl ? 'تواصل معنا عبر واتساب' : 'Chat with us on WhatsApp'}
        </span>
      </a>
    </aside>
  )
}
