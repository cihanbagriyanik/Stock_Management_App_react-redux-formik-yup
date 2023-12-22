import * as React from "react";

import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { btnStyle } from "../../styles/globalStyle";

import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";

import { useSelector } from "react-redux";

import useStockCall from "../../hooks/useCategoriesCall";
import { CleaningServices } from "@mui/icons-material";

export default function CategorieTable({ setOpen, info, setInfo }) {
  const { categories } = useSelector((state) => state.categories);
  // console.log(categories);
  const { removeCategories } = useStockCall();

  function getRowId(row) {
    // console.log(row);
    return row._id;
  }

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      minWidth: 50,
      maxWidth: 80,
      headerAlign: "center",
      align: "center",
      flex: 1,
      valueGetter: (params) => params.id.slice(params.id.length - 4),
    },
    {
      field: "createdAt",
      headerName: "Date",
      minWidth: 180,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return new Date(row.createdAt).toLocaleString("de-DE");
      },
    },
    {
      field: "name",
      headerName: "Category Name",
      minWidth: 170,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 90,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { name, _id } }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              setOpen(true);
              setInfo({ name, _id });
            }}
            sx={btnStyle}
          />,
          <GridActionsCellItem
            key={"delete"}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => removeCategories("categories", _id)}
            sx={btnStyle}
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      <DataGrid
        rows={categories}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        autoHeight
        getRowId={getRowId}
        pageSizeOptions={[5, 10, 15, 25, 50]}
        slots={{ toolbar: GridToolbar }}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
