import React from "react";

import { Box, Button, Typography } from "@mui/material";
import BrandsCard from "../components/brands/BrandsCard";
import BrandsModal from "../components/brands/BrandsModal";
import { useState } from "react";

const Brands = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1" color="error">
          Brands
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ margin: "1.5rem 0" }}
          onClick={handleOpen}
        >
          New Brand
        </Button>
        <BrandsModal open={open} handleClose={handleClose} />
      </Box>

      <Box
        sx={{
          gap: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <BrandsCard />
      </Box>
    </>
  );
};

export default Brands;
