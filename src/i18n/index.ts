import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import LocalStorageBackend from 'i18next-localstorage-backend';
import { initReactI18next } from "react-i18next";

import translationEN_US from '../locales/en-US/translation.json';
import translationEN_GB from '../locales/en-GB/translation.json';
import translationFR from '../locales/fr/translation.json';
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

const resources = {
    en_US: { translation: translationEN_US },
    en_GB: { translation: translationEN_GB },
    fr: { translation: translationFR },
    pl: { translation: translationPL },
};

export const myLangs: object = {
    en_US: "US",
    en_GB: "GB",
    fr: "FR",
    pl: "PL",
};

i18next
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: resources,
        fallbackLng: "en_US",
        debug: true,
        interpolation: {
            escapeValue: false
        },
        ns: "translation", // namespaces help to divide huge translations into multiple small files.
        defaultNS: "translation",
        keySeparator: ".",
        saveMissing: true,
        backend: {
            backends: [
                LocalStorageBackend,
            ],
            backendOptions: [{
                expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
            }, {
                loadPath: '/locales/{{lng}}/{{ns}}.json'
            }]
        }
    });

i18next.services.formatter?.add('lowercase', (value, lng, options) => {
    return value.toLowerCase();
});

export default i18next;