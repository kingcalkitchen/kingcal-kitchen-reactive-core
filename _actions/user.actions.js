import { userConstants } from './../_constants'
import { userService } from './../_services'

export const userActions = {
    getToken,
    removeToken,
    restoreToken,
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
