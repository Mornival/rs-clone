import { IItems } from "../../types/interfaces"


export const addPartOfQuery = (cluster: IItems) => {
    console.log(cluster.url.substring(cluster.url.lastIndexOf('&'),cluster.url.length));
}