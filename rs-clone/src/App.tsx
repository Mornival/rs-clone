import React from 'react';
import './App.scss';
import { Vacancies } from './components/vacanciesInner/vacancies';
import './scss/style.scss';

function App() {
    return (
        <>
            <div className="App">
                <h1>Hello RS-clone</h1>
            </div>
            <Vacancies />
        </>
    );
}

export default App;
