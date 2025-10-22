import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterCardPage.css";
import backIcon from "../assets/go-back.svg";
import saveIcon from "../assets/save-icon.png";
import calendarIcon from "../assets/calendar-solid.svg";
import motorcycleIcon from "../assets/motorcycle-2.svg";
import { FaMotorcycle, FaParking, FaFileInvoiceDollar, FaCheckCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
// import { createPaymentLink } from '../utils/payos';

const RegisterCardPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicleId: "",
    parkingLotId: "",
    packageId: "",
    paymentMethod: "momo",
    termsAccepted: false
  });

  const navigate = useNavigate();

  // Sample data - replace with actual API calls
  const vehicles = [
    { id: 1, type: "Xe máy", licensePlate: "59A1-12345" },
    { id: 2, type: "Xe đạp", licensePlate: "Xe đạp thể thao" }
  ];

  const parkingLots = [
    { id: 1, name: "Bãi xe BA2", capacity: 50, available: 5, isFull: false },
    { id: 2, name: "Bãi xe C1", capacity: 30, available: 0, isFull: true },
    { id: 3, name: "Bãi xe E2", capacity: 20, available: 2, isFull: false },
    { id: 4, name: "Bãi xe E1", capacity: 40, available: 4, isFull: false },
    { id: 5, name: "Bãi xe C5", capacity: 15, available: 1, isFull: true }
  ];

  const packages = [
    { id: 1, name: "Thẻ sáng", price: "2,000đ", duration: "5h - 18h" },
    { id: 2, name: "Thẻ đêm", price: "3,000đ", duration: "18h - 5h" },
    { id: 3, name: "Thẻ 1 ngày", price: "5,000đ", duration: "1 ngày" },
    { id: 4, name: "Thẻ 1 tháng", price: "50,000đ", duration: "1 tháng" }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 4) {
      console.log("Form submitted:", formData);
      // Handle form submission
      // navigate('/dashboard');
    } else {
      nextStep();
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-content">
            <h2>Chọn xe đăng ký</h2>
            <div className="options-grid">
              {vehicles.map(vehicle => (
                <div 
                  key={vehicle.id} 
                  className={`option-card ${formData.vehicleId === vehicle.id ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, vehicleId: vehicle.id})}
                >
                  <div className="option-icon">
                    <img src={motorcycleIcon}></img>
                  </div>
                  <div className="option-details">
                    <h4>{vehicle.type}</h4>
                    <p>{vehicle.licensePlate}</p>
                  </div>
                </div>
              ))}
              <div 
                className="option-card add-new"
                onClick={() => navigate('/register')}
              >
                <div className="option-icon">
                  <span>+</span>
                </div>
                <div className="option-details">
                  <h4>Thêm xe mới</h4>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h2>Chọn bãi đỗ xe</h2>
            <div className="options-list">
              {parkingLots.map((lot) => (
        <div 
          key={lot.id} 
          className={`option-card parking-lot ${formData.parkingLotId === lot.id ? 'selected' : ''} ${lot.isFull ? 'full' : ''}`}
          onClick={() => !lot.isFull && setFormData({...formData, parkingLotId: lot.id})}
        >
          <div className="option-icon">
            <FaParking size={24} />
          </div>
          <div className="option-details">
            <div className="lot-header">
              <h4>{lot.name}</h4>
              <span className={`slot-status ${lot.isFull ? 'full' : 'available'}`}>
                {lot.isFull ? 'Hết chỗ' : `${lot.available}/${lot.capacity} chỗ trống`}
              </span>
            </div>
            {lot.isFull && (
              <div className="waiting-notice">
                <span>Đã hết chỗ</span>
              </div>
            )}
          </div>
        </div>
      ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <h2>Chọn gói đăng ký</h2>
            <div className="packages-grid">
              {packages.map(pkg => (
                <div 
                  key={pkg.id} 
                  className={`package-card ${formData.packageId === pkg.id ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, packageId: pkg.id})}
                >
                  <div className="package-header">
                    <h4>{pkg.name}</h4>
                    <div className="package-price">{pkg.price}</div>
                  </div>
                  <div className="package-duration">
                    <FaCalendarAlt className="icon" />
                    <span>{pkg.duration}</span>
                  </div>
                  {pkg.discount && <div className="package-discount">{pkg.discount}</div>}
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-content confirmation">
            {/* <div className="confirmation-icon">
              <FaCheckCircle size={64} color="#4CAF50" />
            </div> */}
            <h2>Xác nhận đăng ký</h2>
            
            <div className="confirmation-details">
              <div className="detail-row">
                <span className="label">Xe đăng ký:</span>
                <span className="value">
                  {vehicles.find(v => v.id === formData.vehicleId)?.type} - {vehicles.find(v => v.id === formData.vehicleId)?.licensePlate}
                </span>
              </div>
              <div className="detail-row">
                <span className="label">Bãi đỗ xe:</span>
                <span className="value">
                  {parkingLots.find(p => p.id === formData.parkingLotId)?.name}
                </span>
              </div>
              <div className="detail-row">
                <span className="label">Gói đăng ký:</span>
                <span className="value">
                  {packages.find(p => p.id === formData.packageId)?.name} - {packages.find(p => p.id === formData.packageId)?.price}
                </span>
              </div>
              <div className="detail-row total">
                <span className="label">Tổng thanh toán:</span>
                <span className="value">
                  {packages.find(p => p.id === formData.packageId)?.price}
                </span>
              </div>
            </div>

            {/* <div className="payment-methods">
              <h3>Phương thức thanh toán</h3>
              <div className="payment-options">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="momo"
                    checked={formData.paymentMethod === "momo"}
                    onChange={handleChange}
                  />
                  <div className="payment-content">
                    <img src="/momo-logo.png" alt="Momo" className="payment-logo" />
                    <span>Ví điện tử Momo</span>
                  </div>
                </label>
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === "bank"}
                    onChange={handleChange}
                  />
                  <div className="payment-content">
                    <img src="/bank-logo.png" alt="Chuyển khoản" className="payment-logo" />
                    <span>Chuyển khoản ngân hàng</span>
                  </div>
                </label>
              </div>
            </div> */}

            <div className="terms-checkbox">
              <input
                type="checkbox"
                id="terms"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              <label htmlFor="terms">
                Tôi đồng ý với <a href="/terms">Điều khoản dịch vụ</a> và <a href="/privacy">Chính sách bảo mật</a>
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="register-card-container">
      <div className="register-header">
        <button onClick={step === 1 ? () => navigate(-1) : prevStep} className="back-button">
          <img src={backIcon} alt="Quay lại" />
          <span>Quay lại</span>
        </button>
        <h1>Đăng ký thẻ mới</h1>
      </div>

      {/* Progress Steps */}
      <div className="progress-steps">
        {[1, 2, 3, 4].map((stepNum) => (
          <React.Fragment key={stepNum}>
            <div className={`step ${step >= stepNum ? 'active' : ''}`}>
              <div className="step-number">{stepNum}</div>
              <div className="step-text">
                {stepNum === 1 && 'Chọn xe'}
                {stepNum === 2 && 'Chọn bãi đỗ'}
                {stepNum === 3 && 'Chọn gói'}
                {stepNum === 4 && 'Xác nhận'}
              </div>
            </div>
            {stepNum < 4 && <div className={`step-connector ${step > stepNum ? 'active' : ''}`}></div>}
          </React.Fragment>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="registration-form">
        {renderStep()}
        
        <div className="form-actions">
          {step < 4 ? (
            <button
              type="button"
              className="next-btn"
              onClick={handleSubmit}
              disabled={
                (step === 1 && !formData.vehicleId) ||
                (step === 2 && !formData.parkingLotId) ||
                (step === 3 && !formData.packageId)
              }
            >
              Tiếp theo
            </button>
          ) : (
            <button
              type="submit"
              className="submit-btn"
              disabled={!formData.termsAccepted}
            >
              <img src={saveIcon} alt="Thanh toán" />
              Thanh toán
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterCardPage;