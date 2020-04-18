import {
    apiURL,
    getRequestOptions,
    handleResponse,
    handleError,
} from '../_helpers'

const BASE_URL = `${apiURL}/api/Address`

export const getByPostalCode = async (code, type) => {
    return fetch(`${BASE_URL}/GetByPostalCode/${code}/${type}`, getRequestOptions())
        .then(handleResponse, handleError)
}

export const getByCityState = async (city, state, type) => {
    return fetch(`${BASE_URL}/GetByCityState/${city}/${state}/${type}`, getRequestOptions())
        .then(handleResponse, handleError)
}
