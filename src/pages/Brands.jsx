import { Box, Button, Typography } from "@mui/material";
import BrandsModal from "../components/brands/BrandsModal";
import BrandsCard from "../components/brands/BrandsCard";
import { useState } from "react";

const initialState = {
  name: "",
  image: "",
};

const Brands = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  const [info, setInfo] = useState(initialState);

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
        <BrandsModal
          open={open}
          handleClose={handleClose}
          info={info}
          setInfo={setInfo}
        />
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
        <BrandsCard handleOpen={handleOpen} setInfo={setInfo} />
      </Box>
    </>
  );
};

export default Brands;
