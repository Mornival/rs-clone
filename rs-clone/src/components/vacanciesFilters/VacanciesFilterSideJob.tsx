import './VacanciesFilterSideJob.scss';
import { VacanciesFilterCheckbox } from "./VacanciesFilterCheckbox";
import { VacanciesFilterRadio } from "./VacanciesFilterRadio"; 
import { VacanciesChooseSalary } from './VacanciesChooseSalary';
import { IClasters } from "../../types/interfaces";
interface IProps{
    props: IClasters
}
export const VacanciesFilterSideJob = (props: IProps) => {
    let clusters: IClasters = props.props;
    let ownSalary: boolean = true;
    return (
        <>
        <h2>{clusters.name}</h2>
        <div className="vacancy-filter-element">
            <form id={clusters.name}>
                {clusters.items.map((v, i , a) => {
                    if(clusters.name === 'Уровень дохода'){
                        if(i === 0 && ownSalary){
                            ownSalary = false;
                            i--;
                            return <VacanciesChooseSalary name={clusters.name} key={'Своя-зарплата'}/>
                        }
                        return <VacanciesFilterRadio props={v} name={clusters.name} id={clusters.id} key={v.name}/>
                    }
                    return <VacanciesFilterCheckbox props={v} name={clusters.name} id={clusters.id} key={v.name}/>
                })}
            </form>
        </div>
        </>
    )
};
