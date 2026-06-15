import { RouterProvider } from "react-router";
import { router } from "./routes";
import "../styles/global.css";

export default function App() {
  return (
    <div className="w-full h-screen bg-zinc-950 flex items-center justify-center overflow-auto font-sans">
      <div
        className="relative bg-black shadow-2xl overflow-hidden"
        style={{
          width: 1080,
          height: 1920,
          minWidth: 1080,
          minHeight: 1920,
        }}
      >
        <RouterProvider router={router} />
      </div>
    </div>
  );
}