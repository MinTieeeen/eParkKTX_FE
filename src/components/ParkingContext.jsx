import { createContext, useContext, useEffect, useState } from "react";

const ParkingContext = createContext();

export const ParkingProvider = ({ children }) => {
  const [data, setData] = useState({
    revenue: null,
    traffic: null,
    occupancy: null,
    total: null,
  });

  useEffect(() => {
    // 🚧 Hardcode dữ liệu trước – sau này chỉ cần bật fetch() là xong
    const mockData = {
      revenue: {
        totalRevenue: 12500000,
        today: "20.10.2025",
        transactions: [
          { id: 1, name:"Nguyễn Văn A",license: "51A-12345", amount: 5000, time: "08:30"  },
          { id: 2, name:"Trần Văn B",license: "51A-67890", amount: 5000, time: "09:15"  },
          { id: 3, name:"Lê Văn C",license: "51B-11223", amount: 10000, time: "10:00"  },
          { id: 4, name:"Phạm Thị D",license: "76X1-4343", amount: 7000, time: "10:30"  },
          { id: 5, name:"Đặng Văn E",license: "51A-27758", amount: 5000, time: "11:00"  },
          { id: 6, name:"Hoàng Thị F",license: "60B-99887", amount: 12000, time: "11:30"  },
        ],
      },
      traffic: {
        totalIn: 58,
        totalOut: 42,
        records: [
          { id: 1, name:"Nguyễn Văn A",license: "51A-12345", type: "Xe vào", time: "08:30"  },
          { id: 2, name:"Trần Văn B", license: "51A-67890", type: "Xe ra", time: "09:00" },
          { id: 3, name:"Lê Văn C", license: "51B-11223", type: "Xe vào", time: "09:20" },
          { id: 4, name:"Nguyễn Văn D", license: "51B-11223", type: "Xe vào", time: "09:20" },
          { id: 5, name:"Trần Văn E", license: "76X1-4343", type: "Xe vào", time: "09:20" },
          { id: 6, name:"Lê Văn F", license: "51A-27758", type: "Xe ra", time: "09:00" },
          { id: 7, name:"Nguyễn Văn G", license: "51A-27758", type: "Xe ra", time: "09:00" },
          { id: 8, name:"Trần Văn H", license: "51A-27758", type: "Xe ra", time: "09:00" },
        ],
      },
      occupancy: {
        totalSlots: 200,
        usedSlots: 50,
      },
      total: {
        records: [
          { id: 1, name: "Nguyễn Văn A", toa:"C06", license: "59A-12345", type: "Xe máy", sdt: "0905123456" },
          { id: 2, name: "Lê Văn C", toa:"C07", license: "60C-11223", type: "Ô tô", sdt: "0905123456" },
          { id: 3, name: "Phạm Thị D", toa:"C08", license: "51D-33445", type: "Xe máy", sdt: "0905123456" },
          { id: 4, name: "Ngô Văn E", toa:"C09", license: "59E-55667", type: "Ô tô", sdt: "0905123456" },
          { id: 5, name: "Trần Thị F", toa:"C10", license: "51F-77889", type: "Xe máy", sdt: "0905123456" },
          { id: 6, name: "Đặng Văn G", toa:"C11", license: "60G-99000", type: "Ô tô", sdt: "0905123456" },
          { id: 7, name: "Lý Thị H", toa:"C12", license: "51H-22334", type: "Xe máy", sdt: "0905123456" },
          { id: 8, name: "Vũ Văn I", toa:"C13", license: "59I-44556", type: "Ô tô", sdt: "0905123456" },
          { id: 9, name: "Phan Thị J", toa:"C14", license: "60J-66778", type: "Xe máy", sdt: "0905123456" },
          { id: 10, name: "Trịnh Văn K", toa:"C15", license: "51K-88990", type: "Ô tô", sdt: "0905123456" },
          { id: 11, name: "Hồ Thị L", toa:"C16", license: "59L-11223", type: "Xe máy", sdt: "0905123456" },
          { id: 12, name: "Dương Văn M", toa:"C17", license: "60M-33445", type: "Ô tô", sdt: "0905123456" },
        ],
      },
      realTime: {
        inGate: [
          { id: 1, name:"Nguyễn Văn A",license: "51A-12345", type: "Xe vào", time: "08:30" , img: "/images/camera_in.png"  },
        ],
        outGate: [
          { id: 1, name:"Trần Văn B", license: "51A-67890", type: "Xe ra", time: "09:00", img: "/images/camera_out.png" },
        ],
      },
    };

    setData(mockData);

    // 🧩 Khi có backend thật, chỉ cần thay block này:
    /*
    Promise.all([
      fetch("/api/doanhthu/today").then(res => res.json()),
      fetch("/api/baixe/traffic/today").then(res => res.json()),
      fetch("/api/baixe/occupancy").then(res => res.json()),
    ])
      .then(([revenue, traffic, occupancy]) => {
        setData({ revenue, traffic, occupancy });
      })
      .catch(err => console.error("Lỗi khi lấy dữ liệu bãi xe:", err));
    */
  }, []);

  return (
    <ParkingContext.Provider value={data}>
      {children}
    </ParkingContext.Provider>
  );
};

export const useParking = () => useContext(ParkingContext);
