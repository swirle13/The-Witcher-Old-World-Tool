"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myLangs = void 0;
const i18next_1 = __importDefault(require("i18next"));
const i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
const react_i18next_1 = require("react-i18next");
const translation_json_1 = __importDefault(require("../locales/en-US/translation.json"));
const translation_json_2 = __importDefault(require("../locales/en-GB/translation.json"));
const translation_json_3 = __importDefault(require("../locales/fr/translation.json"));
const translation_json_4 = __importDefault(require("../locales/pl/translation.json"));
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
    en_US: { translation: translation_json_1.default },
    en_GB: { translation: translation_json_2.default },
    fr: { translation: translation_json_3.default },
    pl: { translation: translation_json_4.default },
};
exports.myLangs = {
    en_US: "US",
    en_GB: "GB",
    fr: "FR",
    pl: "PL",
};
i18next_1.default
    .use(i18next_browser_languagedetector_1.default)
    .use(react_i18next_1.initReactI18next) // passes i18n down to react-i18next
    .init({
    resources: resources,
    fallbackLng: "en_US",
    debug: true,
    interpolation: {
        escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
});
i18next_1.default.services.formatter?.add('lowercase', (value, lng, options) => {
    return value.toLowerCase();
});
exports.default = i18next_1.default;
