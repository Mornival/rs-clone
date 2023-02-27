import { IItem } from '../../types/interfaces';
import { Link } from 'react-router-dom';
import './VacancySmallDescription.scss';
import { useAuth } from 'hooks/use-auth';
import { useNavigate } from 'react-router-dom';
interface IProps {
    props: IItem;
}
export const VacancySmallDescription = (data: IProps) => {
    let vacancy: IItem = data.props;
    let currency: string = 'y.e';
    const history = useNavigate();
    const { isAuth } = useAuth();

    if (vacancy.salary) {
        currency = vacancy.salary.currency;
        if (vacancy.salary.currency === 'RUR') {
            currency = 'руб.';
        } else if (vacancy.salary.currency === 'BYR') {
            currency = 'бел. руб.';
        } else if (vacancy.salary.currency === 'USD') {
            currency = 'долл. США';
        } else if (vacancy.salary.currency === 'KZT') {
            currency = 'тенге';
        } else {
            currency = vacancy.salary.currency;
        }
    }

    function getLinkHandler() {
        return isAuth ? history('/cabinet') : history('/login');
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
                        {vacancy.salary.gross && ' C возможностью увеличения ЗП'}
                    </h3>
                )}
                {vacancy.employer?.logo_urls && (
                    <Link to={`../employers/${vacancy.employer?.id}`}><img className="vacancies-small-img" src={vacancy.employer?.logo_urls.original} alt="logo" /></Link>
                )}
                {vacancy.employer?.name && <p>{vacancy.employer.name}</p>}
                {vacancy.area && <p className="vacancy-small-area">{vacancy.area.name}</p>}
                {vacancy.snippet.responsibility && (
                    <p dangerouslySetInnerHTML={{ __html: vacancy.snippet.responsibility }}></p>
                )}
                {vacancy.snippet.requirement && (
                    <p dangerouslySetInnerHTML={{ __html: vacancy.snippet.requirement }}></p>
                )}
                <button type="button" onClick={getLinkHandler}>
                    Откликнуться
                </button>
            </div>
        </>
    );
};
