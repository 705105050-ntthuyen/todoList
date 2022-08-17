import "../App.css";
import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function Table(props) {
  const [valueFind, setValueFind] = useState("");
  const [valueStatus, setValueStatus] = useState("-1");
  const { data } = props;

  return (
    <>
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    value={valueFind}
                    className="form-control"
                    name="filterName"
                  />
                </td>
                <td>
                  <select
                    value={valueStatus}
                    className="form-control"
                    name="filterStatus"
                  >
                    <option value="-1">Tất Cả</option>
                    <option value="0">Ẩn</option>
                    <option value="1">Kích Hoạt</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {data.map((item, index) => {
                return <ItemTable key={index} item={item} index={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
