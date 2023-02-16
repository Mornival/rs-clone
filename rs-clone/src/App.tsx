import { Vacancies } from './components/vacanciesInner/vacancies';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { VacanciesPages } from './pages/vacancy';
import { Footer } from './components/Footer/Footer';
import { NotFound } from './pages/notFound';
import urlContext, { defaultUrl } from './context/historyURL';
import { useState } from 'react';
import { DescriptionPages, loader } from './pages/description';
import { Layout } from './components/Layout';
import { ErrorPages } from './pages/error';

export function App() {
    const [url, toggleUrl] = useState(defaultUrl.url);
    const setUrl = () => { toggleUrl(!url) };
   

const router = createBrowserRouter(
    createRoutesFromElements(
        <urlContext.Provider value={{
            url,
            setUrl
        }}>
        <Route path="/" element={<Layout />} errorElement={<ErrorPages />}>
            <Route index element={<Vacancies />} />
            <Route path="vacancy" element={<VacanciesPages />} />
            <Route path="vacancy/:id" element={<DescriptionPages />} loader={loader} />
        </Route>
        </urlContext.Provider>
    )
)};

export const App = () => <RouterProvider router={router} />;
