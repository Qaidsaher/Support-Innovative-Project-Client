import React from "react";
import helpIcon from "../assets/images/chat-help.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const FloatingButton = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`fixed bottom-10 w-12 h-12 flex justify-center items-center bg-transparent ${
        i18n.lang === "en" ? "left-10" : "right-10"
      }  p-0.5  rounded-full  transition duration-300 transform hover:text-indigo-700 hover:scale-105`}
      onClick={() => alert("Floating button clicked!")} // Example action on click
    >
      <img src={helpIcon} alt="Help" />
      {/* Icon or text inside the floating button */}
    </div>
  );
};

export default FloatingButton;
