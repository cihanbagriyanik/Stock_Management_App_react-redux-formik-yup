import React from "react";

import { Box, Typography, Button } from "@mui/material";

import { useEffect } from "react";
import { useState } from "react";
import PurchasesModal from "../components/purchases/PurchasesModal";
import PurchasesTable from "../components/purchases/PurchasesTable";

import usePurchasesCall from "../hooks/usePurchasesCall";

const initialState = {
  firmId: "",
  brandId: "",
  productId: "",
  quantity: "",
  price: "",
};

const Purchases = () => {
  const { purchasesList } = usePurchasesCall();

  const [info, setInfo] = useState(initialState);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  useEffect(() => {
    purchasesList();
  }, []);

  return (
    <Box>
      <Typography variant="h4" component="h1" color="error">
        Purchases
      </Typography>

      <Button variant="contained" sx={{ mt: 3 }} onClick={handleOpen}>
        New Sale
      </Button>

      <PurchasesModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <PurchasesTable setOpen={setOpen} setInfo={setInfo} />
    </Box>
  );
};

export default Purchases;
