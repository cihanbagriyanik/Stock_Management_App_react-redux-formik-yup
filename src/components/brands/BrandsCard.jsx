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

import loadingGif from "../../assets/loading.gif";

const BrandsCard = ({ handleOpen, setInfo }) => {
  const { brandsList, removeBrand } = useBrandsCall();
  const { brands, loading } = useSelector((state) => state?.brands);

  // console.log(brands);

  useEffect(() => {
    brandsList("brands");
  }, []);

  return (
    <>
      {loading ? (
        <img src={loadingGif} alt="loading..." width={500} />
      ) : (
        brands.map((a) => {
          return (
            <Card
              sx={{
                width: 390,
                height: 390,
                boxShadow: "3px 3px 15px gray",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              key={a._id}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {a.name}
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
                title="img"
                component="img"
              />

              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                disableSpacing
              >
                <Box sx={{ padding: "2rem" }}>
                  <Button
                    size="small"
                    onClick={() => {
                      handleOpen();
                      setInfo({
                        id: a._id,
                        name: a.name,
                        image: a.image,
                      });
                    }}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    size="small"
                    onClick={() => removeBrand("brands", a._id)}
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

export default BrandsCard;
