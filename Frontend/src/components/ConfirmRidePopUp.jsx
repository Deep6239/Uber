import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        
    };
    return (
        <div>
            <h5
                className="p-1 text-center w-[93%] absolute top-0"
                onClick={() => {
                    props.setConfirmRidePopupPanel(false);
                }}
            >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">
                Confirm this ride to start
            </h3>

            <div className="flex justify-between items-center p-3 bg-yellow-400 rounded-lg mt-4">
                <div className="flex items-center gap-3">
                    <img
                        className="h-10 rounded-full object-cover w-10"
                        src="https://photoshow.in/wp-content/uploads/cute-girl-pic-for-dp-instagram-simple-attitude.jpg"
                        alt=""
                    />
                    <h2 className="text-xl font-medium">Somya</h2>
                </div>
                <h5 className="text-lg font-semibold">2.2 KM</h5>
            </div>

            <div className="flex gap-2 justify-between flex-col items-center">
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3 border-b-1 border-b-gray-300">
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">561/11F</h3>
                            <p className="text-sm -mt-1 text-gray-600">
                                Kankariya Talab, MP
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-1 border-b-gray-300">
                        <i className="ri-map-pin-2-fill text-lg"></i>
                        <div>
                            <h3 className="text-lg font-medium">561/11F</h3>
                            <p className="text-sm -mt-1 text-gray-600">
                                Kankariya Talab, MP
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3">
                        <i className="ri-currency-line "></i>
                        <div>
                            <h3 className="text-lg font-medium">₹193.20</h3>
                            <p className="text-sm -mt-1 text-gray-600">Cash</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full">
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <input 
                            type="text" 
                            placeholder="Enter OTP"
                            className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5"
                            value={otp}
                            onChange={ (e)=>{setOtp(e.target.value)}}
                        />
                        <Link
                            to="/captain-riding"
                            onClick={() => {}}
                            className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
                        >
                            Confirm
                        </Link>
                        <button
                            onClick={() => {
                                props.setConfirmRidePopupPanel(false);
                                props.setRidePopupPanel(false);
                            }}
                            className="w-full mt-2 bg-red-500 text-white font-semibold p-3 rounded-lg"
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmRidePopUp;
