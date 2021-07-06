import React from 'react'

const security = () => {
    return (
        <div className="settingsBackground rounded-2xl text-center  px-5 w-full xl:w-3/5">
            <div className="p-10">
                <div>
                <div className="flex flex-wrap -m-2">
      <div className="p-2 cursor-pointer lg:w-1/2 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow">
            <h2 className=" text-black title-font font-medium">Password</h2>
            <p className=" text-green_primary">Change Password</p>
          </div>
        </div>
      </div>
      <div className="p-2 cursor-pointer lg:w-1/2 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow">
            <h2 className=" text-black title-font font-medium">Pin</h2>
            <p className=" text-green_primary">Change Pin</p>
          </div>
        </div>
      </div>
                </div>
            </div>
        </div>
        </div>
    )
}

security.layout = "SettingsLayout"

export default security
