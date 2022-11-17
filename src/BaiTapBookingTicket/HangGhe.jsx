import React, { Component } from "react";
import { connect } from "react-redux";
import Ghe from "./Ghe";

class HangGhe extends Component {
  render() {
    const { chairList } = this.props;
    return (
      <div className="d-flex flex-column gap-3 align-items-center ">
        {chairList.map((item, soHang) => {
          return (
            <div key={soHang} className="d-flex">
              <div className="firstChar">{item.hang}</div>
              <div className="d-flex gap-3 justify-content-center align-items-center">
                {item.danhSachGhe.map((item) => {
                  if (soHang === 0) {
                    return (
                      <span key={item.soGhe} className="rowNumber">
                        {item.soGhe}
                      </span>
                    );
                  }
                  return <Ghe key={item.soGhe} ghe={item}></Ghe>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairList: state.BookingTicket.danhSachGhe,
  };
};

export default connect(mapStateToProps)(HangGhe);

// renderHangGhe = () => {
//   const { chairList } = this.props;
//   return chairList.map((hangGhe, soHangGhe) => {
//     return (
//       <Fragment key={soHangGhe}>
//         <div className="text-light text-start mt-2 ms-5 ">
//           {hangGhe.hang}

//           {hangGhe.danhSachGhe.map((ghe, index) => {
//             if (soHangGhe === 0) {
//               return <span className="rowNumber ms-5">{ghe.soGhe}</span>;
//             }
//             let cssGheDaDat = "";
//             let disabled = false;
//             if (ghe.daDat) {
//               cssGheDaDat = "gheDuocChon";
//               disabled = true;
//             }
//             return (
//               <button
//                 key={index}
//                 onClick={() => {
//                   alert(1);
//                 }}
//                 disabled={disabled}
//                 className={`ghe ${cssGheDaDat}`}
//               >
//                 {ghe.soGhe}
//               </button>
//             );
//           })}
//         </div>
//       </Fragment>
//     );
//   });
// };
