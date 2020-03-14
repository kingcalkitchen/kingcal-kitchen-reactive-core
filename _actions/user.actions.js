import { userConstants } from './../_constants'
import { userService } from './../_services'

export const userActions = {
    getToken,
    removeToken,
    restoreToken,
    register,
}

function getToken(credentials, setStorage) {

    return dispatch => {

        userService.getToken(credentials)
            .then(
                response => {
                    setStorage(response.access_token)

                    dispatch(success(response.access_token))
                },
                error => {
                    dispatch(failure(error.message))
                }
            )
    }

    function request() { return { type: userConstants.GET_TOKEN_REQUEST } }
    function success(token) { return { type: userConstants.GET_TOKEN_SUCCESS, token } }
    function failure(error) { return { type: userConstants.GET_TOKEN_FAILURE, error } }
}

function removeToken(removeStorage) {

    return dispatch => {
        removeStorage()

        dispatch(removeToken())
    }

    function removeToken() { return { type: userConstants.REMOVE_TOKEN } }
}

function restoreToken(token) {

    return dispatch => {
        dispatch(restoreToken(token))
    }

    function restoreToken(token) { return { type: userConstants.RESTORE_TOKEN, token } }
}

function register(user, signIn) {

    return dispatch => {

        userService.register(user)
            .then(
                response => {
                    signIn({ email: user.email, password: user.password })
                    
                    dispatch(success())
                },
                error => {
                    dispatch(failure(error.message))
                }
            )
    }

    function request() { return { type: userConstants.CREATE_REQUEST } }
    function success() { return { type: userConstants.CREATE_SUCCESS } }
    function failure(error) { return { type: userConstants.CREATE_FAILURE, error } }
}
