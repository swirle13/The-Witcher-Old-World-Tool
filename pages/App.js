"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Footer_1 = __importDefault(require("../components/Footer"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("../pages/Home"));
const ErrorPage_1 = __importDefault(require("../pages/ErrorPage"));
const LostMount_1 = __importDefault(require("../pages/LostMount"));
const CommunityLinks_1 = __importDefault(require("../pages/CommunityLinks"));
const MonsterRoller_1 = __importDefault(require("../pages/MonsterRoller"));
const SetupHelper_1 = __importDefault(require("../pages/SetupHelper"));
const LocationTokens_1 = __importDefault(require("../pages/LocationTokens"));
const InventoryChecker_1 = __importDefault(require("../pages/InventoryChecker"));
const react_i18next_1 = require("react-i18next");
function App() {
    const { t, i18n } = (0, react_i18next_1.useTranslation)();
    // hashRouter vs browserRouter https://stackoverflow.com/a/74149347/6811686
    const router = (0, react_router_dom_1.createHashRouter)([
        {
            path: "/",
            element: (0, jsx_runtime_1.jsx)(Home_1.default, { t: t }),
            errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}),
        },
        {
            path: "communityLinks",
            element: (0, jsx_runtime_1.jsx)(CommunityLinks_1.default, { t: t }),
            errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}),
        },
        {
            path: "lostMount",
            element: (0, jsx_runtime_1.jsx)(LostMount_1.default, { t: t }),
            errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}),
        },
        {
            path: "monsterRoller",
            element: (0, jsx_runtime_1.jsx)(MonsterRoller_1.default, { t: t }),
            errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}),
        },
        {
            path: "setupHelper",
            element: (0, jsx_runtime_1.jsx)(SetupHelper_1.default, { t: t }),
            errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}),
        },
        {
            path: "inventoryChecker",
            element: (0, jsx_runtime_1.jsx)(InventoryChecker_1.default, { t: t }),
            errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}),
        },
        {
            path: "locationTokens",
            element: (0, jsx_runtime_1.jsx)(LocationTokens_1.default, { t: t }),
            errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}),
        },
        {
            // This should always be last
            path: "*",
            element: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {})
        }
    ]);
    return ((0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading...." }), children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex-wrapper mx-0 px-0', style: {
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }, children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, { t: t, i18n: i18n }), (0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: router }), (0, jsx_runtime_1.jsx)(Footer_1.default, { t: t })] }) }));
}
exports.default = App;
