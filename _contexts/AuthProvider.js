import React, { createContext, useState, useEffect } from 'react'

import { getUserStorageAsync, setUserStorageAsync, removeUserStorageAsync } from './../../misc'
import { getUserFromJwt } from '../_helpers/utils'
import { login, googleLogin, facebookLogin } from './../_services'

import * as Google from 'expo-google-app-auth'
import * as Facebook from 'expo-facebook'

export const AuthContext = createContext({})

export const AuthProvider = props => {
    const { children } = props

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})
    const [token, setToken] = useState(null)

    useEffect(() => {
        setLoading(true)
        getUserStorageAsync(_token => {
            setValues(_token)
            setLoading(false)
        })
    }, [])

    const setValues = _token => {
        setUserStorageAsync(_token)
        setUser(getUserFromJwt(_token))
        setToken(_token)
    }

    const removeValues = () => {
        removeUserStorageAsync()
        setUser(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{
            loading,
            token,
            user,
            forgotPassword: email => { },
            login: async (credentials, displayError) => {
                setLoading(true)
                try {
                    const result = await login(credentials)
                    if (result) setValues(result.access_token)
                } catch (error) {
                    // TODO
                    // display on snackbar
                    // displayError(error)
                } finally {
                    setLoading(false)
                }
            },
            loginGoogle: async displayError => {
                setLoading(true)
                try {
                    // TODO
                    // values below in a place to keep secrets
                    const result = await Google.logInAsync({
                        androidClientId: '238788602138-m2a070o9jjm002l67app1q95qeajlp7l.apps.googleusercontent.com',
                        iosClientId: '238788602138-9ep0a73lol34r3hp8sjc5bt8c20p5i31.apps.googleusercontent.com',
                        scopes: ['profile', 'email'],
                    })

                    if (result.type === 'success') {
                        const loginResult = await googleLogin({ access_token: result.idToken })
                        if (loginResult) setValues(loginResult.access_token)
                    }
                } catch (error) {
                    // TODO
                    // display on snackbar
                    // displayError(error)
                } finally {
                    setLoading(false)
                }
            },
            loginFacebook: async displayError => {
                setLoading(true)
                try {
                    await Facebook.initializeAsync('573940716801637')

                    const result = await Facebook.logInWithReadPermissionsAsync({ permissions: ['public_profile', 'email'] })

                    if (result.type === 'success') {
                        const loginResult = await facebookLogin({ access_token: result.token })



                        // // Get the user's name using Facebook's Graph API
                        // const response = await fetch(`https://graph.facebook.com/me?access_token=${result.token}`)
                        // //Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`) 

                        // const jsonResponse = await response.json()
                        // //console.log(jsonResponse.id)


                        // const userResponse = await fetch(
                        //     `https://graph.facebook.com/${jsonResponse.id}?fields=id,first_name,email,picture&access_token=${result.token}`
                        // )

                        // const userJsonResponse = await userResponse.json()
                        
                        // console.log(userJsonResponse)
                    } else {
                        // type === 'cancel'
                        //console.log("we are in the else")
                    }
                } catch (error) {
                    // TODO
                    // display on snackbar
                    // displayError(error)
                } finally {
                    setLoading(false)
                }
            },
            loginOs: async data => {
                console.log(data)
            },
            logout: () => { removeValues() },
            register: credentials => {
                setLoading(true)
                try {




                    //const result = await login(credentials)
                    //if (result) setValues(result.access_token)







                } catch (error) {
                    // TODO
                    // display on snackbar
                    // displayError(error)
                } finally {
                    setLoading(false)
                }

                // store.dispatch(userActions.register(credentials, () => {
                //     store.dispatch(userActions.getToken(credentials, _token => {
                //         setValues(_token)
                //     }))
                // }))
            },
        }}>
            {children}
        </AuthContext.Provider>
    )
}
