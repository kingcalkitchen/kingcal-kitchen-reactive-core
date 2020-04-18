import { 
    apiURL, 
    getRequestOptions, 
    postRequestOptions,
    putRequestOptions,
    deleteRequestOptions,
    handleResponse, 
    handleError,
} from '../_helpers'

export const getAll = async service => {
    return fetch(`${apiURL}/api/${service}/GetAll`, getRequestOptions())
        .then(handleResponse, handleError)
}

export const getById = async (id, service) => {
    return fetch(`${apiURL}/api/${service}/GetById/${id}`, getRequestOptions())
        .then(handleResponse, handleError)
}

export const create = async (data, service) => {
    return fetch(`${apiURL}/api/${service}/Create`, postRequestOptions(data))
        .then(handleResponse, handleError)
}

export const update = async (id, data, service) => {
    return fetch(`${apiURL}/api/${service}/Update/${id}`, putRequestOptions(data))
        .then(handleResponse, handleError)
}

const _delete = async (id, service) => {
    return fetch(`${apiURL}/api/${service}/Delete/${id}`, deleteRequestOptions())
        .then(handleResponse, handleError)
}
export { _delete as delete }
