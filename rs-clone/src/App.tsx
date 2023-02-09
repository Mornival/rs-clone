import { Vacancies } from './components/vacanciesInner/vacancies';
import { Route, Routes } from 'react-router-dom';
import { VacanciesPages } from './pages/vacancy';
import { DescriptionPages } from './pages/description';
import { Layout } from './components/Layout';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Vacancies />} />
                <Route path="vacancy" element={<VacanciesPages />} />
                <Route path="vacancy/:id" element={<DescriptionPages />} />
            </Route>
        </Routes>
    );
}
