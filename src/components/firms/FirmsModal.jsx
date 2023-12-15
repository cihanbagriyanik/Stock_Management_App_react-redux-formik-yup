import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";

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

const FirmsModal = ({ open, handleClose }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        address: "",
        image: "",
      }}
    >
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
              label="Firm Name"
              type="text"
              required
              sx={{ width: "100%", marginBottom: "1rem" }}
            />
            <TextField
              id="outlined"
              label="Address"
              type="text"
              required
              sx={{ width: "100%", marginBottom: "1rem" }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Phone"
              // value="+49 __ ___ __"
              type="text"
              required
              sx={{ width: "100%", marginBottom: "1rem" }}
            />
            <TextField
              id="outlined"
              label="Image"
              type="text"
              required
              sx={{ width: "100%", marginBottom: "1rem" }}
            />
          </Box>
          <Box>
            <Button variant="contained" fullWidthuß>
              Create Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </Formik>
  );
};

export default FirmsModal;
