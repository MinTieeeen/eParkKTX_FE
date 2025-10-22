import React from "react";
import "../styles/DashboardPage.css";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import notify from "../assets/notification.png"
import search from "../assets/search-bar-01.png"
import user from "../assets/user.png"
import add from "../assets/add.png"
import calendar from "../assets/calendar-solid.svg"
import document from "../assets/document.png"
import motorcycle from "../assets/motorcycle-2.svg"
import settings from "../assets/settings-tool.svg"
import ticket from "../assets/ticket-outline.svg"
import parking from "../assets/parking-sign.png"

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <nav className="sidebar-menu">
          <button className="sidebar-menu-btn active">Dashboard</button>
          <button className="sidebar-menu-btn"><Link to="/register-card"><img src={add} alt="" />Đăng ký thẻ mới</Link></button>
          <button className="sidebar-menu-btn"><img src={calendar} alt="" />Gia hạn thẻ</button>
          <button className="sidebar-menu-btn"><img src={document} alt="" />Lịch sử & hóa đơn</button>
          <button className="sidebar-menu-btn"><Link to="/vehicles">
          <img src={motorcycle} alt="" />Xe của tôi
          </Link></button>
        </nav>
        <div className="sidebar-settings">
          <button className="sidebar-menu-btn"><img src={settings} alt="" />Cài đặt</button>
        </div>
      </aside>
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h2>Chào mừng trở lại, [Tên sinh viên]!</h2>
          <div className="dashboard-actions">
            <button className="dashboard-action-btn"><img src={notify} alt="" /></button>
            <button className="dashboard-action-btn"><img src={search} alt="" /></button>
            <button className="dashboard-action-btn"><img src={user} alt="" /></button>
          </div>
        </div>
        <div className="dashboard-grid">
          <section className="dashboard-card student-info">
            <div className="dashboard-card-header">
              <h3><img src={user} alt="" />Thông tin sinh viên</h3>
              <button className="view-all-btn">Xem tất cả</button>
            </div>
            <ul>
              <li>Họ và tên: ...</li>
              <li>Tòa: ...</li>
              <li>Phòng: ...</li>
              <li>Ngày sinh: ...</li>
              
            </ul>
          </section>
          <section className="dashboard-card parking-info">
            <div className="dashboard-card-header">
              <h3><img src={parking} alt="" />Vị trí đỗ xe</h3>
              <button className="view-all-btn">Xem tất cả</button>
            </div>
            <ul>
              <li>Nhà xe: ...</li>
              <li>Lịch sử ra/vào: ...</li>
            </ul>
            
          </section>
          <section className="dashboard-card renew-history">
            <div className="dashboard-card-header">
              <h3><img src={calendar} alt="" />Lịch sử gia hạn</h3>
              <button className="view-all-btn">Xem tất cả</button>
            </div>
            <ul>
              <li>02-09-2025</li>
              <li>02-08-2025</li>
              <li>02-07-2025</li>
            </ul>
          </section>
          <section className="dashboard-card cards-section">
          <div className="dashboard-card-header">
            <h3><img src={ticket} alt="" />Thẻ của tôi (2)</h3>
            <button className="view-all-btn">Xem tất cả</button>
          </div>
          <div className="cards-grid">
            {/* Card 1 */}
            <div className="card-item">
              <div className="card-header">
                <img src={ticket} alt="Thẻ xe" />
                <span className="card-type">Xe máy</span>
              </div>
              <div className="card-details">
                <div className="detail-row">
                  <span className="detail-label">Mã thẻ:</span>
                  <span className="detail-value">BA2-1M</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Nhà xe:</span>
                  <span className="detail-value">BA2</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Biển số:</span>
                  <span className="detail-value">59A1-12345</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Hết hạn:</span>
                  <span className="detail-value expire-date">31/12/2025</span>
                </div>
              </div>
              <div className="card-actions">
                <button className="action-btn">Gia hạn</button>
                <button className="action-btn secondary">Chi tiết</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-item">
              <div className="card-header">
                <img src={ticket} alt="Thẻ xe" />
                <span className="card-type">Xe đạp</span>
              </div>
              <div className="card-details">
                <div className="detail-row">
                  <span className="detail-label">Mã thẻ:</span>
                  <span className="detail-value">D3-1D</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Nhà xe:</span>
                  <span className="detail-value">D3</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Biển số:</span>
                  <span className="detail-value">Xe đạp thể thao</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Hết hạn:</span>
                  <span className="detail-value expire-date">31/12/2025</span>
                </div>
              </div>
              <div className="card-actions">
                <button className="action-btn">Gia hạn</button>
                <button className="action-btn secondary">Chi tiết</button>
              </div>
            </div>

            <button className="add-card-btn">
              <Link to="/register-card"><img src={add} alt="Thêm thẻ" /></Link>
              Đăng ký thẻ mới
            </button>
          </div>

          
        </section>
        </div>
        <footer className="dashboard-footer">
          <div className="footer-contact">Ban Quản lý KTX - Hotline: 0123456789</div>
          <div className="footer-contact">Ban Quản lý bãi xe - Hotline: 0123456789</div>
          <div className="footer-contact">Bộ phận kỹ thuật - Hotline: 0123456789</div>
        </footer>
      </main>
    </div>
  );
};
export default DashboardPage;
