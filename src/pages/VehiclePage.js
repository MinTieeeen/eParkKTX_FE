import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/VehiclePage.css';
import bikeIcon from '../assets/motorcycle-2.svg';
// import motorcycle from '../assets/motorcycle-2.svg';
import addIcon from '../assets/add.png';
import backIcon from '../assets/go-back.svg';
import editIcon from '../assets/Edit_Notepad_Icon.svg';
import deleteIcon from '../assets/delete-189.png';
import calendarIcon from '../assets/calendar-solid.svg';

const VehiclesPage = () => {
  // Sample data - replace with your actual data
  const vehicles = [
    {
      id: 1,
      type: 'Xe máy',
      licensePlate: '59A1-12345',
      model: 'Honda Vision',
      color: 'Đen',
      icon: bikeIcon,
      status: 'active',
      registerDate: '2023-01-01',
    },
    {
      id: 2,
      type: 'Xe đạp',
      licensePlate: 'Xe đạp thể thao',
      model: 'Thống Nhất',
      color: 'Đỏ',
      icon: bikeIcon,
      status: 'active',
      registerDate: '2023-01-01',
    }, 
    {
      id: 3,
      type: 'Xe mô tô',
      licensePlate: '59A-56789',
      model: 'Honda',
      color: 'Đỏ',
      icon: bikeIcon,
      status: 'active',
      registerDate: '2023-01-01',
    }, 
  ];

  return (
    <div className="vehicles-container">
      <div className="vehicles-header">
        <Link to="/dashboard" className="back-button">
          <img src={backIcon} alt="Quay lại" />
          <span>Quay lại</span>
        </Link>
        <h1>Xe của tôi</h1>
        <div className="header-actions">
          <Link to="/register" className="add-vehicle-btn">
            <img src={addIcon} alt="Thêm xe" />
            <span>Đăng ký xe mới</span>
          </Link>
        </div>
      </div>

      <div className="vehicles-list">
        {vehicles.map(vehicle => (
          <div key={vehicle.id} className="vehicle-card">
            <div className="vehicle-icon">
              <img src={vehicle.icon} alt={vehicle.type} />
            </div>
            <div className="vehicle-details">
              <div className="vehicle-header">
                <h3>{vehicle.type}</h3>
                <span className={`status-badge ${vehicle.status}`}>
                  {vehicle.status === 'active' ? 'Đang hoạt động' : 'Đã khóa'}
                </span>
              </div>
              
              <div className="detail-row">
                <span className="label">Biển số:</span>
                <span className="value">{vehicle.licensePlate}</span>
              </div>
              <div className="detail-row">
                <span className="label">Mẫu xe:</span>
                <span className="value">{vehicle.model}</span>
              </div>
              <div className="detail-row">
                <span className="label">Màu sắc:</span>
                <span className="value">{vehicle.color}</span>
              </div>
              <div className="detail-row">
                <span className="label">Ngày đăng ký:</span>
                <span className="value">{vehicle.registerDate}</span>
              </div>
            </div>
            <div className="vehicle-actions">
            <button className="action-btn view"><img src={calendarIcon} alt="Xem lịch sử" /></button>
              <button className="action-btn edit"><img src={editIcon} alt="Chỉnh sửa" /></button>
              <button className="action-btn delete"><img src={deleteIcon} alt="Xóa" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclesPage;