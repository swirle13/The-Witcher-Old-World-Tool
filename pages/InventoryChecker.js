"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const PageTitle_1 = __importDefault(require("../components/PageTitle"));
function inventoryChecker({ t }) {
    return ((0, jsx_runtime_1.jsx)(PageTitle_1.default, { HeaderText: 'Inventory Checklist', t: t }));
}
exports.default = inventoryChecker;
