import { Vacancies } from './components/vacanciesInner/vacancies';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { VacanciesPages } from './pages/vacancy';
import { DescriptionPages, loader } from './pages/description';
import { Layout } from './components/Layout';
import { ErrorPages } from './pages/error';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<ErrorPages />}>
            <Route index element={<Vacancies />} />
            <Route path="vacancy" element={<VacanciesPages />} />
            <Route path="vacancy/:id" element={<DescriptionPages />} loader={loader} />
        </Route>
    )
);

export const App = () => <RouterProvider router={router} />;
