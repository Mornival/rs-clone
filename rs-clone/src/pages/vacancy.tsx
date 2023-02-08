import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { useState, useEffect} from 'react';
import './vacancy.scss'
import { response_name } from '../types/enum';
import { VacancySmallDescription } from '../components/vacancySmallDescription/VacancySmallDescription';
import { StringMappingType } from 'typescript';
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

export const VacanciesPages = () => {
    let valid = true;
    let obj: any[] = [];
    const getVacancies = async () => {
        valid = false;
        obj = await REQUEST();
        console.log(obj);
    };
    // const createListVacancies = () => {
    //     if(obj){
    //         return obj.items.forEach((v) => {
    //             console.log(obj);
    //             return <VacancySmallDescription props={v}/>
    //         })
    //     }
    // }
    useEffect(() => {
        if (!obj.length && valid) getVacancies();
        // if(obj) createListVacancies();
    }, [obj]);
    return (
        <>
            <Header />
            <main className="main">
                <h1>Страница Вакансий</h1>
                <div className='vacancies-list-block'>
                    {/* {createListVacancies()} */}
                </div>
            </main>
            <Footer />
        </>
    )
};
