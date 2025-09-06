import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
    return (
        <div>
            <h5
                className="p-1 text-center w-[93%] absolute top-0"
                onClick={() => {
                    props.setfinishRidePanel(false);
                }}
            >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">
                Finish this ride
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
                <div className="mb-10 w-full">
                    <Link
                        to="/captain-home"
                        onClick={() => {}}
                        className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
                    >
                        Finish Ride 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FinishRide;
