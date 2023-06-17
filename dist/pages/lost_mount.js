"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const terrain_token_picker_1 = __importDefault(require("../components/terrain_token_picker"));
const react_bootstrap_1 = require("react-bootstrap");
const LostMountExpansion_jpg_1 = __importDefault(require("../img/LostMountExpansion.jpg"));
const adventurePack_png_1 = __importDefault(require("../img/expansionHeaders/adventurePack.png"));
function LostMount() {
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, { id: "LostMount", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'd-flex justify-content-center', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: 12, md: 4, className: 'd-flex justify-content-center', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Image, { src: LostMountExpansion_jpg_1.default, rounded: true, fluid: true }) }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'd-flex justify-content-center', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: 10, md: 4, className: 'd-flex justify-content-center', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Image, { src: adventurePack_png_1.default, rounded: true, fluid: true }) }) }), (0, jsx_runtime_1.jsx)(terrain_token_picker_1.default, { HeaderText: "Lost Mount Location Randomizer" })] }));
}
exports.default = LostMount;
