import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const selectRole = (role) => {
    localStorage.setItem('selectedRole', role);

    if (role === 'student') {
      navigate('/studentlogin');
    } else if (role === 'manager') {
      navigate('/managerlogin');
    }
  };

  return (
    <div className="page-container">
      <div className="signin-container">
        <h1 className="main-title">BẠN LÀ?</h1>

        <div className="role-grid">
          {/* Student Card */}
          <div className="role-card" onClick={() => selectRole('student')}>
            <div className="character-container">
              <img
                src="/images/student.png"
                alt="Sinh viên"
                className="character-image"
              />
            </div>
            <button className="role-button">Sinh viên</button>
          </div>

          {/* Manager Card */}
          <div className="role-card" onClick={() => selectRole('manager')}>
            <div className="character-container">
              <img
                src="/images/manager.png"
                alt="Ban quản lý"
                className="character-image"
              />
            </div>
            <button className="role-button">Ban quản lý</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
