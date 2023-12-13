import React from "react";

import { Box, Button, Typography } from "@mui/material";
import BrandsCard from "../components/brands/BrandsCard";
import BrandsModal from "../components/brands/BrandsModal";

const Brands = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" component="h1" color="error">
          Brands
        </Typography>
      </Box>
      <Box>
        <Button variant="contained" sx={{ margin: "1.5rem 0" }}>
          New Brand
        </Button>
        <BrandsModal />
      </Box>

      <Box>
        <BrandsCard />
      </Box>
    </>
  );
};

export default Brands;
