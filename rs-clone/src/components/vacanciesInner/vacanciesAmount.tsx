import { REQUEST } from '../../api/api';
import { IData } from '../../types/interfaces';
import { useEffect, useState } from 'react';

export const VacanciesAmount: React.FC<Pick<IData, 'name'>> = (props) => {
    const [state, setState] = useState<number>(0);
    const { name } = props;

    let valid = true;

    const getVacancies = async () => {
        valid = false;
        const RESPONSE = await REQUEST(`text=${name}`);

        // console.log('Response =>', RESPONSE);
        // console.log('found =>', found);

        setState(found);
    };

    useEffect(() => {
        if (valid) getVacancies();
    }, []);

    return <span>{`Вакансий найдено: ${state ? state : 'Загружается'}`}</span>;
};
