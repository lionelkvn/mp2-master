import React from 'react';
import "@fontsource/poppins";
import Navbar from "../Component/Navbar/Navbar";
import Home from "../Component/Home/Home";
import About from "../Component/About/About";
import Service from "../Component/Services/Service";
import ServicesOfferLogo from "../Component/ServicesOfferLogo/ServicesOfferLogo";
import ServicesOfferBrochure1 from "../Component/ServiceOfferBrochure1/ServiceOfferBrochure1";
import Portfolio from "../Component/Portfolio/Portfolio"
import Contact from "../Component/Contact/Contact"

function Homepage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <ServicesOfferLogo />
      <ServicesOfferBrochure1 />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Homepage;