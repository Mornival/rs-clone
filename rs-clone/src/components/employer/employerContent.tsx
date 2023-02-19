import { IEmployer } from '../../types/interfaces';

export const EmpContent: React.FC<{ data: IEmployer }> = (props) => {
    const { description } = props.data;
    return <div className="employer__content" dangerouslySetInnerHTML={{ __html: description }}></div>;
};
