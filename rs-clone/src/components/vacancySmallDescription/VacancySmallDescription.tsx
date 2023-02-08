import { useEffect } from "react";

export const VacancySmallDescription = () => {
    let valid = true;
    const getVacancies = async () => {
        valid = false;
    };
    useEffect(() => {
        if (valid) getVacancies();
    }, []);
    return (
        <>
            {/* <div className="vacancy-small-description">
                <h2>{props.name}</h2>
                <h3>{props.salary.from} - {props.salary.to} {props.salary.currency}</h3>
                <img src={props.logo_urls.original} alt="logo"/>
            </div> */}
        </>
    )
};
