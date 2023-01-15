import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (name, email, password) => {

        setIsLoading(true)
        setError(null)

        const response = await fetch(` https://cors-anywhere-m.herokuapp.com/https://objective-mayer.204-93-216-231.plesk.page/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.errors.name || json.errors.email || json.errors.password)
            console.log('unable to signup')
        }
        if(response.ok){
            setIsLoading(false)
            setSuccess(true)
        }
    }

    return { signup, isLoading, error, success}
}