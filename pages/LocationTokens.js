"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TerrainTokenPicker_1 = __importDefault(require("../components/TerrainTokenPicker"));
const react_bootstrap_1 = require("react-bootstrap");
function LocationTokens() {
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { id: "LocationTokens", children: (0, jsx_runtime_1.jsx)(TerrainTokenPicker_1.default, { HeaderText: "Location Tokens" }) }));
}
exports.default = LocationTokens;
