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
import { Box } from "@mui/material";
import useFirmsCall from "../../hooks/useFirmsCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Image } from "@mui/icons-material";

const FirmsCard = () => {
  const { firmsList } = useFirmsCall();
  const { firms } = useSelector((state) => state.firms);

  // console.log(firms);

  useEffect(() => {
    firmsList();
  }, []);

  return (
    <>
      {firms.map((a) => {
        return (
          <Card
            sx={{
              maxWidth: 400,
              boxShadow: "3px 3px 15px gray",
            }}
            key={a._id}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {a.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {a.address}
              </Typography>
            </CardContent>

            <CardMedia
              sx={{
                height: 140,
                width: 350,
                margin: "auto",

                // border: "1px solid red",
              }}
              image={a.image}
              title="image"
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Phone: {a.phone}
              </Typography>
            </CardContent>

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

export default FirmsCard;
