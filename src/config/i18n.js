import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('usoft-lang') || 'ar',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: [
      'common', 'navigation', 'home', 'about', 'solutions', 'services', 'contact', 'dashboard', 'partnerships',
      'accounting', 'sales', 'purchases', 'inventory', 'assets', 'hr', 'payroll', 'pos', 'reports', 'settings',
      'outpatient', 'inpatient', 'realestate', 'contracting', 'production'
    ],
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
