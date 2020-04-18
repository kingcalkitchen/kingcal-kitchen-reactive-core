import { 
    apiURL, 
    getRequestOptions,
    handleResponse, 
    handleError 
} from '../_helpers'

const BASE_URL = `${apiURL}/api/Item`

export const getAllWithSubType = async () => {
    return fetch(`${BASE_URL}/GetAllWithSubType`, getRequestOptions())
        .then(handleResponse, handleError)
}
