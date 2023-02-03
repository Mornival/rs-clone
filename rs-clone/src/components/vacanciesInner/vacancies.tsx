import { VacanciesCart } from './vacanciesCard';
import { VacanciesBtn } from './vacanciesBtn';
import { useState } from 'react';
import './vacancies.scss';

export const Vacancies = () => {
    let [state, setState] = useState(20);
    let [stateBtn, setStateBtn] = useState();

    function getPagesHandler() {
        const { target } = arguments[0];
        setStateBtn(target);

        setState((prev) => {
            prev += 20;
            if (prev >= 100) return 100;
            return prev;
        });
    }

    return (
        <div className="container">
            <ul className="vacancies">
                <VacanciesCart setPagesVacancies={state} btn={stateBtn} />
            </ul>
            <VacanciesBtn clickBtnPages={getPagesHandler} />
        </div>
    );
};
