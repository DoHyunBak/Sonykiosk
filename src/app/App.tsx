import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useState, useEffect } from "react";
import "../styles/global.css";

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Calculate the scale needed to fit 1080x1920 in the current window
      const scaleX = window.innerWidth / 1080;
      const scaleY = window.innerHeight / 1920;
      // Take minimum scale so it fits entirely in window
      setScale(Math.min(scaleX, scaleY));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen bg-zinc-950 flex items-center justify-center overflow-hidden font-sans">
      <div
        className="relative bg-black shadow-2xl overflow-hidden"
        style={{
          width: 1080,
          height: 1920,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <RouterProvider router={router} />
      </div>
    </div>
  );
}