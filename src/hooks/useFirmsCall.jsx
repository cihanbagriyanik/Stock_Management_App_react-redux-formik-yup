import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getFirms } from "../features/firmsSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useFirmsCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  const firmsList = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}/`);
      dispatch(getFirms({ data: data.data, url }));
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
      toastErrorNotify(
        error?.response?.data?.message || "New Firm could not create"
      );
    }
  };

  const updateFirm = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${body.id}`, body);
      firmsList(url);
      toastSuccessNotify("Firm updated");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Firm could not update"
      );
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
      toastErrorNotify(
        error?.response?.data?.message || "Firm could not remove"
      );
    }
  };

  return { firmsList, createFirm, updateFirm, removeFirm };
};

export default useFirmsCall;
