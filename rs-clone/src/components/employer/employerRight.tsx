import { IEmployer } from '../../types/interfaces';
import { BrendName } from '../description/desBrends/desBrendName';
import { EmpContent } from './employerContent';
import { Raiting } from '../raiting/raiting';

export const EmpRight: React.FC<{ data: IEmployer }> = (props) => {
    const { data } = props;

    return (
        <div className="employer__right">
            <BrendName employer={data} />
            <Raiting employer={data} />
            <EmpContent data={data} />
        </div>
    );
};
