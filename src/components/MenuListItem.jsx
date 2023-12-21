import React from "react";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Box } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";

import { useNavigate, useLocation } from "react-router-dom";

const icon = (name) => `/assets/navbar/${name}.svg`;
const links = [
  {
    // icon:"/assets/navbar/ic.analytics.svg",
    icon: icon("ic_analytics"),
    title: "Dashboard",
    url: "/stock",
  },
  {
    title: "Purchases",
    icon: icon("purchase"),
    url: "/stock/purchases/",
  },
  {
    title: "Sales",
    icon: icon("sales"),
    url: "/stock/sales/",
  },
  {
    title: "Firms",
    icon: icon("firms"),
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    icon: icon("brand"),
    url: "/stock/brands/",
  },
  {
    title: "Products",
    icon: icon("ic_cart"),
    url: "/stock/products/",
  },
];

const MenuListItems = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  //   console.log(pathname);

  const iconStyle = {
    cursor: "pointer",
    color: "secondary.main",
    borderRadius: "1rem",

    ":hover": {
      backgroundColor: "secondary.main",
      color: "white",
    },
  };

  const selectedStyle = {
    cursor: "pointer",
    backgroundColor: "secondary.second",
    borderRadius: "1rem",
    "&:hover": {
      backgroundColor: "secondary.main",
      color: "secondary.second",
    },
    color: "white",
  };

  return (
    <div>
      <Toolbar />
      <List>
        {links.map((link, index) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton
              onClick={() => navigate(link.url)}
              sx={link.url == pathname ? selectedStyle : iconStyle}
            >
              <ListItemIcon sx={{ color: "inherit" }}>
                <Box
                  sx={{
                    //   backgroundImage: `url(${link.icon})`,
                    width: 24,
                    height: 24,
                    //   marginRight: 2,
                    bgcolor: "currentcolor",
                    mask: `url(${link.icon}) no-repeat center / contain`,
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
