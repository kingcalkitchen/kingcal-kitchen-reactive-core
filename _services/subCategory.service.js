import { 
    apiURL, 
    getRequestOptions,
    handleResponse, 
    handleError,
} from '../_helpers'

const BASE_URL = `${apiURL}/api/SubCategory`

export const getByCategory = async categoryId => {
    return fetch(`${BASE_URL}/GetByCategory/${categoryId}`, getRequestOptions())
        .then(handleResponse, handleError)
}
