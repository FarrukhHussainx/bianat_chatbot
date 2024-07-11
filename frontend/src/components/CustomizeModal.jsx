import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Switch,
} from "@headlessui/react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useState } from "react";
import { BiCustomize } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import ShowTipsModal from "./ShowTipsModal";

export default function CustomizeModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <div
        className="flex items-center gap-2 mb-2 cursor-pointer"
        onClick={open}
      >
        <BiCustomize />
        <h1>Customize Bianat</h1>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-[#393939] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="">
                <h1 className="text-white ml-2 mb-2">Bianat Customize</h1>
                <hr />
                <p className="text-xs text-white ml-2 mt-2 mb-2">
                  Customize Instructions
                </p>
                <div className="text-xs text-white ml-2 mb-2">
                  Question Here
                </div>
                <input
                  className="w-full h-28 bg-[#393939] rounded-md p-2  shadow-sm border"
                  type="email"
                  name="q1"
                />
                <div className="flex justify-between items-center mb-2 text-[#C0C0C0]">
                  <h1>0/1500</h1>
                  <ShowTipsModal />
                </div>

                <div className="text-xs text-white ml-2 mb-2 mt-3">
                  Question Here
                </div>
                <input
                  className="w-full h-28 bg-[#393939] rounded-md p-2  shadow-sm border"
                  type="email"
                  name="q2"
                />
                <div className="flex justify-between items-center mb-2 text-[#C0C0C0]">
                  <h1>0/1500</h1>
                </div>

                <div className="flex justify-between mt-6">
                  <div className="flex justify-between items-center gap-2">
                    <h1 className="text-xs text-white">Enable for new chats</h1>
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#1B8A35]"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                      />
                    </Switch>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-full text-center text-[#c0c0c0]  border border-[#c0c0c0] w-[70px] h-[35px]">
                      Cancel
                    </button>
                    <button className="rounded-full text-center bg-[#C0C0C0]  w-[70px] h-[35px]">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
