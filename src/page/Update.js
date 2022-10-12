function Update() {
  const location = [
    { id: "TPHCM", name: "Thành Phố Hồ Chí Minh" },
    { id: "CANTHO", name: "Cần Thơ" },
    { id: "HANOI", name: "Hà Nội" },
    { id: "DANANG", name: "Đà Nẵng" },
    { id: "VINHLONG", name: "Vĩnh Long" },
  ];
  return (
    <div id="update">
      <h1 className="header-text">Cập Nhật Giá Vàng</h1>
      <div className="information_box">
        <h4 className="icontent">Tên nhân viên: XXX</h4>
        <h4 className="icontent">
          Khu vực:
          <select id="location">
            {location.map((loc) => (
              <option value={loc.id}>{loc.name}</option>
            ))}
          </select>
        </h4>
        <h4 className="icontent">
          Ngày cập nhật: <input type="date"></input>
        </h4>
        <button>Tìm</button>
      </div>
      <table id="table">
        <tr>
          <td className="title" colSpan="4">
            Bảng Cập Nhật Giá Vàng
          </td>
        </tr>
        <tr>
          <td>STT</td>
          <td>Loại vàng</td>
          <td>Giá mua vào</td>
          <td>Giá bán ra</td>
        </tr>
        <tr>
          <td>1</td>
          <td>SJC</td>
          <td>
            <input
              className="sellprice"
              placeholder="Giá mua"
              value="123"
            ></input>
          </td>
          <td>
            <input
              className="buyprice"
              placeholder="Giá bán"
              value="123"
            ></input>
          </td>
        </tr>

        <button>Lưu</button>
      </table>
    </div>
  );
}

export default Update;
