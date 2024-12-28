import React from "react";
import GoogleIcon from "../assets/GoogleIcon.png";
import image03 from "../assets/image03.png";

function LoginPage() {
    return (
        <div className="bg-gray-900 w-full h-screen flex justify-center items-center relative">
            <div className="absolute top-10 left-10">
                <img className="w-screen h-screen" src={image03} alt="Decorative" />
            </div>
            <div className=" text-white flex justify-center h-full w-1/4 flex-col">
                <h3 className="mb-2">Email</h3> 
                <input className="mb-4 rounded-lg p-2 bg-gray-900 border" type="text" name="" id="" placeholder="Enter your email" />
                <h3 className="mb-2" >Password</h3> 
                <input className="mb-8 rounded-lg p-2 bg-gray-900 border" type="text" name="" id="" placeholder="........" />
                <button className="bg-blue-600 py-2 px-4 rounded-lg font-semibold text-white">Log in</button>
                <p className="m-2 flex justify-center text-xs">OR</p>
                <div className="flex justify-center items-center mb-2 bg-blue-600 rounded-lg">
                    <img className="w-[30px] h-[30px] mr-2" src={GoogleIcon} alt="" />
                    <button className="py-2 px-4 font-semibold text-white" >SIgn in with Google</button>
                </div>
                <div className="flex justify-center" >
                    <p className="mr-1 text-sm">Dont't have an account? </p>
                    <h4 className="text-sm text-blue-600">Register now</h4>
                </div>
                
            </div>
        </div>
    )
}

export default LoginPage;