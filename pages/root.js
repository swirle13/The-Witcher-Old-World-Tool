"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Footer_1 = __importDefault(require("../components/Footer"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
const react_router_dom_1 = require("react-router-dom");
function Root() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex-wrapper mx-0 px-0', style: {
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            justifyContent: 'flex-start'
        }, children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = Root;
