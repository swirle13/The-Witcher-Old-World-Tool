import React from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';
import App from './pages/App';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';


const root = createRoot(document.getElementById('app-root') as HTMLElement);
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);
