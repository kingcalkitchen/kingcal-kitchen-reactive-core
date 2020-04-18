import {
    apiURL,
    getRequestOptions,
    postRequestOptions,
    handleResponse,
    handleError,
} from '../_helpers'

const BASE_URL = `${apiURL}/api/UserRoles`

export const getRolesByUserId = async userId => {
    return fetch(`${BASE_URL}/GetRolesByUserId/${userId}`, getRequestOptions())
        .then(handleResponse, handleError)
}

export const assignRole = async (userId, roleId) => {
    return fetch(`${BASE_URL}/AssignRole/${userId}/${roleId}`, postRequestOptions({}))
        .then(handleResponse, handleError)
}

export const removeRole = async (userId, roleId) => {
    return fetch(`${BASE_URL}/RemoveRole/${userId}/${roleId}`, postRequestOptions({}))
        .then(handleResponse, handleError)
}
