import ContactUs from "./Components/ContactUs";
import Features from "./Components/Features";
import HomeCarosuel from "./Components/HomeCaresouel";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import StatsWelcome from "./Components/StatsWelcome";
import Tagline from "./Components/Tagline";
import WhyUs from "./Components/WhyUs";

function App() {
  return (
    <>
      <Tagline />
      <Navbar />
      <HomeCarosuel />
      <StatsWelcome />
      <Features />
      <Services />
      <WhyUs />
      <ContactUs />
    </>
  );
}

export default App;
