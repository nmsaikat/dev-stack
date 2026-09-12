import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technologies />
    </div>
  );
}

export default App;
