import { useDispatch } from "react-redux";
import {
  fetchStart,
  fetchFail,
  getCategories,
} from "../features/categoriesSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useCategoriesCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  const categoriesList = async () => {
    dispatch(fetchStart());
    try {
      const [
        // products,
        // brands,
        categories,
      ] = await Promise.all([
        // axiosWithToken(`products`),
        // axiosWithToken(`brands`),
        axiosWithToken(`categories`),
      ]);
      dispatch(
        getCategories([
          //   products?.data?.data,
          //   brands?.data?.data,
          categories?.data?.data,
        ])
      );
      // console.log(products, brands, categories);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createCategories = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}/`, body);
      categoriesList(url);
      toastSuccessNotify("New Categories created");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "New Categories could not create"
      );
    }
  };

  const updateCategories = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${body.id}`, body);
      categoriesList(url);
      toastSuccessNotify("Categories updated");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Categories could not update"
      );
    }
  };

  const removeCategories = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      categoriesList(url);
      toastSuccessNotify("Categories removed");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Categories could not remove"
      );
    }
  };

  return {
    createCategories,
    updateCategories,
    removeCategories,
    categoriesList,
  };
};

export default useCategoriesCall;
