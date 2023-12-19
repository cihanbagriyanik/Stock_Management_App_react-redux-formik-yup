import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getProducts } from "../features/productsSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useProductsCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  const productsList = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}/`);
      dispatch(getProducts({ data: data.data }));
    //   console.log(data);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createProduct = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}/`, body);
      productsList(url);
      toastSuccessNotify("New Product created");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("New Product could not created");
    }
  };

  const updateProduct = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${body.id}`, body);
      productsList(url);
      toastSuccessNotify("New Product updated");
    } catch (error) {
      dispatch(fetchFail());
      toastSuccessNotify("New Product could not updated");
    }
  };

  const removeProduct = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      productsList(url);
      toastSuccessNotify("Product removed");
    } catch (error) {
      dispatch(fetchFail());
      toastSuccessNotify("Product could not remove");
    }
  };

  return { productsList, createProduct, updateProduct, removeProduct };
};

export default useProductsCall;
