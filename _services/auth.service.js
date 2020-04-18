import { 
    apiURL, 
    postRequestOptions,
    handleResponse, 
    handleError,
} from './../_helpers'

const BASE_URL = `${apiURL}/api/Auth`

export const login = async credentials => {
    return fetch(`${BASE_URL}/Login`, postRequestOptions(credentials))
        .then(handleResponse, handleError)
}

export const googleLogin = async token => {
    return fetch(`${BASE_URL}/GoogleLogin`, postRequestOptions(token))
        .then(handleResponse, handleError)
}

export const facebookLogin = async token => {
    return fetch(`${BASE_URL}/FacebookLogin`, postRequestOptions(token))
        .then(handleResponse, handleError)
}

export const osLogin = async token => {
    return fetch(`${BASE_URL}/OsLogin`, postRequestOptions(token))
        .then(handleResponse, handleError)
}

export const forgotPassword = async email => {
    return fetch(`${BASE_URL}/ForgotPassword`, postRequestOptions(email))
        .then(handleResponse, handleError)
}

export const register = async user => {
    return fetch(`${BASE_URL}/Register`, postRequestOptions(user))
        .then(handleResponse, handleError)
}
