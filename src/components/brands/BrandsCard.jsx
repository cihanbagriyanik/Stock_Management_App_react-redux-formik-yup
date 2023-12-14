import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { Box } from "@mui/material";
import useBrandsCall from "../../hooks/useBrandsCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const BrandsCard = () => {
  const { brandsList } = useBrandsCall();
  const { brands } = useSelector((state) => state.brands);

  console.log(brands);

  useEffect(() => {
    brandsList();
  }, []);

  return (
    <>
      {brands.map((a) => {
        return (
          <Card
            sx={{ maxWidth: 300, boxShadow: "3px 3px 15px gray" }}
            key={a._id}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {a.name}
              </Typography>
            </CardContent>

            <CardMedia
              sx={{ height: 140 }}
              image={a.image}
              title="green iguana"
            />

            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              disableSpacing
            >
              <Box>
                <Button size="small">
                  <EditIcon />
                </Button>
                <Button size="small">
                  <DeleteOutlineIcon />
                </Button>
              </Box>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default BrandsCard;
