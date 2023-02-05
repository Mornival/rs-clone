import { Vacancies } from './components/vacanciesInner/vacancies';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { VacanciesPages } from './pages/vacancy';

export function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Vacancies />
                            </>
                        }
                    />
                    <Route path="/vacancies" element={<VacanciesPages />} />
                </Routes>
            </Router>
        </>
    );
}
