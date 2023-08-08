"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
    return className = "flex";
    style = {};
    {
        minWidth: "40%";
    }
}
exports.default = CustomToggleAccordion;
 >
    alwaysOpen;
activeKey = { activeKeys };
onSelect = { handleSelect } >
    eventKey;
"0" >
    Accordion_1.default;
Item;
#;
1 < (/Accordion.Header>);
Body;
#;
1
    < /Accordion.Body>
    < /Accordion.Item>
    < Accordion_1.default.Item;
eventKey = "1" >
    Accordion_1.default;
Item;
#;
2 < (/Accordion.Header>);
Body;
#;
2
    < /Accordion.Body>
    < /Accordion.Item>
    < Accordion_1.default.Item;
eventKey = "2" >
    Accordion_1.default;
Item;
#;
3 < (/Accordion.Header>);
Body;
#;
3
    < /Accordion.Body>
    < /Accordion.Item>
    < Accordion_1.default.Item;
eventKey = "3" >
    Accordion_1.default;
Item;
#;
4 < (/Accordion.Header>);
Body;
#;
4
    < /Accordion.Body>
    < /Accordion.Item>
    < /Accordion>
    < div;
className = "mt-5 d-flex justify-content-between" >
    onClick;
{
    handleToggleClick;
}
 > Toggle;
First < /Button>
    < Button_1.default;
onClick = { handleCollapseClick } > Collapse;
All < /Button>
    < /div>
    < /div >;
;
