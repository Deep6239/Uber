import React from 'react'

export const LocationSearchPanel = (props) => {
    // sample array for location
    const location = [
        "98A, Near Lover's cafe, XYZ Coding School, Russia",
        "28B, Near Malhotra'scafe, XYZ Coding School, Russia",
        "63E, Near Kapoor's cafe, XYZ Coding School, Russia",
        "27Y, Near Sharma's cafe, XYZ Coding School, Russia",
    ]

    return (
    <div>
        {/* this is just a sample data */}

        {
            location.map((elem, index) => {
                return (
                    <div 
                        onClick={() => {
                            props.setVehiclePanel(true)
                            props.setPanelOpen(false)
                        }} 
                        key={index} 
                        className="my-2 flex gap-4 border-2 px-3 border-gray-50 active:border-black rounded-xl items-center justify-start"
                    >
                        <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className='ri-map-pin-fill'></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}
