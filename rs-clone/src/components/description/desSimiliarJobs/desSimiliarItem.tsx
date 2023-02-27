import { IData } from '../../../types/interfaces';
import { VacanciesSalary } from '../../vacanciesInner/vacanciesSalary';
import { DescriptionBrends } from '../desBrends/desBrend';
import { DescriptionsSnippet } from '../desSnippet/desSnippet';
import { DescriptionContact } from '../desContact/descriptionContact';
import { Link } from 'react-router-dom';
import { getTopScroll } from 'utils/scroll';

export const DescriptionsSimiliarItems = (props: { data: IData }) => {
    const { id, name } = props.data;

    return (
        <li className="des-similiar__box">
            <Link className="des-similiar__name" to={`/vacancies/${id}`} onClick={getTopScroll}>
                {name}
            </Link>
            <VacanciesSalary salary={props.data?.salary} />
            <DescriptionBrends data={props.data} />
            <DescriptionsSnippet data={props.data} />
            <DescriptionContact data={props.data} />
        </li>
    );
};
