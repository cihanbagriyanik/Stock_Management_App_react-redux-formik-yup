import React from "react";

import { Box, Button, Typography } from "@mui/material";
import FirmsModal from "../components/firms/FirmsModal";
import FirmsCard from "../components/firms/FirmsCard";

const Firms = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" component="h1" color="error">
          Firms
        </Typography>
      </Box>
      <Box>
        <Button variant="contained" sx={{ margin: "1.5rem 0" }}>
          New Firm
        </Button>
        <FirmsModal />
      </Box>

      <Box>
        <FirmsCard />
      </Box>
    </>
  );
};

export default Firms;
