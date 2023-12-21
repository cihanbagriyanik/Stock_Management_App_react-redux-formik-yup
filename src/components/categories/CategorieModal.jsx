import React from "react";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import { Box, Button, MenuItem, Modal, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useSelector } from "react-redux";

import useCategoriesCall from "../../hooks/useCategoriesCall";

const CategorieModal = ({ open, handleClose, info, setInfo }) => {
  // const { categories, brands } = useSelector((state) => state.categories);
  const { createCategories, updateCategories } = useCategoriesCall();

  const handleChange = (e) => {
    // console.log(e.target.id);
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info._id) {
      updateCategories("categories", info);
    } else {
      createCategories("categories", info);
    }

    handleClose();
  };
  console.log(info);
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
