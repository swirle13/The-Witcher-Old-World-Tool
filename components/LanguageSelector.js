"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const i18n_1 = __importDefault(require("../i18n"));
const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = (0, react_1.useState)(i18n_1.default.language); // i18n.language contains the language assigned to lng in i18n.js file.
    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n_1.default.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
        localStorage.setItem("lang", e.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)("select", { defaultValue: selectedLanguage, onChange: chooseLanguage, children: [(0, jsx_runtime_1.jsx)("option", { value: "en", children: "English" }), (0, jsx_runtime_1.jsx)("option", { value: "fr", children: "French" }), (0, jsx_runtime_1.jsx)("option", { value: "pl", children: "Polish" })] }));
};
exports.default = LanguageSelector;
