import React from "react";

import { Box, Typography, Button } from "@mui/material";

import { useEffect } from "react";
import { useState } from "react";
import SalesModal from "../components/sales/SalesModal";
import SalesTable from "../components/sales/SalesTable";

import useSalesCall from "../hooks/useSalesCall";

const initialState = {
  brandId: "",
  productId: "",
  quantity: "",
  price: "",
};

const Sales = () => {
  const { salesList } = useSalesCall();

  const [info, setInfo] = useState(initialState);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  useEffect(() => {
    salesList();
  }, []);

  return (
    <Box>
      <Typography variant="h4" component="h1" color="error">
        Sales
      </Typography>

      <Button variant="contained" sx={{ mt: 3 }} onClick={handleOpen}>
        New Sale
      </Button>

      <SalesModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <SalesTable setOpen={setOpen} setInfo={setInfo} />
    </Box>
  );
};

export default Sales;
