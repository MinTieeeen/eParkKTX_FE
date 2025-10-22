import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css";
import backIcon from "../assets/go-back.svg";
import saveIcon from "../assets/save-icon.png";
import bikeIcon from "../assets/xe-dap.jpg";
import ebikeIcon from "../assets/xe-dap-dien.png";
import emotorbikeIcon from "../assets/xe-may-dien.jpg";
import motorbikeIcon from "../assets/xe-may.png";

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicleType: "",
    licensePlate: "",
    brand: "",
    model: "",
    color: "",
  });

  const navigate = useNavigate();

  const vehicleTypes = [
    { id: "bike", name: "Xe đạp", icon: bikeIcon },
    { id: "ebike", name: "Xe đạp điện/Xe máy điện", icon: ebikeIcon },
    { id: "motorbike", name: "Xe máy/Xe mô tô", icon: motorbikeIcon },
  ];

  const colors = ['Đen', 'Trắng', 'Đỏ', 'Xanh dương', 'Xanh lá', 'Bạc', 'Xám', 'Vàng'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && formData.vehicleType) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 2) {
      console.log("Form submitted:", formData);
      // Handle form submission here
      // navigate('/vehicles');
    }
  };

  const handleBack = () => {
    if (step === 1) {
      navigate(-1);
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <button onClick={handleBack} className="back-button">
          <img src={backIcon} alt="Quay lại" />
          <span>Quay lại</span>
        </button>
        <h1>Đăng ký xe mới</h1>
      </div>

      {/* Progress Steps */}
      <div className="progress-steps">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <div className="step-text">Chọn loại xe</div>
        </div>
        <div className="step-connector"></div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <div className="step-text">Nhập thông tin</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="vehicle-form">
        {step === 1 ? (
          <div className="vehicle-selection">
            <h2>Chọn loại xe của bạn</h2>
            <div className="vehicle-options">
              {vehicleTypes.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className={`vehicle-option ${
                    formData.vehicleType === vehicle.id ? "selected" : ""
                  }`}
                  onClick={() => setFormData({...formData, vehicleType: vehicle.id})}
                >
                  <img src={vehicle.icon} alt={vehicle.name} />
                  <span>{vehicle.name}</span>
                </div>
              ))}
            </div>
            <div className="form-actions">
              <button
                type="button"
                className="next-btn"
                onClick={handleNext}
                disabled={!formData.vehicleType}
              >
                Tiếp theo
              </button>
            </div>
          </div>
        ) : (
          <div className="vehicle-details">
            <h2>Thông tin chi tiết</h2>
            <div className="form-group">
              <label>Biển số xe <span className="required">*</span></label>
              <input
                type="text"
                name="licensePlate"
                value={formData.licensePlate}
                onChange={handleChange}
                placeholder="VD: 59A1-12345"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Hãng xe <span className="required">*</span></label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="VD: Honda"
                  required
                />
              </div>
              <div className="form-group">
                <label>Dòng xe <span className="required">*</span></label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="VD: Vision"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Màu sắc <span className="required">*</span></label>
              <div className="color-options">
                {colors.map(color => (
                  <label key={color} className="color-option">
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={formData.color === color}
                      onChange={handleChange}
                      required
                    />
                    <span className="color-dot" style={{ backgroundColor: getColorCode(color) }}></span>
                    {color}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="back-btn" onClick={handleBack}>
                Quay lại
              </button>
              <button type="submit" className="submit-btn">
                <img src={saveIcon} alt="Lưu" />
                Lưu thông tin
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

// Helper function to get color codes
const getColorCode = (color) => {
  const colors = {
    'Đen': '#000000',
    'Trắng': '#FFFFFF',
    'Đỏ': '#E74C3C',
    'Xanh dương': '#3498DB',
    'Xanh lá': '#2ECC71',
    'Bạc': '#BDC3C7',
    'Xám': '#7F8C8D',
    'Vàng': '#F1C40F'
  };
  return colors[color] || '#CCCCCC';
};

export default RegisterPage;