import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyWallet from "./Pages/MyWallet/MyWallet";
import Transaction from "./Pages/Transactions/Transactions";
import "./App.css";
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import { FaChevronLeft } from "react-icons/fa";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isActive, setActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handlePanel = () => {
    setActive(!isActive);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 780) {
        setSidebarVisible(true);
        setActive(true);
      } else {
        setSidebarVisible(false);
        setActive(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <button onClick={handlePanel} className="buttonClick">
        <FaChevronLeft className="buttonIcon" />
      </button>
      <div className={`App ${isDarkMode ? "dark" : "light"}`}>
        {isSidebarVisible && (
          <Sidebar  isDarkMode={isDarkMode} toggleSidebar={toggleSidebar} className="slidebar" />
        )}
        <div className="main-section">
          <Header
            isSidebarVisible={isSidebarVisible}
            toggleSidebar={toggleSidebar}
            setSearchQuery={setSearchQuery} // Pass function to set search query
            isDarkMode={isDarkMode} // Pass dark mode state
            toggleTheme={toggleTheme} // Pass function to toggle theme
          />
          <div className="content">
            <div className="page-section">
              <Routes>
                <Route path="/" element={<Dashboard  isDarkMode={isDarkMode}  searchQuery={searchQuery} />} /> {/* Pass searchQuery as a prop */}
                <Route path="/my-wallet" element={<MyWallet />} />
                <Route path="/transactions" element={<Transaction />} />
              </Routes>
            </div>
            <div className={`panel-section ${isActive ? "" : "hide"}`}>
              <SidePanel isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
