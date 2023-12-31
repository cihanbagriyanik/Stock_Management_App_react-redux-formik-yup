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
import useFirmsCall from "../../hooks/useFirmsCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import loadingGif from "../../assets/loading.gif";

const FirmsCard = ({ handleOpen, setInfo }) => {
  const { firmsList, removeFirm } = useFirmsCall();
  const { firms, loading } = useSelector((state) => state.firms);

  // console.log(firms);

  useEffect(() => {
    firmsList("firms");
  }, []);

  return (
    <>
      {loading ? (
        <img src={loadingGif} alt="loading..." width={500} />
      ) : (
        firms.map((a) => {
          return (
            <Card
              sx={{
                width: 390,
                height: 390,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "0.5rem",
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
                  width: 170,
                  margin: "auto",
                  objectFit: "contain",
                }}
                image={a.image}
                title="image"
                component="img"
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
                  <Button
                    size="small"
                    onClick={() => {
                      handleOpen();
                      setInfo({
                        id: a._id,
                        name: a.name,
                        phone: a.phone,
                        address: a.address,
                        image: a.image,
                      });
                    }}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    size="small"
                    onClick={() => removeFirm("firms", a._id)}
                  >
                    <DeleteOutlineIcon />
                  </Button>
                </Box>
              </CardActions>
            </Card>
          );
        })
      )}
    </>
  );
};

export default FirmsCard;
