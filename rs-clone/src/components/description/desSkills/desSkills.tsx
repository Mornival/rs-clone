import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRequestVacancies } from '../../../api/api';
import { IData } from '../../../types/interfaces';

export const DescriptionSkills = () => {
    let validLoader = true;
    const [state, setState] = useState<Pick<IData, 'key_skills'>>();
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

    const getValidSkills = (param: [{ [key: string]: string }]) => {
        if (param.length) {
            return (
                <div className="descriptions__skills des-skills">
                    <h3 className="des-skills__title">Ключевые навыки</h3>
                    <ul className="des-skills__list">
                        {state?.key_skills
                            ? state?.key_skills.map(({ name }, index) => (
                                  <li className="des-skills__item" key={index}>
                                      {name}
                                  </li>
                              ))
                            : ''}
                    </ul>
                </div>
            );
        }
    };

    return <>{state ? getValidSkills(state.key_skills) : ''}</>;
};
