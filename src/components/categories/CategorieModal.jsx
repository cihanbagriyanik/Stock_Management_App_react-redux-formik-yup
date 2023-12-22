import React from "react";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import { Box, Button, Modal, TextField } from "@mui/material";

import useCategoriesCall from "../../hooks/useCategoriesCall";

const CategorieModal = ({ open, handleClose, info, setInfo }) => {
  const { createCategories, updateCategories } = useCategoriesCall();

  const handleChange = (e) => {
    // console.log(e.target.value);
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  // console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info?._id) {
      updateCategories("categories", info);
    } else {
      createCategories("categories", info);
    }

    handleClose();
  };
  // console.log(info);
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
            <TextField
              label="Categorie Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info?.name}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained">
              {info?._id ? "Update Categorie" : "Submit Categorie"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default CategorieModal;
