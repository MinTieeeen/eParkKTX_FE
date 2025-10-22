import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaMotorcycle, FaParking, FaFileInvoiceDollar, FaCalendarAlt, FaHome } from 'react-icons/fa';
import '../styles/PaymentSuccessPage.css';

function PaymentSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const orderId = params.get('orderId');
  
  const [paymentDetails, setPaymentDetails] = useState({
    orderCode: orderId || 'N/A',
    amount: '50,000đ',
    description: 'Đăng ký giữ xe - Thẻ 1 tháng',
    vehicleType: 'Xe máy',
    licensePlate: '59A1-12345',
    parkingLot: 'Bãi xe BA2',
    packageName: 'Thẻ 1 tháng',
    paymentTime: new Date().toLocaleString('vi-VN'),
    status: 'Thành công'
  });

  useEffect(() => {
    // Có thể fetch chi tiết từ backend dựa trên orderId
    if (orderId) {
      // fetchPaymentDetails(orderId);
    }
  }, [orderId]);

  const handleBackToHome = () => {
    navigate('/dashboard');
  };

  const handleViewReceipt = () => {
    // Logic để xem hóa đơn chi tiết
    console.log('Xem hóa đơn:', paymentDetails);
  };

  return (
    <div className="payment-success-container">
      <div className="success-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaHome />
          <span>Về trang chủ</span>
        </button>
        <h1>Thanh toán thành công</h1>
      </div>

      {/* Success Icon */}
      <div className="success-icon">
        <FaCheckCircle size={80} color="#4CAF50" />
      </div>

      {/* Success Message */}
      <div className="success-message">
        <h2>Cảm ơn bạn đã thanh toán!</h2>
        <p>Giao dịch của bạn đã được xử lý thành công.</p>
      </div>

      {/* Payment Details Card */}
      <div className="payment-details-card">
        <div className="card-header">
          <FaFileInvoiceDollar className="header-icon" />
          <h3>Chi tiết giao dịch</h3>
        </div>
        
        <div className="details-grid">
          <div className="detail-item">
            <span className="label">Mã giao dịch:</span>
            <span className="value">{paymentDetails.orderCode}</span>
          </div>
          
          <div className="detail-item">
            <span className="label">Số tiền:</span>
            <span className="value amount">{paymentDetails.amount}</span>
          </div>
          
          <div className="detail-item">
            <span className="label">Mô tả:</span>
            <span className="value">{paymentDetails.description}</span>
          </div>
          
          <div className="detail-item">
            <span className="label">Thời gian:</span>
            <span className="value">{paymentDetails.paymentTime}</span>
          </div>
          
          <div className="detail-item">
            <span className="label">Trạng thái:</span>
            <span className="value status-success">{paymentDetails.status}</span>
          </div>
        </div>
      </div>

      {/* Vehicle & Parking Info */}
      <div className="info-cards">
        <div className="info-card">
          <div className="card-icon">
            <FaMotorcycle size={24} />
          </div>
          <div className="card-content">
            <h4>Thông tin xe</h4>
            <p>{paymentDetails.vehicleType}</p>
            <p className="license-plate">{paymentDetails.licensePlate}</p>
          </div>
        </div>

        <div className="info-card">
          <div className="card-icon">
            <FaParking size={24} />
          </div>
          <div className="card-content">
            <h4>Bãi đỗ xe</h4>
            <p>{paymentDetails.parkingLot}</p>
          </div>
        </div>

        <div className="info-card">
          <div className="card-icon">
            <FaCalendarAlt size={24} />
          </div>
          <div className="card-content">
            <h4>Gói đăng ký</h4>
            <p>{paymentDetails.packageName}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button 
          className="btn-secondary" 
          onClick={handleViewReceipt}
        >
          <FaFileInvoiceDollar />
          Xem hóa đơn
        </button>
        
        <button 
          className="btn-primary" 
          onClick={handleBackToHome}
        >
          <FaHome />
          Về trang chủ
        </button>
      </div>

      {/* Additional Info */}
      <div className="additional-info">
        <p>
          <strong>Lưu ý:</strong> Thẻ giữ xe của bạn đã được kích hoạt và có thể sử dụng ngay.
        </p>
        <p>
          Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua hotline: <strong>1900-xxxx</strong>
        </p>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;