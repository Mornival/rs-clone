import { IEmployer } from '../../types/interfaces';
import { Link } from 'react-router-dom';

export const EmpDescription: React.FC<{ data: IEmployer }> = (props) => {
    const { area, site_url, open_vacancies, id, industries } = props.data;
    const textUrl = site_url.replace(/[/|hhtps:]/g, '');

    return (
        <ul className="employer__list emp-list">
            <li className="emp-list__item">
                <h3 className="emp-list__name">{area ? area.name : ''}</h3>

                <a className="emp-list__link" href={site_url} target="_blank" rel="noreferrer">
                    {textUrl ? textUrl : ''}
                </a>
            </li>

            <li className="emp-list__item">
                <h3 className="emp-list__title">Вакансии</h3>

                <Link
                    className="emp-list__link"
                    to={`/vacancies?employer_id=${id}`}
                >{`${open_vacancies} активных вакансий`}</Link>
            </li>

            <li className="emp-list__item">
                <h3 className="emp-list__title">Сферы деятельности</h3>

                {industries.length !== 0 ? (
                    <span className="emp-list__industries">{industries.map(({ name }) => name)}</span>
                ) : (
                    'Не указаны'
                )}
            </li>
        </ul>
    );
};
