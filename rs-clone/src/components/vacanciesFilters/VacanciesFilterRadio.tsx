import { IItems } from "../../types/interfaces";
import { addPartOfQuery } from "./addPartOfQuery";

interface IProps {
    props: IItems,
    name: string
}

export const VacanciesFilterRadio = (props: IProps) => {
    let item = props.props;
    let id = props.name;
    addPartOfQuery(item);
    return (
        <div className="vacancy-filter-line" key={item.name}>
            <input type="radio" name={id}/>
            <p>{item.name}</p>
            <p className="vacancy-filter-text-hidden">{item.count}</p>
        </div>
    )
}