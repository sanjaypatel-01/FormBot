import React from "react";

function PostLoginScreen() {
    return (
        <div className="bg-gray-900 w-full h-screen">
           <nav>

           </nav>
           <div className="flex flex-col justify-center items-center h-full w-full">
               <div className="mb-4 bg-blue-400 h-[35px] w-[150px] rounded flex items-center justify-center">
                 <h4>Create a Folder</h4>
               </div>
               <div className="bg-blue-600 h-[270px] w-[225px] flex flex-col items-center justify-center rounded-lg">
                  <p className="text-white text-[40px] mb-6">+</p>
                  <h4 className="text-white text-lg">Create a typebot</h4>
               </div>
           </div>
        </div>
    )
}

export default PostLoginScreen;