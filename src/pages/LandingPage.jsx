// src/pages/LandingPage.jsx
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import TargetedAudience from "../components/TargetedAudience";
import Areas from "../components/Areas";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import { About } from "../components/About";
import Investors from "../components/Investors";
const LandingPage = () => (
  <div className="min-h-screen ">
    {/* <Navbar /> */}
    <main>
      <main className="flex-grow pt-16">
        <Hero />
        <About/>
        <TargetedAudience />
        <Investors />
        <Areas />
        <Stats />
        <Contact />
      </main>
    </main>
    <Footer />
  </div>
);

export default LandingPage;
