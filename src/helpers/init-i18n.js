import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { en, es } from 'vauquita/translations'

const initI18n = async () => {
  await i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      fallbackLng: 'en',
      resources: {
        en: {
          translation: en
        },
        es: {
          translation: es
        }
      }
    })
}

export default initI18n
