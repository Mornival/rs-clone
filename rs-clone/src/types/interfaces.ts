export interface IData {
    name: string,
    id: string,
    salary: ISalary | undefined
    area: IArea
    experience: Pick<IArea, 'name' | 'id'>,
    employment: Pick<IArea, 'name' | 'id'>,
    schedule
    : Pick<IArea, 'name' | 'id'>,
    contacts: {
        email: string,
        name: string,
        phones: IPhone[];
    } | undefined,
    employer: IEmployer | undefined;
    address: IAddress | undefined
    description: string | undefined
}

interface ISalary {
    currency: string,
    from: number | null;
    gross: boolean,
    to: number | null
}

export interface IArea {
    id: string;
    name: string;
    url: string;
}

export interface IPhone {
    city: string;
    comment: string;
    country: string;
    formatted: string;
    number: string;
}

export interface IEmployer {
    alternate_url: string;
    id: string;
    logo_urls: {
        [key: string]: string
    }
    name: string;
    trusted: boolean;
    url: string;
    vacancies_url: string;
}

interface IAddress {
    building: string;
    city: string;
    description: string | null;
    lat: number;
    lng: number;
    metro: string | null;
    metro_stations: [];
    raw: string;
    street: string;
}