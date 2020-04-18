import {
    apiURL,
    getRequestOptions,
    handleResponse,
    handleError,
} from '../_helpers'

const BASE_URL = `${apiURL}/api/SubCategoryItem`

export const getSubCategoryByItem = async itemId => {
    return fetch(`${BASE_URL}/GetSubCategoryByItem/${itemId}`, getRequestOptions())
        .then(handleResponse, handleError)
}

export const getItemBySubCategory = async subCategoryId => {
    return fetch(`${BASE_URL}/GetItemBySubCategory/${categoryId}`, getRequestOptions())
        .then(handleResponse, handleError)
}

export const addItemToSubCategory = async (subCategoryId, itemId) => {
    return fetch(`${BASE_URL}/AddItemToSubCategory/${categoryId}/${itemId}`, postRequestOptions({}))
        .then(handleResponse, handleError)
}
