import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { useState, useEffect } from 'react';
import './vacancy.scss'
import { response_name } from '../types/enum';
import { IResponse } from '../types/interfaces';
import { VacancySmallDescription } from '../components/vacancySmallDescription/VacancySmallDescription';
//search?area=1&part_time=temporary_job_true&search_field=name&search_field=company_name&search_field=description&enable_snippets=true&text=&ored_clusters=true
const BASIC_URL = 'https://server-jobs.onrender.com/api';
const REQUEST = async () => {
    try {
        // const RESPONSE = await fetch(`${BASIC_URL}/${response_name.vacancies}`
        console.log(`${BASIC_URL}/${response_name.vacancies}/15`);
        const RESPONSE = await fetch(`${BASIC_URL}/${response_name.vacancies}/?search?area=1`, {
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
    const [obj, setObj] = useState<IResponse>();
    const [render, setRender] = useState<boolean>(false);
    const getVacancies = async () => {
        valid = false;
        setObj(await REQUEST());
    };
    const createVacancies = () => {
        if(obj){
            return obj.items.map((v) => {
                return <VacancySmallDescription props={v} key={v.id}/>
            })
        }
    }
    useEffect(() => {
        if (valid) getVacancies();
        if (obj && !render){
            setRender(true);
        } 
    }, [obj]);
    return (
        <>
            <Header />
            <main className="main">
                <div className='vacancies-list-block'>
                    {render && createVacancies()}
                </div>
            </main>
            <Footer />
        </>
    )
};
