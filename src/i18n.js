import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    ns: ['header',
         'mains1', 
         'mains7', 
         'mains8', 
         'atombot', 
         'footer', 
         'solution',
         'instructions',
         'blog'
        ],
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    interpolation: {
      escapeValue: false
    }
  });
