import qs from 'qs';
import './VacanciesPagination.scss'
import { response_name } from '../../types/enum';
import { cleaningQs } from './cleaningQS';
import { useContext } from 'react';
import urlContext from "../../context/historyURL";
interface IProps {
    page: number
}

export const VacanciesPagination = (props: IProps) => {
    let page: number = props.page;
    let activePagination: boolean = false;
    const {setUrl} = useContext(urlContext);
    const queryString: string = window.location.search.substring(1);
    const queryObj: qs.ParsedQs = qs.parse(queryString);
    if(queryObj['page'] === (page - 1).toString() || (page === 1 && !queryObj['page'])){
        activePagination = true;
    }
    const clickPagination = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        const queryString: string = window.location.search.substring(1);
        const queryObj: qs.ParsedQs = qs.parse(queryString);
        if(queryObj['page'] !== (page - 1).toString()){
            queryObj['page'] = (page - 1).toString();
            window.history.replaceState(null,'',`${response_name.vacancies}?${cleaningQs(decodeURI(qs.stringify(queryObj)))}`);
            if(setUrl){
                setUrl();
            }
        }
    }
    return (
        <div className={`vacancy-filter-pagination ${activePagination && "vacancry-filter-padingation-active"}`}  onClick={clickPagination}>
            <p>{page}</p>
        </div>
    )
}