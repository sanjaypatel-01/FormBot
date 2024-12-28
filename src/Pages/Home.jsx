import React from "react";
import logo from "../assets/logo.png";
// import image01 from './assets/image01.png';
import image02 from "../assets/image02.png";
import icon from "../assets/icon.png";


function Home() {
  return (
    <div className="w-full h-full bg-gray-900 p-8">
      <nav className="flex justify-between ">
        <div className="w-[116px] h-[35px] flex justify-between items-center">
          <img src={logo} alt="" />
          <h4 className="font-bold text-white">FormBot</h4>
        </div>
        <div className="flex h-[40px] w-[300px] justify-between">
          <div className="border-2 border-blue-400 rounded flex items-center">
            <h4 className="text-blue-400 font-bold py-2 px-4">Sign in</h4>
          </div>
          <div className="rounded bg-blue-600 flex items-center">
            <h4 className="text-white font-bold py-2 px-4">Create a FormBot</h4>
          </div>
        </div>
      </nav>
      <div className="flex justify-center">
        <img src={image02} alt="" />
      </div>
      <footer className="flex justify-center">
          <div className="text-white flex justify-between w-3/5 ">
            <div>
              <p>Made with ❤️ by</p>
              <p> @cuvette</p>
            </div>
            <div>
              <p>
                Status <img src={icon} />
              </p>
              <p>
                Documentation <img src={icon} />
              </p>
              <p>
                Roadmap <img src={icon} />
              </p>
              <p>
                Pricing <img src={icon} />
              </p>
            </div>
            <div>
              <p>
                Discord <img src={icon} />
              </p>
              <p>
                GitHub repository <img src={icon} />
              </p>
              <p>
                Twitter <img src={icon} />
              </p>
              <p>
                LinkedIn <img src={icon} />
              </p>
              <p>
                OSS Friends <img src={icon} />
              </p>
            </div>
            <div>
              <p>
                About <img src={icon} />
              </p>
              <p>
                Contact <img src={icon} />
              </p>
              <p>
                Terms of Service <img src={icon} />
              </p>
              <p>
                Privacy Policy <img src={icon} />
              </p>
            </div>
          </div>
      </footer>
    </div>
  );
}

export default Home;
