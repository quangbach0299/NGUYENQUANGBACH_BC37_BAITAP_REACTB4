import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinDatGhe extends Component {
  render() {
    const { chairSelected } = this.props;
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon "></button>
          <span style={{ fontSize: "15px" }} className="text-light">
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon "></button>
          <span style={{ fontSize: "15px" }} className="text-light">
            Ghế đang đặt
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}></button>
          <span style={{ fontSize: "15px" }} className="text-light">
            Ghế chưa đặt
          </span>
        </div>

        <div className="mt-5">
          <table style={{ border: "2px solid white" }} className="table ">
            <thead>
              <tr className="text-light" style={{ fontSize: "25px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {chairSelected.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.handleDel(item.soGhe);
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Tổng tiền</td>
                <td colSpan={2}>{this.props.tongTien}</td>
              </tr>
            </tfoot>
          </table>
          <button
            onClick={() => {
              this.props.handlePay();
            }}
          >
            Tính Tiền
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairSelected: state.BookingTicket.chairSelected,
    tongTien: state.BookingTicket.tongTien,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDel: (soGhe) => {
      const action = {
        type: "HUY_GHE",
        removeChair: soGhe,
      };
      dispatch(action);
    },
    handlePay: () => {
      const action = {
        type: "TINH_TIEN",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
