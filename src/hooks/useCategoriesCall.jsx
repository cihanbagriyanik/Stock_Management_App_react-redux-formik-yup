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
      const [categories] = await Promise.all([axiosWithToken(`categories`)]);
      dispatch(getCategories([categories?.data?.data]));
      // console.log(categories);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createCategories = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}/`, body);
      categoriesList(url);
      toastSuccessNotify("New Categorie created");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "New Categorie could not create"
      );
    }
  };

  const updateCategories = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${body.id}`, body);
      categoriesList(url);
      toastSuccessNotify("Categorie updated");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Categorie could not update"
      );
    }
  };

  const removeCategories = async (url, id) => {
    dispatch(fetchStart());
    // console.log(id);
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      categoriesList(url);
      toastSuccessNotify("Categorie removed");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Categorie could not remove"
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
