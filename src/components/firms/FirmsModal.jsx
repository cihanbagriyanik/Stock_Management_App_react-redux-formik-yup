import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import useStockCall from "../../hooks/useFirmsCall";

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

const FirmsModal = ({ open, handleClose, info, setInfo }) => {
  // console.log(info);
  const { createFirm, updateFirm } = useStockCall();

  const handleChange = (e) => {
    // console.log(e.target.id);
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    if (info.id) {
      //put
      updateFirm("firms", info);
    } else {
      //post
      createFirm("firms", info);
    }
    handleClose();
  };

  // console.log(info);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginBottom: "1rem",
          }}
        >
          <TextField
            label="Firm Name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            value={info.name}
            required
            onChange={handleChange}
          />
          <TextField
            label="Firm Address"
            name="address"
            id="address"
            type="text"
            variant="outlined"
            value={info.address}
            required
            onChange={handleChange}
          />
          <TextField
            label="Firm Phone"
            name="phone"
            id="phone"
            type="text"
            variant="outlined"
            value={info.phone}
            required
            onChange={handleChange}
          />
          <TextField
            label="Firm Logo"
            name="image"
            id="image"
            type="text"
            variant="outlined"
            value={info.image}
            required
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained" fullWidth>
            {info.id ? "Update Firm" : "Create Firm"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FirmsModal;
