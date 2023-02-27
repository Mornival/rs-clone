import { IData } from '../../types/interfaces';
import React from 'react';

export const VacanciesSalary: React.FC<Pick<IData, 'salary'>> = (props) => {
    const { salary } = props;

    let minSalary = 0;
    let maxSalary = 0;
    let currency = '';

    if (salary) {
        if (salary.from) minSalary = salary.from;
        if (salary.to) maxSalary = salary.to;

        if (salary.currency) {
            currency = salary.currency === 'RUR' ? 'RUB' : salary?.currency;
        }
    }

    const VALID_MIN_SALARY = minSalary ? Math.min(minSalary) : 'не указана';
    const VALID_MAX_SALARY = maxSalary ? Math.min(maxSalary) : 'не указана';

    return (
        <span className="vacancies__salary">{`З/П   от:${VALID_MIN_SALARY} - до:${VALID_MAX_SALARY} ${currency}`}</span>
    );
};
