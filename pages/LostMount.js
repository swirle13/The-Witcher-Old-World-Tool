"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TerrainTokenPicker_1 = __importDefault(require("../components/TerrainTokenPicker"));
const react_bootstrap_1 = require("react-bootstrap");
function LostMount({ t }) {
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, { id: "LostMountLocationTokens", children: [(0, jsx_runtime_1.jsx)("h3", { className: 'text-center', children: t("Under Construction!") }), (0, jsx_runtime_1.jsx)(TerrainTokenPicker_1.default, { HeaderText: t("Lost Mount Locations"), t: t })] }));
}
exports.default = LostMount;
