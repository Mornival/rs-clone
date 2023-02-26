import { response_name } from '../../types/enum';
import { useEffect } from 'react';
import urlContext from "../../context/historyURL";
import { useContext } from 'react';
import { cleaningQs } from './cleaningQS';
import qs from 'qs';
interface IProps {
    name: string
}
export const VacanciesChooseSalary = (props: IProps) => {
    let name: string = props.name;
    let checkStatus: boolean = false;
    let checkStatusRadio: boolean = false;
    let checkBaseInput: boolean = false;
    const { url, setUrl } = useContext(urlContext);
    let defaultSum: string = "";
    let paramCheckBox: string = "only_with_salary=true";
    const queryParamBox = qs.parse(paramCheckBox);
    const queryString: string = window.location.search.substring(1);
    const queryObj: qs.ParsedQs = qs.parse(queryString);
    if (queryObj) {
        if (queryObj["page"]) {
            delete queryObj["page"];
        }
        if (queryObj[`only_with_salary`]) {
            checkStatus = true;
        } else {
            checkStatus = false;
        }
        if (queryObj[`set_salary`]) {
            checkStatusRadio = true;
            if (queryObj['salary']) {
                defaultSum = queryObj['salary'] as string;
            }
        } else {
            checkStatusRadio = false;
        }
        if(!queryObj[`set_salary`] &&  !queryObj[`salary`]){
            checkBaseInput = true;
            const inputBaseSalary: HTMLInputElement|null = document.getElementById("dont-worry-about-salary") as HTMLInputElement;
            if(inputBaseSalary){
                inputBaseSalary.checked = true;
            }
        }
    }
    const clickCheckbox = (e: React.FormEvent<HTMLInputElement>) => {
        const queryString: string = window.location.search.substring(1);
        const queryObj: qs.ParsedQs = qs.parse(queryString);
        if (e.currentTarget.checked) {
            queryObj[`only_with_salary`] = queryParamBox[`only_with_salary`];
        } else {
            delete queryObj[`only_with_salary`];
        }
        window.history.replaceState(null, '', `${response_name.vacancies}?${cleaningQs(decodeURI(qs.stringify(queryObj)))}`);
        if (setUrl) {
            setUrl();
        }
    }
    const clickSalary = () => {
        const elemInput: HTMLInputElement | null = document.getElementById("own-salary") as HTMLInputElement;
        const queryString: string = window.location.search.substring(1);
        const queryObj: qs.ParsedQs = qs.parse(queryString);
        if (elemInput) {
            if (!elemInput.checked) {
                delete queryObj["salary"];
                queryObj[`set_salary`] = "true";
                elemInput.checked = true;
                window.history.replaceState(null, '', `${response_name.vacancies}?${cleaningQs(decodeURI(qs.stringify(queryObj)))}`);
            }
        }
    }
    const clickRadio = () => {
        const queryString: string = window.location.search.substring(1);
        const queryObj: qs.ParsedQs = qs.parse(queryString);
        if (!queryObj[`set_salary`]) {
            delete queryObj["salary"];
        }
        if (!queryObj[`set_salary`]) {
            queryObj[`set_salary`] = "true";
        }
        const input = document.getElementById(`own-salary-input`);
        input?.focus();
        window.history.replaceState(null, '', `${response_name.vacancies}?${cleaningQs(decodeURI(qs.stringify(queryObj)))}`);
    }
    const inputSalary = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length > 9) {
            e.currentTarget.value = e.currentTarget.value.substring(0, e.currentTarget.value.length - 1);
        }
        if (+e.currentTarget.value === 0) {
            e.currentTarget.value = "";
        }
        if (e.currentTarget.value.charCodeAt((e.currentTarget.value.length - 1)) < 48 ||
            e.currentTarget.value.charCodeAt((e.currentTarget.value.length - 1)) > 57) {
            e.currentTarget.value = e.currentTarget.value.substring(0, e.currentTarget.value.length - 1);
        }
        if (+e.currentTarget.value === 0) {
            e.currentTarget.value = "";
        }
    }
    const clickFind = () => {
        const inputArea: HTMLInputElement | null = document.getElementById('own-salary-input') as HTMLInputElement;
        if (!url && inputArea.value) {
            const queryString: string = window.location.search.substring(1);
            const queryObj: qs.ParsedQs = qs.parse(queryString);
            const elemInput: HTMLInputElement | null = document.getElementById(`own-salary-input`) as HTMLInputElement;
            if (queryObj && elemInput) {
                let startValue: number = 0;
                if (queryObj["salary"]) {
                    startValue = +queryObj["salary"];
                }
                queryObj["salary"] = elemInput.value;
                if (+queryObj["salary"] > 0 && startValue !== +queryObj["salary"]) {
                    window.history.replaceState(null, '', `${response_name.vacancies}?${cleaningQs(decodeURI(qs.stringify(queryObj)))}`);
                    if (setUrl) {
                        setUrl();
                    }
                }
            }
        }
    }
    const clickClearSalary = (e: React.FormEvent<HTMLInputElement>) => {
        const queryString: string = window.location.search.substring(1);
        const queryObj: qs.ParsedQs = qs.parse(queryString);
        if (e.currentTarget.checked) {
            delete queryObj["salary"];
            delete queryObj["set_salary"];
            window.history.replaceState(null, '', `${response_name.vacancies}?${cleaningQs(decodeURI(qs.stringify(queryObj)))}`);
            if (setUrl) {
                setUrl();
            }
        }
    }
    useEffect(() => {
        const queryString: string = window.location.search.substring(1);
        const elem: HTMLInputElement | null = document.getElementById("Указан") as HTMLInputElement;
        if (elem.checked && queryParamBox[`only_with_salary`] && !queryString.includes((queryParamBox[`only_with_salary`] as string))) {
            elem.checked = false;
        }
    }, [url]);
    return (
        <>
            <div className="vacancy-filter-line" key={"Указан Доход"}>
                <label htmlFor={"Указан"}>
                    <input className="checkbox" type="checkbox" id={"Указан"} onClick={e => clickCheckbox(e)} defaultChecked={checkStatus} disabled={url} />
                    <span className="fake"></span>
                    <span>{"Указан доход"}</span>
                </label>
            </div>
            <div className="vacancy-filter-own-salary vacancy-filter-line">
                <div>
                    <label>
                        <input className="radio" id={"dont-worry-about-salary"} onClick={e => clickClearSalary(e)} type="radio" name={name} defaultChecked={checkBaseInput} disabled={url}/>
                        <span className="fake-radio"></span>
                        <span>Не имеет значения</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input className="radio" id={"own-salary"} type="radio" name={name} onClick={clickRadio} defaultChecked={checkStatusRadio} disabled={url}/>
                        <span className="fake-radio"></span>
                        <span>Своя зарплата</span>
                    </label>
                </div>
                <div className="vacancies-filter-salary-input">
                    <input id={`own-salary-input`} type="text" className="vacancies-own-salary" placeholder={`от 20000 руб`} onClick={clickSalary} onInput={e => inputSalary(e)} defaultValue={defaultSum} disabled={url}/>
                    <button className="own-salary-button" onClick={clickFind}>Найти</button>
                </div>
            </div>
        </>
    )
}