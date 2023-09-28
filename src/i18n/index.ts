import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import LocalStorageBackend from 'i18next-localstorage-backend';
import { initReactI18next } from "react-i18next";

import translationCS from '../locales/cs/translation.json';
import translationDE from '../locales/de/translation.json';
import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationIT from '../locales/it/translation.json';
import translationPL from '../locales/pl/translation.json';

/*
Automatically add new words to locale files: https://www.i18next.com/how-to/extracting-translations
Caching state locally (first code block): https://www.i18next.com/how-to/caching
Custom Formatting for lowercasing all new words added: https://www.i18next.com/translation-function/formatting#adding-custom-format-function
    * Github issue asking: https://github.com/i18next/i18next/issues/765
Automatically translate i18next JSON: https://translate.i18next.com/
Interpolation (most used functionalities - dynamic values): https://www.i18next.com/translation-function/interpolation
 
Use i18next-parser to locate and generate locales JSON files: https://github.com/i18next/i18next-parser
*/

export const defaultNS = "translation";
export const resources = {
    cs: { translation: translationCS },
    de: { translation: translationDE },
    en: { translation: translationEN },
    es: { translation: translationES },
    fr: { translation: translationFR },
    it: { translation: translationIT },
    pl: { translation: translationPL },
} as const;

export const myLangs: object = {
    cs: "CS",
    de: "DE",
    en: "EN",
    es: "ES",
    fr: "FR",
    it: "IT",
    pl: "PL"
};

Object.keys(myLangs)

i18next
    .use(LocalStorageBackend)
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        partialBundledLanguages: true,
        resources: resources,
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false
        },
        keySeparator: ".",
        returnObjects: true,
        backend: {
            backends: [
                LocalStorageBackend,
            ],
            backendOptions: [{
                expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
            }, {
                loadPath: '../locales/{{lng}}/{{ns}}.json'
            }]
        }
    });

i18next.loadLanguages(Object.keys(myLangs));
i18next.services.formatter?.add('lowercase', (value, lng, options) => {
    return value.toLowerCase();
});

export default i18next;