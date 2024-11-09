import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Index } from './page';
import { NotFound } from './page/404';
import { Preview } from './page/preview';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Index />} />
            <Route path="/preview/:id" element={<Preview />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
