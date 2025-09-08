import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GenContextProvider from './context/GenContextProvider';

const root = createRoot(document.getElementById('root'));

root.render(
    <>
        <StrictMode>
            <GenContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </GenContextProvider>
        </StrictMode>
    </>
);
