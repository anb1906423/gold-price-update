function Update() {
    return (
        <div id="update">
            <h1 className="header-text">Cập Nhật Giá Vàng</h1>
            <div className="information_box">
                <h4 className="icontent">Tên nhân viên: XXX</h4>
                <h4 className="icontent">
                    Khu vực:
                    <select id="location">
                        <option value="TPHCM">Thành Phố Hồ Chí Minh</option>
                        <option value="CANTHO">Cần Thơ</option>
                        <option value="HANOI">Hà Nội</option>
                        <option value="DANANG">Đà Nẵng</option>
                        <option value="VINHLONG">Vĩnh Long</option>
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
                        <input class="sellprice" placeholder="Giá mua" value="123"></input>
                    </td>
                    <td>
                        <input class="buyprice" placeholder="Giá bán" value="123"></input>
                    </td>
                </tr>

                <button>Lưu</button>
            </table>
        </div>
    );
}

export default Update;
