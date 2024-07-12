import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { SiCodemagic } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import SwitchButton from "./SwitchButton";

export default function DropDown() {
  return (
    <div className="fixed top-24 w-80 text-right">
      <Menu>
        <MenuButton className="fixed top-4 left-16 bg-[#393939] text-white  p-1  pl-2 pr-2  rounded-md flex items-center">
          <img src="/images/Bianat.png" alt="dropdown" className="w-4 h-4" />
          {/* <ChevronDownIcon className="size-4 fill-white/60" /> */}
          <RiArrowDropDownLine />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-80 origin-top-right rounded-xl border mt-2 ml-2 border-white/5 bg-[#393939] p-3 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <div className="flex justify-between items-center w-full gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 shadow-md rounded-full">
                  <BsStars />
                </div>

                <div>
                  <h1>Bianat Plus</h1>
                  <p className="text-[#C0C0C0] text-xs">
                    Our smartest model & more
                  </p>
                </div>
              </div>
              <button className="pl-2 pr-2 border rounded-full">Upgrade</button>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex justify-between items-center w-full gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 shadow-md rounded-full">
                  <SiCodemagic />
                </div>

                <div>
                  <h1>Bianat</h1>
                  <p className="text-[#C0C0C0] text-xs">
                    Great for everyday tasks
                  </p>
                </div>
              </div>

              <div className="bg-[#004F84] grid place-items-center p-1 rounded-full">
                <FaCheck className="" />
              </div>
            </div>
          </MenuItem>

          <div className="my-1 h-px bg-white mb-2" />
          <MenuItem>
            <div className="flex justify-between items-center w-full gap-2 mb-2 mt-4">
              <div className="flex items-center gap-2">
                <div className="p-2 ">
                  <IoChatboxEllipsesOutline />
                </div>

                <div>
                  <h1>Temporary chat</h1>
                </div>
              </div>

              <SwitchButton />
            </div>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
