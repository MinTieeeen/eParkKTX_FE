import { useState } from "react";
import { useParking } from "./ParkingContext";

const Quanliravao = () => {
  const { occupancy, traffic } = useParking();
  const [searchTerm, setSearchTerm] = useState(""); 
  if (!traffic) return <p>Đang tải...</p>;

  const xeVao = traffic.records.filter((r) => r.type === "Xe vào");
  const xeRa = traffic.records.filter((r) => r.type === "Xe ra");
  
  const availableSlots = occupancy.totalSlots - occupancy.usedSlots;

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

  const filteredXeVao = filterRecords(xeVao);
  const filteredXeRa = filterRecords(xeRa);

  const [pageIn, setPageIn] = useState(1);
  const [pageOut, setPageOut] = useState(1);
  const rowsPerPage = 3;

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
      
      {/* Box thống kê xe ra/vào */}
      <div className="dashboard-stats">
        <div className="stat-box-1">
          <p>Lượt xe vào hôm nay</p>
          <p className="stat-number">{traffic.totalIn}</p>
        </div>
        <div className="stat-box-2">
          <p>Lượt xe ra hôm nay</p>
          <p className="stat-number">{traffic.totalOut}</p>
        </div>
        <div className="stat-box-3">
          <p>Số vị trí chỗ trống</p>
          <p className="stat-number" id="3">{availableSlots}/{occupancy.totalSlots} chỗ</p>
        </div>

      </div>

        <div className="table-box">
      <h2>Danh sách xe ra/vào hôm nay</h2>

      {/* ---------------- BẢNG XE VÀO ---------------- */}
      <h3 className="sub-title">Lượt xe vào</h3>

      {filteredXeVao.length === 0 ? (
        <p>Không tìm thấy xe vào phù hợp</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Biển số</th>
                <th>Loại</th>
                <th>Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {filteredXeVao
                .slice((pageIn - 1) * rowsPerPage, pageIn * rowsPerPage)
                .map((r, index) => (
                  <tr key={r.id}>
                    <td>{index + 1}</td>
                    <td>{r.name}</td>
                    <td>{r.license}</td>
                    <td>{r.type}</td>
                    <td>{r.time}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          {/* Nút chuyển trang xe vào */}
          <div className="pagination">
            <button
              disabled={pageIn === 1}
              onClick={() => setPageIn(pageIn - 1)}
            >
              ◀ Trang trước
            </button>
            <span>
              Trang {pageIn} / {Math.ceil(filteredXeVao.length / rowsPerPage)}
            </span>
            <button
              disabled={pageIn === Math.ceil(filteredXeVao.length / rowsPerPage)}
              onClick={() => setPageIn(pageIn + 1)}
            >
              Trang sau ▶
            </button>
          </div>
        </>
      )}

      {/* ---------------- BẢNG XE RA ---------------- */}
      <h3 className="sub-title">Lượt xe ra</h3>

      {filteredXeRa.length === 0 ? (
        <p>Không tìm thấy xe ra phù hợp</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Biển số</th>
                <th>Loại</th>
                <th>Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {filteredXeRa
                .slice((pageOut - 1) * rowsPerPage, pageOut * rowsPerPage)
                .map((r, index) => (
                  <tr key={r.id}>
                    <td>{index + 1}</td>
                    <td>{r.name}</td>
                    <td>{r.license}</td>
                    <td>{r.type}</td>
                    <td>{r.time}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          {/* Nút chuyển trang xe ra */}
          <div className="pagination">
            <button
              disabled={pageOut === 1}
              onClick={() => setPageOut(pageOut - 1)}
            >
              ◀ Trang trước
            </button>
            <span>
              Trang {pageOut} / {Math.ceil(filteredXeRa.length / rowsPerPage)}
            </span>
            <button
              disabled={pageOut === Math.ceil(filteredXeRa.length / rowsPerPage)}
              onClick={() => setPageOut(pageOut + 1)}
            >
              Trang sau ▶
            </button>
          </div>
        </>
      )}
    </div>
    </div> 
    </>
  )
};

export default Quanliravao;
