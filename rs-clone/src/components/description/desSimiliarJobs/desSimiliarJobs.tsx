import { IData } from '../../../types/interfaces';
import { REQUEST } from '../../../api/api';
import { useEffect, useState } from 'react';
import { DescriptionsSimiliarItems } from './desSimiliarItem';

export const DescriptionSimiliar = (props: { data: IData }) => {
    const { data } = props;
    const [state, setState] = useState<IData[]>([]);
    const [amountPage, setAmountPage] = useState(0);
    const [controlBtn, setControlBtn] = useState(false);
    let valid = true;

    const getSimiliarJobs = async (amount: number, name = data.name) => {
        valid = false;
        setControlBtn(true);
        const { items, page, pages } = await REQUEST(`text=${name}&page=${amount}&per_page=20`);
        setControlBtn(false);
        setState((current) => [...current, ...items]);
        return {
            page,
            pages,
        };
    };

    useEffect(() => {
        if (valid) {
            const getDdata = async () => {
                const getPages = await getSimiliarJobs(amountPage);
                let { page, pages } = getPages;
                if (++page >= pages) setControlBtn(true);
            };
            getDdata();
        }
    }, [amountPage]);

    const getAddVacanciesHandler = () => setAmountPage((current) => ++current);

    return (
        <div className="descriptions__similiar des-similiar">
            <h2 className="des-similiar__title">Похожие вакансии</h2>

            <ul className="des-similiar__list">
                {state.map((value) => (
                    <DescriptionsSimiliarItems key={value.id} data={value} />
                ))}
            </ul>
            <button className="des-similiar__btn" type="button" onClick={getAddVacanciesHandler} disabled={controlBtn}>
                Загрузить еще вакансии
            </button>
        </div>
    );
};
