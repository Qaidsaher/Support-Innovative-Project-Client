// src/pages/innovatorPages/MyInnovations.jsx
import React, { useState } from "react";
import Navbar from "@/components/Innovator/Navbar";
import InnovationList from "@/components/Innovator/Innovation/InnovationList";
import InnovationForm from "@/components/Innovator/Innovation/InnovationForm";
import InnovationDetail from "@/components/Innovator/Innovation/InnovationDetail";
import Footer from "@/components/Innovator/Footer";

const MyInnovations = () => {
  // Dummy data for innovations.
  const initialInnovations = [
    {
      id: 1,
      name_innovation: "Innovation One",
      description: "Brief description of innovation one.",
      cost: "$5000",
      details_innovation: "Detailed info about innovation one.",
      image: "https://via.placeholder.com/400x300",
      video: "",
      publish_Date: "2025-01-10",
      create_by: "John Doe",
      status: "approved",
      category: "tech",
    },
    {
      id: 2,
      name_innovation: "Innovation Two",
      description: "Brief description of innovation two.",
      cost: "$3000",
      details_innovation: "Detailed info about innovation two.",
      image: "https://via.placeholder.com/400x300",
      video: "",
      publish_Date: "2025-01-08",
      create_by: "John Doe",
      status: "pending",
      category: "edu",
    },
    {
      id: 3,
      name_innovation: "Innovation Three",
      description: "Brief description of innovation three.",
      cost: "$7000",
      details_innovation: "Detailed info about innovation three.",
      image: "https://via.placeholder.com/400x300",
      video: "",
      publish_Date: "2025-01-05",
      create_by: "John Doe",
      status: "rejected",
      category: "health",
    },
  ];

  const [innovations, setInnovations] = useState(initialInnovations);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [currentView, setCurrentView] = useState("list"); // "list" | "form" | "detail"
  const [selectedInnovation, setSelectedInnovation] = useState(null);

  // Stub functions
  const handleDelete = (id) => {
    setInnovations((prev) => prev.filter((inn) => inn.id !== id));
    if (selectedInnovation && selectedInnovation.id === id) {
      setCurrentView("list");
      setSelectedInnovation(null);
    }
  };

  const handleEdit = (innovation) => {
    setSelectedInnovation(innovation);
    setCurrentView("form");
  };

  const handleViewDetail = (innovation) => {
    setSelectedInnovation(innovation);
    setCurrentView("detail");
  };

  const handleFormSubmit = (data) => {
    if (selectedInnovation) {
      // Update existing innovation.
      setInnovations((prev) =>
        prev.map((inn) =>
          inn.id === selectedInnovation.id ? { ...inn, ...data } : inn
        )
      );
    } else {
      // Create new innovation.
      const newInnovation = {
        ...data,
        id: Date.now(),
        status: "pending",
        create_by: "John Doe",
      };
      setInnovations((prev) => [newInnovation, ...prev]);
    }
    setCurrentView("list");
    setSelectedInnovation(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 px-4 bg-white ">
        {currentView === "list" && (
          <>
            <div className="flex justify-between items-center mt-8 px-5">
              <h1 className="text-3xl font-bold text-gray-800">My Innovations</h1>
              <button
                onClick={() => {
                  setSelectedInnovation(null);
                  setCurrentView("form");
                }}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
              >
                Add New Innovation
              </button>
            </div>
            <InnovationList
              innovations={innovations}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onViewDetail={handleViewDetail}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filter={filter}
              setFilter={setFilter}
            />
          </>
        )}
        {currentView === "form" && (
          <div className="mb-8">
            <button
              onClick={() => {
                setCurrentView("list");
                setSelectedInnovation(null);
              }}
              className="text-indigo-600 hover:underline mb-4 inline-block"
            >
              &larr; Back to List
            </button>
            <InnovationForm
              initialData={selectedInnovation || {}}
              onSubmit={handleFormSubmit}
              onCancel={() => {
                setCurrentView("list");
                setSelectedInnovation(null);
              }}
            />
          </div>
        )}
        {currentView === "detail" && selectedInnovation && (
          <>
            <InnovationDetail innovation={selectedInnovation} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyInnovations;
