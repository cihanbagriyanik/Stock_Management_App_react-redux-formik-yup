import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const BrandsCard = () => {
  return (
    <Card sx={{ maxWidth: 300, boxShadow: "3px 3px 15px gray" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>

      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />

      <CardActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        disableSpacing
      >
        <Button size="small">
          <EditIcon />
        </Button>
        <Button size="small">
          <DeleteOutlineIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default BrandsCard;
