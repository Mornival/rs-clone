import './employers.scss';
import { getRequestEmployers } from '../api/api';
import { useLoaderData } from 'react-router-dom';
import { BtnPrevDes } from '../components/description/btnPrev';

export const EmpoloyersPages = () => {
    const response = useLoaderData();

    console.log(response);

    return (
        <section className="employer container">
            <BtnPrevDes />
            <div className="employer__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis enim minima asperiores unde
                culpa qui labore nisi inventore temporibus vitae hic quibusdam voluptatem voluptatibus dicta, ea magnam
                fuga illo?
            </div>
        </section>
    );
};

export const loaderEmployers = async ({ params }: any) => getRequestEmployers(params.id);
