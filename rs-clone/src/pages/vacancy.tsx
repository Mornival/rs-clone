import { useState, useEffect } from 'react';
import './vacancy.scss';
import { IResponse } from '../types/interfaces';
import { VacancySmallDescription } from '../components/vacancySmallDescription/VacancySmallDescription';
import { VacanciesFilterSideJob } from '../components/vacanciesFilters/VacanciesFilterSideJob';
import { useContext } from 'react';
import urlContext from '../context/historyURL';
import { VacanciesPagination } from '../components/vacanciesFilters/VacanciesPagination';
import { VacanciesResetFilters } from '../components/vacanciesFilters/VacanciesResetFilters';
import qs from 'qs';
import { BASE_REQUEST_FILTERS, REQUEST_VACANCIES } from '../api/api';
let requestFilters: boolean = false;
let requestVacancies: boolean = false;
export const VacanciesPages = () => {
    const { url, setUrl } = useContext(urlContext);
    const [clickStatusFilters, setClickStatusFilters] = useState<boolean>(false);
    const [statusFilters, setStatusFilters] = useState<boolean>(false);
    const [obj, setObj] = useState<IResponse>();
    const [filterObj, setFilterObj] = useState<IResponse>();
    const [renderFilter, setRenderFilter] = useState<boolean>(false);
    const [render, setRender] = useState<boolean>(false);
    const getVacancies = async () => {
        setObj(await REQUEST_VACANCIES());
    };
    const getFilters = async () => {
        setFilterObj(await BASE_REQUEST_FILTERS());
    };
    const createFilters = () => {
        if (filterObj && filterObj.clusters) {
            return filterObj.clusters.map((v) => {
                return <VacanciesFilterSideJob props={v} key={v.id} />;
            });
        }
    };
    const createVacancies = () => {
        if (obj) {
            return obj.items.map((v) => {
                return <VacancySmallDescription props={v} key={v.id} />;
            });
        }
    };
    const getPagination = () => {
        if (obj && render) {
            let pageArr = [1];
            const queryString: string = window.location.search.substring(1);
            const queryObj: qs.ParsedQs = qs.parse(queryString);
            for (let i: number = 2; i < 8; i++) {
                if (queryObj.page && obj.page >= 4) {
                    if (+queryObj.page >= 2 && +queryObj.page + 2 <= obj.pages) {
                        if (i < 7) {
                            pageArr.push(+queryObj.page + i - 3);
                        } else {
                            pageArr.push(obj.pages);
                        }
                    } else if (+queryObj.page + 2 > obj.pages) {
                        if (i < 7) {
                            pageArr.push(obj.pages - 7 + i);
                        } else {
                            pageArr.push(obj.pages);
                        }
                    } else {
                        if (i < 7) {
                            pageArr.push(+queryObj.page + i);
                        } else {
                            pageArr.push(obj.pages);
                        }
                    }
                } else if (obj.page >= 7) {
                    if (i < 7) {
                        pageArr.push(i);
                    } else {
                        pageArr.push(obj.pages);
                    }
                } else if (pageArr.length <= obj.pages - 1) {
                    if (i < 7) {
                        pageArr.push(i);
                    } else {
                        pageArr.push(obj.pages);
                    }
                }
            }
            if (pageArr.length > 1) {
                return pageArr.map((v, i) => {
                    return <VacanciesPagination page={v} key={i} />;
                });
            }
        }
    };
    useEffect(() => {
        if (!obj && !requestVacancies) {
            requestVacancies = true;
            getVacancies();
        }
        if (!filterObj && !requestFilters) {
            requestFilters = true;
            getFilters();
        }
        if (obj && setUrl) {
            setUrl();
            requestVacancies = false;
            setRender(true);
        }
    }, [obj]);
    useEffect(() => {
        if (filterObj) {
            requestFilters = false;
            setRenderFilter(true);
        }
    }, [filterObj]);
    useEffect(() => {
        if (url) {
            setRender(false);
            setObj(undefined);
        }
    }, [url]);
    const clickFiltersStatus = () =>{
        setClickStatusFilters(true);
        const filtersBlock = document.querySelector('.vacancies-filter-block');
        const vacancyBlock = document.querySelector('.vacancies-list-block');
        if(filtersBlock?.classList.length === 1){
            filtersBlock?.classList.add('vacancies-filter-block-active');
            vacancyBlock?.classList.add('vacancies-list-block-non-active');
        } else {
            filtersBlock?.classList.remove('vacancies-filter-block-active');
            vacancyBlock?.classList.remove('vacancies-list-block-non-active');
            vacancyBlock?.classList.remove('vacancies-list-block-off');
        }
        setTimeout(changeFiltersStatus,510);
    }
    const changeFiltersStatus = () =>{
        const vacancyBlock = document.querySelector('.vacancies-list-block');
        if(vacancyBlock?.classList.length === 2){
            vacancyBlock.classList.add('vacancies-list-block-off');
        }
        setStatusFilters(!statusFilters);
        setClickStatusFilters(false);
    }
    return (
        <>
            {renderFilter && (
                <section className="vacancies-filter-page">
                    {renderFilter && (
                        <div className="vacancies-filter-block">
                            {statusFilters && <button className="vacancy-toggle-filters-vacancies" onClick={clickFiltersStatus} disabled={clickStatusFilters}>Вакансии</button>}
                            {createFilters()}
                            {<VacanciesResetFilters key="vacancies-reset-filters" />}
                        </div>
                    )}
                    {(!statusFilters || clickStatusFilters) && render && (
                        <div className="vacancies-list-block">
                            {<h2 className="vacancies-list-block-h2">{`Найдено: ${obj?.found} вакансий`}</h2>}
                            {!statusFilters && <button className="vacancy-toggle-filters-vacancies" onClick={clickFiltersStatus} disabled={clickStatusFilters}>Фильтры</button>}
                            {createVacancies()}
                            {<div className="vacancies-filter-pagination">{getPagination()}</div>}
                        </div>
                    )}
                    {!statusFilters && renderFilter && !render && (
                        <div className="vacancies-loading-data">
                            <h2>Данные Загружаются...</h2>
                        </div>
                    )}
                </section>
            )}
            {!renderFilter && (
                <div className="vacancies-loading-block">
                    <h2 className="vacancies-loading-h2">Данные Загружаются...</h2>
                </div>
            )}
        </>
    );
};
