import { IEmployer } from "../types/interfaces";

export const getRandomRaiting = (data: IEmployer) => {
    const { id } = data;
    let amout = 0;
    let sum = 0;

    for (let i = 0; i < id.length; i++) {
        if (+id[i] <= 5) {
            sum += +id[i];
            amout++;
        }
    }

    return sum / amout;
}