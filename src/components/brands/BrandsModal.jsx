import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BrandsModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              id="outlined"
              label="Brand Name"
              type="text"
              required
              sx={{ width: "100%", marginBottom: "1rem" }}
            />
            <TextField
              id="outlined"
              label="Image Url"
              type="text"
              required
              sx={{ width: "100%", marginBottom: "1rem" }}
            />
          </Box>
          <Box>
            <Button variant="contained" fullWidth>
              Submit Brand
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default BrandsModal;
