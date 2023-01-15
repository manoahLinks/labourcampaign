import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {

        setIsLoading(true)
        setError(null)

        const response = await fetch(` https://cors-anywhere-m.herokuapp.com/https://objective-mayer.204-93-216-231.plesk.page/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.title || json.errors.email || json.errors.password)
        }
        if(response.ok) {
            // save the user to a database
            localStorage.setItem('user', JSON.stringify(json))

            // update context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { login, isLoading, error}
}