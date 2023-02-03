export interface IData {
    name: string,
    id: string,
    salary: ISalary
}

interface ISalary {
    currency: string,
    from: number | null;
    gross: boolean,
    to: number | null
}