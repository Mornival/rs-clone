import React from 'react';
import './App.scss';
import { Vacancies } from './components/vacanciesInner/vacancies';
import './scss/style.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Vacancies />
            <Footer/>
        </div>
    );
}

export default App;
