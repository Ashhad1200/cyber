import Header from "./Components/Header";
import Hero from "./Components/Hero"
import Benefits from "./Components/Benefits"
import Collaboration from "./Components/Collaboration"
import Services from "./Components/Services"
import Roadmap from "./Components/Roadmap"
import Footer from "./Components/Footer"

import ButtonGradient from "./assets/svg/ButtonGradient";
import Pricing from "./Components/Pricing";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Header />
        <Hero />
        <Benefits/>
        <Collaboration/>
        <Services/>
        <Pricing/>
        <Roadmap />
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
