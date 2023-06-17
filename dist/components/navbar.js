"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Nav_1 = __importDefault(require("react-bootstrap/Nav"));
const Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
const NavDropdown_1 = __importDefault(require("react-bootstrap/NavDropdown"));
const logo192_png_1 = __importDefault(require("../img/logo192.png"));
function Navbar() {
    return ((0, jsx_runtime_1.jsx)(Navbar_1.default, { bg: "light", expand: "lg", className: "bg-body-tertiary", children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsxs)(Navbar_1.default.Brand, { href: "#home", className: '', children: [(0, jsx_runtime_1.jsx)("img", { src: logo192_png_1.default, width: "30", height: "30", className: "d-inline-block align-top" }), " ", "TW: OW Helper"] }), (0, jsx_runtime_1.jsx)(Navbar_1.default.Toggle, { "aria-controls": "basic-navbar-nav" }), (0, jsx_runtime_1.jsx)(Navbar_1.default.Collapse, { id: "basic-navbar-nav", children: (0, jsx_runtime_1.jsxs)(Nav_1.default, { className: "me-auto", children: [(0, jsx_runtime_1.jsx)(Nav_1.default.Link, { href: "#home", children: "Home" }), (0, jsx_runtime_1.jsx)(Nav_1.default.Link, { href: "#link", children: "Link" }), (0, jsx_runtime_1.jsxs)(NavDropdown_1.default, { title: "Dropdown", id: "basic-nav-dropdown", children: [(0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, { href: "#action/3.1", children: "Action" }), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, { href: "#action/3.2", children: "Another action" }), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, { href: "#action/3.3", children: "Something" }), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Divider, {}), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, { href: "#action/3.4", children: "Separated link" })] })] }) })] }) }));
}
exports.default = Navbar;
