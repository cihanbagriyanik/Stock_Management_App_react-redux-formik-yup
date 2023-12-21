import * as React from "react";

import { Box, Typography, Button } from "@mui/material";

import { useEffect } from "react";
import { useState } from "react";
import CategorieModal from "../components/categories/CategorieModal";
import CategorieTable from "../components/categories/CategorieTable";

import useCategoriesCall from "../hooks/useCategoriesCall";

const initialState = {
  categoryId: "",
  name: "",
};

const Categories = () => {
  const { categoriesList } = useCategoriesCall();

  const [info, setInfo] = useState(initialState);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  useEffect(() => {
    categoriesList();
  }, []);
 

  return (
    <Box maxWidth={"xl"}>
      <Typography variant="h4" component="h1" color="error">
        Categories
      </Typography>

      <Button variant="contained" sx={{ mt: 3 }} onClick={handleOpen}>
        New Categorie
      </Button>

      <CategorieModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <CategorieTable setOpen={setOpen} info={info} setInfo={setInfo} />
    </Box>
  );
};

export default Categories;
