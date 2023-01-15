import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout"

const HomePage = () => {

    const {user} = useAuthContext()
    const {logOut} = useLogout()

    const handleLogout = () => {
        logOut()
    }

    return ( 
        <div className="grid grid-cols-1 w-full gap-y-3 text-gray-500">
            <div className="bg-green-100 p-3 flex justify-between bg-green-100">
               <img className="w-10 h-10" src={require(`../assets/upnorth.png`)} alt="" />
                <div className="flex gap-x-2">
                    {user && <button onClick={handleLogout} className="px-2 py-1 bg-green-400 text-white rounded-md font-semibold">Log Out</button>}
                </div>
            </div>

            <div className="flex flex-col p-2 gap-y-1">
                <h4 className="font-semibold text-sm">Hello</h4>
                <h4 className="font-light text-sm">You've done great for coming thus far, just a little more push to be right there. please fill in the empty boxes below with you correct information and click submit.</h4>
            </div>
            

            <form className="grid gri-cols-1 m-2 p-3 rounded-lg gap-y-4 bg-gray-100">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">Phone number:</label>
                    <input 
                        type="number"
                        placeholder="enter phone"
                        className="p-2 font-light"
                     />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">first name:</label>
                    <input 
                        type="text"
                        placeholder="enter first name"
                        className="p-2 font-light"
                     />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">last name:</label>
                    <input 
                        type="text"
                        placeholder="enter last name"
                        className="p-2 font-light"
                     />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label htmlFor="gender">Gender:</label>
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
                <div className="grid grid-cols-6 ">
                    <label htmlFor="">LGA</label>
                    <input 
                        type="text"
                        className=""
                    />
                </div>
            </form>
        </div>
     );
}
 
export default HomePage;