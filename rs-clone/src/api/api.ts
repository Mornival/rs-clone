import { response_name } from '../types/enum';

const BASIC_URL = 'https://server-jobs.onrender.com/api';


const setParams = (params: string) => `?${params}`;



export const REQUEST = async (value = '') => {
    try {
        const response = await fetch(`${BASIC_URL}/${response_name.vacancies}${value ? setParams(value) : ''}`, {
            headers: {
                'Authorization': 'Bearer eye0eXAiOwiJKV1QiLCJhbGciOiJdIUzI1NiJ9'
            }
        }
        )
        return await response.json();
    } catch (error) {
        console.log('error', error);
    }
}

export const REQUEST_VACANCIES = async () => {
    try {
        if (window.location.search.length === 0) {
            window.history.replaceState(null, 'vacancies', `?`);
        }
        const RESPONSE = await fetch(`https://api.hh.ru/vacancies${window.location.search}`, {})
        if (!RESPONSE.ok) throw new Error('Страница не загружена');
        return await RESPONSE.json();
    } catch (error) {
        console.log('error', error);
    }
}
export const BASE_REQUEST_FILTERS = async () => {
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

const setParamId = (params: string) => `/${params}`;

export const getRequestVacancies = async (value = '') => {
    try {
        const response = await fetch(`${BASIC_URL}/${response_name.vacancies}${value ? setParamId(value) : ''}`, {
            headers: {
                'Authorization': 'Bearer eye0eXAiOwiJKV1QiLCJhbGciOiJdIUzI1NiJ9'
            }
        }
        )
        return await response.json();
    } catch (error) {
        console.log('error', error);
    }
}

export const getRequestEmployers = async (value = '') => {
    try {
        const response = await fetch(`${BASIC_URL}/${response_name.employers}${value ? setParamId(value) : ''}`, {
            headers: {
                'Authorization': 'Bearer eye0eXAiOwiJKV1QiLCJhbGciOiJdIUzI1NiJ9'
            }
        }
        )
        return await response.json();
    } catch (error) {
        console.log('error', error);
    }
}
