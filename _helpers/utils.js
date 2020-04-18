export const emailValidator = email => {
    const re = /\S+@\S+\.\S+/

    if (!email || email.length <= 0) return 'Email cannot be empty.'
    if (!re.test(email)) return 'Ooops! We need a valid email address.'

    return ''
}

export const passwordValidator = password => {
    if (!password || password.length <= 0) return 'Password cannot be empty.'

    return ''
}

export const getUserFromJwt = token => {
    const parsedToken = parseJwt(token)
    if (!parsedToken) return {}

    let userRoles = []
    if (isString(parsedToken.role)) userRoles.push(parsedToken.role)
    else userRoles = parsedToken.role

    return {
        firstName: parsedToken.given_name,
        lastName: parsedToken.family_name,
        email: parsedToken.email,
        roles: userRoles,
        photoUrl: parsedToken.photoUrl,
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
