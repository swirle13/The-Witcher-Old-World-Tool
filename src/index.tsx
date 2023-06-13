// set up following https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './index.css'

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<App />)

// to publish website to Github Pages, follow: https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/

{
/* The following line can be included in your src/index.js or App.js file */
// Taken from https://react-bootstrap.netlify.app/docs/getting-started/introduction#css
}
import 'bootstrap/dist/css/bootstrap.min.css';
