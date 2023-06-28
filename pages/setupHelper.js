"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const setup_1 = require("../classes/setup");
const CardHeader_1 = __importDefault(require("react-bootstrap/esm/CardHeader"));
const expansions = ["Legendary Hunt", "Mages", "Monster Pack", "Monster Trail", "Skellige", "Lost Mount", "Wild Hunt (Under development!)"];
function SetupHelper() {
    const [players, setPlayers] = (0, react_1.useState)(1);
    const [expansionsState, setExpansionsState] = (0, react_1.useState)(new Array(expansions.length).fill(false));
    const [steps, setSteps] = (0, react_1.useState)((0, setup_1.compileSteps)());
    const handleExpansionOnChange = (position) => {
        const updatedExpansionsState = expansionsState.map((item, index) => index === position ? !item : item);
        setExpansionsState(updatedExpansionsState);
        // const tempArr = [...expansionsState, players] as [boolean, boolean, boolean, boolean, boolean, boolean, boolean, number];
        // setSteps(compileSteps(...tempArr));
    };
    // const handlePlayerOnChange = (numPlayers: number) => {
    //     const updatedPlayerState = players
    // }
    (0, react_1.useEffect)(() => {
        const tempArr = [...expansionsState, players];
        setSteps((0, setup_1.compileSteps)(...tempArr));
    }, [players, expansionsState]);
    // TODO: add another handleOnChange function for player radio buttons
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { md: 1, lg: 1, className: "my-2", children: (0, jsx_runtime_1.jsx)("h1", { className: 'text-center', children: "Setup Helper" }) }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { className: "gap-2", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { id: "setupConfiguration", lg: "4", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card, { children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { as: "h3", className: "text-center", children: "Setup Configuration" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { className: "gap-2 mt-3 mx-3 d-flex", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Stack, { gap: 3, children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form, { children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.FormGroup, { controlId: "PlayerSelect", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Title, { as: "h5", children: "Select Players" }), (0, jsx_runtime_1.jsx)("div", { className: "mb-3", children: [1, 2, 3, 4, 5].map((num) => ((0, jsx_runtime_1.jsx)(react_bootstrap_1.FormCheck, { defaultChecked: num === 1, inline: true, type: "radio", name: "group1", id: `${num}Player`, label: num, onChange: () => { setPlayers(num); } }, num))) }, "inlinePlayers")] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.FormGroup, { controlId: "expansionPicker", children: [(0, jsx_runtime_1.jsx)("h5", { children: "Select your expansions" }), (0, jsx_runtime_1.jsx)("div", { className: "mb-3 checkbox-lg", children: expansions.map((exp, index) => ((0, jsx_runtime_1.jsx)(react_bootstrap_1.FormCheck, { name: "group2", id: exp, label: exp, onChange: () => handleExpansionOnChange(index) }, exp))) }, "inlineExpansions")] })] }) }) })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "vr p-0 mx-2 d-none d-lg-block" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { id: "setupInstructions", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card, { children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { as: "h3", className: "text-center", children: "Setup Instructions" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { className: "gap-2 my-3 d-flex", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Stack, { gap: 3, children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Accordion, { defaultActiveKey: ["0"], alwaysOpen: true, children: steps.map((body, index) => ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Accordion.Item, { eventKey: `${index}`, children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Accordion.Header, { children: ["Step ", index + 1] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Accordion.Body, { children: body })] }))) }) }) })] }) })] })] }) }));
}
exports.default = SetupHelper;
