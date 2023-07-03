"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const setup_1 = require("../classes/setup");
const legendaryHunt_png_1 = __importDefault(require("../img/expansionHeaders/legendaryHunt.png"));
const mages_png_1 = __importDefault(require("../img/expansionHeaders/mages.png"));
const monsterPack_png_1 = __importDefault(require("../img/expansionHeaders/monsterPack.png"));
const monsterTrail_png_1 = __importDefault(require("../img/expansionHeaders/monsterTrail.png"));
const skellige_png_1 = __importDefault(require("../img/expansionHeaders/skellige.png"));
const lostMount_png_1 = __importDefault(require("../img/expansionHeaders/lostMount.png"));
const wildHunt_png_1 = __importDefault(require("../img/expansionHeaders/wildHunt.png"));
require("../css/SetupHelper.css");
const PageTitle_1 = __importDefault(require("../components/PageTitle"));
const expansions = ["Legendary Hunt", "Mages", "Monster Pack", "Monster Trail", "Skellige", "Lost Mount", "Wild Hunt (Under development!)"];
const expansionsImages = [legendaryHunt_png_1.default, mages_png_1.default, monsterPack_png_1.default, monsterTrail_png_1.default, skellige_png_1.default, lostMount_png_1.default, wildHunt_png_1.default];
function SetupHelper() {
    const [players, setPlayers] = (0, react_1.useState)(1);
    const [expansionsState, setExpansionsState] = (0, react_1.useState)(new Array(expansions.length).fill(false));
    const [steps, setSteps] = (0, react_1.useState)((0, setup_1.compileSteps)());
    const handleExpansionOnChange = (position) => {
        const updatedExpansionsState = expansionsState.map((item, index) => index === position ? !item : item);
        setExpansionsState(updatedExpansionsState);
    };
    (0, react_1.useEffect)(() => {
        const tempArr = [...expansionsState, players];
        setSteps((0, setup_1.compileSteps)(...tempArr));
    }, [players, expansionsState]);
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { className: 'mb-6', children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { children: [(0, jsx_runtime_1.jsx)(PageTitle_1.default, { HeaderText: 'Setup Helper', HeaderUnderline: false }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { className: "gap-2", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { id: "setupConfiguration", lg: "4", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'justify-content-center', lg: 1, children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { id: "playersCol", children: [(0, jsx_runtime_1.jsx)("h4", { className: 'text-center mb-3', children: "Players" }), (0, jsx_runtime_1.jsx)("div", { className: "mb-3 pl-1 text-center", children: [1, 2, 3, 4, 5].map((num) => ((0, jsx_runtime_1.jsx)(react_bootstrap_1.FormCheck, { defaultChecked: num === 1, inline: true, type: "radio", name: "group1", id: `${num}Player`, label: num, onChange: () => { setPlayers(num); }, className: 'align-items-center ' + (num === 5 ? 'mr-0 !important' : '') }, num))) }, "inlinePlayers")] }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'justify-content-center', lg: 1, children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { id: "expansionsCol", children: [(0, jsx_runtime_1.jsx)("h4", { className: 'text-center mb-3', children: "Expansions" }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { className: "text-center justify-content-center", xxl: 1, children: [expansions.map((exp, index) => ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { className: "d-flex justify-content-center " + (index === 6 ? '' : 'mb-2'), xs: "auto", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.FormCheck, { name: "group2", id: exp, label: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Image, { src: expansionsImages[index], width: 150 }), onChange: () => handleExpansionOnChange(index), className: 'd-flex align-items-center', disabled: expansionsState[6] && ["Legendary Hunt", "Monster Pack", "Lost Mount"].includes(exp) }, exp) }))), "Under development!"] }, "inlineExpansions")] }) })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "vr p-0 mx-2 d-none d-lg-block" }), (0, jsx_runtime_1.jsx)("div", { className: "d-lg-none my-3 px-5", children: (0, jsx_runtime_1.jsx)("hr", { className: 'my-0' }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { id: "setupInstructions", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Stack, { gap: 3, children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Accordion, { defaultActiveKey: [...Array(steps.length).keys()].map(a => String(a)), alwaysOpen: true, flush: true, children: steps.map((body, index) => ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Accordion.Item, { eventKey: `${index}`, children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Accordion.Header, { style: { backgroundColor: "yellow" }, children: ["Step ", index + 1] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Accordion.Body, { className: 'lh-lg', children: body })] }))) }) }) })] })] }) }));
}
exports.default = SetupHelper;
