export type DiscountRule = {
  percent: number;
  minQty: number;
  maxQty?: number;
  label: string;
};

export type PricingItem = {
  id: string;
  name: string;
  model?: string;
  unit?: string;
  price: number;
  discounts?: DiscountRule[];
};

export type PricingSolution = {
  id: string;
  name: string;
  items: PricingItem[];
};

export const pricingSolutions: PricingSolution[] = [
  {
    "id": "giai-phap-an-ninh-thong-minh",
    "name": "GIẢI PHÁP AN NINH THÔNG MINH",
    "items": [
      {
        "id": "giai-phap-an-ninh-thong-minh-1",
        "name": "Camera AI",
        "model": "NGFR-0-A0",
        "unit": "Bộ",
        "price": 32555000,
        "discounts": [
          {
            "percent": 8.0,
            "minQty": 30,
            "maxQty": 100,
            "label": "8% khi từ 30-100"
          },
          {
            "percent": 12.0,
            "minQty": 50,
            "maxQty": 200,
            "label": "12%  khi từ 50-200"
          },
          {
            "percent": 15.0,
            "minQty": 201,
            "label": "15% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-an-ninh-thong-minh-2",
        "name": "Máy tính AI thông minh",
        "model": "NGPC-0-C0",
        "unit": "Bộ",
        "price": 80245000
      },
      {
        "id": "giai-phap-an-ninh-thong-minh-3",
        "name": "Switch PoE",
        "model": "Mua của hãng",
        "unit": "Bộ",
        "price": 12000000
      },
      {
        "id": "giai-phap-an-ninh-thong-minh-4",
        "name": "Chi phí lắp đặt",
        "model": "",
        "unit": "Gói",
        "price": 1000000
      },
      {
        "id": "giai-phap-an-ninh-thong-minh-5",
        "name": "Dây cấp nguồn",
        "model": "",
        "unit": "Mét",
        "price": 40000
      },
      {
        "id": "giai-phap-an-ninh-thong-minh-6",
        "name": "Dây truyền tín hiệu",
        "model": "",
        "unit": "Mét",
        "price": 20000
      },
      {
        "id": "giai-phap-an-ninh-thong-minh-7",
        "name": "Vật tư thi công",
        "model": "",
        "unit": "Gói",
        "price": 300000
      },
      {
        "id": "giai-phap-an-ninh-thong-minh-8",
        "name": "Tủ điện",
        "model": "",
        "unit": "Bộ",
        "price": 2500000
      },
      {
        "id": "giai-phap-an-ninh-thong-minh-9",
        "name": "Phần mềm",
        "model": "",
        "unit": "Gói",
        "price": 70000000
      }
    ]
  },
  {
    "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien",
    "name": "GIẢI PHÁP GIÁM SÁT VÀ QUẢN LÝ PHƯƠNG TIỆN",
    "items": [
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-1",
        "name": "Camera nhận dạng biển số xe",
        "model": "NGLP-0-A0",
        "unit": "Bộ",
        "price": 38795000,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 10,
            "maxQty": 20,
            "label": "3% khi từ 10-20"
          },
          {
            "percent": 4.0,
            "minQty": 20,
            "maxQty": 50,
            "label": "4% khi từ 20-50"
          },
          {
            "percent": 5.0,
            "minQty": 51,
            "label": "5% khi >50"
          }
        ]
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-2",
        "name": "Cột gá camera nhận dạng biển số xe",
        "model": "NGCI-0-A0",
        "unit": "Bộ",
        "price": 7825000,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 10,
            "maxQty": 20,
            "label": "3% khi từ 10-20"
          },
          {
            "percent": 4.0,
            "minQty": 20,
            "maxQty": 50,
            "label": "4% khi từ 20-50"
          },
          {
            "percent": 5.0,
            "minQty": 51,
            "label": "5% khi >50"
          }
        ]
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-3",
        "name": "Camera theo dõi trạng thái xe",
        "model": "NGVS-0-A0",
        "unit": "Bộ",
        "price": 10542000,
        "discounts": [
          {
            "percent": 20.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "20% khi từ 50-100"
          },
          {
            "percent": 25.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "25% khi từ 100-200"
          },
          {
            "percent": 30.0,
            "minQty": 201,
            "label": "30% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-4",
        "name": "Khoá lot đỗ xe",
        "model": "NGPL-0-D0",
        "unit": "Bộ",
        "price": 14623000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5%khi từ 50-100"
          },
          {
            "percent": 10.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "10% khi từ 100-200"
          },
          {
            "percent": 15.0,
            "minQty": 201,
            "label": "15% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-5",
        "name": "Bộ nguồn khoá lot đỗ xe",
        "model": "MKSLC-4-A1",
        "unit": "Bộ",
        "price": 5125000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5%khi từ 50-100"
          },
          {
            "percent": 10.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "10% khi từ 100-200"
          },
          {
            "percent": 15.0,
            "minQty": 201,
            "label": "15% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-6",
        "name": "Thiết bị nhận dạng sinh trắc học đa năng",
        "model": "NGBR-0-A0",
        "unit": "Bộ",
        "price": 23560000,
        "discounts": [
          {
            "percent": 4.0,
            "minQty": 10,
            "maxQty": 50,
            "label": "4% khi từ 10-50"
          },
          {
            "percent": 6.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "6% khi tù 50-100"
          },
          {
            "percent": 8.0,
            "minQty": 101,
            "label": "8% khi >100"
          }
        ]
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-7",
        "name": "Máy tính AI thông minh",
        "model": "NGPC-0-C0",
        "unit": "Bộ",
        "price": 80245000
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-8",
        "name": "Switch PoE",
        "model": "Mua của hãng",
        "unit": "Bộ",
        "price": 12000000
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-9",
        "name": "Chi phí lắp đặt",
        "model": "",
        "unit": "Gói",
        "price": 1000000
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-10",
        "name": "Dây cấp nguồn",
        "model": "",
        "unit": "Mét",
        "price": 40000
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-11",
        "name": "Dây truyền tín hiệu",
        "model": "",
        "unit": "Mét",
        "price": 20000
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-12",
        "name": "Vật tư thi công",
        "model": "",
        "unit": "Gói",
        "price": 300000
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-13",
        "name": "Tủ điện",
        "model": "",
        "unit": "Bộ",
        "price": 2500000
      },
      {
        "id": "giai-phap-giam-sat-va-quan-ly-phuong-tien-14",
        "name": "Phần mềm",
        "model": "",
        "unit": "Gói",
        "price": 270000
      }
    ]
  },
  {
    "id": "giai-phap-kiem-soat-con-nguoi-vao-ra",
    "name": "GIẢI PHÁP KIỂM SOÁT CON NGƯỜI VÀO/RA",
    "items": [
      {
        "id": "giai-phap-kiem-soat-con-nguoi-vao-ra-1",
        "name": "Thiết bị nhận dạng sinh trắc học đa năng",
        "model": "NGBR-0-A0",
        "unit": "BỘ",
        "price": 23560000,
        "discounts": [
          {
            "percent": 4.0,
            "minQty": 10,
            "maxQty": 50,
            "label": "4% khi từ 10-50"
          },
          {
            "percent": 6.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "6% khi tù 50-100"
          },
          {
            "percent": 8.0,
            "minQty": 101,
            "label": "8% khi >100"
          }
        ]
      },
      {
        "id": "giai-phap-kiem-soat-con-nguoi-vao-ra-2",
        "name": "Thiết bị đầu cuối thu thập thông tin sinh trắc học của nhân viên (đặt trên sàn)",
        "model": "NGBC-0-A0",
        "unit": "BỘ",
        "price": 49872000,
        "discounts": [
          {
            "percent": 10.0,
            "minQty": 10,
            "maxQty": 50,
            "label": "10% khi từ 10-50"
          },
          {
            "percent": 15.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "15% khi từ 50-100"
          },
          {
            "percent": 20.0,
            "minQty": 101,
            "label": "20% khi >100"
          }
        ]
      },
      {
        "id": "giai-phap-kiem-soat-con-nguoi-vao-ra-3",
        "name": "E-gate một chiều",
        "model": "NGEG-0-A0",
        "unit": "BỘ",
        "price": 83452000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 10,
            "maxQty": 20,
            "label": "5% khi từ 10-20"
          },
          {
            "percent": 7.0,
            "minQty": 20,
            "maxQty": 50,
            "label": "7% khi từ 20-50"
          },
          {
            "percent": 12.0,
            "minQty": 51,
            "label": "12% khi >50"
          }
        ]
      },
      {
        "id": "giai-phap-kiem-soat-con-nguoi-vao-ra-4",
        "name": "E-gate hai chiều",
        "model": "NGEG-0-A1",
        "unit": "BỘ",
        "price": 95782000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 10,
            "maxQty": 20,
            "label": "5% khi từ 10-20"
          },
          {
            "percent": 7.0,
            "minQty": 20,
            "maxQty": 50,
            "label": "7% khi từ 20-50"
          },
          {
            "percent": 12.0,
            "minQty": 51,
            "label": "12% khi >50"
          }
        ]
      },
      {
        "id": "giai-phap-kiem-soat-con-nguoi-vao-ra-5",
        "name": "Máy tính AI thông minh",
        "model": "NGPC-0-C0",
        "unit": "Bộ",
        "price": 80245000
      },
      {
        "id": "giai-phap-kiem-soat-con-nguoi-vao-ra-6",
        "name": "Switch PoE",
        "model": "Mua của hãng",
        "unit": "Bộ",
        "price": 12000000
      },
      {
        "id": "giai-phap-kiem-soat-con-nguoi-vao-ra-7",
        "name": "Chi phí lắp đặt",
        "model": "",
        "unit": "Gói",
        "price": 1000000
      },
      {
        "id": "giai-phap-kiem-soat-con-nguoi-vao-ra-8",
        "name": "Dây cấp nguồn",
        "model": "",
        "unit": "Mét",
        "price": 40000
      },
      {
        "id": "giai-phap-kiem-soat-con-nguoi-vao-ra-9",
        "name": "Dây truyền tín hiệu",
        "model": "",
        "unit": "Mét",
        "price": 20000
      },
      {
        "id": "giai-phap-kiem-soat-con-nguoi-vao-ra-10",
        "name": "Vật tư thi công",
        "model": "",
        "unit": "Gói",
        "price": 300000
      },
      {
        "id": "giai-phap-kiem-soat-con-nguoi-vao-ra-11",
        "name": "Tủ điện",
        "model": "",
        "unit": "Bộ",
        "price": 2500000
      },
      {
        "id": "giai-phap-kiem-soat-con-nguoi-vao-ra-12",
        "name": "Phần mềm",
        "model": "",
        "unit": "Gói",
        "price": 85000000
      }
    ]
  },
  {
    "id": "giai-phap-chieu-sang-thong-minh",
    "name": "GIẢI PHÁP CHIẾU SÁNG THÔNG MINH",
    "items": [
      {
        "id": "giai-phap-chieu-sang-thong-minh-1",
        "name": "Màn hình gateway 4inch",
        "model": "NGDL-0-A4",
        "unit": "Bộ",
        "price": 10783000,
        "discounts": [
          {
            "percent": 10.0,
            "minQty": 1,
            "maxQty": 499,
            "label": "10% khi <500"
          },
          {
            "percent": 15.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "15% khi từ 500-1000"
          },
          {
            "percent": 20.0,
            "minQty": 1001,
            "label": "20% khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-2",
        "name": "Bộ aptomat thông minh(400A)",
        "model": "NGSCB-0-A400",
        "unit": "Bộ",
        "price": 27453000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "7% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 501,
            "label": "10% khi >500"
          }
        ]
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-3",
        "name": "Aptomat thông minh (80A)",
        "model": "NGSCB-0-A80",
        "unit": "Bộ",
        "price": 8654200,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "7% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 501,
            "label": "10% khi >500"
          }
        ]
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-4",
        "name": "Aptomat thông minh (60A)",
        "model": "NGSCB-0-A60",
        "unit": "Bộ",
        "price": 8564000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "7% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 501,
            "label": "10% khi >500"
          }
        ]
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-5",
        "name": "Mô đun nguồn",
        "model": "NGPS-CB-0-A0",
        "unit": "Bộ",
        "price": 5624000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "7% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 501,
            "label": "10% khi >500"
          }
        ]
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-6",
        "name": "Mô đun truyền thông",
        "model": "NGCM-CB-0-A0",
        "unit": "Bộ",
        "price": 8263000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "7% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 501,
            "label": "10% khi >500"
          }
        ]
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-7",
        "name": "Cảm biến thông minh phát hiện người",
        "model": "NGHBPS-0-B0",
        "unit": "Bộ",
        "price": 2547300,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 300,
            "maxQty": 500,
            "label": "5% khi từ 300-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15%  khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-8",
        "name": "Cảm biến hồng ngoại phát hiện chuyển động (con người)",
        "model": "NGHS-0-B0",
        "unit": "Bộ",
        "price": 1350000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 300,
            "maxQty": 500,
            "label": "5% khi từ 300-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15%  khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-9",
        "name": "Logic controller / server",
        "model": "Mua của hãng",
        "unit": "Bộ",
        "price": 35000000
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-10",
        "name": "Nguồn bus KNX",
        "model": "Mua của hãng",
        "unit": "Bộ",
        "price": 8500000
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-11",
        "name": "Gateway",
        "model": "Mua của hãng",
        "unit": "Bộ",
        "price": 14560000
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-12",
        "name": "Relay actuator ON/OFF",
        "model": "Mua của hãng",
        "unit": "Bộ",
        "price": 6752000
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-13",
        "name": "Chi phí lắp đặt",
        "model": "",
        "unit": "Gói",
        "price": 15000000
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-14",
        "name": "Dây cấp nguồn",
        "model": "",
        "unit": "Mét",
        "price": 40000
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-15",
        "name": "Dây truyền tín hiệu",
        "model": "",
        "unit": "Mét",
        "price": 20000
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-16",
        "name": "Dây truyền tín hiệu",
        "model": "",
        "unit": "Mét",
        "price": 30000
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-17",
        "name": "Vật tư thi công",
        "model": "",
        "unit": "Gói",
        "price": 300000
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-18",
        "name": "Tủ điện",
        "model": "",
        "unit": "Bộ",
        "price": 2500000
      },
      {
        "id": "giai-phap-chieu-sang-thong-minh-19",
        "name": "Phần mềm",
        "model": "",
        "unit": "Gói",
        "price": 12000000
      }
    ]
  },
  {
    "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong",
    "name": "GIẢI PHÁP VẬN HÀNH THÔNG MINH (ĐIỀU KHIỂN THANG MÁY, QUẢN LÝ NĂNG LƯỢNG)",
    "items": [
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-1",
        "name": "Bộ điều khiển thang máy",
        "model": "NGEC-0-C0",
        "unit": "Bộ",
        "price": 167450000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 10,
            "maxQty": 30,
            "label": "5% khi từ 10-30"
          },
          {
            "percent": 7.0,
            "minQty": 30,
            "maxQty": 50,
            "label": "7% khi từ 30-50"
          },
          {
            "percent": 10.0,
            "minQty": 51,
            "label": "10% khi >50"
          }
        ]
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-2",
        "name": "Bộ aptomat thông minh(400A)",
        "model": "NGSCB-0-A400",
        "unit": "Bộ",
        "price": 27453000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "7% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 501,
            "label": "10% khi >500"
          }
        ]
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-3",
        "name": "Aptomat thông minh (80A)",
        "model": "NGSCB-0-A80",
        "unit": "Bộ",
        "price": 8654200,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "7% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 501,
            "label": "10% khi >500"
          }
        ]
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-4",
        "name": "Aptomat thông minh (60A)",
        "model": "NGSCB-0-A60",
        "unit": "Bộ",
        "price": 8564000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "7% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 501,
            "label": "10% khi >500"
          }
        ]
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-5",
        "name": "Mô đun nguồn",
        "model": "NGPS-CB-0-A0",
        "unit": "Bộ",
        "price": 5624000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "7% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 501,
            "label": "10% khi >500"
          }
        ]
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-6",
        "name": "Mô đun truyền thông",
        "model": "NGCM-CB-0-A0",
        "unit": "Bộ",
        "price": 8263000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "7% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 501,
            "label": "10% khi >500"
          }
        ]
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-7",
        "name": "Cảm biến rò rỉ nước",
        "model": "NGSQ-0-BO",
        "unit": "Bộ",
        "price": 864000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 300,
            "maxQty": 500,
            "label": "5% khi từ 300-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15%  khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-8",
        "name": "Cảm biến rò rỉ khí gas",
        "model": "NGGLS-0-B0",
        "unit": "Bộ",
        "price": 1100000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 300,
            "maxQty": 500,
            "label": "5% khi từ 300-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15%  khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-9",
        "name": "Chi phí lắp đặt cho điều khiển thang máy",
        "model": "",
        "unit": "Gói",
        "price": 20000000
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-10",
        "name": "Chi phí lắp đặt  cho quản lý năng lượng",
        "model": "",
        "unit": "Gói",
        "price": 1200000
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-11",
        "name": "Dây cấp nguồn",
        "model": "",
        "unit": "Mét",
        "price": 40000
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-12",
        "name": "Dây truyền tín hiệu",
        "model": "",
        "unit": "Mét",
        "price": 20000
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-13",
        "name": "Dây truyền tín hiệu",
        "model": "",
        "unit": "Mét",
        "price": 30000
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-14",
        "name": "Vật tư thi công",
        "model": "",
        "unit": "Gói",
        "price": 300000
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-15",
        "name": "Tủ điện",
        "model": "",
        "unit": "Bộ",
        "price": 2500000
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-16",
        "name": "Phần mềm điều khiển thang máy",
        "model": "",
        "unit": "Gói",
        "price": 98500000
      },
      {
        "id": "giai-phap-van-hanh-thong-minh-ieu-khien-thang-may-quan-ly-nang-luong-17",
        "name": "Phần mềm quản lý năng lượng",
        "model": "",
        "unit": "Gói",
        "price": 150000000
      }
    ]
  },
  {
    "id": "phong-ieu-hanh-noc",
    "name": "PHÒNG ĐIỀU HÀNH NOC",
    "items": [
      {
        "id": "phong-ieu-hanh-noc-1",
        "name": "Máy tính AI thông minh",
        "model": "NGPC-0-C0",
        "unit": "Bộ",
        "price": 80245000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 10,
            "maxQty": 30,
            "label": "5% khi từ 10-30"
          },
          {
            "percent": 10.0,
            "minQty": 30,
            "maxQty": 50,
            "label": "10% khi từ 30-50"
          },
          {
            "percent": 15.0,
            "minQty": 51,
            "label": "15% khi >50"
          }
        ]
      },
      {
        "id": "phong-ieu-hanh-noc-2",
        "name": "Màn hình 55 inch 4K chuyên dụng",
        "model": "-",
        "unit": "Bộ",
        "price": 28000000
      },
      {
        "id": "phong-ieu-hanh-noc-3",
        "name": "Bô điều khiển Video Wall",
        "model": "",
        "unit": "Bộ",
        "price": 30000000
      },
      {
        "id": "phong-ieu-hanh-noc-4",
        "name": "Video Wall 55 inch viền mỏng",
        "model": "-",
        "unit": "Bộ",
        "price": 60000000
      },
      {
        "id": "phong-ieu-hanh-noc-5",
        "name": "AI Server GPU",
        "model": "-",
        "unit": "Bộ",
        "price": 200000000
      },
      {
        "id": "phong-ieu-hanh-noc-6",
        "name": "VMS Server",
        "model": "-",
        "unit": "Bộ",
        "price": 220000000
      },
      {
        "id": "phong-ieu-hanh-noc-7",
        "name": "NAS Storage",
        "model": "-",
        "unit": "Bộ",
        "price": 300000000
      },
      {
        "id": "phong-ieu-hanh-noc-8",
        "name": "Core Switch Layer 3",
        "model": "-",
        "unit": "Bộ",
        "price": 115000000
      },
      {
        "id": "phong-ieu-hanh-noc-9",
        "name": "Workstation điều hành",
        "model": "-",
        "unit": "Bộ",
        "price": 120000000
      },
      {
        "id": "phong-ieu-hanh-noc-10",
        "name": "UPS Online",
        "model": "-",
        "unit": "Bộ",
        "price": 165000000
      },
      {
        "id": "phong-ieu-hanh-noc-11",
        "name": "Chi phí lắp đặt",
        "model": "",
        "unit": "Gói",
        "price": 2500000
      },
      {
        "id": "phong-ieu-hanh-noc-12",
        "name": "Dây cấp nguồn",
        "model": "",
        "unit": "Mét",
        "price": 40000
      },
      {
        "id": "phong-ieu-hanh-noc-13",
        "name": "Dây truyền tín hiệu",
        "model": "",
        "unit": "Mét",
        "price": 20000
      },
      {
        "id": "phong-ieu-hanh-noc-14",
        "name": "Dây truyền tín hiệu",
        "model": "",
        "unit": "Mét",
        "price": 30000
      },
      {
        "id": "phong-ieu-hanh-noc-15",
        "name": "Vật tư thi công",
        "model": "",
        "unit": "Gói",
        "price": 300000
      },
      {
        "id": "phong-ieu-hanh-noc-16",
        "name": "Tủ điện",
        "model": "",
        "unit": "Bộ",
        "price": 2500000
      },
      {
        "id": "phong-ieu-hanh-noc-17",
        "name": "Phần mềm",
        "model": "",
        "unit": "Gói",
        "price": 250000000
      }
    ]
  },
  {
    "id": "giai-phap-video-doorphone",
    "name": "GIẢI PHÁP VIDEO DOORPHONE",
    "items": [
      {
        "id": "giai-phap-video-doorphone-1",
        "name": "Máy tính quản lý hệ thống",
        "model": "Mua của hãng",
        "unit": "Bộ",
        "price": 105200000
      },
      {
        "id": "giai-phap-video-doorphone-2",
        "name": "Core Switch quang 96 port",
        "model": "Mua của hãng",
        "unit": "Bộ",
        "price": 120000000
      },
      {
        "id": "giai-phap-video-doorphone-3",
        "name": "Switch Access 24 port + SFP",
        "model": "Mua của hãng",
        "unit": "Bộ",
        "price": 25000000
      },
      {
        "id": "giai-phap-video-doorphone-4",
        "name": "Switch PoE 16 port",
        "model": "Mua của hãng",
        "unit": "Bộ",
        "price": 14000000
      },
      {
        "id": "giai-phap-video-doorphone-5",
        "name": "Lobby Door Station (Camera sảnh)",
        "model": "NGLD-SCR-A0",
        "unit": "Bộ",
        "price": 22650000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 30,
            "maxQty": 100,
            "label": "5% khi từ 30-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 9.0,
            "minQty": 201,
            "label": "9% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-video-doorphone-6",
        "name": "Màn hình căn hộ",
        "model": "NGID-SCR-A0",
        "unit": "Bộ",
        "price": 16487000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 30,
            "maxQty": 100,
            "label": "5% khi từ 30-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 9.0,
            "minQty": 201,
            "label": "9% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-video-doorphone-7",
        "name": "Door Bell",
        "model": "NGDB-VDP-A0",
        "unit": "Bộ",
        "price": 3200000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 30,
            "maxQty": 100,
            "label": "5% khi từ 30-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 9.0,
            "minQty": 201,
            "label": "9% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-video-doorphone-8",
        "name": "Chi phí lắp đặt",
        "model": "",
        "unit": "Gói",
        "price": 1500000
      },
      {
        "id": "giai-phap-video-doorphone-9",
        "name": "Dây cấp nguồn",
        "model": "",
        "unit": "Mét",
        "price": 40000
      },
      {
        "id": "giai-phap-video-doorphone-10",
        "name": "Dây truyền tín hiệu",
        "model": "",
        "unit": "Mét",
        "price": 20000
      },
      {
        "id": "giai-phap-video-doorphone-11",
        "name": "Dây truyền tín hiệu",
        "model": "",
        "unit": "Mét",
        "price": 30000
      },
      {
        "id": "giai-phap-video-doorphone-12",
        "name": "Vật tư thi công",
        "model": "",
        "unit": "Gói",
        "price": 300000
      },
      {
        "id": "giai-phap-video-doorphone-13",
        "name": "Tủ điện",
        "model": "",
        "unit": "Bộ",
        "price": 2500000
      },
      {
        "id": "giai-phap-video-doorphone-14",
        "name": "Phần mềm",
        "model": "",
        "unit": "Gói",
        "price": 2600000
      }
    ]
  },
  {
    "id": "giai-phap-nha-thong-minh",
    "name": "GIẢI PHÁP NHÀ THÔNG MINH",
    "items": [
      {
        "id": "giai-phap-nha-thong-minh-1",
        "name": "Màn hình gateway 7 inch",
        "model": "NGDL-0-A7",
        "unit": "Bộ",
        "price": 12650000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 30,
            "maxQty": 100,
            "label": "5% khi từ 30-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 9.0,
            "minQty": 201,
            "label": "9% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-2",
        "name": "Màn hình gateway 4inch",
        "model": "NGDL-0-A4",
        "unit": "Bộ",
        "price": 10783000,
        "discounts": [
          {
            "percent": 10.0,
            "minQty": 1,
            "maxQty": 499,
            "label": "10% khi <500"
          },
          {
            "percent": 15.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "15% khi từ 500-1000"
          },
          {
            "percent": 20.0,
            "minQty": 1001,
            "label": "20% khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-3",
        "name": "Màn hình 10.1 inch",
        "model": "NGDL-0-A10",
        "unit": "Bộ",
        "price": 25352000,
        "discounts": [
          {
            "percent": 10.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "10% khi từ 50-100"
          },
          {
            "percent": 15.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "15% khi từ 100-500"
          },
          {
            "percent": 20.0,
            "minQty": 501,
            "label": "20% khi  >500"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-4",
        "name": "Công tắc thông minh 3 vị trí",
        "model": "NGSW-0-A3",
        "unit": "Bộ",
        "price": 642500,
        "discounts": [
          {
            "percent": 15.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "15% khi từ 50-100"
          },
          {
            "percent": 20.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "20% khi từ 100-500"
          },
          {
            "percent": 25.0,
            "minQty": 501,
            "label": "25% khi >500"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-5",
        "name": "Công tắc thông minh 4 vị trí",
        "model": "NGSW-0-A4",
        "unit": "Bộ",
        "price": 704500,
        "discounts": [
          {
            "percent": 15.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "15% khi từ 50-100"
          },
          {
            "percent": 20.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "20% khi từ 100-500"
          },
          {
            "percent": 25.0,
            "minQty": 501,
            "label": "25% khi >500"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-6",
        "name": "Bảng điều khiển nhiệt độ toàn màn hình",
        "model": "NGRT-0-E0",
        "unit": "Bộ",
        "price": 2371000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "5% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15% khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-7",
        "name": "Bảng điều khiển nhiệt độ",
        "model": "NGRT-0-E1",
        "unit": "Bộ",
        "price": 1861000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "5% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15% khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-8",
        "name": "Bộ điều khiển điều hoà thông minh",
        "model": "NGAC-0-C0",
        "unit": "Bộ",
        "price": 1746200,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 100,
            "maxQty": 500,
            "label": "5% khi từ 100-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15% khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-9",
        "name": "Bảng điều khiển rèm (ray đơn)",
        "model": "NGSP2-0-D2",
        "unit": "Bộ",
        "price": 780000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-10",
        "name": "Động cơ rèm điện thông minh kết nối không dây",
        "model": "NGICMZ-0-B1",
        "unit": "Bộ",
        "price": 2436100,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-11",
        "name": "Thanh ray rèm",
        "model": "/",
        "unit": "Bộ",
        "price": 620000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "5% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-12",
        "name": "Cảm biến thông minh phát hiện người",
        "model": "NGHBPS-0-B0",
        "unit": "Bộ",
        "price": 2547300,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 300,
            "maxQty": 500,
            "label": "5% khi từ 300-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15%  khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-13",
        "name": "Cảm biến hồng ngoại phát hiện chuyển động (con người)",
        "model": "NGHS-0-B0",
        "unit": "Bộ",
        "price": 1350000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 300,
            "maxQty": 500,
            "label": "5% khi từ 300-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15%  khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-14",
        "name": "Cảm biến nhiệt độ & độ ẩm thông minh",
        "model": "NGTHS-0-B0",
        "unit": "Bộ",
        "price": 1320000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 300,
            "maxQty": 500,
            "label": "5% khi từ 300-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15%  khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-15",
        "name": "Cảm biến khói",
        "model": "NGSS-0-B0",
        "unit": "Bộ",
        "price": 942000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 300,
            "maxQty": 500,
            "label": "5% khi từ 300-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15%  khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-16",
        "name": "Cảm biến rò rỉ khí gas",
        "model": "NGGLS-0-B0",
        "unit": "Bộ",
        "price": 1100000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 300,
            "maxQty": 500,
            "label": "5% khi từ 300-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15%  khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-17",
        "name": "Cảm biến cửa",
        "model": "NGMS-0-B0",
        "unit": "Bộ",
        "price": 657200,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 300,
            "maxQty": 500,
            "label": "5% khi từ 300-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15%  khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-18",
        "name": "Cảm biến rò rỉ nước",
        "model": "NGSQ-0-BO",
        "unit": "Bộ",
        "price": 864000,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 300,
            "maxQty": 500,
            "label": "5% khi từ 300-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15%  khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-19",
        "name": "Nút ấn cứu hộ khẩn cấp",
        "model": "NGES-0-B0",
        "unit": "Bộ",
        "price": 652400,
        "discounts": [
          {
            "percent": 5.0,
            "minQty": 300,
            "maxQty": 500,
            "label": "5% khi từ 300-500"
          },
          {
            "percent": 10.0,
            "minQty": 500,
            "maxQty": 1000,
            "label": "10% khi từ 500-1000"
          },
          {
            "percent": 15.0,
            "minQty": 1001,
            "label": "15%  khi >1000"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-20",
        "name": "Khoá thông minh nhận diện tĩnh mạch vân tay tích hợp camera",
        "model": "NGFVX7-2-B0/B1",
        "unit": "Bộ",
        "price": 7845000,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-21",
        "name": "Khoá thông minh nhận diện tĩnh mạch vân tay tích hợp camera",
        "model": "NGFV45-2-B0",
        "unit": "Bộ",
        "price": 6723500,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-22",
        "name": "Khoá thông minh nhận diện tĩnh mạch vân tay tích hợp camera",
        "model": "NGFV63-2-B0",
        "unit": "Bộ",
        "price": 6400100,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-23",
        "name": "Khoá thông minh nhận diện vân tay tích hợp camera",
        "model": "NGFP45-2-B0",
        "unit": "Bộ",
        "price": 6845000,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-24",
        "name": "Khoá thông minh nhận diện vân tay tích hợp camera",
        "model": "NGFP63-2-B0",
        "unit": "Bộ",
        "price": 6230000,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-25",
        "name": "Khoá thông minh nhận diện vân tay tích hợp camera",
        "model": "NGFP12-2-B0",
        "unit": "Bộ",
        "price": 7245000,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-26",
        "name": "Khoá thông minh nhận diện vân tay tích hợp camera",
        "model": "NGFPD8-2-B0",
        "unit": "Bộ",
        "price": 9250000,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-27",
        "name": "Khoá thông minh nhận diện vân tay tích hợp camera",
        "model": "NGFPM5-2-B0",
        "unit": "Bộ",
        "price": 7156000,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-28",
        "name": "Khoá thông minh nhận diện vân tay tích hợp camera",
        "model": "NGPV45-2-B0",
        "unit": "Bộ",
        "price": 8645000,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-29",
        "name": "Khoá vân tay tích hợp nhận diện tĩnh mạch lòng bàn tay và camera",
        "model": "NGPV63-2-B0",
        "unit": "Bộ",
        "price": 7320000,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-30",
        "name": "Khoá vân tay tích hợp nhận diện tĩnh mạch lòng bàn tay và camera",
        "model": "NGPV12-2-B0",
        "unit": "Bộ",
        "price": 9542600,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-31",
        "name": "Khoá vân tay tích hợp nhận diện tĩnh mạch lòng bàn tay và camera",
        "model": "NGPVD8-2-B0",
        "unit": "Bộ",
        "price": 10458000,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      },
      {
        "id": "giai-phap-nha-thong-minh-32",
        "name": "Khoá vân tay tích hợp nhận diện tĩnh mạch lòng bàn tay và camera",
        "model": "NGPVM5-2-B1",
        "unit": "Bộ",
        "price": 7681400,
        "discounts": [
          {
            "percent": 3.0,
            "minQty": 50,
            "maxQty": 100,
            "label": "3% khi từ 50-100"
          },
          {
            "percent": 7.0,
            "minQty": 100,
            "maxQty": 200,
            "label": "7% khi từ 100-200"
          },
          {
            "percent": 10.0,
            "minQty": 201,
            "label": "10% khi >200"
          }
        ]
      }
    ]
  }
];
