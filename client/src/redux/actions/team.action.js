import { toast } from "react-toastify";
import * as types from "../constants/ticket.constant";
import api from "../../apiService";

const getTeam = (storeID) => async (dispatch) => {
  dispatch({ type: types.GET_REQUESTS_REQUEST, payload: null });
  try {
    let url = ``;
    const data = await api.get(url);
    dispatch({
      type: types.GET_TEAM_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_REQUESTS_FAILURE, payload: error });
  }
};

const teamActions = { getTeam };
export default teamActions;
