import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import type { Technology } from "./types/technology";

// Data fetching function
const fetchTechnologies = async (): Promise<Technology[]> => {
  const res = await fetch("/data/technologies.json");
  if (!res.ok) {
    throw new Error("Failed to fetch technologies");
  }
  return res.json();
};

// Top-level promise execution
const techPromise = fetchTechnologies();

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Suspense
        fallback={
          <div className="flex justify-center bg-white py-20">
            <h2 className="text-xl font-bold text-[#DB2777]">Loading....</h2>
          </div>
        }
      >
        <Technologies techPromise={techPromise} />
      </Suspense>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
