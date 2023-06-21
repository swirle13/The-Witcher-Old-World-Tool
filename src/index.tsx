// set up following https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph

import React from 'react'
import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Home from './pages/home'
import ErrorPage from "./pages/error_page";
import LostMount from './pages/lost_mount';
import CommunityLinks from './pages/community_links';
import Root from './pages/root';
import MonsterRoller from './pages/monster_roller';

// hashRouter vs browserRouter https://stackoverflow.com/a/74149347/6811686
const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            // TODO: follow react router demo to add an index that all pages inherit from
            {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />,
                children: [
                    // TODO: follow react router demo to add an index that all pages inherit from
                ],
            },
            {
                path: "communityLinks",
                element: <CommunityLinks />
            },
            {
                path: "lostMount",
                element: <LostMount />
            },
            {
                path: "monsterRoller",
                element: <MonsterRoller />
            },
            {
                path: "setupHelper",
                element: <LostMount />
            },
            {
                path: "inventoryChecker",
                element: <LostMount />
            },
        ],
    },
    {
        // This should always be last
        path: "*",
        element: <ErrorPage />
    }
]);

const container = document.getElementById('app-root') as HTMLElement;
const root = createRoot(container);
root.render(
    <React.StrictMode>
        {/* <Navbar /> */}
        <RouterProvider router={router} />
    </React.StrictMode>
);

// to publish website to Github Pages, follow: https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/

{
    /* The following line can be included in your src/index.js or App.js file */
    // Taken from https://react-bootstrap.netlify.app/docs/getting-started/introduction#css
}

