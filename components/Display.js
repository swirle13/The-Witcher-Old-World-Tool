"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Display = (props) => {
    const { xs, sm, md, lg, xl, children, ...rest } = props;
    let className = 'd-none';
    if (xs)
        className += ' d-sm-none d-block ';
    if (sm)
        className += ' d-md-none d-sm-inline ';
    if (md)
        className += ' d-lg-none d-md-inline ';
    if (lg)
        className += ' d-xl-none d-lg-inline ';
    if (xl)
        className += ' d-xl-inline ';
    return ((0, jsx_runtime_1.jsx)("span", { className: className, ...rest, children: children }));
};
exports.Display = Display;
