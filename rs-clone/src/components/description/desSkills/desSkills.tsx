import { IData } from '../../../types/interfaces';

export const DescriptionSkills = (props: { data: IData }) => {
    const getValidSkills = (param: [{ [key: string]: string }]) => {
        if (param.length) {
            return (
                <div className="descriptions__skills des-skills">
                    <h3 className="des-skills__title">Ключевые навыки</h3>
                    <ul className="des-skills__list">
                        {props.data?.key_skills
                            ? props.data?.key_skills.map(({ name }, index) => (
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

    return <>{props.data ? getValidSkills(props.data.key_skills) : ''}</>;
};
