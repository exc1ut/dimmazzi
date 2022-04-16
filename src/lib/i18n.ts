import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationRu from '../../locales/ru/translation.json'
import translationUz from '../../locales/uz/translation.json'
import translationCr from '../../locales/cr/translation.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    keySeparator: '|',
    resources: {
      uz: {
        translation: translationUz,
      },
      cr: {
        translation: translationCr,
      },
      ru: {
        translation: translationRu,
      },
    },
    fallbackLng: 'ru',
    detection: {
      order: ['localStorage'],
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
