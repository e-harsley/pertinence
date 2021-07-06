import axiosInstance from "../../../helpers/axiosInstance";
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../../../constants/actionTypes";

export const register = ({
    first_name,
    last_name,
    email,
    password,
    phone,
    referrer
}) => (dispatch) => {
  dispatch({
    type: REGISTER_LOADING,
  });

  axiosInstance()
    .post("/auth/registration", {
        first_name,
        last_name,
        email,
        password,
        phone,
        referrer
    })
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    });
};