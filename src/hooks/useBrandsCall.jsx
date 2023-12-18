import { useDispatch, useSelector } from "react-redux";
import { fetchStart, fetchFail, getBrands } from "../features/brandsSlice";
import axios from "axios";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useBrandsCall = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const brandsList = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}brands/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(getBrands(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { brandsList };
};

export default useBrandsCall;
