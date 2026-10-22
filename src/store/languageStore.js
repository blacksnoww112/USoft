import { create } from 'zustand'
import i18n from '../config/i18n.js'

const useLanguageStore = create((set) => ({
  language: localStorage.getItem('usoft-lang') || 'ar',
  dir: (localStorage.getItem('usoft-lang') || 'ar') === 'ar' ? 'rtl' : 'ltr',
  setLanguage: (lang) => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('usoft-lang', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    i18n.changeLanguage(lang)
    set({ language: lang, dir })
  },
}))

export default useLanguageStore
