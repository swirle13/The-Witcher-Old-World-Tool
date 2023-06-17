"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
function ErrorPage() {
    const error = (0, react_router_dom_1.useRouteError)();
    if ((0, react_router_dom_1.isRouteErrorResponse)(error)) {
        if (error.status === 401) {
            // ...
        }
        else if (error.status === 404) {
            // ...
        }
        return ((0, jsx_runtime_1.jsxs)("div", { id: "error-page", children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Oops! ", error.status] }), (0, jsx_runtime_1.jsx)("p", { children: error.statusText }), error.data?.message && ((0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("i", { children: error.data.message }) }))] }));
    }
    else if (error instanceof Error) {
        return ((0, jsx_runtime_1.jsxs)("div", { id: "error-page", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Oops! Unexpected Error" }), (0, jsx_runtime_1.jsx)("p", { children: "Something went wrong." }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("i", { children: error.message }) })] }));
    }
    else {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
}
exports.default = ErrorPage;
