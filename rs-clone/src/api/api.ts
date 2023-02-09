import { response_name } from '../types/enum';

const BASIC_URL = 'https://server-jobs.onrender.com/api';


const setParams = (params: string) => `?${params}`;



export const REQUEST = async (value = '') => {
    try {
        const RESPONSE = await fetch(`${BASIC_URL}/${response_name.vacancies}${value ? setParams(value) : ''}`, {
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
        const RESPONSE = await fetch(`${BASIC_URL}/${response_name.vacancies}${value ? setParamId(value) : ''}`, {
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
