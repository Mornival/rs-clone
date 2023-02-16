import { Vacancies } from './components/vacanciesInner/vacancies';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { VacanciesPages } from './pages/vacancy';
import { Footer } from './components/Footer/Footer';
import { NotFound } from './pages/notFound';
import urlContext, { defaultUrl } from './context/historyURL';
import { useState } from 'react';

export function App() {
    const [url, toggleUrl] = useState(defaultUrl.url);
    const setUrl = () => { toggleUrl(!url) };
    return (
        <>
            <urlContext.Provider value={{
                url,
                setUrl
            }}>
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
            </urlContext.Provider>
        </>
    );
}
