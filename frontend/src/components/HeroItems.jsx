import React from "react";

const HeroItems = ({ title, description }) => {
  return (
    <div className="p-3 border rounded-md ">
      <h1>Real-Time Market Data</h1>
      <p className="text-xs text-gray-500">Up-To-The-Minute Information</p>
    </div>
  );
};

export default HeroItems;
