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
const logo192_png_1 = __importDefault(require("../../public/logo192.png"));
const useResize_1 = __importDefault(require("../util/useResize"));
function Navbar() {
    const size = (0, useResize_1.default)();
    return ((0, jsx_runtime_1.jsx)(Navbar_1.default, { collapseOnSelect: true, id: 'Navbar', expand: "md", className: "bg-body-secondary", children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsxs)(Navbar_1.default.Brand, { href: "#/", children: [(0, jsx_runtime_1.jsx)("img", { src: logo192_png_1.default, width: "30", height: "30", className: "d-inline-block align-top" }), " ", size.width < 401 ? "TW: Old World Helper" : "The Witcher: Old World Helper"] }), (0, jsx_runtime_1.jsx)(Navbar_1.default.Toggle, { "aria-controls": "basic-navbar-nav" }), (0, jsx_runtime_1.jsx)(Navbar_1.default.Collapse, { id: "basic-navbar-nav", children: (0, jsx_runtime_1.jsxs)(Nav_1.default, { className: "me-auto", children: [(0, jsx_runtime_1.jsx)(Nav_1.default.Link, { href: "#/communityLinks", children: "Community Links" }), (0, jsx_runtime_1.jsxs)(NavDropdown_1.default, { title: "Gameplay Tools", id: "basic-nav-dropdown", children: [(0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, { href: "#/lostMount", children: "Lost Mount Randomizer" }), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, { href: "#/monsterRoller", children: "Monster Roller" }), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, { href: "#/setupHelper", children: "Setup Helper" }), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Divider, {}), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, { href: "#/home", children: "Browse All Tools" })] }), (0, jsx_runtime_1.jsxs)(NavDropdown_1.default, { title: "Project Help", id: "github-nav-dropdown", children: [(0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, { href: "https://github.com/swirle13/The-Witcher-Old-World-Tool-Issues/issues", children: "Github Issues" }), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, { href: "https://github.com/swirle13/The-Witcher-Old-World-Tool-Issues/discussions", children: "Github Discussions" }), (0, jsx_runtime_1.jsx)(NavDropdown_1.default.Item, { href: "https://github.com/users/swirle13/projects/2/views/3", children: "Project Timeline" })] })] }) })] }) }));
}
exports.default = Navbar;
