import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  fetchFail,
  getFirms,
  createFirmSuccess,
} from "../features/firmsSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useFirmsCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const firmsList = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}firms/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      //   console.log(data);
      dispatch(getFirms(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //   const register = async (userInfo) => {
  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios.post(`${BASE_URL}users/`, userInfo);
  //       // console.log("register", data);
  //       dispatch(registerSuccess(data));
  //       navigate("/stock");
  //     } catch (error) {
  //       dispatch(fetchFail());
  //     }
  //   };

  return { firmsList };
};

export default useFirmsCall;
