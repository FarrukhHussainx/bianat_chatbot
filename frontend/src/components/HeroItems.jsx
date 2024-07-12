import React from "react";

const HeroItems = ({ title, description }) => {
  return (
    <div className="p-2 md:p-3 border rounded-md ">
      <h1>{title}</h1>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default HeroItems;
