import { useState } from "react";
import { useParking } from "./ParkingContext";
const Doanhthu = () => {
  const { revenue } = useParking();
  const [searchTerm, setSearchTerm] = useState("");

  if (!revenue) return <p>Đang tải...</p>;
  // ✅ Hàm lọc theo từ khóa
  const filterRecords = (transactions) => {
    if (!searchTerm.trim()) return transactions; // nếu chưa nhập gì thì hiện tất cả
    return transactions.filter((r) =>
      Object.values(r)
        .join(" ") // nối toàn bộ thông tin lại
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  };
  const filteredTotal = filterRecords(revenue.transactions);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  return (
    <>
      <p className='trangthai'>Chào mừng trở lại !</p>
      <img className='dashboard-image' src="/images/userimage.png" ></img>
          {/* 🔍 Thanh tìm kiếm */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Nhập tên khách hàng / biển số xe..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="box-chung">
        {/* Box thống kê xe ra/vào */}
        <div className="dashboard-stats">
          <div className="stat-box-33">
            <p>Doanh thu trong ngày</p>
            <p className="stat-number33" id="3">{revenue.totalRevenue} VNĐ</p>
          </div>
        </div>
      
        <div className="table-box-11">
      <h2>Lịch sử giao dịch chi tiết</h2>
          {filteredTotal && filteredTotal.length > 0 ? (
    <>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Biển số</th>
            <th>Giá tiền</th>
            <th>Thời gian</th>
          </tr>
        </thead>
        <tbody>
          {filteredTotal
            .slice((page - 1) * rowsPerPage, page * rowsPerPage)
            .map((r, index) => (
              <tr key={r.id}>
                <td>{(page - 1) * rowsPerPage + index + 1}</td>
                <td>{r.name}</td>
                <td>{r.license}</td>
                <td>{r.amount}</td>
                <td>{r.time}</td>
              </tr>
            ))}
        </tbody>
      </table>

          {/* Nút chuyển trang  */}
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              ◀ Trang trước
            </button>
            <span>
              Trang {page} / {Math.ceil(filteredTotal.length / rowsPerPage)}
            </span>
            <button
              disabled={page === Math.ceil(filteredTotal.length / rowsPerPage)}
              onClick={() => setPage(page + 1)}
            >
              Trang sau ▶
            </button>
          </div>
      </>
    ) : (
      <p>Không tìm thấy</p>
    )}
  </div> 
</div>
    </>
  );
};

export default Doanhthu;
