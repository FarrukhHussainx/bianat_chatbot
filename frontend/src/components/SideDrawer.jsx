// src/components/SideDrawer.js

import React, { useState } from "react";
import Modal from "./Modal";

const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleDrawer}
        className="fixed top-4 left-4 bg-[#393939] text-white  pl-4 pr-4  rounded-md"
      >
        <img className="w-12 h-12" src="/Vector.png" alt="companylogo" />
      </button>

      <div
        className={`fixed z-20 top-0 left-0 w-64 h-full bg-[#393939] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-4 right-4  text-white p-2 rounded"
        >
          <img className="w-12 h-12 z-10" src="/Vector.png" alt="companylogo" />
        </button>
        <Modal />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#393939] opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}
    </>
  );
};

export default SideDrawer;
