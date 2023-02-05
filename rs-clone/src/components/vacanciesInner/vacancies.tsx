import { VacanciesCart } from './vacanciesCard';
import { VacanciesBtn } from './vacanciesBtn';
import { VacanciesList } from './vacanciesList';
import { useState } from 'react';
import './vacancies.scss';

export const Vacancies = () => {
    const [state, setState] = useState(0);
    const [stateBtn, setStateBtn] = useState();
    const [stateName, setStateName] = useState('');

    function getPagesHandler() {
        const { target } = arguments[0];
        setStateBtn(target);
        setState((prev) => ++prev);
    }

    const getVacanciesName = (props: string) => setStateName(props);

    return (
        <div className="container">
            <div className="vacancies-wrapper">
                <ul className="vacancies">
                    <VacanciesCart setPagesVacancies={state} btn={stateBtn} getVacanciesName={getVacanciesName} />
                </ul>
                <VacanciesList name={stateName} />
            </div>

            <VacanciesBtn clickBtnPages={getPagesHandler} />
        </div>
    );
};
