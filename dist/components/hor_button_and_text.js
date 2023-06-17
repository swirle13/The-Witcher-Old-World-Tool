"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Row_1 = __importDefault(require("react-bootstrap/Row"));
const Col_1 = __importDefault(require("react-bootstrap/Col"));
const Button_1 = __importDefault(require("react-bootstrap/esm/Button"));
function HorizontalButtonAndText(args = {
    ButtonText: "Hello",
    ButtonOnClick: {},
    Col1Data: -1,
    Col2Data: "World"
}) {
    return ((0, jsx_runtime_1.jsxs)(Row_1.default, { className: 'd-flex', children: [(0, jsx_runtime_1.jsx)(Col_1.default, { className: 'ms-1 me-1', sm: "3", children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outline-secondary", onClick: () => { args.ButtonOnClick; }, children: args.ButtonText }) }), (0, jsx_runtime_1.jsx)(Col_1.default, { className: 'ms-1 me-1', children: args.Col1Data }), (0, jsx_runtime_1.jsx)(Col_1.default, { className: 'ms-1 me-1', children: args.Col2Data })] }));
}
exports.default = HorizontalButtonAndText;
