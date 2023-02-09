import { Link } from 'react-router-dom';
import { REQUEST } from '../api/api';
import { useEffect, useState } from 'react';

export const VacanciesPages = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const getRequire = async () => {
            const { items } = await REQUEST();
            setState(items);
        };
        getRequire();
    }, []);

    const STYLE_LINK = {
        display: 'block',
        marginBottom : '2rem'
    };

    return (
        <section className="container">
            {state.map(({ name, id }) => (
                <Link to={id} key={id} style={STYLE_LINK}>
                    {name}
                </Link>
            ))}
        </section>
    );
};
