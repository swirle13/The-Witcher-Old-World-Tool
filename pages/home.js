"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// Use components from https://react-bootstrap.netlify.app/docs/getting-started/introduction
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const react_bootstrap_1 = require("react-bootstrap");
const linkedPages = [
    {
        name: "Lost Mount",
        link: "#/lostMount",
        desc: "Tired of picking two random tokens, choosing one, and having to shuffle them up every time?",
        btn: "Come, Roach"
    },
    {
        name: "Monster Roller",
        link: "#/monsterRoller",
        desc: "Tired of shuffling your tokens, monster cards, and hunting down the mini?",
        btn: "Damn, you're ugly"
    },
    {
        name: "Setup Helper",
        link: "#/setupHelper",
        desc: "A convenient place to help you get your game started.",
        btn: "Wind's howling"
    },
    {
        name: "Inventory Checker",
        link: "#/inventoryChecker",
        desc: "To help those just receiving their The Witcher: Old World game, here's an in-depth guide on what " +
            "you (probably) received.",
        btn: "Medallion's humming.."
    },
    {
        name: "Community Links",
        link: "#/communityLinks",
        desc: "A collection of neat and awesome links from the community. Always growing!",
        btn: "Show me"
    },
];
function Home() {
    /*
        Breakpoints
        ============================
        X-Small		 None	<576px
        Small		 sm		≥576px
        Medium		 md		≥768px
        Large		 lg		≥992px
        Extra large	 xl		≥1200px
        XX large	xxl		≥1400px
    */
    return ((0, jsx_runtime_1.jsx)(Container_1.default, { className: "p-6", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { xs: 1, md: 2, lg: 3, className: "g-4 p-3", children: linkedPages.map((_, idx) => ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Img, { variant: "top", src: "" }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card.Body, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Title, { children: _.name }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Text, { children: _.desc }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'self-end m-1', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "secondary", href: _.link, className: 'align-bottom', children: _.btn }) })] })] }) }, idx))) }) }));
}
exports.default = Home;
