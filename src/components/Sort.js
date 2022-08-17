// /* eslint-disable jsx-a11y/anchor-is-valid */
// import "../App.css";

// function Sort(props) {
//   const { setValueSort } = props;
//   const setValueSortItem = (e) => {
//     setValueSort(e.target.value);
//   };

//   return (
//     <>
//       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
//         <div className="dropdown">
//           <button
//             className="btn btn-primary "
//             type="button"
//             id="dropdownMenu1"
//             data-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="true"
//           >
//             Sắp Xếp <span className="fa fa-caret-square-o-down ml-2"></span>
//           </button>
//           <ul
//             value="sortAlphaAsc"
//             className="dropdown-menu"
//             aria-labelledby="dropdownMenu1"
//           >
//             <li>
//               <a
//                 value="sortAlphaAsc"
//                 onClick={(e) => setValueSortItem(e)}
//                 href=""
//                 role="button"
//                 className="sort_selected"
//               >
//                 <span className="fa fa-sort-alpha-asc ">Tên A-Z</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 value="sortAlphaDesc"
//                 onClick={(e) => setValueSortItem(e)}
//                 role="button"
//                 className=""
//               >
//                 <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
//               </a>
//             </li>
//             <li role="separator" className="divider"></li>
//             <hr className="mt-3 mb-3" />
//             <li>
//               <a
//                 value="sortStatusActive"
//                 onClick={(e) => setValueSortItem(e)}
//                 role="button"
//                 className=""
//               >
//                 Trạng Thái Kích Hoạt
//               </a>
//             </li>
//             <li>
//               <a
//                 value="sortStatusHidden"
//                 onClick={(e) => setValueSortItem(e)}
//                 role="button"
//                 className=""
//               >
//                 Trạng Thái Ẩn
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Sort;

import "../App.css";
// import { useEffect } from "react";

function Sort(props) {
  return (
    <>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-2 "></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <button
                value="sortAlphaAsc"
                className="w-100 sort_selected bg-white text-dark btn btn-success"
              >
                <span className="fa fa-sort-alpha-asc pr-2 "></span>
                Tên A-Z
              </button>
            </li>
            <li>
              <button
                value="sortAlphaDesc"
                className="w-100 sort_selected bg-white text-dark btn btn-info"
              >
                <span className="fa fa-sort-alpha-desc pr-2"></span>
                Tên Z-A
              </button>
            </li>
            <li role="separator" className="divider"></li>
            <hr className="mt-3 mb-3" />
            <li>
              <button
                value="sortStatusActive"
                className="w-100 bg-white text-dark btn btn-primary"
              >
                Trạng Thái Kích Hoạt
              </button>
            </li>
            <li>
              <button
                value="sortStatusHidden"
                className=" sort_selected w-100 bg-white text-dark btn btn-danger"
              >
                Trạng Thái Ẩn
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sort;
