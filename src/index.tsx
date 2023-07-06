import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Home from './pages/Home';
import ErrorPage from "./pages/ErrorPage";
import LostMount from './pages/LostMount';
import CommunityLinks from './pages/CommunityLinks';
import Root from './pages/Root';
import MonsterRoller from './pages/MonsterRoller';
import SetupHelper from './pages/SetupHelper';
import LocationTokens from './pages/LocationTokens';
import InventoryChecker from './pages/InventoryChecker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// hashRouter vs browserRouter https://stackoverflow.com/a/74149347/6811686
const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "communityLinks",
        element: <CommunityLinks />,
        errorElement: <ErrorPage />,
    },
    {
        path: "lostMount",
        element: <LostMount />,
        errorElement: <ErrorPage />,
    },
    {
        path: "monsterRoller",
        element: <MonsterRoller />,
        errorElement: <ErrorPage />,
    },
    {
        path: "setupHelper",
        element: <SetupHelper />,
        errorElement: <ErrorPage />,
    },
    {
        path: "inventoryChecker",
        element: <InventoryChecker />,
        errorElement: <ErrorPage />,
    },
    {
        path: "locationTokens",
        element: <LocationTokens />,
        errorElement: <ErrorPage />,
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
        <div
            className='flex-wrapper mx-0 px-0'
            style={{
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }}
        >
            <Navbar />
            <RouterProvider router={router} />
            <Footer />
        </div>
    </React.StrictMode>
);

{
    /* The following line can be included in your src/index.js or App.js file */
    // Taken from https://react-bootstrap.netlify.app/docs/getting-started/introduction#css
}

