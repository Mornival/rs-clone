import { Vacancies } from './components/vacanciesInner/vacancies';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { VacanciesPages } from './pages/vacancy';
import urlContext, { defaultUrl } from './context/historyURL';
import { useState } from 'react';
import { DescriptionPages, loader } from './pages/description';
import { Layout } from './components/Layout';
import { NotFound } from './pages/notFound';
import { EmpoloyersPages, loaderEmployers } from './pages/employers';
import { ValidCompanyPage } from './pages/validCompany';
import { RegisterPage } from './pages/registerPage';
import { LoginPage } from './pages/loginPage';
import { PersonalCabinet } from 'pages/personalCabinet';

export const App = () => {
    const [url, toggleUrl] = useState(defaultUrl.url);
    const setUrl = () => {
        toggleUrl(!url);
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />} errorElement={<NotFound />}>
                <Route index element={<Vacancies />} />
                <Route path="vacancies" element={<VacanciesPages />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="vacancies/:id" element={<DescriptionPages />} loader={loader} />
                <Route path="employers/:id" element={<EmpoloyersPages />} loader={loaderEmployers} />
                <Route path="companyvalid" element={<ValidCompanyPage />} />
                <Route path="cabinet" element={<PersonalCabinet />} />
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
