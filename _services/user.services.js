import { apiURL, handleResponse, handleError } from './../_helpers'

export const userService = {
    getToken,
    register,
}

function getToken(credentials) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    }

    return fetch(`${apiURL}/api/User/Authenticate`, requestOptions)
        .then(handleResponse, handleError)
}

function register(user) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    }

    return fetch(`${apiURL}/api/User/Register`, requestOptions)
        .then(handleResponse, handleError)
}
