import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

export default function RegisterModal() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-[#004F84] py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Register
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-20 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-[#393939] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="">
                <input
                  className="w-full bg-[#393939] rounded-md p-2 mb-3 shadow-sm"
                  type="tel"
                  placeholder="password"
                  required
                />

                <Button
                  className="inline-flex  items-center justify-center w-full  rounded-md mb-2 bg-[#004F84] py-1.5 px-3 text-sm/6 font-semibold text-white text-center shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Continue
                </Button>
                <p className="text-white text-xs text-center mb-2">
                  Already have an account?
                  <span className="text-[#1B8A35]"> Login</span>
                </p>
                <div className="flex justify-center items-center gap-2 mb-2 text-[#C0C0C0]">
                  <hr className="w-4/12" />
                  <h1>OR</h1>
                  <hr className="w-4/12" />
                </div>
                <div className="flex justify-center items-center gap-2 text-[#C0C0C0]">
                  <div className="p-2 rounded-full shadow-md">
                    <FaGoogle />
                  </div>
                  <div className="p-2 rounded-full shadow-md">
                    <FaMicrosoft />
                  </div>
                  <div className="p-2 rounded-full shadow-md">
                    <FaApple />
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
