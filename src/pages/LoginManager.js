import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import '../styles/LoginManager.css';

const LoginManager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login attempt:', { username, password });
    // Add your login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-content-grid">
        {/* Khung đăng nhập đặt trước để nằm bên trái */}
        <div className="login-form-card">
          <h1 className="login-form-title">Đăng nhập</h1>
          
          <div>
            <div className="login-field-group">
              <div className="login-field-wrapper">
                <User className="login-field-icon" size={20} />
                <input
                  type="text"
                  className="login-text-input"
                  placeholder="Tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="login-field-group">
              <div className="login-field-wrapper">
                <Lock className="login-field-icon" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  className="login-text-input"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button 
              type="button" 
              className="login-submit-button"
              onClick={handleSubmit}
            >
              Đăng nhập
            </button>

            <div>
              <div className="login-forgot-section">
                <a href="#" className="login-forgot-link">
                  Quên mật khẩu?
                </a>
              </div>
              <div className="login-switch-section">
                <p>Bạn là Sinh viên?{' '}
                  <span 
                    className="login-switch-link"
                    onClick={() => window.location.href = '/studentlogin'}
                  >
                    Đăng nhập tại đây
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Ảnh quản lý đặt sau để hiển thị bên phải */}
        <div className="login-character-section">
          <div className="login-character-display">
            <img
              src="/images/manager.png"
              alt="Manager"
              className="login-character-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginManager;
