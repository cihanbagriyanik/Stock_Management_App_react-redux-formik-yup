import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import LoginMid from "../pages/LoginMid";
// import RegisterMid from "../pages/RegisterMid";
import Login from "../pages/Login";
import Register from "../pages/Register";

import PrivateRouter from "./PrivateRouter";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Firms from "../pages/Firms";
import Brands from "../pages/Brands";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* middlewareli fonksiyonların olduğu sayfalar */}
        {/* <Route path="/" element={<LoginMid />} />
        <Route path="register" element={<RegisterMid />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="sales" element={<Sales />} />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="firms" element={<Firms />} />
            <Route path="brands" element={<Brands />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
