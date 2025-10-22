import React, { useState } from 'react';
import { createPayOSOrder } from '../services/payOS';

function PaymentPage() {
  const [amount, setAmount] = useState(100000);
  const [description, setDescription] = useState('Thanh toán phòng tháng 11');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const onPay = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await createPayOSOrder({ amount, description });
      console.log("API result: ", data);
      window.location.href = data.payUrl; // Redirect đến PayOS
    } catch (err) {
      setError('Xảy ra lỗi khi tạo đơn thanh toán. Vui lòng thử lại.');
      setLoading(false);
    }
  };
  
  return (
    <div className="payment-container" style={{
      maxWidth: 400, margin: "40px auto", padding: 32, background: "#fff",
      borderRadius: 16, boxShadow: "0 2px 16px rgba(0,0,0,0.07)"
    }}>
      <h1 style={{textAlign:'center', marginBottom:20}}>Thanh toán qua PayOS</h1>
      <form onSubmit={onPay}>
        <div style={{marginBottom: 16}}>
          <label>Số tiền (VNĐ):</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            min={1000}
            step={1000}
            required
            style={{width:'100%',padding:8,marginTop:4,borderRadius: 4}}
          />
        </div>
        <div style={{marginBottom: 16}}>
          <label>Mô tả đơn hàng:</label>
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            style={{width:'100%',padding:8,marginTop:4,borderRadius: 4}}
          />
        </div>
        {error && (
          <div style={{marginBottom:16,color:"red",fontWeight:500}}>
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          style={{
            width:'100%',
            background: "#2563eb",
            color:'#fff',
            fontWeight:600,
            border:0,
            borderRadius:8,
            padding: "12px 0",
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: 18,
          }}
        >
          {loading ? "Đang chuyển hướng..." : "Thanh toán ngay"}
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;