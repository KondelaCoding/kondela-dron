import Navbar from "../Components/Navbar";
import { useState } from "react";

function Home() {
  const [isAnimating, setIsAnimating] = useState(false);

  const linkToPath = () => {
    setIsAnimating(true);
    setTimeout(() => {
      window.location.href = "/about";
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[4fr_6fr]">
        <div className="bg-[var(--secondary-color)]">
          <h1 className="mt-64 mr-10 font-medium text-right text-white text-[5rem] font-outfit uppercase">
            spraw aby <br /> ten moment <br /> był <br /> <q className="font-decorative lowercase">wyjątkowy</q>
          </h1>
        </div>
        <div className=" bg-custom-background bg-cover bg-no-repeat h-[100vh] w-full"></div>
      </div>
      <button className="btn absolute right-0 bottom-0" onClick={linkToPath}>
        About Test
      </button>
      <div className="grid grid-cols-3 w-full">
        <div
          className={`w-1/3 bg-[#AAAAAA] h-[100vh] fixed left-0 top-0 duration-700 ${
            isAnimating ? "translate-y-0" : "translate-y-full"
          }`}
        ></div>
        <div
          className={`w-1/3 bg-[var(--secondary-color)] scale-x-[101%] h-[100vh] fixed left-0 top-0 duration-700 ${
            isAnimating ? "translate-y-0" : "translate-y-[120%]"
          }`}
        ></div>
        <div
          className={`w-1/3 bg-[#AAAAAA] h-[100vh] fixed left-1/3 top-0 duration-700 delay-150 ${
            isAnimating ? "translate-y-0" : "translate-y-full"
          }`}
        ></div>
        <div
          className={`w-1/3 bg-[var(--secondary-color)] scale-x-[101%] h-[100vh] fixed left-1/3 top-0 duration-700 delay-150 ${
            isAnimating ? "translate-y-0" : "translate-y-[120%]"
          }`}
        ></div>
        <div
          className={`w-1/3 bg-[#AAAAAA] h-[100vh] fixed left-2/3 top-0 duration-700 delay-300 ${
            isAnimating ? "translate-y-0" : "translate-y-full"
          }`}
        ></div>
        <div
          className={`w-1/3 bg-[var(--secondary-color)] scale-x-[101%] h-[100vh] fixed left-2/3 top-0 duration-700 delay-300 ${
            isAnimating ? "translate-y-0" : "translate-y-[120%]"
          }`}
        ></div>
      </div>
    </>
  );
}

export default Home;
