import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getProducts } from "../features/productsSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useProductsCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  const productsList = async () => {
    dispatch(fetchStart());
    try {
      const [products, brands, categories] = await Promise.all([
        axiosWithToken(`products`),
        axiosWithToken(`brands`),
        axiosWithToken(`categories`),
      ]);
      dispatch(
        getProducts([
          products?.data?.data,
          brands?.data?.data,
          categories?.data?.data,
        ])
      );
      // console.log(products, brands, categories);
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
      toastErrorNotify(
        error?.response?.data?.message || "New Product could not create"
      );
    }
  };

  const updateProduct = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${body.id}`, body);
      productsList(url);
      toastSuccessNotify("Product updated");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Product could not update"
      );
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
      toastErrorNotify(
        error?.response?.data?.message || "Product could not remove"
      );
    }
  };

  return {
    createProduct,
    updateProduct,
    removeProduct,
    productsList,
  };
};

export default useProductsCall;
