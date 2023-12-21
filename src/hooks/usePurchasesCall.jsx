import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getPurchases } from "../features/authSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const usePurchasesCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  const purchasesList = async () => {
    dispatch(fetchStart());
    try {
      const [purchases, brands, sales, products] = await Promise.all([
        axiosWithToken("purchases/"),
        axiosWithToken(`brands/`),
        axiosWithToken(`sales/`),
        axiosWithToken(`products/`),
      ]);
      dispatch(
        getPurchases([
          purchases?.data?.data,
          brands?.data?.data,
          sales?.data?.data,
          products?.data?.data,
        ])
      );
      
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createPurchases = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}/`, body);
      purchasesList(url);
      toastSuccessNotify("New Purchases created");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "New Purchases could not created"
      );
    }
  };

  const updatePurchases = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${body._id}`, body);
      purchasesList(url);
      toastSuccessNotify("New Purchases updated");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "New Purchases could not updated"
      );
    }
  };

  const removePurchases = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      purchasesList(url);
      toastSuccessNotify("Purchases removed");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Purchases could not remove"
      );
    }
  };

  return {
    createPurchases,
    updatePurchases,
    removePurchases,
    purchasesList,
  };
};

export default usePurchasesCall;
