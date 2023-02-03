import { REQUEST } from '../../api/api';
import { IData } from '../../types/interfaces';
import { VacanciesSalary } from './vacanciesSalary';
import { VacanciesAmount } from './vacanciesAmount';
import { useEffect, useState } from 'react';

export const VacanciesCart = (props: { setPagesVacancies: number; btn: undefined | HTMLButtonElement }) => {
    const { setPagesVacancies, btn } = props;

    const [state, setState] = useState<Pick<IData, 'id' | 'name' | 'salary'>[]>([]);

    async function getItems(value: number) {
        const BTN = document.querySelector('.vacancies__btn') as HTMLButtonElement;
        const BOX_VACANSIES = document.querySelector('.vacancies');
        if (btn) btn.disabled = true;
        if (BOX_VACANSIES) BOX_VACANSIES.classList.toggle('active', true);
        const { items } = await REQUEST(`area=113&per_page=${value}`);
        setState(items);
        if (btn) btn.disabled = false;
        if (BOX_VACANSIES) BOX_VACANSIES.classList.toggle('active', false);
        BTN.style.display = 'block';
    }

    useEffect(() => {
        getItems(setPagesVacancies);
    }, [setPagesVacancies]);

    const COLORS_VARIABLES = '0123456789ABCDF';

    function getRandomColor(): string {
        let resultColor = '#';
        for (let i = 0; i < 6; i++) {
            resultColor += COLORS_VARIABLES[Math.floor(Math.random() * COLORS_VARIABLES.length)];
        }
        return resultColor;
    }

    return (
        <>
            {state.map(({ name, id, salary }) => (
                <li className="vacancies__item" key={id} style={{ borderLeftColor: getRandomColor() }}>
                    <h2 className="vacancies__title">{name}</h2>
                    <VacanciesSalary salary={salary} name={name} />
                    <VacanciesAmount name={name} />
                </li>
            ))}
        </>
    );
};
