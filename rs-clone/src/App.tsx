import React from 'react';
import './App.scss';
import { Vacancies } from './components/vacanciesInner/vacancies';
import './scss/style.scss';
import { Header } from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Vacancies />
        </div>
    );
}

export default App;
