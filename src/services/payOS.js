import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

// Gửi request tạo link thanh toán PayOS
export const createPayOSOrder = async ({ amount, description }) => {
    // {amount, description}: dung dạng backend nhận
    return axios.post(`${API_BASE_URL}/create-payment`, {
      amount,
      description
    });
  };
  
export const checkPayOSOrderStatus = async (orderId) => {
    return axios.get(`${API_BASE_URL}/order-status/${orderId}`);
  };