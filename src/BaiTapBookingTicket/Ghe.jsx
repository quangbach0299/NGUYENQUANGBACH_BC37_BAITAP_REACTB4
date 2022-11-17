import clsx from "clsx";
import React, { Component } from "react";
import { connect } from "react-redux";

class Ghe extends Component {
  render() {
    const { ghe } = this.props;
    return (
      <button
        className={clsx("ghe", {
          gheDuocChon: ghe.daDat,
          gheDangChon: this.props.chairSelected.find(
            (ele) => ele.soGhe === ghe.soGhe
          ),
        })}
        disabled={ghe.daDat}
        onClick={() => {
          this.props.handleChair(ghe);
        }}
      >
        {ghe.soGhe}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairSelected: state.BookingTicket.chairSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChair: (ghe) => {
      const action = {
        type: "DAT_GHE",
        gheDuocChon: ghe,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ghe);
