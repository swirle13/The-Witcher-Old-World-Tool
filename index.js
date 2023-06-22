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
const home_1 = __importDefault(require("./pages/home"));
const error_page_1 = __importDefault(require("./pages/error_page"));
const lost_mount_1 = __importDefault(require("./pages/lost_mount"));
const community_links_1 = __importDefault(require("./pages/community_links"));
const root_1 = __importDefault(require("./pages/root"));
const monster_roller_1 = __importDefault(require("./pages/monster_roller"));
const setupHelper_1 = __importDefault(require("./pages/setupHelper"));
// hashRouter vs browserRouter https://stackoverflow.com/a/74149347/6811686
const router = (0, react_router_dom_1.createHashRouter)([
    {
        path: "/",
        element: (0, jsx_runtime_1.jsx)(root_1.default, {}),
        errorElement: (0, jsx_runtime_1.jsx)(error_page_1.default, {}),
        children: [
            // TODO: follow react router demo to add an index that all pages inherit from
            {
                path: "/",
                element: (0, jsx_runtime_1.jsx)(home_1.default, {}),
                errorElement: (0, jsx_runtime_1.jsx)(error_page_1.default, {}),
                children: [
                // TODO: follow react router demo to add an index that all pages inherit from
                ],
            },
            {
                path: "communityLinks",
                element: (0, jsx_runtime_1.jsx)(community_links_1.default, {})
            },
            {
                path: "lostMount",
                element: (0, jsx_runtime_1.jsx)(lost_mount_1.default, {})
            },
            {
                path: "monsterRoller",
                element: (0, jsx_runtime_1.jsx)(monster_roller_1.default, {})
            },
            {
                path: "setupHelper",
                element: (0, jsx_runtime_1.jsx)(setupHelper_1.default, {})
            },
            {
                path: "inventoryChecker",
                element: (0, jsx_runtime_1.jsx)(lost_mount_1.default, {})
            },
        ],
    },
    {
        // This should always be last
        path: "*",
        element: (0, jsx_runtime_1.jsx)(error_page_1.default, {})
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
