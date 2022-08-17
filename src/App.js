import "./App.css";
import Form from "./components/Form";
import Find from "./components/Find";
import Sort from "./components/Sort";
import Table from "./components/Table";
import { useState } from "react";
function App() {
  const defaultValue = JSON.parse(localStorage.getItem("data"));
  const [show, setShow] = useState(false);
  const [data, setData] = useState(defaultValue || []);

  function handleShowForm(value) {
    setShow(value);
  }

  function handleData(newData, type) {
    //6 hứng data từ form
    //7 set lại data mới
    setData([...data, newData]);
    if (type) {
      const newDataResult = [];
      data.forEach((item) => {
        if (item.id !== newData.id) newDataResult.push(item);
        else {
          newDataResult.push(newData);
        }
      });
      setData(newDataResult);
      localStorage.setItem("data", JSON.stringify(newDataResult));
    } else {
      setData([...data, newData]);
      localStorage.setItem("data", JSON.stringify([...data, newData]));
    }
  }

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1 className="head">Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={show ? "col-4" : "d-none"}>
            <Form
              handleShowForm={handleShowForm}
              // addData={addData}
              handleData={handleData}
            />
          </div>
          <div className={show ? "col-8" : "col-12"}>
            <button
              onClick={() => handleShowForm(true)}
              // onClick={handleShowForm}
              type="button"
              className="btn btn-primary"
            >
              <span className="fa fa-plus mr-2"></span>Thêm Công Việc
            </button>
            <div className="row mt-15">
              <Find />
              <Sort />
            </div>
            <Table data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
