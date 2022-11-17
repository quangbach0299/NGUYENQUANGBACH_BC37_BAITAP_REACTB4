import { combineReducers } from "redux";
import { BaiTapBookingTicket } from "./BaiTapBookingReducer";

export const rootReducer = combineReducers({
  BookingTicket: BaiTapBookingTicket,
});
