import React from 'react'
import { useTranslation } from 'react-i18next'
import useLanguageStore from '../../store/languageStore'
import { Globe } from 'lucide-react'

function LanguageSwitcher({ compact = false }) {
  const { language, setLanguage } = useLanguageStore()
  const { t } = useTranslation('navigation')

  const toggle = () => setLanguage(language === 'ar' ? 'en' : 'ar')

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E4E7EC] text-sm font-semibold text-[#173B67] hover:bg-[#EBF2FF] transition-colors duration-200"
      aria-label={t('switchLang')}
    >
      <Globe size={15} aria-hidden="true" />
      {!compact && <span>{t('switchLang')}</span>}
    </button>
  )
}

export default LanguageSwitcher
