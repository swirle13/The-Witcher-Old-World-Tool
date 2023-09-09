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
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const monsters_1 = __importStar(require("../classes/monsters"));
const PageTitle_1 = __importDefault(require("./PageTitle"));
require("../css/MonsterPicker.css");
function MonsterPicker({ HeaderText = "Randomly draw a token", t }) {
    const expansionsNames = ["Legendary Hunt", "Wild Hunt", "Monster Pack", "Mounted Eredin"];
    const [localMonsterDeck, setLocalMonsterDeck] = (0, react_1.useState)(new monsters_1.default());
    const [displayedToken, setToken] = (0, react_1.useState)(new monsters_1.levelOneMonster("."));
    const [expansions, setExpansions] = (0, react_1.useState)(new Array(expansionsNames.length).fill(false));
    const handleToggleExpansions = (position) => {
        let updatedExpansions = expansions.map((item, index) => index === position ? !item : item);
        if (position === 0 && !expansions[0] && expansions[1]) {
            // if turning on Legendary Hunt and Wild Hunt is already on
            updatedExpansions = updatedExpansions.map((item, index) => index === 1 ? !item : item);
        }
        else if (position === 1 && !expansions[1] && expansions[0]) {
            // if turning on Wild Hunt and Legendary Hunt is already on
            updatedExpansions = updatedExpansions.map((item, index) => index === 0 ? !item : item);
        }
        setExpansions(updatedExpansions);
    };
    (0, react_1.useEffect)(() => {
        setLocalMonsterDeck(new monsters_1.default(...expansions));
    }, [expansions]);
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, { fluid: true, className: "mx-auto min-h-screen", children: [(0, jsx_runtime_1.jsx)(PageTitle_1.default, { HeaderText: HeaderText, t: t }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { id: 'tokensRow', className: 'py-2 mb-2', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { className: 'justify-content-center', children: displayedToken?.tokenImg() }) }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { id: 'MonsterButtons', className: 'justify-content-center px-1 py-2 mb-4', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "secondary", size: "lg", onClick: () => setToken(localMonsterDeck.drawLevelOneMonster()), children: "Level I" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "warning", size: "lg", onClick: () => setToken(localMonsterDeck.drawLevelTwoMonster()), children: "Level II" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "danger", size: "lg", onClick: () => setToken(localMonsterDeck.drawLevelThreeMonster()), children: "Level III" }) }), expansions[0] || expansions[1] ?
                        (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { size: "lg", variant: "custom", style: {
                                    backgroundColor: "#960a0a", color: "#ffffff", /* tint on cursor hover: "#640a0a" */
                                }, onClick: () => setToken(localMonsterDeck.drawLegendaryMonster()), children: expansions[0] ? "Legendary" : "Wild Hunt" }) })
                        : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { id: 'expansionToggleRow', className: 'justify-content-center p-2', children: expansionsNames.map((name, index) => ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Switch, { checked: expansions[index], onChange: () => handleToggleExpansions(index), label: name }, name))) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'justify-content-center p-2 m-4', id: "ToggleTooltip", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { className: 'mx-3', style: { maxWidth: "550px" }, children: [(0, jsx_runtime_1.jsx)("strong", { className: "fw-light text-center", children: "Toggle changes" }), (0, jsx_runtime_1.jsxs)("ul", { className: 'fw-lighter', children: [(0, jsx_runtime_1.jsx)("li", { children: "Legendary Hunt: Imperial Golem, Cyclops, Cave Troll, Toad, Frightener, Unseen Elder, Ice Giant, Gaunter O'Dimm (All Legendary)" }), (0, jsx_runtime_1.jsx)("li", { children: "Wild Hunt: Eredin, Nithral, Imlerith, Caranthir (All Legendary)" }), (0, jsx_runtime_1.jsx)("li", { children: "Monster Pack: Koshchey (Level III), Kayran (Legendary). Siren excluded as it can't be randomly selected." }), (0, jsx_runtime_1.jsx)("li", { children: "Mounted Eredin: Mounted Eredin (Level III)" })] })] }) })] }));
}
exports.default = MonsterPicker;
