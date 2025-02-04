// src/components/Footer/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="bg-[#999696] py-8">
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0 space-y-1 text-center md:text-left">
        <p>Terms and Conditions of Use</p>
        <p>Conflict of Interest Policy</p>
        <p>Issuance Default Rates</p>
      </div>
      <div className="text-center">
        <p>
          All rights reserved © 2024{" "}
          <span className="text-lg font-bold">REAN</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
