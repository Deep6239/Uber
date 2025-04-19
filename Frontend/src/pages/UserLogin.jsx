import React, {useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import axios from "axios";

const UserLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserDataContext)
    const navigation = useNavigate()

    const submitHandler = async(e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

        if(response.status === 200){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigation('/home')
        }
        setEmail("")
        setPassword("")
    }

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img
                    className="w-16 mb-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="logo"
                />
                <form action="" onSubmit={(e)=>{submitHandler(e)}}>
                    <h3 className="text-lg font-medium mb-2">
                        What's your email
                    </h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:test-base"
                        type="email"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        placeholder="email@example.com"
                        required
                    />

                    <h3 className="text-lg font-medium mb-2">Password</h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:test-base"
                        type="password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        placeholder="password"
                        required
                    />

                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
                        Login
                    </button>

                    <p className="text-center">New Here? <Link to='/signup' className="text-blue-600">Create new Account</Link></p>
                </form>
            </div>
            <div>
                <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg">
                    Sign in as Captain
                </Link>
            </div>
        </div>
    )
};

export default UserLogin;
