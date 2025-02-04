// src/pages/innovatorPages/ChatPage.js
import React, { useState } from "react";
import Navbar from "../../components/Innovator/Navbar";
import ChatList from "../../components/Innovator/Chat/ChatList";
import ChatBox from "../../components/Innovator/Chat/ChatBox";
import Footer from "../../components/Innovator/Footer";

const ChatPage = () => {
  // mobileView can be "list" or "chat"
  const [mobileView, setMobileView] = useState("list");
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    setMobileView("chat");
  };

  const handleBack = () => {
    setMobileView("list");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Conversations List Panel */}
        <div className={`md:col-span-1 ${mobileView === "list" ? "" : "hidden md:block"}`}>
          <ChatList
            onSelectConversation={handleSelectConversation}
            selectedConversation={selectedConversation}
          />
        </div>

        {/* Chat Messages Panel */}
        <div className={`md:col-span-2 ${mobileView === "chat" ? "" : "hidden md:block"}`}>
          <ChatBox
            onBack={handleBack}
            showBackButton={mobileView === "chat"}
            conversation={selectedConversation}
          />
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
};

export default ChatPage;
