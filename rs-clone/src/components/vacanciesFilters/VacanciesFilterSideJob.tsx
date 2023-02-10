import cluster from "cluster";
import './VacanciesFilterSideJob.scss';
import { IClasters } from "../../types/interfaces";
interface IProps{
    props: IClasters
}

export const VacanciesFilterSideJob = (props: IProps) => {
    let clusters: IClasters = props.props;
    console.log(clusters);
    return (
        <>
        <div className="vacancy-filter-element">
            <h1>{clusters.name}</h1>
            <form>
                {clusters.items.map((v) => {
                    return <div className="vacancy-filter-line" key={v.name}>
                        <input type="checkbox"/>
                        <p>{v.name}</p>
                        <p className="vacancy-filter-text-hidden">{v.count}</p>
                    </div>
                })}
            </form>
        </div>
        </>
    )
};
