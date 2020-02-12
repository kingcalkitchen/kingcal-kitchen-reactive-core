import { userConstants } from './../_constants'
import { userService } from './../_services'
import { Alert } from 'react-native'

export const userActions = {
    getToken,
}

function getToken(credentials) {

    return dispatch => {

        dispatch(request())

        userService.getToken(credentials)
            .then(
                response => {
                    Alert.alert('error')
                    dispatch(success(response.accessToken))
                },
                error => {
                    //Alert.alert(error)
                    dispatch(failure(error.message))
                }
            )

    }

    function request() { return { type: userConstants.GET_TOKEN_REQUEST } }
    function success(token) { return { type: userConstants.GET_TOKEN_SUCCESS, token } }
    function failure(error) { return { type: userConstants.GET_TOKEN_FAILURE, error } }
}
