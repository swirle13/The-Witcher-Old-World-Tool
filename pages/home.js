"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const react_bootstrap_1 = require("react-bootstrap");
const linkedPages = [
    {
        name: "Setup Helper",
        link: "#/setupHelper",
        desc: "A dynamically updated set of consolidated instructions for any expansion and player combination.",
        btn: "Wind's howling.."
    },
    {
        name: "Location Tokens",
        link: "#/locationTokens",
        desc: "Easily draw any terrain token type. Always randomized. No shuffling of cardboard tokens.",
        btn: "Explore the Continent"
    },
    {
        name: "Monster Roller",
        link: "#/monsterRoller",
        desc: "Tired of shuffling your tokens, monster cards, and hunting down the mini?",
        btn: "Damn, you're ugly"
    },
    {
        name: "Community Links",
        link: "#/communityLinks",
        desc: "A collection of neat and awesome links from the community. Always growing!",
        btn: "Show me"
    },
    {
        name: "Inventory Checker",
        link: "#/inventoryChecker",
        desc: "To help those just receiving their The Witcher: Old World game, here's an in-depth guide on what " +
            "you (hopefully) received.",
        btn: "Medallion's humming.."
    },
    {
        name: "Lost Mount",
        link: "#/lostMount",
        desc: "A more specific variant of the Location Token page with two tokens to choose from.",
        btn: "Come, Roach"
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
