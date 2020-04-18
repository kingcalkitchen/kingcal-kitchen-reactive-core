import { 
    apiURL, 
    getRequestOptions,
    handleResponse, 
    handleError,
} from '../_helpers'

const BASE_URL = `${apiURL}/api/SubItemProperty`

export const getBySubItem = async subItemId => {
    return fetch(`${BASE_URL}/GetBySubItem/${subItemId}`, getRequestOptions())
        .then(handleResponse, handleError)
}
