import React from "react";

import { Box, Typography } from "@mui/material";

const Home = () => {
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
    </Box>
  );
};

export default Home;