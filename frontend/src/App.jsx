import { useEffect, useState } from "react";
import SideDrawer from "./components/SideDrawer";
import Search from "./components/Search";
import QueryResponse from "./components/QueryResponse";
import Hero from "./components/Hero";
import SplashScreen from "./pages/SplashScreen";

export default function App() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <div className=" h-screen bg-[#222222]">
      <SideDrawer />

      {/* Hero */}
      <Hero message={message} />
      {/* Message printed */}
      <QueryResponse message={message} />
      {/* search button */}
      <Search setMessage={setMessage} />
    </div>
  );
}
