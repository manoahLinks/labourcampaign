import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout"

const HomePage = () => {

    const [phone, setPhone] = useState('')
    const [member_type, setMemberType] = useState('')
    const [first_name, setFirstName] = useState('')
    const [gender, setGender] = useState('')
    const [last_name, setLastName] = useState('')
    const [lga, setLga] = useState('')
    const [polling_unit, setPollingUnit] = useState('')
    const [polling_unit_code, setPollingUnitCode] = useState('')
    const [state_of_origin, setStateOfOrigin] = useState('')
    const [ward, setWard] = useState('')
    const [age_bracket, setAgeBracket] = useState('')
    const [alternate_phone, setAlternatePhone] = useState('')
    const [whatsapp_phone, setWhatsappPhone] = useState('')
    const {user} = useAuthContext()
    const {logOut} = useLogout()

    const handleLogout = () => {
        logOut()
    }

    return ( 
        <div className="grid grid-cols-1 w-full gap-y-2 md:gap-y-4 text-gray-500">
            <div className="bg-green-100 p-3 flex justify-between bg-green-100">
               <img className="w-10 h-10" src={require(`../assets/upnorth.png`)} alt="" />
                <div className="flex gap-x-2">
                    {user && <button onClick={handleLogout} className="px-2 py-1 bg-green-400 text-white rounded-md font-semibold">Log Out</button>}
                </div>
            </div>

            <div className="flex flex-col p-2 gap-y-1">
                <h4 className="font-semibold text-sm">Hello</h4>
                <h4 className="font-light text-sm">You've done great for coming thus far, just a little more push to be right there. please fill in the empty boxes below with your correct information and click submit.</h4>
            </div>
            

            <form className="grid gri-cols-1 m-2 p-3 md:p-5 md:gap-y-8 rounded-lg gap-y-4 bg-gray-100">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">Phone:</label>
                    <input 
                        type="number"
                        placeholder="enter phone"
                        className="p-2 font-light"
                     />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">FIRST NAME:</label>
                    <input 
                        type="text"
                        placeholder="enter first name"
                        className="p-2 font-light"
                     />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">LAST NAME:</label>
                    <input 
                        type="text"
                        placeholder="enter last name"
                        className="p-2 font-light"
                     />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label htmlFor="gender">GENDER:</label>
                    <div className="flex gap-x-4">
                        <input 
                            type="radio"
                            name="gender"
                            className="p-2 font-light"
                        />
                        Male
                        <input 
                            type="radio"
                            name="gender"
                            className="p-2 font-light"
                        />
                        female
                    </div>  
                </div>
                <div className="grid grid-cols-3 gap-x-2 items-center">
                    <div className="grid grid-cols-1">
                        <label htmlFor="">LGA</label>
                        <input 
                            type="text"
                            placeholder="lga"
                            className="p-2"
                        />
                    </div>

                    <div className="grid grid-cols-1">
                        <label htmlFor="">POLLING UNIT</label>
                        <input 
                            type="text"
                            placeholder="p.u"
                            className="p-2"
                        />
                    </div>

                    <div className="grid grid-cols-1">
                        <label className="text-center" htmlFor="">POLLING UNIT CODE</label>
                        <input 
                            type="text"
                            placeholder="p.u.c"
                            className="p-2"
                        />
                    </div>                    
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">STATE OF ORIGIN:</label>
                    <input 
                        type="text"
                        placeholder="enter state of origin"
                        className="p-2 font-light"
                     />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">STATE OF RESIDENCE:</label>
                    <input 
                        type="text"
                        placeholder="enter state of residence"
                        className="p-2 font-light"
                     />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <div className="grid grid-cols-1">
                        <label htmlFor="">AGE BRACKET</label>
                        <select className="bg-white">
                            <option value="">select age </option>
                            <option value="">17-below</option>
                            <option value="">18-30</option>
                            <option value="">31-50</option>
                            <option value="">51-70</option>
                            <option value="">71-above</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1">
                        <label htmlFor="">ward</label>
                        <input 
                            type="text"
                            className="p-2"
                            placeholder="ward" 
                        />
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-x-2">
                    <div className="grid grid-cols-1 text-center">
                        <label htmlFor="">ALTERNATE NUMBER</label>
                        <input 
                            type="number"
                            className="p-2"
                            placeholder="enter alt phone no."
                        />
                    </div>
                    <div className="grid grid-cols-1 text-center">
                        <label htmlFor="">WHATSAPP NUMBER</label>
                        <input 
                            type="number"
                            className="p-2"
                            placeholder="enter whatsapp no."
                        />
                    </div>
                </div>
               
               <button className="p-2 text-white md:text-sm font-semibold bg-green-500 mt-5">SUBMIT</button>
            </form>
        </div>
     );
}
 
export default HomePage;