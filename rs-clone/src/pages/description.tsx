import { DescriptionTitle } from '../components/description/descriptionTitle';
import { BtnPrevDes } from '../components/description/btnPrev';
import '../components/description/description.scss';
import { DescriptionBrends } from '../components/description/desBrends/desBrend';
import { DescriptionContent } from '../components/description/desContent/desContent';
import { DescriptionSkills } from '../components/description/desSkills/desSkills';
import { DescriptionContact } from '../components/description/desContact/descriptionContact';
import { getRequestVacancies } from '../api/api';
import { Await, useAsyncValue, useLoaderData } from 'react-router-dom';
import { IData } from '../types/interfaces';
import { Suspense } from 'react';

const GetData = () => {
    const response = useAsyncValue() as IData;

    return (
        <section className="descriptions container">
            <BtnPrevDes />
            <DescriptionTitle data={response} />
            <DescriptionBrends data={response} />
            <DescriptionContent data={response} />
            <DescriptionSkills data={response} />
            <DescriptionContact data={response} />
        </section>
    );
};

const Test = () => <h2>Hellow</h2>;

export const DescriptionPages = () => {
    const res = useLoaderData() as IData;

    return (
        <Suspense fallback={<Test />}>
            <Await resolve={res}>
                <GetData />
            </Await>
        </Suspense>
    );
};

export const loader = async ({ params }: any) => {
    return getRequestVacancies(params.id);
};
