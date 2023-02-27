import { useEffect, useState } from 'react';
import { IEmployer } from '../../types/interfaces';

export const EmpImg: React.FC<{ data: IEmployer }> = (props) => {
    const { data } = props;
    
    const [state, setState] = useState<{
        image: string;
        valid: boolean;
    }>({
        image: '',
        valid: false,
    });

    useEffect(() => {
        if (data && data.logo_urls !== undefined && data.logo_urls !== null) {
            const img = data?.logo_urls[240] || data?.logo_urls[90];
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

    return <img className="employer__img" src={state.image} alt={data?.name} data-valid={state.valid} />;
};
