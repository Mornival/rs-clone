export interface IData {
    name: string,
    id: string,
    salary: ISalary
    area: IArea
}

interface ISalary {
    currency: string,
    from: number | null;
    gross: boolean,
    to: number | null
}

interface IArea {
    id: string;
    name: string;
    url: string;
}