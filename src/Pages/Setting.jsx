import React from "react";

function Setting() {
    return (
        <div className="w-full h-screen bg-gray-900 relative">
            <div className="flex justify-center p-10">
                <div className="w-1/3">
                    <h4 className="mb-12 text-white text-lg flex justify-center font-semibold">Settings</h4>
                    <div className="w-full flex items-center bg-transparent border border-gray-500 rounded-lg p-2 mt-2">
                        <span className="text-gray-500 mr-2">
                         <i className="fa-regular fa-user"></i> 
                        </span>
                        <input className="w-full bg-transparent outline-none text-white" type="text" placeholder="Name" />
                    </div>
                    <div className="w-full flex items-center bg-transparent border border-gray-500 rounded-lg p-2 mt-2">
                        <span className="text-gray-500 mr-2">
                         <i className="fa-solid fa-lock"></i> 
                        </span>
                        <input className="w-full bg-transparent outline-none text-white" type="text" placeholder="Update Email" />
                    </div>
                    <div className="w-full flex items-center bg-transparent border border-gray-500 rounded-lg p-2 mt-2">
                        <span className="text-gray-500 mr-2">
                         <i className="fa-solid fa-lock"></i> 
                        </span>
                        <input className="w-full bg-transparent outline-none text-white" type="text" placeholder="Old Password" />
                    </div>
                    <div className="w-full flex items-center bg-transparent border border-gray-500 rounded-lg p-2 mt-2">
                        <span className="text-gray-500 mr-2">
                         <i className="fa-solid fa-lock"></i> 
                        </span>
                        <input className="w-full bg-transparent outline-none text-white" type="text" placeholder="New Password" />
                    </div>
                    <button className="rounded-full bg-blue-500 text-white w-full p-2 mt-4">Update</button>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 p-16">
                <button className="text-red-500 text-lg">
                    <span className="text-red-500 mr-4">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </span>Log out
                </button>
            </div>
        </div>
    )
}

export default Setting;