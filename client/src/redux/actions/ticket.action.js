import { toast } from "react-toastify";
import * as types from "../constants/ticket.constant";
import api from "../apiService";

const getTickets =
  (pageNum = 1, limit = 10, isDone) =>
  async (dispatch) => {
    dispatch({ type: types.GET_TICKETS_REQUEST, payload: null });
    try {
      let url = `/ticket?page=${pageNum}&limit=${limit}`;
      const data = await api.get(url);
      dispatch({
        type: types.GET_TICKETS_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: types.GET_TICKETS_FAILURE, payload: error });
    }
  };
const getReceivedTickets =
  (pageNum = 1, limit = 10, isDone) =>
  async (dispatch) => {
    dispatch({ type: types.GET_RECEIVED_TICKET_REQUEST, payload: null });
    try {
      let url = `/ticket?page=${pageNum}&limit=${limit}`;
      const data = await api.get(url);
      dispatch({
        type: types.GET_RECEIVED_TICKET_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: types.GET_RECEIVED_TICKET_FAILURE, payload: error });
    }
  };

const getDonationTickets =
  (pageNum = 1, limit = 10, isDone) =>
  async (dispatch) => {
    dispatch({ type: types.GET_DONATION_TICKET_REQUEST, payload: null });
    try {
      let url = `/ticket?page=${pageNum}&limit=${limit}`;
      const data = await api.get(url);
      dispatch({
        type: types.GET_DONATION_TICKET_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: types.GET_DONATION_TICKET_FAILURE, payload: error });
    }
  };
// const createTicket = (request) => async (dispatch) => {
//   dispatch({ type: types.CREATE_TICKETS_REQUEST, payload: null });
//   try {
//     let url = ``;

//     const data = await api.create(url, request);
//     dispatch({
//       type: types.CREATE_TICKETS_SUCCESS,
//       payload: data.data.tickets,
//     });
//   } catch (error) {
//     toast.error(error.message);
//     dispatch({ type: types.CREATE_TICKETS_FAILURE, payload: error });
//   }
// };

// const updateTicket = (request) => async (dispatch) => {
//   dispatch({ type: types.UPDATE_TICKETS_REQUEST, payload: null });
//   try {
//     let url = ``;

//     const data = await api.create(url, request);
//     dispatch({
//       type: types.UPDATE_TICKETS_SUCCESS,
//       payload: data.data.tickets,
//     });
//   } catch (error) {
//     toast.error(error.message);
//     dispatch({ type: types.UPDATE_TICKETS_FAILURE, payload: error });
//   }
// };

const ticketActions = { getTickets, getReceivedTickets, getDonationTickets };
export default ticketActions;
