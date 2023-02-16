import { IItem } from '../../types/interfaces';
import { Link } from 'react-router-dom';
import './VacancySmallDescription.scss';
interface IProps {
    props: IItem;
}
export const VacancySmallDescription = (data: IProps) => {
    let vacancy: IItem = data.props;
    let currency: string = 'y.e';
    if (vacancy.salary) {
        if (vacancy.salary.currency === 'RUR') {
            currency = 'руб.';
        } else if (vacancy.salary.currency === 'BYR') {
            currency = 'бел. руб.';
        }
    }
    return (
        <>
            <div className="vacancy-small-description">
                <Link to={vacancy.id}>
                    {' '}
                    <h2>{vacancy.name}</h2>
                </Link>
                {vacancy.salary && (
                    <h3>
                        {vacancy.salary.from}
                        {vacancy.salary.from && vacancy.salary.to && ' - '}
                        {vacancy.salary.to} {currency}
                    </h3>
                )}
                {vacancy.employer?.logo_urls && (
                    <img className="vacancies-small-img" src={vacancy.employer?.logo_urls.original} alt="logo" />
                )}
                {vacancy.employer?.name && <p>{vacancy.employer?.name}</p>}
                {vacancy.area && <p className="vacancy-small-area">{vacancy.area.name}</p>}
                {vacancy.snippet.responsibility && <p>{vacancy.snippet.responsibility}</p>}
                {vacancy.snippet.requirement && <p>{vacancy.snippet.requirement}</p>}
                <button>Откликнуться</button>
            </div>
        </>
    );
};
