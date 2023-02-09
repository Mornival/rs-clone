import { IData } from '../../types/interfaces';
import { getRequestVacancies } from '../../api/api';
import { useState, useEffect } from 'react';
import { VacanciesSalary } from '../vacanciesInner/vacanciesSalary';
import { DesExperience } from './desExperience';
import { BtnListTop } from './desBtnTop';
import { DesTimeline } from './desTimeline';
import { useParams } from 'react-router-dom';
import { DesName } from './desName';

export const DescriptionTitle = () => {
    const [state, setState] =
        useState<Pick<IData, 'name' | 'salary' | 'experience' | 'employment' | 'schedule' | 'contacts'>>();
    const { id } = useParams();

    let valid = true;

    const getVacancies = async () => {
        valid = false;
        const response = await getRequestVacancies(id);
        setState(response);
    };

    useEffect(() => {
        if (valid) getVacancies();
    }, []);

    return (
        <div className="descriptions__top">
            <DesName param={state?.name} />
            <VacanciesSalary salary={state?.salary} />
            <DesExperience param={state?.experience} />
            <DesTimeline schedule={state?.schedule} employment={state?.employment} />
            <BtnListTop contacts={state?.contacts} />
        </div>
    );
};
