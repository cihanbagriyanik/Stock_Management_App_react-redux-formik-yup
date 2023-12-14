import React from "react";

import { Box, Button, Typography } from "@mui/material";
import FirmsModal from "../components/firms/FirmsModal";
import FirmsCard from "../components/firms/FirmsCard";
import { useState } from "react";

const Firms = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1" color="error">
          Firms
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ margin: "1.5rem 0" }}
          onClick={handleOpen}
        >
          New Firm
        </Button>
        <FirmsModal open={open} handleClose={handleClose} />
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
        <FirmsCard />
      </Box>
    </>
  );
};

export default Firms;
