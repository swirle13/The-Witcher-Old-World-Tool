// set up following https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph

import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Home from './app'
import ErrorPage from "./pages/error_page";
import LostMount from './pages/lost_mount';
import CommunityLinks from './pages/community_links';

const router = createBrowserRouter([
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
        // This should always be last
        path: "*",
        element: <ErrorPage />
    }
], {
    basename: "/the-witcher-old-world-tool"
},);

const container = document.getElementById('app-root') as HTMLElement;
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// to publish website to Github Pages, follow: https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/

{
    /* The following line can be included in your src/index.js or App.js file */
    // Taken from https://react-bootstrap.netlify.app/docs/getting-started/introduction#css
}

