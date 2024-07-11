// src/components/SideDrawer.js

import React, { useState } from "react";
import { MdNotes } from "react-icons/md";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleDrawer}
        className="fixed top-4 left-4 bg-[#393939] text-white p-1  pl-2 pr-2  rounded-md"
      >
        <MdNotes />
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
          <MdNotes />
        </button>
        <div className="h-full flex justify-center items-end pb-8 text-white">
          <div>
            <div className="flex flex-col w-fit gap-1 mx-auto mb-3 p-3">
              <h1 className="text-base">Sign up or Log in</h1>
              <p className="text-xs">
                Get smarter responses ,images, upload files and more
              </p>
            </div>
            <div className="flex flex-col w-fit gap-3 mx-auto">
              <LoginModal />
              <RegisterModal />
            </div>
          </div>
        </div>
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
