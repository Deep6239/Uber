import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    const navigate = useNavigate()

    const { setCaptain } = useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType,
            }
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

        if(response.status === 201) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setVehicleColor("");
        setVehiclePlate("");
        setVehicleCapacity("");
        setVehicleType("");
    };

    return (
        <div className="p-5 h-screen flex flex-col justify-between">
            <div>
                <img
                    className="w-16 mb-10"
                    src="https://pngimg.com/d/uber_PNG24.png"
                    alt="logo"
                />
                <form
                    action=""
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                >
                    <h3 className="text-lg w-full font-medium mb-2">
                        What's our Captain's Name 
                    </h3>
                    <div className="flex gap-4 mb-6">
                        <input
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            type="text"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            placeholder="First name"
                            required
                        />
                        <input
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            type="text"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            placeholder="Last name"
                            required
                        />
                    </div>

                    <h3 className="text-lg font-medium mb-2">
                        What's our Captain's email
                    </h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        placeholder="email@example.com"
                        required
                    />

                    <h3 className="text-lg font-medium mb-2">Password</h3>
                    <input
                        className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        placeholder="password"
                        required
                    />

                    <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
                    <div className="flex gap-4 mb-4">
                        <input
                            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                            type="text"
                            value={vehicleColor}
                            onChange={(e) => {
                                setVehicleColor(e.target.value);
                            }}
                            placeholder="Vehicle Color"
                            required
                        />
                        <input
                            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                            type="text"
                            value={vehiclePlate}
                            onChange={(e) => {
                                setVehiclePlate(e.target.value);
                            }}
                            placeholder="Vehicle Plate Number"
                            required
                        />
                    </div>
                    <div className="flex gap-4 mb-6">
                        <input
                            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                            type="number"
                            value={vehicleCapacity}
                            onChange={(e) => {
                                setVehicleCapacity(e.target.value);
                            }}
                            placeholder="Vehicle Capacity"
                            required
                        />
                        <select
                            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                            value={vehicleType}
                            onChange={(e) => {
                                setVehicleType(e.target.value);
                            }}
                            required
                        >
                            <option value="" disabled>
                                Select Vehicle Type
                            </option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="moto">Moto</option>
                        </select>
                    </div>
                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
                        Create captain account 
                    </button>

                    <p className="text-center">
                        Already hace a account?{" "}
                        <Link to="/captain-login" className="text-blue-600">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
            <div>
              <p className="text-[10px] leading-tight">
                This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
              </p>
            </div>
        </div>
    );
}

export default CaptainSignup