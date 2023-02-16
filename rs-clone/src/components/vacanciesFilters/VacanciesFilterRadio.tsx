import { IItems } from "../../types/interfaces";
import { AddPartOfQuery } from "./addPartOfQuery";
import { response_name } from '../../types/enum';
import qs from 'qs';
import { useContext } from 'react';
import urlContext from "../../context/historyURL";
interface IProps {
    props: IItems,
    name: string,
    id: string
}

export const VacanciesFilterRadio = (props: IProps) => {
    const {setUrl} = useContext(urlContext);
    let item = props.props;
    let name = props.name;
    let idItem: string = props.id;
    let checkStatus: boolean = false;
    const param: string = AddPartOfQuery(item);
    const queryParam = qs.parse(param);
    const queryString: string = window.location.search.substring(1);
    const queryObj: qs.ParsedQs = qs.parse(queryString);
    if(queryObj){
        if(queryObj[`${idItem}`] === queryParam[`${idItem}`]){
            checkStatus = true;
        }
    }
    const clickRadio = (e: React.FormEvent<HTMLInputElement>) => {
        const queryString: string = window.location.search.substring(1);
        const queryObj: qs.ParsedQs = qs.parse(queryString);
        queryObj[`${idItem}`] = queryParam[`${idItem}`];
        window.history.replaceState(null,'',`${response_name.vacancies}?${qs.stringify(queryObj)}`);
        if(setUrl){
            setUrl();
        }
    }
    return (
        <div className="vacancy-filter-line" key={item.name}>
            <input type="radio" name={name} onClick={e => clickRadio(e)} defaultChecked={checkStatus}/>
            <p>{item.name}</p>
            <p className="vacancy-filter-text-hidden">{item.count}</p>
        </div>
    )
}