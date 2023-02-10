import { IItems } from "../../types/interfaces";


interface IProps {
    props: IItems,
    name: string
}

export const VacanciesFilterCheckbox = (props: IProps) => {
    let item = props.props;
    return (
        <div className="vacancy-filter-line" key={item.name}>
            <input type="checkbox"/>
            <p>{item.name}</p>
            <p className="vacancy-filter-text-hidden">{item.count}</p>
        </div>
    )
}