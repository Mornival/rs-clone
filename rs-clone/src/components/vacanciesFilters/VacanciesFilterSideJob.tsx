import cluster from "cluster";
import './VacanciesFilterSideJob.scss';
import { VacanciesFilterCheckbox } from "./VacanciesFilterCheckbox";
import { VacanciesFilterRadio } from "./VacanciesFilterRadio"; 
import { IClasters } from "../../types/interfaces";
interface IProps{
    props: IClasters
}
export const VacanciesFilterSideJob = (props: IProps) => {
    let clusters: IClasters = props.props;
    console.log(clusters);
    return (
        <>
        <h2>{clusters.name}</h2>
        <div className="vacancy-filter-element">
            <form id={clusters.name}>
                {clusters.items.map((v) => {
                    if(clusters.name === 'Уровень дохода'){
                        // console.log(v);
                        return <VacanciesFilterRadio props={v} name={clusters.name} key={v.name}/>
                    }
                    return <VacanciesFilterCheckbox props={v} name={clusters.name}  key={v.name}/>
                })}
            </form>
        </div>
        </>
    )
};
