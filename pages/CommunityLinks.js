"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_bootstrap_1 = require("react-bootstrap");
const PageTitle_1 = __importDefault(require("../components/PageTitle"));
function CommunityLinks({ t }) {
    const links = [
        {
            title: "Official Discord",
            subtitle: "Link",
            desc: "The Go On Board official discord. Discuss rules, share your painted minis, or just chat about the game.",
            link: "https://discord.com/invite/mX8yvYQTuq",
        },
        {
            title: "Official Guide: Organizing All Cards in Big Box",
            subtitle: "Video",
            desc: "A more in-depth guide on how to fit all the cards inside the Big Box.",
            link: "https://youtu.be/Hj7oTXJOFfg",
        },
        {
            title: "Official FAQ: Clarifying ambiguous rules/situations",
            subtitle: "PDF",
            desc: "Answers and clarification for potentially confusing or difficult situations.",
            link: "https://www.dropbox.com/s/6fxx058x76kc9rn/FAQ_ENG_v01.pdf?dl=0",
        },
        {
            title: "BoardGameGeek Old World Files",
            subtitle: "Link",
            desc: "Another corner for the hobby where members upload their own creations, automata, guides, and more.",
            link: "https://boardgamegeek.com/boardgame/331106/witcher-old-world/files",
        },
        {
            title: "Witcher Monster Tray Position",
            subtitle: "Community member created",
            desc: "A detailed guide on locations of all the monster minis and their locations in their respective trays.",
            link: "https://boardgamegeek.com/filepage/259976/witcher-monster-tray-position",
        },
        {
            title: "Card and Token Organizers",
            subtitle: "Community member created",
            desc: "3D printer files for card organizers to better fit in the Big Box, as well as token organizers.",
            link: "https://thingiverse.com/thing:6078120",
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, { id: "CommunityLinksBaseContainer", children: [(0, jsx_runtime_1.jsx)(PageTitle_1.default, { HeaderText: t('Community Links'), t: t }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { xs: 1, md: 2, lg: 4, className: "g-4 p-2", children: links.map((_, idx) => ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card, { className: "min-h-1000", children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card.Body, { className: "min-h-1000", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Title, { children: _.title }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Subtitle, { className: "mb-2 text-muted", children: _.subtitle }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Text, { children: _.desc })] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Footer, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Link, { href: _.link, children: _.title }) })] }) }, idx))) })] }));
}
exports.default = CommunityLinks;
