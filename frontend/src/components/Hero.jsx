import React from "react";

const Hero = ({ message }) => {
  return (
    <>
      {!message && (
        <div className="flex flex-col justify-center items-center w-full h-full text-white">
          <img src="/companylogo.png" alt="" />
          <div className="grid grid-cols-2 p-5 gap-4 w-8/12 items-center">
            <div className="p-3 border rounded-md ">
              <h1>Real-Time Market Data</h1>
              <p className="text-xs text-gray-500">
                Up-To-The-Minute Information
              </p>
            </div>
            <div className="p-3 border rounded-md ">
              <h1>Real-Time Market Data</h1>
              <p className="text-xs text-gray-500">
                Up-To-The-Minute Information
              </p>
            </div>
            <div className="p-3 border rounded-md ">
              <h1>Real-Time Market Data</h1>
              <p className="text-xs text-gray-500">
                Up-To-The-Minute Information
              </p>
            </div>
            <div className="p-3 border rounded-md ">
              <h1>Real-Time Market Data</h1>
              <p className="text-xs text-gray-500">
                Up-To-The-Minute Information
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
