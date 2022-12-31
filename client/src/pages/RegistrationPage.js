import React, {useState} from "react"
import { Link, Navigate } from "react-router-dom"
import AlertBox from "../components/AlertBox"

const RegisterationPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState(null)
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setPending(true)

        const details = {name, email, password}

        console.log(details)

        let response = await fetch(`register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
           
            },
            body: JSON.stringify(details)
        })

        if(!response.ok){
            setError(true)
            console.log('could not register new user', response)
            setPending(false)
            setMessage('Request unsuccessful, check credentials and try again')
        }
        if(response.ok){
            setEmail('')
            console.log('successfully registered')
            setPassword('')
            setPending(false)
            setError(false)
            setSuccess(true)
        }

    }

    return ( 
        <div className="grid grid-cols-1 items-center p-2 m-2 bg-green-100 mt-20 rounded-lg">
            {success && (<Navigate to={`/`} replace={true} />)}
            {error && <AlertBox message={message}/>}
            <div className="flex flex-col p-3 gap-y-2">
                <div className={`${pending && 'animate-bounce'} self-center shadow-md  p-2 -mt-12 bg-white`}>
                    <img className="w-32 " src={require(`../assets/upnorth.png`)} alt="" />
                </div>
                <h4 className="text-xl text-center font-bold text-green-500">Register <span className="text-gray-500">&</span>  <span className="text-red-500">Connect</span> </h4>
                <h4 className="font-light text-gray-500 gap-y-2">Hello patriotic Nigerian,<br/> its great to have you around, join the movement, Nigeria can be great again but it starts from you</h4>
            </div>
            <form className="flex flex-col gap-y-2 p-3" onSubmit={handleSubmit}>

                <input 
                    type="text"
                    className="border-none rounded-md"
                    placeholder="full name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}} 
                />
                
                <input 
                    type="email"
                    className="border-none rounded-md"
                    placeholder="Email address"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}} 
                />

                <input 
                    type="password"
                    className="border-none rounded-md"
                    placeholder="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                    
                <button className="px-4 py-2 mt-5 text-white bg-green-600 flex items-center justify-center gap-x-2 rounded-md">
                    <h4 className="text-sm">sign up</h4>
                    { pending && <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin text-green-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>}
                </button>

                <Link to={`/`} className={`text-blue-900 text-right`}>already have an account? login</Link>
            </form>
        </div>
    )    
}
 
export default RegisterationPage;