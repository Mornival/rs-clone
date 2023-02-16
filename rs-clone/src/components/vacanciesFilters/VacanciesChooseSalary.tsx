import { IItems } from "../../types/interfaces";
import { AddPartOfQuery } from "./addPartOfQuery";
import { response_name } from '../../types/enum';
import qs from 'qs';
interface IProps {
    name: string
}
export const VacanciesChooseSalary = (props: IProps) => {
    let name = props.name;
    const clickRadio = (e: React.FormEvent<HTMLInputElement>) => {
        const queryString: string = window.location.search.substring(1);
        const queryObj: qs.ParsedQs = qs.parse(queryString);
        console.log(queryObj);
    }
    return (
        <div className="vacancy-filter-own-salary">
            <div>
                <input type="radio" name={name} onClick={e => clickRadio(e)}/>
                <label>Своя зарплата</label>
            </div>
            <input type="text" className="vacancies-own-salary" placeholder={`20000`}/>
        </div>
    )
}