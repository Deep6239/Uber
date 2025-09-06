import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {
    const [finishRidePanel, setfinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null)

    useGSAP(() => {
        if(finishRidePanel){
            gsap.to(finishRidePanelRef.current, {
                transform: "translateY(0)",
            })
        }
        else{
            gsap.to(finishRidePanelRef.current, {
                transform: "translateY(100%)",
            })
        }
    }, [finishRidePanel])

    return (
        <div className="h-screen relative">
            <div className="w-screen fixed p-6 top-0 flex items-center justify-between">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    className="w-16"
                    alt="logo"
                />
                <Link
                    to="/captain-home"
                    className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
                >
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className="h-4/5">
                <img
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    className="w-full h-full object-cover"
                    alt="map"
                />
            </div>
            <div className="h-1/5 flex items-center justify-between p-6 relative bg-yellow-400"
                onClick={() => {
                    setfinishRidePanel(true);
                }}
            >
                <h5
                    className="p-1 text-center w-[95%] absolute top-0"
                    onClick={() => {
                        
                    }}
                >
                    <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
                </h5>
                <h4 className="text-xl font-semibold">4 KM away</h4>
                <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
                <FinishRide setfinishRidePanel={setfinishRidePanel}/>
            </div>
        </div>
    );
};

export default CaptainRiding;
