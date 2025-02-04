import React, { useState } from "react";
import Navbar from "@/components/Innovator/Navbar";
import InvestmentList from "@/components/Innovator/Investment/InvestmentList";
import InvestmentForm from "@/components/Innovator/Investment/InvestmentForm";
import InvestmentDetail from "@/components/Innovator/Investment/InvestmentDetail";
import Footer from "@/components/Innovator/Footer";

const Investment = () => {
  // Dummy data for investments
  const initialInvestments = [
    {
      id: 1,
      innovation: "Innovation One",
      amount: "$10000",
      status: "Pending",
      investor: "Investor A",
      details: "Investment details for Innovation One.",
    },
    {
      id: 2,
      innovation: "Innovation Two",
      amount: "$15000",
      status: "Approved",
      investor: "Investor B",
      details: "Investment details for Innovation Two.",
    },
    {
      id: 3,
      innovation: "Innovation Three",
      amount: "$5000",
      status: "Rejected",
      investor: "Investor C",
      details: "Investment details for Innovation Three.",
    },
  ];

  const [investments, setInvestments] = useState(initialInvestments);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [currentView, setCurrentView] = useState("list"); // "list" | "form" | "detail"
  const [selectedInvestment, setSelectedInvestment] = useState(null);

  // Delete investment
  const handleDelete = (id) => {
    setInvestments((prev) => prev.filter((inv) => inv.id !== id));
    if (selectedInvestment && selectedInvestment.id === id) {
      setCurrentView("list");
      setSelectedInvestment(null);
    }
  };

  // Edit investment
  const handleEdit = (investment) => {
    setSelectedInvestment(investment);
    setCurrentView("form");
  };

  // View investment details
  const handleViewDetail = (investment) => {
    setSelectedInvestment(investment);
    setCurrentView("detail");
  };

  // Add or update investment
  const handleFormSubmit = (data) => {
    if (selectedInvestment) {
      // Update existing investment
      setInvestments((prev) =>
        prev.map((inv) =>
          inv.id === selectedInvestment.id ? { ...inv, ...data } : inv
        )
      );
    } else {
      // Create new investment
      const newInvestment = {
        ...data,
        id: Date.now(),
        status: "Pending",
        investor: "New Investor",
      };
      setInvestments((prev) => [newInvestment, ...prev]);
    }
    setCurrentView("list");
    setSelectedInvestment(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 px-4 bg-white">
        {currentView === "list" && (
          <>
            <div className="flex justify-between items-center mt-8 px-5">
              <h1 className="text-3xl font-bold text-gray-800">My Investments</h1>
              <button
                onClick={() => {
                  setSelectedInvestment(null);
                  setCurrentView("form");
                }}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
              >
                Add New Investment
              </button>
            </div>
            <InvestmentList
              investments={investments}
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
                setSelectedInvestment(null);
              }}
              className="text-indigo-600 hover:underline mb-4 inline-block"
            >
              &larr; Back to List
            </button>
            <InvestmentForm
              initialData={selectedInvestment || {}}
              onSubmit={handleFormSubmit}
              onCancel={() => {
                setCurrentView("list");
                setSelectedInvestment(null);
              }}
            />
          </div>
        )}
        {currentView === "detail" && selectedInvestment && (
          <>
            <InvestmentDetail investment={selectedInvestment} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Investment;
