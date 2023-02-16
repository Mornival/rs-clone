import { Vacancies } from './components/vacanciesInner/vacancies';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { VacanciesPages } from './pages/vacancy';
import urlContext, { defaultUrl } from './context/historyURL';
import { useState } from 'react';
import { DescriptionPages, loader } from './pages/description';
import { Layout } from './components/Layout';
import { ErrorPages } from './pages/error';

export const App = () => {
    const [url, toggleUrl] = useState(defaultUrl.url);
    const setUrl = () => {
        toggleUrl(!url);
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />} errorElement={<ErrorPages />}>
                <Route index element={<Vacancies />} />
                <Route path="vacancies" element={<VacanciesPages />} />
                <Route path="vacancies/:id" element={<DescriptionPages />} loader={loader} />
            </Route>
        )
    );

    return (
        <urlContext.Provider
            value={{
                url,
                setUrl,
            }}
        >
            <RouterProvider router={router} />
        </urlContext.Provider>
    );
};
