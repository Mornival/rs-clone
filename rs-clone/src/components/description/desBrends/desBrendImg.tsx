import { IData } from '../../../types/interfaces';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopScroll } from '../../../utils/scroll';

export const BrendImg: React.FC<Pick<IData, 'employer'>> = (props) => {
    const { employer } = props;
    const [state, setState] = useState<{
        image: string;
        valid: boolean;
    }>({
        image: '',
        valid: false,
    });

    useEffect(() => {
        if (employer && employer.logo_urls !== undefined && employer.logo_urls !== null) {
            const img = employer?.logo_urls[240] || employer?.logo_urls[90];
            setState((previousState) => {
                return {
                    ...previousState,
                    image: img,
                };
            });
        } else {
            setState((previousState) => {
                return {
                    ...previousState,
                    valid: true,
                };
            });
        }
    }, []);

    return (
        <Link className="des-brend__link" to={`/employers/${employer?.id}`} onClick={getTopScroll}>
            <img className="des-brend__img" src={state.image} alt={employer?.name} data-valid={state.valid} />
        </Link>
    );
};
