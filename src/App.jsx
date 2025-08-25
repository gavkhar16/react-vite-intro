import React from "react";
import HeroSection from "./pages/Нero-section/Hero-section";
import Footer from "./pages/Footer/Footer";
import Section1 from "./pages/Section1/Section1";
import Section2 from "./pages/Section2/Section2";
import Section3 from "./pages/Section3/Section3";
import Section4 from "./pages/Section4/Section4";
import Section5 from "./pages/Section5/Section5";
import Section6 from "./pages/Section6/Section6";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
};
export default App;
