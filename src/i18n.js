import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'LayoutStyle': 'Layout & Style',
      Left: 'Left',
      Right: 'Right',
      Language: 'Language',
      English: 'English',
      Thai: 'ไทย',
      // Add translations for other languages here
    },
  },
  th: {
    translation: {
      'LayoutStyle': 'การจัดการหน้าเว็บ',
      Left: 'ซ้าย',
      Right: 'ขวา',
      Language: 'ภาษา',
      English: 'อังกฤษ',
      Thai: 'ไทย',
      // Add translations for other languages here
    },
  },
  // Add resources for other languages here
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
