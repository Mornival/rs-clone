import { Vacancies } from './components/vacanciesInner/vacancies';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { VacanciesPages } from './pages/vacancy';
import { Footer } from './components/Footer/Footer';
import { NotFound } from './pages/notFound';

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
                                <Footer />
                            </>
                        }
                    />
                    <Route path="/vacancies" element={<VacanciesPages />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}
