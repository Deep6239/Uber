import React from "react";

const CaptainDetails = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-3">
                    <img
                        src="https://photosrush.com/wp-content/uploads/instagram-dp-for-girls-couple-1.jpg"
                        className="h-10 w-10 rounded-full object-cover"
                        alt=""
                    />
                    <h4 className="text-lg font-medium">Minku Patel</h4>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">₹295.20</h4>
                    <p className="text-sm text-gray-600">Earned</p>
                </div>
            </div>
            <div className="flex p-3 mt-8 bg-gray-100 rounded-full justify-center gap-5 items-start">
                <div className="text-center">
                    <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hourse Online</p>
                </div>
                <div className="text-center">
                    <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hourse Online</p>
                </div>
                <div className="text-center">
                    <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hourse Online</p>
                </div>
            </div>
        </div>
    );
};

export default CaptainDetails;
