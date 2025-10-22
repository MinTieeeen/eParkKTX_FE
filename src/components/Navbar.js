import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
        {/* <div className="navbar__brand">eParkKTX<br /><span className="navbar__subtitle">Parking System</span></div> */}
      </div>
      <ul className="navbar__menu">
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/services">Dịch Vụ</Link></li>
        <li><Link to="/about">Về chúng tôi</Link></li>
        <li><Link to="/contact">Liên hệ</Link></li>
      </ul>
      <div className="navbar__login">
        <Link to="/login" className="navbar__login-btn">Đăng nhập</Link>
      </div>
    </nav>
  );
};

export default Navbar;
