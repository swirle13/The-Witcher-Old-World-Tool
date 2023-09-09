"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
require("./i18n");
const App_1 = __importDefault(require("./pages/App"));
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
const root = (0, client_1.createRoot)(document.getElementById('app-root'));
root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_i18next_1.I18nextProvider, { i18n: i18next_1.default, children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }) }));
