import { useState } from "react";
import { useParking } from "./ParkingContext";
const Tracuuxe = () => {
  const { total ,occupancy} = useParking();
  const [searchTerm, setSearchTerm] = useState("");
  if (!total || !occupancy) return <p>Đang tải...</p>;

      // ✅ Hàm lọc theo từ khóa
  const filterRecords = (records) => {
    if (!searchTerm.trim()) return records; // nếu chưa nhập gì thì hiện tất cả
    return records.filter((r) =>
      Object.values(r)
        .join(" ") // nối toàn bộ thông tin lại
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  };
  const filteredTotal = filterRecords(total.records);

  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  return (
    <>
      <p className="trangthai">Chào mừng trở lại !</p>
      <img className="dashboard-image" src="/images/userimage.png" ></img>

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
        <div className="table-box-1">

          {filteredTotal && filteredTotal.length > 0 ? (
    <>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Toà</th>
            <th>Biển số</th>
            <th>Loại xe</th>
            <th>SĐT</th>
          </tr>
        </thead>
        <tbody>
          {filteredTotal
            .slice((page - 1) * rowsPerPage, page * rowsPerPage)
            .map((r, index) => (
              <tr key={r.id}>
                <td>{(page - 1) * rowsPerPage + index + 1}</td>
                <td>{r.name}</td>
                <td>{r.toa}</td>
                <td>{r.license}</td>
                <td>{r.type}</td>
                <td>{r.sdt}</td>
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
          {/* ✅ Tổng kết */}
          <div className="summary">
            Tổng số xe đăng ký:{" "}
            <strong>{total.records.length}</strong> / Tổng số vị trí:{" "}
            <strong>{occupancy.totalSlots}</strong>
          </div>
      </>
    ) : (
      <p>Không tìm thấy xe phù hợp</p>
    )}
  </div>  
  </div>
  </>
  )
}

export default Tracuuxe