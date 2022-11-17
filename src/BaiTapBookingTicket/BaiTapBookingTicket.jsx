import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";

class BaiTapBookingTicket extends Component {
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./bookingTicket/bgmovie.jpg)",
          // backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div className="mt-5 text-light" style={{ fontSize: "25px" }}>
                  Màn Hình
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                  className="mt-1"
                >
                  <div className="screen"></div>
                </div>
                <HangGhe></HangGhe>
              </div>
              <div className="col-4">
                <div className="text-light mt-2" style={{ fontSize: "35px" }}>
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe></ThongTinDatGhe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTapBookingTicket;
