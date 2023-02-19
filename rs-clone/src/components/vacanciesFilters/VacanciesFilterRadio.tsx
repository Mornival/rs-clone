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

export const VacanciesFilterRadio = (props: IProps) => {
    const {url, setUrl} = useContext(urlContext);
    let item = props.props;
    let name = props.name;
    let idItem: string = props.id;
    let checkStatus: boolean = false;
    const param: string = AddPartOfQuery(item);
    const queryParam = qs.parse(param);
    const queryString: string = window.location.search.substring(1);
    const queryObj: qs.ParsedQs = qs.parse(queryString);
    if(idItem === "salary"){
        delete queryObj[`set_salary`];
    }
    if(queryObj){
        if(queryObj["page"]){
            delete queryObj["page"];
        }
        if(queryObj[`${idItem}`] === queryParam[`${idItem}`]){
            checkStatus = true;
        } else {
            const elemInput: HTMLInputElement | null = document.getElementById(`${item.count}`) as HTMLInputElement;
            if(elemInput){
                elemInput.checked = false;
            }
            checkStatus = false;
        }
    }
    const clickRadio = (e: React.FormEvent<HTMLInputElement>) => {
        if(!url){
            const queryString: string = window.location.search.substring(1);
            const queryObj: qs.ParsedQs = qs.parse(queryString);
            queryObj[`${idItem}`] = queryParam[`${idItem}`];
            if(queryObj["page"]){
                delete queryObj["page"];
            }
            if(idItem === "salary"){
                delete queryObj[`set_salary`];
            }
            window.history.replaceState(null,'',`${response_name.vacancies}?${cleaningQs(decodeURI(qs.stringify(queryObj)))}`);
            if(setUrl){
                setUrl();
            }
        } else {
            e.currentTarget.checked = false;
        }
    }
    return (
        <div className="vacancy-filter-line" key={item.name}>
            <label>
                <input className="radio" id={`${item.count}`} type="radio" name={name} onClick={e => clickRadio(e)} defaultChecked={checkStatus} disabled={url} />
                <span className="fake-radio"></span>
                <span>{item.name}</span>
                <span className="vacancy-filter-text-hidden">{item.count}</span>
            </label>
        </div>
    )
}