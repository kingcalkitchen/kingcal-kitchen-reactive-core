import { userConstants } from './../_constants'
import { Alert } from 'react-native'

const initialState = {
    loading: false,
    token: null,
    isSignout: false,

    current: {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        roles: [],
    }
}

export function user(state = initialState, action) {
    switch (action.type) {
        case userConstants.RESTORE_TOKEN:
            return {
                ...state,
                current: action.token ? setCurrentUser(action.token) : null,
                isSignout: false,
                token: action.token
            }

        case userConstants.REMOVE_TOKEN:
            return { ...state, isSignout: true, token: null }

        case userConstants.GET_TOKEN_REQUEST:
            return { ...state, loading: true }
        case userConstants.GET_TOKEN_SUCCESS:
            return {
                ...state,
                current: action.token ? setCurrentUser(action.token) : null,
                isSignout: false,
                token: action.token,
                loading: false
            }
        case userConstants.GET_TOKEN_FAILURE:
            return { ...state, error: action.error, loading: false }

        case userConstants.CREATE_REQUEST:
            return { ...state, loading: true }
        case userConstants.CREATE_SUCCESS:
            return { ...state, loading: false }
        case userConstants.CREATE_FAILURE:
            return { ...state, loading: false }
        default:
            return state
    }
}

const setCurrentUser = token => {
    const parsedToken = parseJwt(token)
    if (!parsedToken) return {}

    let userRoles = []
    if (isString(parsedToken.role)) userRoles = [parsedToken.role]

    if (parsedToken.role && parsedToken.role.length > 1) userRoles = [...parsedToken.role]

    return {
        firstName: parsedToken.given_name,
        lastName: parsedToken.family_name,
        email: parsedToken.email,
        roles: userRoles,
    }
}

const parseJwt = token => {
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))

    return JSON.parse(jsonPayload);
}

const isString = value => {
    return typeof value === 'string' || value instanceof String
}
