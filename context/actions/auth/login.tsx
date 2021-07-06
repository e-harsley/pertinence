import React from 'react'
import axiosInstance from "../../../helpers/axiosInstance";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../../../constants/actionTypes";
import { ToastProvider, useToasts } from 'react-toast-notifications';



export const login = ({ email, password }) => (dispatch) => {
    const { addToast } = useToasts();
  dispatch({
    type: LOGIN_LOADING,
  });
  console.log('payload >>', email, password);
  
  axiosInstance()
    .post("/auth/login", {
        email, password
    })
    .then((res) => {
      localStorage.token = res.data.token;
      console.log(res.data.results.token);
      
      addToast("hekek", { appearance: 'error' });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
      
    });
};