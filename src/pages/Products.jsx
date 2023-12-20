import * as React from "react";
import { Button, Container, Typography } from "@mui/material";

import { useEffect } from "react";
import useProductsCall from "../hooks/useProductsCall";
import ProductModal from "../components/products/ProductsModal";
import ProductTable from "../components/products/ProductsTable";
import { useState } from "react";

const initialState = {
  categoryId: "",
  brandId: "",
  name: "",
};

const Products = () => {
  const { productsList } = useProductsCall();

  const [info, setInfo] = useState(initialState);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  useEffect(() => {
    productsList();
  }, []);
  // console.log(products);

  return (
    <Container maxWidth={"xl"}>
      <Typography variant="h4" component="h1" color="error">
        Products
      </Typography>

      <Button variant="contained" sx={{ mt: 3 }} onClick={handleOpen}>
        New Products
      </Button>

      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <ProductTable />
    </Container>
  );
};

export default Products;
