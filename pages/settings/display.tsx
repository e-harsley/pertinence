import React from 'react'

const display = () => {
    return (
        <div>
           <div className="settingsBackground rounded-2xl text-center  px-5 w-full xl:w-3/5">
            <div className="p-10">
                <div>
                <div className="flex flex-wrap -m-2">
      <div className="p-2 cursor-pointer lg:w-1/2 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow">
            <h2 className=" text-green_primary font-semibold title-font ">Show Wallet Balance</h2>
            <div className="flex items-center justify-center w-full mt-3">
  
            <label  className="flex items-center cursor-pointer">
                <div className="relative">
                <input type="checkbox" id="toggleB" className="sr-only" />
                <div className="block bg-gray_toggle w-10 h-6 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                </div>
            </label>

            </div>
          </div>
        </div>
      </div>
      <div className="p-2 cursor-pointer lg:w-1/2 md:w-1/2 w-full">
        <div className="h-full flex items-center justify-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow">
            <h2 className=" text-green_primary title-font font-semibold">Dark Mode</h2>
            <div className="flex items-center justify-center w-full mt-3">
  
            <label  className="flex items-center cursor-pointer">
                <div className="relative">
                <input type="checkbox" id="toggleB" className="sr-only" />
                <div className="block bg-gray_toggle w-10 h-6 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                </div>
            </label>

            </div>
          </div>
        </div>
      </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

display.layout = "SettingsLayout"

export default display
