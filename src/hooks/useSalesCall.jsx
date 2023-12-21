import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getSales } from "../features/salesSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useSalesCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  const salesList = async () => {
    dispatch(fetchStart());
    try {
      const [brands, sales, products] = await Promise.all([
        axiosWithToken(`brands/`),
        axiosWithToken(`sales/`),
        axiosWithToken(`products/`),
      ]);
      dispatch(
        getSales([brands?.data?.data, sales?.data?.data, products?.data?.data])
      );
      // console.log(brands, sales, products);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createSales = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}/`, body);
      salesList(url);
      toastSuccessNotify("New Sales created");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "New Sales could not created"
      );
    }
  };

  const updateSales = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${body._id}`, body);
      salesList(url);
      toastSuccessNotify("Sale updated");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Sale could not update"
      );
    }
  };

  const removeSales = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      salesList(url);
      toastSuccessNotify("Sale removed");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Sale could not remove"
      );
    }
  };

  return {
    createSales,
    updateSales,
    removeSales,
    salesList,
  };
};

export default useSalesCall;
