import * as React from "react";

import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { useSelector } from "react-redux";

import useStockCall from "../../hooks/useProductsCall";
import { btnStyle } from "../../styles/globalStyle";

export default function ProductTable() {
  const { products } = useSelector((state) => state.products);

  const { removeProduct } = useStockCall();

  function getRowId(row) {
    // console.log(row);
    return row._id;
  }

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      minWidth: 40,
      maxWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 1,
      valueGetter: (params) => params.id.slice(params.id.length - 4),
    },
    {
      field: "categoryId",
      headerName: "Category",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
      valueGetter: (params) => params.row?.categoryId?.name,
    },
    {
      field: "brandId",
      headerName: "Brand",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
      valueGetter: (params) => params.row?.brandId?.name,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      minWidth: 110,
      headerAlign: "center",
      align: "center",
      editable: false,
      flex: 0.8,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        // console.log(params)
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => removeProduct("products", params?.id)}
        />
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={getRowId}
        pageSizeOptions={[5, 10, 15, 25, 50]}
        slots={{ toolbar: GridToolbar }}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
