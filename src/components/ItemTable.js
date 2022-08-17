import "../App.css";

function ItemTable(props) {
  const { item, index } = props;

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">
          <span
            className={
              item.status
                ? "btn btn-primary text-light py-1 px-3"
                : "btn btn-danger text-light py-1 px-3"
            }
          >
            {item.status ? "Kích Hoạt" : "Ẩn"}
          </span>
        </td>

        <td className="text-center">
          <button type="button" className="btn btn-warning">
            <span className="fa fa-pencil mr-2"></span>Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
            <span className="fa fa-trash mr-2"></span>Xóa
          </button>
        </td>
      </tr>
    </>
  );
}

export default ItemTable;
