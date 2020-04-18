import {
    apiURL,
    getRequestOptions,
    postRequestOptions,
    handleResponse,
    handleError,
} from '../_helpers'

const BASE_URL = `${apiURL}/api/ItemSubItem`

export const getSubItemByItem = async itemId => {
    return fetch(`${BASE_URL}/GetSubItemByItem/${itemId}`, getRequestOptions())
        .then(handleResponse, handleError)
}

export const addSubItemToItem = async (itemId, subItemId) => {
    return fetch(`${BASE_URL}/AddSubItemToItem/${itemId}/${subItemId}`, postRequestOptions({}))
        .then(handleResponse, handleError)
}
