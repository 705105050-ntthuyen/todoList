import { useRef, useEffect } from "react";
import "../App.css";
import { makeId } from "../util";
function Form(props) {
  const { handleShowForm, handleData, isEdit } = props;

  const name = useRef();
  const status = useRef();

  function closedForm() {
    handleShowForm(false);
  }
  function clearForm() {
    // set value mặc định
    name.current.value = "";
    status.current.value = 1;
    handleShowForm(false);
    // closedForm();
  }
  function handleSubmit(event) {
    //1 chặn load lại form
    event.preventDefault();

    if (name.current.value !== "") {
      //4 tạo item mới
      const newData = {
        id: makeId(),
        name: name.current.value,
        status: status.current.value === "1" ? true : false,
      };

      //5 truyền lên app

      handleData(newData);

      // clear data
      clearForm();
    }
  }
  return (
    <>
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="px-3 panel-title">
            {isEdit === false ? "Thêm công việc" : "Cập nhật công việc"}
            <span
              onClick={closedForm}
              className="fa fa-times-circle text-right hoverX"
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form className="p-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                <b>Tên :</b>
              </label>
              <input
                ref={name}
                type="text"
                className="form-control"
                name="name"
              />
            </div>
            <label>
              <b>Trạng Thái :</b>
            </label>
            <select ref={status} className="form-control" name="status">
              <option value={1}>Kích Hoạt</option>
              <option value={0}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span className="fa fa-plus mr-2"></span>Lưu Lại
              </button>
              &nbsp;
              <button
                onClick={clearForm}
                type="button"
                className="btn btn-danger"
              >
                <span className="fa fa-close mr-2"></span>Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
