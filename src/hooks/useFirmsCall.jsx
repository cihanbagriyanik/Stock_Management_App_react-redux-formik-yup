import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getFirms } from "../features/firmsSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useFirmsCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  const firmsList = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${BASE_URL}firms/`);
      dispatch(getFirms(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createFirm = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}/`, body);
      firmsList(url);
      toastSuccessNotify("New Firm created");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("New Firm could not created");
    }
  };

  const updateFirm = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${body.id}`, body);
      firmsList(url);
      toastSuccessNotify("New Firm updated");
    } catch (error) {
      dispatch(fetchFail());
      toastSuccessNotify("New Firm could not updated");
    }
  };

  const removeFirm = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      firmsList(url);
      toastSuccessNotify("Firm removed");
    } catch (error) {
      dispatch(fetchFail());
      toastSuccessNotify("Firm could not remove");
    }
  };

  return { firmsList, createFirm, updateFirm, removeFirm };
};

export default useFirmsCall;