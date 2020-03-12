import { userConstants } from './../_constants'
import { Alert } from 'react-native'

const initialState = {
    loading: false,
    token: null,
    isSignout: false,
}

export function user(state = initialState, action) {
    switch(action.type) {
        case userConstants.RESTORE_TOKEN:
            return { ...state, isSignout: false, token: action.token }

        case userConstants.GET_TOKEN_REQUEST:
            return { ...state, loading: true }
        case userConstants.GET_TOKEN_SUCCESS:
            return { ...state, isSignout: false, token: action.token, loading: false }
        case userConstants.GET_TOKEN_FAILURE:
            return { ...state, error: action.error, loading: false }
            
        case userConstants.REMOVE_TOKEN:
            return { ...state, isSignout: true, token: null }
        default:
            return state
    }
}
