import { DescriptionTitle } from '../components/description/descriptionTitle';
import { BtnPrevDes } from '../components/description/btnPrev';
import '../components/description/description.scss';
import { DescriptionBrends } from '../components/description/desBrends/desBrend';
import { DescriptionContent } from '../components/description/desContent/desContent';
import { DescriptionSkills } from '../components/description/desSkills/desSkills';
import { DescriptionContact } from '../components/description/desContact/descriptionContact';
import { getRequestVacancies } from '../api/api';
import { DescriptionSimiliar } from '../components/description/desSimiliarJobs/desSimiliarJobs';
import { Await, useAsyncValue, useLoaderData } from 'react-router-dom';
import { BtnDesScroll } from '../components/description/desBtnScroll';
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
            <DescriptionSimiliar data={response} />
            <BtnDesScroll />
        </section>
    );
};

export const DescriptionPages = () => {
    const res = useLoaderData() as IData;
    window.onscroll = function () {
        const btnScroll = document.querySelector('.descriptions__btn-scroll') as HTMLButtonElement;
        scrollFunction(btnScroll);
    };

    function scrollFunction(btn: HTMLButtonElement) {
        if (btn) {
            document.body.scrollTop > 40 || document.documentElement.scrollTop > 40
                ? (btn.style.display = 'block')
                : (btn.style.display = 'none');
        }
    }

    return (
        <Suspense fallback={<h2>Загрузка...</h2>}>
            <Await resolve={res}>
                <GetData />
            </Await>
        </Suspense>
    );
};

export const loader = async ({ params }: any) => getRequestVacancies(params.id);
