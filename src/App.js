import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import StudentLoginPage from "./pages/LoginStudent";
import ManagerLoginPage from "./pages/LoginManager";
import ProfilePage from "./pages/ProfilePage";
import VehiclePage from "./pages/VehiclePage";
import ParkingPage from "./pages/ParkingPage";
import PaymentPage from "./pages/PaymentPage";
import ForumPage from "./pages/ForumPage";
import DashboardPage from "./pages/DashboardPage";
import ContractPage from "./pages/ContractPage";
import RevenuePage from "./pages/RevenuePage";
import SlotPage from "./pages/SlotPage";
import NotifyPage from "./pages/NotifyPage";
import KTXPage from "./pages/KTXPage";
import RegisterPage from "./pages/RegisterPage";
import RegisterCardPage from "./pages/RegisterCardPage";
// import PaymentPage from "./pages/PaymentPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
// import PaymentPage from "./pages/PaymentPage";

function App() {
  console.log("App rendered");
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/studentlogin" element={<StudentLoginPage />} />
        <Route path="/managerlogin" element={<ManagerLoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/vehicles" element={<VehiclePage />} />
        <Route path="/parking" element={<ParkingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/contracts" element={<ContractPage />} />
        <Route path="/revenue" element={<RevenuePage />} />
        <Route path="/slots" element={<SlotPage />} />
        <Route path="/notify" element={<NotifyPage />} />
        <Route path="/ktx" element={<KTXPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register-card" element={<RegisterCardPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
