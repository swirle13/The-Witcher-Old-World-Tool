"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Accordion_1 = __importDefault(require("react-bootstrap/Accordion"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
require("./CustomToggleAccordion.scss");
function CustomToggleAccordion() {
    const [activeKeys, setActiveKeys] = react_1.default.useState(["0"]);
    const handleSelect = (eventKey) => setActiveKeys(eventKey);
    const handleToggleClick = () => {
        const index = activeKeys.indexOf("0");
        if (index > -1) {
            activeKeys.splice(index, 1);
            setActiveKeys([...activeKeys]);
        }
        else {
            setActiveKeys(activeKeys.concat("0"));
        }
    };
    const handleCollapseClick = () => {
        setActiveKeys([]);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex", style: { minWidth: "40%" }, children: [(0, jsx_runtime_1.jsxs)(Accordion_1.default, { alwaysOpen: true, activeKey: activeKeys, onSelect: handleSelect, children: [(0, jsx_runtime_1.jsxs)(Accordion_1.default.Item, { eventKey: "0", children: [(0, jsx_runtime_1.jsx)(Accordion_1.default.Header, { children: "Accordion Item #1" }), (0, jsx_runtime_1.jsx)(Accordion_1.default.Body, { children: "Body #1" })] }), (0, jsx_runtime_1.jsxs)(Accordion_1.default.Item, { eventKey: "1", children: [(0, jsx_runtime_1.jsx)(Accordion_1.default.Header, { children: "Accordion Item #2" }), (0, jsx_runtime_1.jsx)(Accordion_1.default.Body, { children: "Body #2" })] }), (0, jsx_runtime_1.jsxs)(Accordion_1.default.Item, { eventKey: "2", children: [(0, jsx_runtime_1.jsx)(Accordion_1.default.Header, { children: "Accordion Item #3" }), (0, jsx_runtime_1.jsx)(Accordion_1.default.Body, { children: "Body #3" })] }), (0, jsx_runtime_1.jsxs)(Accordion_1.default.Item, { eventKey: "3", children: [(0, jsx_runtime_1.jsx)(Accordion_1.default.Header, { children: "Accordion Item #4" }), (0, jsx_runtime_1.jsx)(Accordion_1.default.Body, { children: "Body #4" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-5 d-flex justify-content-between", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleToggleClick, children: "Toggle First" }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleCollapseClick, children: "Collapse All" })] })] }));
}
exports.default = CustomToggleAccordion;
