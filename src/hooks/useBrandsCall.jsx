import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  fetchFail,
  getBrands,
  createBrandSuccess,
} from "../features/brandsSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useBrandsCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const brandsList = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}brands/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      //   console.log(data);
      dispatch(getBrands(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

    // const register = async (userInfo) => {
    //   dispatch(fetchStart());
    //   try {
    //     const { data } = await axios.post(`${BASE_URL}users/`, userInfo);
    //     // console.log("register", data);
    //     dispatch(registerSuccess(data));
    //     navigate("/stock");
    //   } catch (error) {
    //     dispatch(fetchFail());
    //   }
    // };

  return { brandsList };
};

export default useBrandsCall;
