import React, { useState, useEffect, useRef } from "react";
import { useParking } from "./ParkingContext";

const Dashboard = () => {
  const { revenue, traffic, occupancy, realTime } = useParking();
  if (!revenue || !traffic || !occupancy || !realTime)
    return <p>Đang tải dữ liệu...</p>;

  const occupancyRate = (
    ((occupancy.totalSlots - occupancy.usedSlots) / occupancy.totalSlots) *
    100
  ).toFixed(1);

  // ---------------- 🆕 QUẢN LÝ THÔNG BÁO ----------------
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [page, setPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false); // ✅ Chỉ sync sau khi load xong
  const rowsPerPage = 4;

  // ✅ Lấy dữ liệu từ localStorage khi load trang
  useEffect(() => {
    const saved = localStorage.getItem("dashboard_notifications");
    if (saved) {
      try {
        setNotifications(JSON.parse(saved));
      } catch (e) {
        console.error("Lỗi khi đọc localStorage:", e);
      }
    }
    setIsLoaded(true); // ✅ Đánh dấu đã tải xong
  }, []);

  // ✅ Lưu lại localStorage mỗi khi danh sách thay đổi (sau khi đã load)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        "dashboard_notifications",
        JSON.stringify(notifications)
      );
    }
  }, [notifications, isLoaded]);

  // ✏️ Hiện khung nhập thông báo
  const handleWrite = () => setShowInput(!showInput);

  // 💾 Lưu thông báo mới
  const handleSave = () => {
    if (!newNotification.trim()) return;
    const newItem = {
      id: Date.now(),
      text: newNotification,
      date: new Date().toLocaleString(),
    };
    const updated = [newItem, ...notifications];
    setNotifications(updated);
    setNewNotification("");
    setShowInput(false);
  };

  // 🔄 Xem thêm / Thu gọn
  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ❌ Xoá thông báo
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xoá thông báo này?");
    if (confirmDelete) {
      const updated = notifications.filter((n) => n.id !== id);
      setNotifications(updated);
    }
  };

  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentNotifications = notifications.slice(start, end);

  // -------------------------------------------------------
  return (
    <>
      <p className="trangthai">Chào mừng trở lại !</p>
      <img className="dashboard-image" src="/images/userimage.png" alt="User" />

      {/* Box tỷ lệ bãi đỗ xe */}
      <div className="parking-box">
        <h3>Tỉ lệ bãi đỗ xe</h3>
        <p>
          <p className="phantram">{occupancyRate}%</p>
          <div className="dong">
            Còn {occupancy.totalSlots - occupancy.usedSlots}/
            {occupancy.totalSlots} chỗ trống ({100 - occupancyRate}%)
          </div>
        </p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${occupancyRate}%` }}
          ></div>
        </div>
      </div>

      {/* Box doanh thu */}
      <div className="revenue-box">
        <h3 className="revenue-title">Doanh thu hôm nay</h3>
        <p className="revenue-amount">
          {revenue.totalRevenue.toLocaleString()} đ
        </p>
        <p className="revenue-date">Ngày {revenue.today}</p>
      </div>

      {/* Box thống kê xe ra/vào */}
      <div className="dashboard-stats">
        <div className="stat-box">
          <h3>Lượt xe vào hôm nay</h3>
          <p className="stat-number">{traffic.totalIn}</p>
        </div>
        <div className="stat-box">
          <h3>Lượt xe ra hôm nay</h3>
          <p className="stat-number">{traffic.totalOut}</p>
        </div>
      </div>

      {/* 🔴 Theo dõi trực tiếp cổng ra/vào */}
      <h3 className="dashboard-dongkhac">Theo dõi trực tiếp cổng ra/vào</h3>
      <div className="realtime-monitor">
        <div className="camera-container">
          {/* Ảnh camera minh họa */}
          <div className="camera-feed">
            <img src={realTime.inGate[0].img} alt="Camera cổng vào" />
            <div className="camera-info">
              <p>Xe vào - Biển số: {realTime.inGate[0].license}</p>
              <p>Thời gian: {realTime.inGate[0].time}</p>
            </div>
          </div>

          <div className="camera-feed">
            <img src={realTime.outGate[0].img} alt="Camera cổng ra" />
            <div className="camera-info">
              <p>Xe ra - Biển số: {realTime.outGate[0].license}</p>
              <p>Thời gian: {realTime.outGate[0].time}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🆕 BOX THÔNG BÁO */}
      <div className="realtime-wrapper">
        <div className="notification-box">
          <div className="notification-header">
            <img
              src="/images/thongbao.png"
              alt="Thông báo"
              className="notification-icon"
            />
            <h3>Thông báo</h3>
            <button className="edit-btn" onClick={handleWrite}>
              ✏️
            </button>
          </div>

          {showInput && (
            <div className="notification-input">
              <textarea
                value={newNotification}
                onChange={(e) => setNewNotification(e.target.value)}
                placeholder="Nhập nội dung thông báo..."
              />
              <button onClick={handleSave}>Gửi</button>
            </div>
          )}

          <div className="notification-list">
            {currentNotifications.length > 0 ? (
              currentNotifications.map((n) => (
                <div className="notification-item" key={n.id}>
                  <p
                    className={`notification-text ${
                      expanded[n.id] ? "expanded" : "collapsed"
                    }`}
                  >
                    {n.text}
                  </p>
                  <small>{n.date}</small>

                  <div className="notification-actions">
                    {n.text.length > 100 && (
                      <button
                        className="view-btn"
                        onClick={() => toggleExpand(n.id)}
                      >
                        {expanded[n.id] ? "Thu gọn" : "Xem thêm"}
                      </button>
                    )}
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(n.id)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Chưa có thông báo nào</p>
            )}
          </div>

          {/* 🔄 PHÂN TRANG */}
          {notifications.length > rowsPerPage && (
            <div className="pagination-thongbao">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                ◀
              </button>
              <span>
                Trang {page} / {Math.ceil(notifications.length / rowsPerPage)}
              </span>
              <button
                disabled={end >= notifications.length}
                onClick={() => setPage(page + 1)}
              >
                ▶
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
