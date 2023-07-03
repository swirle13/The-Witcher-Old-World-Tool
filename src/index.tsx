import React from 'react'
import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Home from './pages/Home';
import ErrorPage from "./pages/ErrorPage";
import LostMount from './pages/LostMount';
import CommunityLinks from './pages/CommunityLinks';
import Root from './pages/Root';
import MonsterRoller from './pages/MonsterRoller';
import SetupHelper from './pages/SetupHelper';
import LocationTokens from './pages/LocationTokens';
import InventoryChecker from './pages/InventoryChecker';

// hashRouter vs browserRouter https://stackoverflow.com/a/74149347/6811686
const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />,
                children: [
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
                element: <SetupHelper />
            },
            {
                path: "inventoryChecker",
                element: <InventoryChecker />
            },
            {
                path: "locationTokens",
                element: <LocationTokens />
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
        <RouterProvider router={router} />
    </React.StrictMode>
);

{
    /* The following line can be included in your src/index.js or App.js file */
    // Taken from https://react-bootstrap.netlify.app/docs/getting-started/introduction#css
}

