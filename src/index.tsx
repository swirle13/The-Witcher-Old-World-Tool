// set up following https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph

import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import Home from './app'
import './index.css'
import ErrorPage from "./pages/error_page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
]);

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
import 'bootstrap/dist/css/bootstrap.min.css';
