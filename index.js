"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// set up following https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const client_1 = require("react-dom/client");
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
const Home_1 = __importDefault(require("./pages/Home"));
const ErrorPage_1 = __importDefault(require("./pages/ErrorPage"));
const LostMount_1 = __importDefault(require("./pages/LostMount"));
const CommunityLinks_1 = __importDefault(require("./pages/CommunityLinks"));
const Root_1 = __importDefault(require("./pages/Root"));
const MonsterRoller_1 = __importDefault(require("./pages/MonsterRoller"));
const SetupHelper_1 = __importDefault(require("./pages/SetupHelper"));
// hashRouter vs browserRouter https://stackoverflow.com/a/74149347/6811686
const router = (0, react_router_dom_1.createHashRouter)([
    {
        path: "/",
        element: (0, jsx_runtime_1.jsx)(Root_1.default, {}),
        errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}),
        children: [
            // TODO: follow react router demo to add an index that all pages inherit from
            {
                path: "/",
                element: (0, jsx_runtime_1.jsx)(Home_1.default, {}),
                errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}),
                children: [
                // TODO: follow react router demo to add an index that all pages inherit from
                ],
            },
            {
                path: "communityLinks",
                element: (0, jsx_runtime_1.jsx)(CommunityLinks_1.default, {})
            },
            {
                path: "lostMount",
                element: (0, jsx_runtime_1.jsx)(LostMount_1.default, {})
            },
            {
                path: "monsterRoller",
                element: (0, jsx_runtime_1.jsx)(MonsterRoller_1.default, {})
            },
            {
                path: "setupHelper",
                element: (0, jsx_runtime_1.jsx)(SetupHelper_1.default, {})
            },
            {
                path: "inventoryChecker",
                element: (0, jsx_runtime_1.jsx)(LostMount_1.default, {})
            },
        ],
    },
    {
        // This should always be last
        path: "*",
        element: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {})
    }
]);
const container = document.getElementById('app-root');
const root = (0, client_1.createRoot)(container);
root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: router }) }));
// to publish website to Github Pages, follow: https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/
{
    /* The following line can be included in your src/index.js or App.js file */
    // Taken from https://react-bootstrap.netlify.app/docs/getting-started/introduction#css
}
