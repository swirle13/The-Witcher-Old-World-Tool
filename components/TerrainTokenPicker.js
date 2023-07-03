"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Row_1 = __importDefault(require("react-bootstrap/Row"));
const Col_1 = __importDefault(require("react-bootstrap/Col"));
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Button_1 = __importDefault(require("react-bootstrap/esm/Button"));
const terrains_1 = __importStar(require("../classes/terrains"));
const react_1 = require("react");
const localTerrainDeck = new terrains_1.default();
function TerrainTokenPicker({ HeaderText = "Draw a token" }) {
    const [displayedMountainToken, setMountainToken] = (0, react_1.useState)(new terrains_1.MountainToken());
    const [displayedForestToken, setForestToken] = (0, react_1.useState)(new terrains_1.ForestToken());
    const [displayedWaterToken, setWaterToken] = (0, react_1.useState)(new terrains_1.WaterToken());
    const [displayedToken, setToken] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        setToken(displayedMountainToken);
    }, [displayedMountainToken]);
    (0, react_1.useEffect)(() => {
        setToken(displayedForestToken);
    }, [displayedForestToken]);
    (0, react_1.useEffect)(() => {
        setToken(displayedWaterToken);
    }, [displayedWaterToken]);
    return ((0, jsx_runtime_1.jsxs)(Container_1.default, { fluid: true, className: "mx-auto", children: [(0, jsx_runtime_1.jsx)(Row_1.default, { className: 'py-2', children: (0, jsx_runtime_1.jsxs)(Col_1.default, { className: 'mx-auto', children: [(0, jsx_runtime_1.jsx)(Col_1.default, { className: 'd-flex justify-content-center', children: (0, jsx_runtime_1.jsx)("h1", { className: 'text-center', children: HeaderText }) }), (0, jsx_runtime_1.jsxs)(Row_1.default, { id: 'TerrainTokenButtons', className: 'justify-content-center px-1', children: [(0, jsx_runtime_1.jsx)(Col_1.default, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "secondary", size: "lg", className: 'px-1', onClick: () => setMountainToken(localTerrainDeck.drawMountainToken()), children: "Mountain" }) }), (0, jsx_runtime_1.jsx)(Col_1.default, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "success", size: "lg", onClick: () => setForestToken(localTerrainDeck.drawForestToken()), children: "Forest" }) }), (0, jsx_runtime_1.jsx)(Col_1.default, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "primary", size: "lg", className: 'px-3', onClick: () => setWaterToken(localTerrainDeck.drawWaterToken()), children: "Water" }) })] })] }) }), (0, jsx_runtime_1.jsx)(Row_1.default, { className: 'py-2', children: (0, jsx_runtime_1.jsx)(Col_1.default, { className: 'mx-auto', children: (0, jsx_runtime_1.jsx)(Col_1.default, { className: 'd-flex justify-content-center', children: displayedToken?.img() }) }) })] }));
}
exports.default = TerrainTokenPicker;
