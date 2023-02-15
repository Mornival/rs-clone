import { IItems } from "../../types/interfaces";
import { AddPartOfQuery } from "./addPartOfQuery";
import { response_name } from '../../types/enum';
import qs from 'qs';
import { useContext } from 'react';
import urlContext from "../../context/historyURL";
import { cleaningQs } from "./cleaningQS";

interface IProps {
    props: IItems,
    name: string,
    id: string
}

export const VacanciesFilterCheckbox = (props: IProps) => {
    let item: IItems = props.props;
    let name: string = props.name;
    let idItem: string = props.id;
    const {setUrl} = useContext(urlContext);
    let checkStatus: boolean = false;
    const param: string = AddPartOfQuery(item);
    const queryParam = qs.parse(param);
    const queryString: string = window.location.search.substring(1);
    const queryObj: qs.ParsedQs = qs.parse(queryString);
    if(queryObj){
        if(queryObj[`${idItem}`] && queryObj[`${idItem}`] === queryParam[`${idItem}`]){
            checkStatus = true;
        }
    }
    const clickRadio = (e: React.FormEvent<HTMLInputElement>) => {
        let queryString: string = window.location.search.substring(1);
        let queryObj: qs.ParsedQs = qs.parse(queryString);
        console.log(queryObj);
        console.log(queryParam);
        if(!queryObj[`${idItem}`]){
            queryObj[`${idItem}`] = queryParam[`${idItem}`];
        }
        if(queryObj[`${idItem}`]){
            queryString += `&${idItem}=${queryParam[`${idItem}`]}`
            queryObj = qs.parse(queryString);
            console.log(qs.stringify(queryObj));
        }
        console.log((decodeURI(qs.stringify(queryObj))));
        window.history.replaceState(null,'',`${response_name.vacancies}?${cleaningQs(decodeURI(qs.stringify(queryObj)))}`);
        if(setUrl){
            setUrl();
        }
        // console.log(window.location.search.substring(1));
        // const queryString1: string = `area=1002&area=16`;
        // const queryObj1: qs.ParsedQs = qs.parse(queryString1);
        // console.log(queryObj1);
        // console.log(qs.stringify(queryObj1));
    }
    return (
        <div className="vacancy-filter-line" key={item.name}>
            <input type="checkbox" onClick={e => clickRadio(e)}  defaultChecked={checkStatus}/>
            <p>{item.name}</p>
            <p className="vacancy-filter-text-hidden">{item.count}</p>
        </div>
    )
}