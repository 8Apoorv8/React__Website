import Contact__Us from "./Components/Contact__Us";
import Features from "./Components/Features";
import Home__Carosuel from "./Components/Home__Carosuel";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Stats__Welcome from "./Components/Stats__Welcome";
import Tagline from "./Components/Tagline";
import Why__Us from "./Components/Why__Us";
import { AnimatePresence as AP } from "framer-motion";
import { useLocation } from "react-router-dom";
import { wait } from "@testing-library/user-event/dist/utils";
function App() {
  // const location = useLocation();
  return (
    <>
      <Tagline />
      <Navbar />
      <Home__Carosuel />
      <Stats__Welcome />
      <Features />
      <Services />
      <Why__Us />
      <Contact__Us />
    </>
  );
}

export default App;
