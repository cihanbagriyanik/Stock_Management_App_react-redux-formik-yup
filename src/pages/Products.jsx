import * as React from "react";
import { Box, Typography } from "@mui/material";

import { useEffect } from "react";
import useProductsCall from "../hooks/useProductsCall";
import { useSelector } from "react-redux";

// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { useDemoData } from "@mui/x-data-grid-generator";

// const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

const Products = () => {
  // const { data } = useDemoData({
  //   dataSet: "Employee",
  //   visibleFields: VISIBLE_FIELDS,
  //   rowLength: 100,
  // });

  const { productsList } = useProductsCall();
  const { products } = useSelector((state) => state?.products);

  useEffect(() => {
    productsList("products");
  }, []);
  console.log(products);

  return (
    <Box>
      <Typography variant="h4" component="h1" color="error">
        Products
      </Typography>
    </Box>

    // <div style={{ height: 400, width: "100%" }}>
    //   {/* <DataGrid {...data} slots={{ toolbar: GridToolbar }} /> */}
    // </div>
  );
};

export default Products;
