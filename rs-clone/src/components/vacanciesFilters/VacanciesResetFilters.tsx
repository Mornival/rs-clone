import './VacanciesResetFilters.scss'
import { response_name } from '../../types/enum';
import { useContext } from 'react';
import urlContext from "../../context/historyURL";
export const VacanciesResetFilters = () => {
    const { setUrl } = useContext(urlContext);
    const resetFilters = () => {
        window.history.replaceState(null, 'vacancies', `${response_name.vacancies}`);
        const inputSalary: HTMLInputElement|null = document.getElementById("own-salary-input") as HTMLInputElement;
        if(inputSalary){
            inputSalary.value = "";
        }
        if(setUrl){
            setUrl();
        }
    }
    return (
        <button className="vacancy-filter-reset-button" onClick={resetFilters}>Сбросить фильтры</button>
    )
}