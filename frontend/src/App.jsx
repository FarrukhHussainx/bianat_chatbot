import { useEffect, useState } from "react";
import SideDrawer from "./components/SideDrawer";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className=" h-screen bg-[#222222]">
      <SideDrawer />

      {!message && (
        <div className="flex flex-col justify-center items-center w-full h-full text-white">
          <img src="/companylogo.png" alt="" />
          <div className="grid grid-cols-2 p-5 gap-4 w-8/12 items-center">
            <div className="p-3 border rounded-md ">
              <h1>Real-Time Market Data</h1>
              <p className="text-xs text-gray-500">
                Up-To-The-Minute Information
              </p>
            </div>
            <div className="p-3 border rounded-md ">
              <h1>Real-Time Market Data</h1>
              <p className="text-xs text-gray-500">
                Up-To-The-Minute Information
              </p>
            </div>
            <div className="p-3 border rounded-md ">
              <h1>Real-Time Market Data</h1>
              <p className="text-xs text-gray-500">
                Up-To-The-Minute Information
              </p>
            </div>
            <div className="p-3 border rounded-md ">
              <h1>Real-Time Market Data</h1>
              <p className="text-xs text-gray-500">
                Up-To-The-Minute Information
              </p>
            </div>
          </div>
        </div>
      )}

      {message && (
        <div className="flex flex-col justify-center p-3 pt-24 m-auto w-8/12 text-white ">
          <div className="flex gap-2 justify-start items-center mb-5">
            <img
              src="/Bianat.png"
              alt=""
              className="rounded-full p-1 bg-[#393939] border"
            />
            <h1>{message}</h1>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium molestias enim laboriosam velit ut aliquam ducimus.
            Nostrum laudantium, autem saepe alias facere explicabo amet
            similique quam debitis, nisi, est pariatur.
          </p>
        </div>
      )}

      {/* search button */}

      <div className="fixed bottom-0 w-full grid grid-cols-1 p-5 justify-items-center items-center">
        <div class="relative w-8/12">
          <input
            type="text"
            className="p-4 rounded w-full"
            placeholder="Message Bianat"
          />
          <span class="absolute inset-y-0 right-2 flex items-center ">
            <img src="/send.png" alt="" onClick={() => setMessage("hello")} />
          </span>
        </div>
        <p className="text-[#c0c0c0] mt-5">
          By messaging Bianat, You must read Term & Condition and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}
