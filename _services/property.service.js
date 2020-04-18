import { 
    apiURL, 
    getRequestOptions,
    handleResponse, 
    handleError,
} from '../_helpers'

const BASE_URL = `${apiURL}/api/Property`

export const getByItem = async itemId => {
    return fetch(`${BASE_URL}/GetByItem/${itemId}`, getRequestOptions())
        .then(handleResponse, handleError)
}
