import { IEmployer } from '../../types/interfaces';
import { EmpImg } from './employerImg';
import { EmpDescription } from './employerDescription';
import { EmpButtons } from './employerButtons';

export const EmpLeft: React.FC<{ data: IEmployer }> = (props) => {
    const { data } = props;

    return (
        <div className="employer__left">
            <EmpImg data={data} />
            <EmpDescription data={data} />
            <EmpButtons />
        </div>
    );
};
