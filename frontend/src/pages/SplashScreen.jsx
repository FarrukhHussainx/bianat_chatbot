import React from "react";

const SplashScreen = () => {
  return (
    <div className="h-screen bg-[#222222]">
      <div className="flex flex-col justify-center items-center w-full h-full text-white">
        <img src="/images/companylogo.png" alt="" />
        {/* <div className="grid grid-cols-1  md:grid-cols-2 p-5 gap-4 w-8/12 items-center">
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
      </div> */}
      </div>
      <div className="fixed  bottom-5 z-10 text-white  w-full">
        <p className="text-center">Bianat@Copy Right Protected</p>
      </div>
    </div>
  );
};

export default SplashScreen;
