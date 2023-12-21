import React from "react";

import { Box, Typography } from "@mui/material";

import { useEffect } from "react";
import useStockCall from "../hooks/useHomeCall";

import KpiCards from "../components/home/KpiCards";
import Charts from "../components/home/Charts";

const Home = () => {
  const { getPurSales } = useStockCall();

  useEffect(() => {
    getPurSales();
  }, []);

  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        color="error"
        sx={{ textAlign: "center" }}
      >
        Dashboard
      </Typography>

      <KpiCards />

      <Charts />
    </Box>
  );
};

export default Home;
