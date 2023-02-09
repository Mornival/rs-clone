import './desBrend.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRequestVacancies } from '../../../api/api';
import { BrendName } from './desBrendName';
import { IData } from '../../../types/interfaces';
import { BrendImg } from './desBrendImg';
import { BrendAddress } from './desBrendAddress';

export const DescriptionBrends = () => {
    let validLoader = true;
    const [state, setState] = useState<Pick<IData, 'employer' | 'address'>>();
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

    return (
        <div className="descriptions__brends des-brend">
            <BrendImg employer={state?.employer} />
            <BrendName employer={state?.employer} />
            <BrendAddress address={state?.address} />
        </div>
    );
};
