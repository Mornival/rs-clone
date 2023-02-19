import { IItems } from "../../types/interfaces";
import { AddPartOfQuery } from "./addPartOfQuery";
import { response_name } from '../../types/enum';
import qs from 'qs';
import { useContext } from 'react';
import urlContext from "../../context/historyURL";

export const VacanciesFilterRadio = () => {
    const {setUrl} = useContext(urlContext);
    let idItem: string = "search_period";
    let checkStatus: boolean = false;
    const queryString: string = window.location.search.substring(1);
    const queryObj: qs.ParsedQs = qs.parse(queryString);
    // const clickRadio = (e: React.FormEvent<HTMLInputElement>) => {
    //     const queryString: string = window.location.search.substring(1);
    //     const queryObj: qs.ParsedQs = qs.parse(queryString);
    //     queryObj[`${idItem}`] = queryParam[`${idItem}`];
    //     window.history.replaceState(null,'',`${response_name.vacancies}?${qs.stringify(queryObj)}`);
    //     if(setUrl){
    //         setUrl();
    //     }
    // }
    return (
        <div className="vacancy-filter-line" key="Time-Date">
            {<select name="date" id="date-select">
                <option value="">За всё время</option>
                <option value="30">За месяц</option>
                <option value="7">За неделю</option>
                <option value="3">За последние 3 дня</option>
                <option value="1">За день</option>
            </select>}
        </div>
    )
}