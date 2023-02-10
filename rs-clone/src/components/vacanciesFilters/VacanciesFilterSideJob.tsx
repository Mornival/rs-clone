import cluster from "cluster";
import { IClasters } from "../../types/interfaces";
interface IProps{
    props: IClasters
}

export const VacanciesFilterSideJob = (props: IProps) => {
    let clusters: IClasters = props.props;
    return (
        <>
        <div className="vacancy-filter-element">
            <h1>{clusters.name}</h1>
        </div>
        </>
    )
};
