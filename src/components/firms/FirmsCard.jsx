import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useAuthCall from "../../hooks/useAuthCall";

const FirmsCard = () => {
  const {listFirms} = useAuthCall()
  console.log(listFirms.data);
  return (
    {data.map((a) => {
    <Card sx={{ maxWidth: 380, boxShadow: "3px 3px 15px gray" }} key={a.id}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {a.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {a.address}
        </Typography>
      </CardContent>

      <CardMedia
        sx={{ height: 140 }}
        image={a.image}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {a.phone}
        </Typography>
      </CardContent>

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
    })}
  );
};

export default FirmsCard;
