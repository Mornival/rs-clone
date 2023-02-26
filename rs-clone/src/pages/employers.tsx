import './employers.scss';
import { getRequestEmployers } from '../api/api';
import { useLoaderData } from 'react-router-dom';
import { BtnPrevDes } from '../components/description/btnPrev';
import { EmpLeft } from '../components/employer/employerLeft';
import { EmpRight } from '../components/employer/employerRight';
import { IEmployer } from '../types/interfaces';

export const EmpoloyersPages = () => {
    const response = useLoaderData() as IEmployer;
    
    return (
        <section className="employer container">
            <BtnPrevDes />
            <div className="employer__box">
                <EmpLeft data={response} />
                <EmpRight data={response} />
            </div>
        </section>
    );
};

export const loaderEmployers = async ({ params }: any) => getRequestEmployers(params.id);
