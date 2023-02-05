import { IData } from '../../types/interfaces';
import React from 'react';

export const VacanciesSalary: React.FC<Pick<IData, 'salary'>> = (props) => {
    const { salary } = props;

    let MIN_SALARY = 0;
    let MAX_SALARY = 0;

    if (salary) {
        if (salary.from) MIN_SALARY = salary.from;
        if (salary.to) MAX_SALARY = salary.to;
    }

    const VALID_MIN_SALARY = MIN_SALARY ? Math.min(MIN_SALARY) : 'Не указана';
    const VALID_MAX_SALARY = MAX_SALARY ? Math.min(MAX_SALARY) : 'Не указана';

    return <span className="vacancies__salary">{`З/П   ${VALID_MIN_SALARY} - ${VALID_MAX_SALARY} RUB`}</span>;
};
