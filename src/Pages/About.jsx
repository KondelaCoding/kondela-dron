import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

export default function About() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    console.log("About page is animating");
  }, []);

  return (
    <div className={`${isAnimating ? "animate-fadeIn" : "hidden"}`}>
      <Navbar />
      <div className="bg-[var(--secondary-color)] h-[100vh] text-white">
        <div className={`${isAnimating ? "animate-fadeIn" : ""}`}>
          <h1>About</h1>
          <h1>About</h1>
          <h1>About</h1>
          <h1>About</h1>
          <h1>About</h1>
          <h1>About</h1>
          <h1>About</h1>
          <h1>About</h1>
        </div>
      </div>
    </div>
  );
}
