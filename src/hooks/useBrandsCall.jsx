import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getBrands } from "../features/brandsSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useBrandsCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  const brandsList = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}/`);
      dispatch(getBrands({ data: data.data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createBrand = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}/`, body);
      brandsList(url);
      toastSuccessNotify("New Brand created");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("New Brand could not created");
    }
  };

  const updateBrand = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${body.id}`, body);
      brandsList(url);
      toastSuccessNotify("New Brand updated");
    } catch (error) {
      dispatch(fetchFail());
      toastSuccessNotify("New Brand could not updated");
    }
  };

  const removeBrand = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      brandsList(url);
      toastSuccessNotify("Brand removed");
    } catch (error) {
      dispatch(fetchFail());
      toastSuccessNotify("Brand could not remove");
    }
  };

  return { brandsList, createBrand, updateBrand, removeBrand };
};

export default useBrandsCall;
