import * as types from "../constants/ticket.constant";

const initialState = {
  tickets: [],
  receivedTicket: [],
  donationTicket: [],
  totalPageNum: 1,
  selectedTicket: null,
  loading: false,
};

const ticketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TICKETS_REQUEST:
    case types.GET_RECEIVED_TICKET_REQUEST:
    case types.GET_DONATION_TICKET_REQUEST:
    case types.GET_SINGLE_TICKET_REQUEST:
      return { ...state, loading: true };

    case types.GET_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: payload,
        totalPageNum: payload.totalPages,
        loading: false,
      };
    case types.GET_RECEIVED_TICKET_SUCCESS:
      return {
        ...state,
        receivedTicket: payload,
        totalPageNum: payload.totalPages,
        loading: false,
      };
    case types.GET_DONATION_TICKET_SUCCESS:
      return {
        ...state,
        donationTicket: payload,
        totalPageNum: payload.totalPages,
        loading: false,
      };
    case types.GET_SINGLE_TICKET_REQUEST_SUCCESS:
      return {
        ...state,
        selectedTicket: payload,
        loading: false,
      };

    case types.GET_TICKETS_FAILURE:
    case types.GET_SINGLE_TICKET_REQUEST_FAILURE:
    case types.GET_RECEIVED_TICKET_FAILURE:
    case types.GET_DONATION_TICKET_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default ticketReducer;
