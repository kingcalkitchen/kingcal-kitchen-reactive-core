import { apiURL, handleResponse, handleError } from './../_helpers'
import { Alert } from 'react-native'

export const userService = {
    getToken,
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
