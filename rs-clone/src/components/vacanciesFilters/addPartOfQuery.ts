import { IItems } from "../../types/interfaces"

export const AddPartOfQuery = (cluster: IItems) => {
    let urlPart: string = cluster.url.substring(cluster.url.lastIndexOf('&') + 1,cluster.url.length);
    return urlPart;
}