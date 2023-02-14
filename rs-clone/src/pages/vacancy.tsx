import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { useState, useEffect } from 'react';
import './vacancy.scss'
import { response_name } from '../types/enum';
import { IResponse } from '../types/interfaces';
import { VacancySmallDescription } from '../components/vacancySmallDescription/VacancySmallDescription';
import { VacanciesFilterSideJob } from '../components/vacanciesFilters/VacanciesFilterSideJob';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import urlContext from '../context/historyURL';
const BASIC_URL = 'https://server-jobs.onrender.com/api';
const REQUEST = async () => {
    try {
        // area=1002&area=16&area=2237&search_field=name&search_field=company_name&search_field=description&enable_snippets=true
        if(window.location.search.length === 0){
            window.history.replaceState(null,'vacancies',`${response_name.vacancies}?search&clusters=true`);
        }
        const RESPONSE = await fetch(`${BASIC_URL}/${response_name.vacancies}/${window.location.search}`, {
            headers: {
                'Authorization': 'Bearer eye0eXAiOwiJKV1QiLCJhbGciOiJdIUzI1NiJ9'
            }
        }
        )
        if (!RESPONSE.ok) throw new Error('Страница не загружена');
        return await RESPONSE.json();
    } catch (error) {
        console.log('error', error);
    }
}
const BASE_REQUEST = async () => {
    try {
        const RESPONSE = await fetch(`${BASIC_URL}/${response_name.vacancies}?search=&clusters=true`, {
            headers: {
                'Authorization': 'Bearer eye0eXAiOwiJKV1QiLCJhbGciOiJdIUzI1NiJ9'
            }
        }
        )
        if (!RESPONSE.ok) throw new Error('Страница не загружена');
        return await RESPONSE.json();
    } catch (error) {
        console.log('error', error);
    }
}
let valid = true;
export const VacanciesPages = () => {
    const {url, setUrl} = useContext(urlContext);
    const [obj, setObj] = useState<IResponse>();
    const [filterObj, setFilterObj] = useState<IResponse>();
    const [renderFilter, setRenderFilter] = useState<boolean>(false);
    const [render, setRender] = useState<boolean>(false);
    const getVacancies = async () => {
        valid = false;
        setObj(await REQUEST());
    };
    const createFilters = () => {
        if (filterObj && filterObj.clusters) {
            return filterObj.clusters.map((v) => {
                return <VacanciesFilterSideJob props={v} key={v.id} />
            })
        }
    }
    const createVacancies = () => {
        if (obj) {
            return obj.items.map((v) => {
                return <VacancySmallDescription props={v} key={v.id} />
            })
        }
    }
    useEffect(() => {
        if (valid){
            getVacancies();
        }
        if(obj){
            setRender(true);
        }
        if (obj && !renderFilter && !filterObj) {
            setFilterObj(obj);
        }
    }, [obj]);
    useEffect(() => {
        if (filterObj) {
            setRenderFilter(true);
        }
    }, [filterObj]);
    useEffect(() => {
        if(url && setUrl){
            setUrl();
            setRender(false);
            valid = true;
            setObj(undefined);
        }
    }, [url]);
    return (
        <>
            <Header />
            {renderFilter && <main className="vacancies-filter-page">
                <div className="vacancies-filter-block">
                    {renderFilter && createFilters()}
                </div>
                <div className='vacancies-list-block'>
                    {render && createVacancies()}
                </div>
            </main>}
            {!render && <div className="vacancies-loading-block">
                <h2 className="vacancies-loading-h2">Loading...</h2>
            </div>}
            <Footer />
        </>
    )
};
