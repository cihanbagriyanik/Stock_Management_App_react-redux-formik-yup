import useAxios from "./useAxios";
import { useDispatch } from "react-redux";

import {
  fetchStart,
  fetchFail,
  getPurSalesSuccess,
} from "../features/homeSlice";

const useHomeCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getPurSales = async () => {
    dispatch(fetchStart());
    try {
      const [purchases, sales] = await Promise.all([
        axiosWithToken.get(`purchases/`),
        axiosWithToken.get(`sales/`),
      ]);

      dispatch(getPurSalesSuccess([purchases?.data, sales?.data]));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    getPurSales,
  };
};

export default useHomeCall;
