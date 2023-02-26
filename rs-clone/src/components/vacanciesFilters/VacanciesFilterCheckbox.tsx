import { IItems } from "../../types/interfaces";
import { AddPartOfQuery } from "./addPartOfQuery";
import { response_name } from '../../types/enum';
import qs from 'qs';
import { useContext } from 'react';
import urlContext from "../../context/historyURL";
import { cleaningQs } from "./cleaningQS";
import { useEffect } from 'react';

interface IProps {
    props: IItems,
    name: string,
    id: string
}

export const VacanciesFilterCheckbox = (props: IProps) => {
    let item: IItems = props.props;
    let idItem: string = props.id;
    const {url, setUrl} = useContext(urlContext);
    let checkStatus: boolean = false;
    let param: string = AddPartOfQuery(item);
    const queryParam = qs.parse(param);
    const queryString: string = window.location.search.substring(1);
    const queryObj: qs.ParsedQs = qs.parse(queryString);
    if(queryObj){
        if(queryObj["page"]){
            delete queryObj["page"];
        }
        if(queryObj[`${idItem}`] && (queryObj[`${idItem}`] === queryParam[`${idItem}`] || ((queryObj[`${idItem}`] as string[]).includes((queryParam[`${idItem}`] as string))))){
            checkStatus = true;
        }
    }
    useEffect(() => {
        const queryString: string = window.location.search.substring(1);
        const elem: HTMLInputElement|null = document.getElementById(item.name) as HTMLInputElement;
        if (elem.checked && queryParam[`${idItem}`] && !queryString.includes((queryParam[`${idItem}`] as string))) {
            elem.checked = false;
        }
    }, [url]);
    const clickCheckbox= (e: React.FormEvent<HTMLInputElement>) => {
        let queryString: string = window.location.search.substring(1);
        let queryObj: qs.ParsedQs = qs.parse(queryString);
        if(queryObj["page"]){
            delete queryObj["page"];
        }
        if(!queryObj[`${idItem}`]){
            queryObj[`${idItem}`] = queryParam[`${idItem}`];
        } else if(queryObj[`${idItem}`] && e.currentTarget.checked){
                queryString += `&${idItem}=${queryParam[`${idItem}`]}`
                queryObj = qs.parse(queryString);
        } else if(queryObj[`${idItem}`] && !e.currentTarget.checked && !Array.isArray(queryObj[`${idItem}`])){
            if(queryObj[`${idItem}`] === queryParam[`${idItem}`]){
                delete queryObj[`${idItem}`];
            }
        } else if(queryObj[`${idItem}`] && Array.isArray(queryObj[`${idItem}`]) && queryParam[`${idItem}`]
        && (queryObj[`${idItem}`] as string[]).includes((queryParam[`${idItem}`] as string))
        && !e.currentTarget.checked){
            if((queryObj[`${idItem}`] as string[])){
                let obj:(string | undefined)[] = (queryObj[`${idItem}`] as string[]).map((v) =>{
                    if(v !== queryParam[`${idItem}`]){
                        return v
                    }
                });
                if(obj){
                    queryObj[`${idItem}`] = qs.parse(qs.stringify(obj));
                }
            }
        }
        window.history.replaceState(null,'',`${response_name.vacancies}?${cleaningQs(decodeURI(qs.stringify(queryObj)))}`);
        if(setUrl){
            setUrl();
        }
    }
    return (
        <div className="vacancy-filter-line" key={item.name}>
            <label htmlFor={item.name}>
                <input className="checkbox" type="checkbox" id={item.name} onClick={e => clickCheckbox(e)}  defaultChecked={checkStatus} disabled={url}/>
                <span className="fake"></span>
                <span>{item.name}</span>
                <span className="vacancy-filter-text-hidden">{item.count}</span>
            </label>
        </div>
    )
}