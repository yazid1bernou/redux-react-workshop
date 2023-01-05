
import DataProducts from "./data.json"

export function getAll() {
    return Promise.resolve(DataProducts) ;
}

export function getById(id) {
    const product =  DataProducts.find( item => item.id  === id);
    return Promise.resolve(product) ;
}
export default {
    getAll , 
    getById
}

