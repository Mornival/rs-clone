import './VacanciesFilterSideJob.scss';
import { VacanciesFilterCheckbox } from "./VacanciesFilterCheckbox";
import { VacanciesFilterRadio } from "./VacanciesFilterRadio";
import { VacanciesChooseSalary } from './VacanciesChooseSalary';
import { IClasters } from "../../types/interfaces";
interface IProps {
    props: IClasters
}
export const VacanciesFilterSideJob = (props: IProps) => {
    let clusters: IClasters = props.props;
    let ownSalary: boolean = true;
    return (
        <>
            <h2>{clusters.name !== "Профобласть" && clusters.name}</h2>
            <div className="vacancy-filter-element">
                <form id={clusters.name} onSubmit={e => e.preventDefault()}>
                    {clusters.name !== "Регион" && clusters.items.map((v, i) => {
                        if (clusters.name !== "Профобласть") {
                            if (clusters.name === 'Уровень дохода') {
                                if (i === 0 && ownSalary) {
                                    ownSalary = false;
                                    i--;
                                    return <VacanciesChooseSalary name={clusters.name} key={'Своя-зарплата'} />
                                }
                                return <VacanciesFilterRadio props={v} name={clusters.name} id={clusters.id} key={v.name} />
                            }
                            return <VacanciesFilterCheckbox props={v} name={clusters.name} id={clusters.id} key={v.name} />
                        }
                        return ''
                    })}
                    {clusters.name === "Регион" && clusters.items.sort((a, b) => a.name > b.name ? 1 : -1).map((v) => {
                        return <VacanciesFilterCheckbox props={v} name={clusters.name} id={clusters.id} key={v.name} />
                    })}
                </form>
            </div>
        </>
    )
};
