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
const app_1 = __importDefault(require("./app"));
const error_page_1 = __importDefault(require("./pages/error_page"));
const lost_mount_1 = __importDefault(require("./pages/lost_mount"));
const community_links_1 = __importDefault(require("./pages/community_links"));
const router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: (0, jsx_runtime_1.jsx)(app_1.default, {}),
        errorElement: (0, jsx_runtime_1.jsx)(error_page_1.default, {}),
        children: [],
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
        // This should always be last
        path: "*",
        element: (0, jsx_runtime_1.jsx)(error_page_1.default, {})
    }
], {
    basename: "/The-Witcher-Old-World-Tool"
});
const container = document.getElementById('app-root');
const root = (0, client_1.createRoot)(container);
root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: router }) }));
// to publish website to Github Pages, follow: https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/
{
    /* The following line can be included in your src/index.js or App.js file */
    // Taken from https://react-bootstrap.netlify.app/docs/getting-started/introduction#css
}
