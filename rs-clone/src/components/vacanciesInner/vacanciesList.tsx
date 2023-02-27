import { IData } from '../../types/interfaces';
import { REQUEST } from '../../api/api';
import { useEffect, useState } from 'react';
import { VacanciesSalary } from './vacanciesSalary';
import { Link } from 'react-router-dom';

export const VacanciesList: React.FC<Pick<IData, 'name'>> = (props) => {
    const { name } = props;
    const [state, setState] = useState<Pick<IData, 'name' | 'salary' | 'id' | 'area'>[]>([]);

    const getDataVacancies = async (vacanciesName: string) => {
        if (vacanciesName.length !== 0) {
            const { items } = await REQUEST(`text=${vacanciesName}&area=113&per_page=50`);
            setState(items);
        }
    };

    useEffect(() => {
        getDataVacancies(name);
    }, [name]);

    return (
        <>
            <div className="vacancies-list">
                <p className="vacancies-list__text">Вакансии:</p>
                <ul className="vacancies-list__exemple">
                    {state.map(({ name, salary, id, area }) => (
                        <li className="vacancies-list__item" key={id}>
                            <div className="vacancies-list__box">
                                <h3 className="vacancies-list__name">{name}</h3>
                                <p className="vacancies-list__area">Месторасположение: {area.name}</p>
                                <VacanciesSalary salary={salary} />
                            </div>
                            <Link className="vacancies-list__btn" to={`/vacancies?text=${name}`}>
                                {`>`}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
