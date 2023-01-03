
import DataProducts from "./data.json"

function getAll() {
    return Promise.resolve(DataProducts) ;
}

export default {
    getAll
}

