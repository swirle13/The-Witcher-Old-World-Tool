import { Suspense } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import LostMount from '../pages/LostMount';
import CommunityLinks from '../pages/CommunityLinks';
import MonsterRoller from '../pages/MonsterRoller';
import SetupHelper from '../pages/SetupHelper';
import LocationTokens from '../pages/LocationTokens';
import InventoryChecker from '../pages/InventoryChecker';
import { useTranslation } from 'react-i18next';


export default function App() {
    const { t, i18n } = useTranslation();
    const router = createHashRouter([
        {
            path: "/",
            element: <Home t={t} />,
            errorElement: <ErrorPage />,
        },
        {
            path: "communityLinks",
            element: <CommunityLinks t={t} />,
            errorElement: <ErrorPage />,
        },
        {
            path: "lostMount",
            element: <LostMount t={t} />,
            errorElement: <ErrorPage />,
        },
        {
            path: "monsterRoller",
            element: <MonsterRoller t={t} />,
            errorElement: <ErrorPage />,
        },
        {
            path: "setupHelper",
            element: <SetupHelper t={t} />,
            errorElement: <ErrorPage />,
        },
        {
            path: "inventoryChecker",
            element: <InventoryChecker t={t} />,
            errorElement: <ErrorPage />,
        },
        {
            path: "locationTokens",
            element: <LocationTokens t={t} />,
            errorElement: <ErrorPage />,
        },
        {
            // This should always be last
            path: "*",
            element: <ErrorPage />
        }
    ]);

    return (
        <Suspense fallback={<div>Loading....</div>}>
            <div
                className='flex-wrapper mx-0 px-0'
                style={{
                    display: 'flex',
                    minHeight: '100vh',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}
            >
                <Navbar t={t} i18n={i18n} />
                <RouterProvider router={router} />
                <Footer t={t} />
            </div>
        </Suspense>
    );
}