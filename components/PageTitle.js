"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_bootstrap_1 = require("react-bootstrap");
function PageTitle({ HeaderText = "Page Title", HeaderUnderline = true, }) {
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { className: 'py-2 mt-4 justify-content-center', id: "headerRow", xs: 1, children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { className: 'mx-auto d-flex justify-content-center', xs: 12, children: (0, jsx_runtime_1.jsx)("h1", { className: 'text-center', children: HeaderText }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { className: "my-4", id: 'headerSpacer', xs: 10, md: 4, children: HeaderUnderline === true ?
                    // Add d-lg-none based on some condition for SetupHelper to add line under lg
                    (0, jsx_runtime_1.jsx)("hr", { className: 'my-0' })
                    : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) })] }));
}
exports.default = PageTitle;
