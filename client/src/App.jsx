import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Fill from "./Components/Fill";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Navbar />
      <Toaster
        duration={2000}
        richColors
        visibleToasts={1}
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "flex bg-slate-900 w-full p-4 rounded-md text-white gap-2 items-center shadow-lg shadow-[rgba(0,0,0,0.6)]",
            // title: "text-red-400",
            // description: "text-red-400",
            actionButton:
              "p-2 w-10 bg-cyan-500 rounded-md cursor-pointer hover:bg-cyan-800 hover:text-cyan-300",
            cancelButton:
              "p-2 w-10 bg-cyan-500 rounded-md cursor-pointer hover:bg-cyan-800 hover:text-cyan-300",
            // closeButton: "bg-lime-400",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/naruto" element={<Fill />} />
      </Routes>
    </>
  );
}

export default App;
