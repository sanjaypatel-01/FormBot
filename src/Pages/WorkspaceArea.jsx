import React from "react";

function WorkspaceArea() {
    return (
        <div className="w-full h-screen bg-gray-900 ">
            <nav className="h-[7%] bg-black p-4 flex">
                <input className="bg-gray-800 py-1 px-2 rounded w-[230px]" type="text" placeholder="Enter Form Name"/>
                <button className="ml-[35%] border border-blue-400 py-1 px-2 rounded text-blue-400">Flow</button>
                <button className="ml-8 text-white">Response</button>
                <div className="flex items-center space-x-2 ml-[22%]"> 
                    <span className="text-white">Light</span> 
                        <button className="relative w-12 h-6 bg-blue-500 rounded-full transition-colors duration-300">
                            <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 transform"></span>
                        </button> 
                    <span className="text-white">Dark</span>
                </div>
                <button className="bg-gray-400 text-white px-4 rounded ml-20">Share</button>
                <button className="bg-green-400 text-white px-4 rounded ml-6">Save</button>
                <button className="text-red-800 font-bold text-xl ml-6">X</button>
            </nav>
        </div>
    )
}

export default WorkspaceArea;