import React from "react";

const Search = ({ setMessage }) => {
  return (
    <>
      <div className="fixed bottom-0 w-full grid grid-cols-1 p-5 justify-items-center items-center">
        <div className="relative w-10/12 md:w-8/12">
          <input
            type="text"
            className="p-4 rounded w-full"
            placeholder="Message Bianat"
          />
          <span className="absolute inset-y-0 right-2 flex items-center ">
            <img
              src="/images/send.png"
              alt=""
              onClick={() => setMessage("hello")}
            />
          </span>
        </div>
        <p className="text-[#c0c0c0] mt-5">
          By messaging Bianat, You must read Term & Condition and Privacy
          Policy.
        </p>
      </div>
    </>
  );
};

export default Search;
