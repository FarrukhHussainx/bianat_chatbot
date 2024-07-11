import React from "react";
import HeroItems from "./HeroItems";

const Hero = ({ message }) => {
  return (
    <>
      {!message && (
        <div className="flex flex-col justify-center items-center w-full h-full text-white">
          <img src="/images/companylogo.png" alt="" />
          <div className="grid grid-cols-1  md:grid-cols-2 p-5 gap-4 w-8/12 items-center">
            <HeroItems
              title={"Real-Time Market Data"}
              description={"Up-To-The-Minute Information"}
            />
            <HeroItems
              title={"Real-Time Market Data"}
              description={"Up-To-The-Minute Information"}
            />
            <HeroItems
              title={"Real-Time Market Data"}
              description={"Up-To-The-Minute Information"}
            />
            <HeroItems
              title={"Real-Time Market Data"}
              description={"Up-To-The-Minute Information"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
