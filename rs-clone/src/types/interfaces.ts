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
    employer: IEmployer;
    address: IAddress | undefined
    description: string | undefined
    branded_description: string | undefined
    key_skills: [{
        [key: string]: string
    }]
    snippet: {
        requirement: string,
        responsibility: string
    }
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
    area: IArea;
    site_url: string;
    open_vacancies: number;
    industries: {
        id: string,
        name: string
    }[];
    description: string;
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
interface IAdress {
    city: string | null,
    street: string | null,
    building: string | null,
    description: string | null,
    lat: number | null,
    lng: number | null,
    metro_stations: {
        station_id: string,
        station_name: string,
        line_id: string,
        line_name: string,
        lat: number | null,
        lng: number | null
    }[]
}

interface IContacts {
    email: string | null,
    name: string | null,
    phones: {
        city: string,
        comment: string | null,
        country: string,
        number: string
    }[] | null,
    call_tracking_enabled: string | null
}

interface IWorkingDays {
    id: string,
    name: string,
    intervals: {
        id: string,
        name: string,
    } | null,
    modes: {
        id: string,
        name: string,
    } | null,
}

interface ILanguages {
    id: string,
    name: string,
    level: {
        id: string,
        name: string
    }
}

interface IProfessionalRoles {
    id: string,
    name: string
}

export interface IItems {
    name: string,
    url: string,
    count: number,
    type: string | null
}

export interface IClasters {
    id: string,
    name: string,
    items: IItems[]
}

export interface IItem {
    id: string,
    description: string,
    branded_description: string | null,
    key_skills: {
        name: string
    }
    schedule: {
        id: string,
        name: string
    }
    accept_handicapped: boolean,
    accept_kids: boolean,
    experience: {
        id: string,
        name: string
    },
    address: IAdress,
    alternate_url: string,
    apply_alternate_url: string,
    code: string | null,
    department: {
        id: string,
        name: string;
    } | null,
    employment: {
        id: string,
        name: string;
    } | null,
    salary: ISalary | null,
    adv_response_url: string,
    archived: boolean,
    name: string,
    area: IArea,
    initial_created_at: string,
    created_at: string,
    published_at: string,
    employer: {
        id: string,
        name: string,
        trusted: boolean,
        logo_urls: {
            original: string;
        }
        blacklisted: boolean
    } | null,
    response_letter_required: boolean,
    type: {
        id: string,
        name: string
    },
    has_test: boolean,
    response_url: string | null,
    test: {
        required: boolean
    } | null,
    contacts: IContacts | null,
    billing_type: {
        id: string,
        name: string
    } | null,
    allow_messages: boolean,
    premium: boolean,
    driver_license_types: {
        id: string
    }[],
    accept_incomplete_resumes: boolean,
    working_days: IWorkingDays | null,
    accept_temporary: boolean | null,
    professional_roles: IProfessionalRoles[],
    languages: ILanguages,
    snippet: {
        requirement: string,
        responsibility: string
    },
}
export interface IResponse {
    alternate_url: string,
    arguments: null,
    clusters: IClasters[] | null,
    found: number,
    items: IItem[],
    page: number,
    pages: number,
    per_page: number
}