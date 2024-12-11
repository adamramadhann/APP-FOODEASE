import React, { useState } from "react";
import topiCef from "/image.png";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isActive, setIsActive] = useState(false); 

  return (
    <div className="w-screen bg-slate-50 h-[100dvh] overflow-y-hidden flex flex-col">
      {/* Header */}
      <div className=" bg-white shadow-[0_5px_35px_rgba(0,0,0,0.2)] flex items-center justify-center -mt-5 h-[300px] rounded-b-[40px] relative">
        <img src={topiCef} className="w-[150px] -mt-10 h-[150px]" alt="Topi Logo" />
        <div className="flex items-center w-[250px] bottom-0 absolute">
          <button
            onClick={() => setIsActive(false)}
            className={`text-xl transition-all flex-1 pb-4 ${
              !isActive ? "border-b-2 border-[#FF4B3A]" : ""
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsActive(true)}
            className={`text-xl transition-all flex-1 pb-4 ${
              isActive ? "border-b-2 border- bg-[#FF4B3A]" : ""
            }`}
          >
            Register
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 mt-6 w-full px-5 ">
        {/* Form Login */}
        {!isActive && (
          <form className="w-full flex flex-col gap-8 mt-10">
            <label className="relative text-gray-500 flex flex-col">
              Email Address:
              <input
                name="email"
                type="email"
                placeholder="Masukan email anda"
                className="outline-none mt-1 peer py-2 border-b focus:border-orange-500 bg-slate-50 focus:duration-300"
              />
              <span className="w-0 h-[2px] peer-focus:w-full absolute bottom-0 left-1/2 translate-x-[-50%] bg-orange-400 duration-300"></span>
            </label>
            <label className="relative text-gray-500 flex flex-col">
              Password:
              <input
                name="password"
                type="password"
                placeholder="Masukan password anda"
                className="outline-none bg-slate-50 mt-1 peer py-2 border-b focus:border-orange-500 focus:duration-300"
              />
              <span className="w-0 h-[2px] peer-focus:w-full absolute bottom-0 left-1/2 translate-x-[-50%] bg-orange-400 duration-300"></span>
            </label>
            <Link to="/" className="text-[#FA4A0C] -mt-4 mb-11 text-sm">
              Forgot Password?
            </Link>
            <button className="w-full py-3 bg-[#FA4A0C] text-white text-lg rounded-md hover:bg-opacity-90">
              Login
            </button>
          </form>
        )}

        {/* Form Register */}
        {isActive && (
          <form className="w-full flex mt-3 flex-col gap-8 ">
            <label className="relative text-gray-500 text- flex flex-col">
              Full Name:
              <input
                name="name"
                type="text"
                placeholder="Masukan nama lengkap"
                className="outline-none bg-slate-50 mt-1 peer py-2 border-b peer focus:duration-300"
              />
              <span className="w-0 h-[2px] peer-focus:w-full absolute bottom-0 left-1/2 translate-x-[-50%] bg-orange-400 duration-300"></span>
            </label>
            <label className="relative text-gray-500 text- flex flex-col">
              Email Address:
              <input
                name="email"
                type="email"
                placeholder="Masukan email anda"
                className="outline-none bg-slate-50 mt-1 peer py-2 border-b focus:border-orange-500 focus:duration-300"
              />
              <span className="w-0 h-[2px] peer-focus:w-full absolute bottom-0 left-1/2 translate-x-[-50%] bg-orange-400 duration-300"></span>
            </label>
            <label className="relative text-gray-500 text-lg flex flex-col">
              Password:
              <input
                name="password"
                type="password"
                placeholder="Masukan password anda"
                className="outline-none bg-slate-50 mt-1 peer py-2 border-b focus:border-orange-500 focus:duration-300"
              />
              <span className="w-0 h-[2px] peer-focus:w-full absolute bottom-0 left-1/2 translate-x-[-50%] bg-orange-400 duration-300"></span>
            </label>
            <button className="w-full py-3 bg-[#FA4A0C] text-white text-lg rounded-md hover:bg-opacity-90">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
