import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRequestVacancies } from '../../../api/api';
import { IData } from '../../../types/interfaces';

export const DescriptionContent = () => {
    let validLoader = true;
    const [state, setState] = useState<Pick<IData, 'branded_description' | 'description'>>();
    const params = useParams();
    const { id } = params;

    const getRequire = async () => {
        validLoader = false;
        const response = await getRequestVacancies(id);
        setState(response);
    };

    useEffect(() => {
        if (validLoader) getRequire();
    }, []);
    
    let validContent = '';

    if (state?.branded_description) {
        validContent = state?.branded_description;
    } else if (state?.branded_description === null) {
        validContent = state?.description || '';
    } else {
        validContent = 'Загрузка...';
    }

    return <div className="descriptions__content" dangerouslySetInnerHTML={{ __html: validContent }}></div>;
};
