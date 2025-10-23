import React, { useState } from "react";
import Tracuuxe from "../components/Tracuuxe";
import Quanliravao from "../components/Quanliravao";
import Doanhthu from "../components/Doanhthu";
import Caidat from "../components/Caidat";
import Dashboard from "../components/Dashboard";
import { ParkingProvider } from "../components/ParkingContext";
import "../styles/Banquanli.css";

const BanQuanLi = () => {
  const [selectedClass, setSelectedClass] = useState("dashboard");
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "/images/dashboard.png", isDashboard: true },
    { id: "A", label: "Tra cứu xe" ,icon: "/images/tracuuxe.png"},
    { id: "B", label: "Quản lí ra vào", icon: "/images/quanliravao.png" },
    { id: "C", label: "Doanh thu", icon: "/images/doanhthu.png" },
    // { id: "D", label: "Cài đặt", icon: "/images/caidat.png" },
    ];

  return (
    <ParkingProvider>
    <div className="blur-overlay"> </div> 
      <div className="box">
          <div className="image">
            <img class="logo" src="/images/logo.png" alt="Logo"></img>
          </div>
          <ul className="menu">
            {menuItems.map((item) => (
              <li key={item.id} className={`menu-item ${item.id === "dashboard" ? "dashboard-item" : ""}`}>
                <button
                  className={
                    selectedClass === item.id ? "active" : "menu-button"
                  }
                  onClick={() => setSelectedClass(item.id)}
                >
                  <img className="menu-icon" src={item.icon}/>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
      </div>
      <main className="main-content">
        <div className="content-box">
          {selectedClass === "dashboard" && <p><Dashboard/></p>}
          {selectedClass === "A" && <Tracuuxe />}
          {selectedClass === "B" && <Quanliravao />}
          {selectedClass === "C" && <Doanhthu />}
          {/* {selectedClass === "D" && <Caidat />} */}
        </div>
      </main>
    </ParkingProvider>
  );
};

export default BanQuanLi;
