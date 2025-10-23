import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Hiệu ứng hiện hero khi load trang
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStart = () => {
    navigate('/login');
  };

  
  const handleContact = () => {
    alert('Liên hệ: support@manifest.vn\nSố điện thoại: 1900-xxxx');
  };

  return (
    <div className="homepage">
      {/* Hero Section - GIỮ NGUYÊN CODE CŨ */}
      <div className="hero-container">
        <div className="container">
          {/* Content Section */}
          <div className={`content ${isVisible ? 'visible' : ''}`}>
            <span className="badge">Manifest</span>

            <h1 className="title">
              Hệ thống <span className="highlight">quản lý</span><br />
              thẻ xe <span className="highlight">ký túc xá</span>
            </h1>

            <p className="description">
              Giải pháp số hóa hoàn toàn — Đăng ký online, tra cứu nhanh,<br />
              gia hạn dễ dàng và thanh toán tự động.
            </p>

            <div className="buttons">
              <button
                onClick={handleStart}
                className="homepage-btn homepage-btn-primary"
              >
                Bắt đầu
              </button>
              <button
                onClick={handleContact}
                className="homepage-btn homepage-btn-secondary"
              >
                Liên hệ
              </button>
            </div>
          </div>

          {/* Illustration Section */}
          <div className={`illustration ${isVisible ? 'visible' : ''}`}>
            <img
              src="/images/ellipse.png"
              alt="Ellipse"
              className="ellipse-img"
            />
            <img
              src="/images/scooter.png"
              alt="Scooter Illustration"
              className="scooter-img"
            />
          </div>
        </div>
      </div>

      <section className="service-section">
        <div className="service-container">
          <div className="service-left">
            <img src="/images/girl-scooter.png" alt="Girl on Scooter" className="girl-scooter-img" />
            <img
              src="/images/ellipse-1.png"
              alt="Ellipse"
              className="ellipse-1-img"
            />
          </div>

          <div className="service-right">
            <span className="badge">DỊCH VỤ</span>
            <h2 className="section-title">
              Trải nghiệm gửi xe<br />
              <span className="highlight-blue">Dễ dàng tại ký túc xá</span>
            </h2>
            <p className="section-description">
              Giúp sinh viên gửi xe nhanh chóng, an toàn và tiện lợi ngay tại KTX.
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/images/icon-parking.png" alt="Parking Icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">
                    Đặt chỗ đậu xe <span className="highlight-blue">dễ dàng</span>
                  </h3>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/images/icon-payment.png" alt="Payment Icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">
                    Quản lý vé & thanh toán{' '}
                    <span className="highlight-blue">online</span>
                  </h3>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/images/icon-tracking.png" alt="Tracking Icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">
                    Theo dõi thời gian{' '}
                    <span className="highlight-blue">thực</span>
                  </h3>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/images/icon-security.png" alt="Security Icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">
                    <span className="highlight-blue">Bảo mật</span> & xác thực sinh viên
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <span className="badge">VỀ CHÚNG TÔI</span>

          <div className="steps-wrapper">
            <div className="step">
              <div className="step-icon">
                <img src="/images/icon-problem.png" alt="Register" />
              </div>
              <div className="step-image">
                <img src="/images/student-room.png" alt="Student in Room" />
              </div>
              <p className="step-description">
                Sinh viên ký túc xá thường phải xếp hàng gửi xe, dễ mất vé, khó biết chỗ trống và thanh toán bất tiện.
              </p>
            </div>

            <div className="arrow-right">
              <img src="/images/arrow-right.png" alt="Arrow" />
            </div>

            <div className="step">
              <div className="step-icon">
                <img src="/images/icon-solution.png" alt="App" />
              </div>
              <div className="step-image">
                <img src="/images/logo.png" alt="ePark KTX" />
              </div>
  
              <p className="step-description">
                eParkKTX giúp quản lý chỗ đậu, thanh toán và theo dõi bãi xe theo thời gian thực — tất cả chỉ trong một ứng dụng.
              </p>
            </div>

            <div className="arrow-right">
              <img src="/images/arrow-right.png" alt="Arrow" />
            </div>

            <div className="step">
              <div className="step-icon">
                <img src="/images/icon-future.png" alt="Success" />
              </div>
              <div className="step-image">
                <img src="/images/phone-app.png" alt="Phone App" />
              </div>
              <p className="step-description">
                Trở thành nền tảng gửi xe thông minh cho mọi khu ký túc xá, góp phần số hóa trải nghiệm sinh viên.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}