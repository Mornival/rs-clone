import { REQUEST } from '../../api/api';
import { IData } from '../../types/interfaces';
import { VacanciesSalary } from './vacanciesSalary';
import { VacanciesAmount } from './vacanciesAmount';
import { useEffect, useState } from 'react';


export const VacanciesCart: React.FC<{
    setPagesVacancies: number;
    btn: undefined | HTMLButtonElement;
    getVacanciesName: (name: string) => void;
}> = (props) => {
    const { setPagesVacancies, btn, getVacanciesName } = props;

    const [state, setState] = useState<Pick<IData, 'id' | 'name' | 'salary'>[]>([]);

    let valid = true;

    async function getItems() {
        const BTN = document.querySelector('.vacancies__btn') as HTMLButtonElement;
        const BOX_VACANSIES = document.querySelector('.vacancies');
        if (btn) btn.disabled = true;
        if (BOX_VACANSIES) BOX_VACANSIES.classList.toggle('active', true);
        valid = false;
        const { items } = await REQUEST(`area=113&per_page=30`);
        setState(items);
        if (btn) btn.disabled = false;
        if (BOX_VACANSIES) BOX_VACANSIES.classList.toggle('active', false);
        BTN.style.display = 'block';
    }

    useEffect(() => {
        if (valid) getItems();        
    }, [setPagesVacancies]);

    const COLORS_VARIABLES = '0123456789ABCDF';

    function getRandomColor(): string {
        let resultColor = '#';
        for (let i = 0; i < 6; i++) {
            resultColor += COLORS_VARIABLES[Math.floor(Math.random() * COLORS_VARIABLES.length)];
        }
        return resultColor;
    }

    const getNameVacanciesHandler = (name: string) => getVacanciesName(name);

    return (
        <>
            {state.map(({ name, id, salary }) => (
                <li
                    className="vacancies__inner"
                    key={id}
                    style={{ borderLeftColor: getRandomColor()}}
                    onClick={() => getNameVacanciesHandler(name)}
                >
                    <h2 className="vacancies__title">{name}</h2>
                    <VacanciesSalary salary={salary} />
                    <VacanciesAmount name={name} />
                </li>
            ))}
        </>
    );
};
