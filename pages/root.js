"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const navbar_1 = __importDefault(require("../components/navbar"));
const react_router_dom_1 = require("react-router-dom");
function Root() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'BaseContainer mx-0 px-0', children: [(0, jsx_runtime_1.jsx)(navbar_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] }));
}
exports.default = Root;
