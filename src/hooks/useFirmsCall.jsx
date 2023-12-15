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

  const register = async (firmsInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}firms/`, firmsInfo);
      // console.log("register", data);
      dispatch(createFirmSuccess(data));
      toastSuccessNotify("New Firm created");
      navigate("/firms");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("New Firm could not created");
    }
  };

  return { firmsList, register };
};

export default useFirmsCall;
