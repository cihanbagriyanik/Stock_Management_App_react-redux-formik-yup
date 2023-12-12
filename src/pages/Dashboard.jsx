// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import useAuthCall from "../hooks/useAuthCall";

// function Dashboard() {
//   const { logOut } = useAuthCall();

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             STOCK APP
//           </Typography>
//           <Button color="inherit" onClick={logOut}>
//             Logout
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default Dashboard;

import * as React from "react";
// import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useAuthCall from "../hooks/useAuthCall";
import LogoutIcon from "@mui/icons-material/Logout";

import AssessmentTwoToneIcon from "@mui/icons-material/AssessmentTwoTone";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import StoreTwoToneIcon from "@mui/icons-material/StoreTwoTone";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import { Grid, Paper, makeStyles, styled } from "@mui/material";


const drawerWidth = 240;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Dashboard(props) {
  const { logOut } = useAuthCall();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {/* <List> */}

      {/* 
        const theme = useTheme();
        const iconStyle = {   }
        const iconStyle = {   "&:hover:{   } } 
      */}

      <ListItemButton
        component="a"
        href="#"
        sx={{
          borderRadius: "15px",
          "&:hover": {
            backgroundColor: "rgb(69, 79, 91)",
            color: "white",
          },
          "&:focus, &:active": {
            backgroundColor: "rgb(22, 28, 36)",
            color: "white",
          },
        }}
      >
        <ListItemIcon>
          <AssessmentTwoToneIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton component="a" href="#">
        <ListItemIcon>
          <AddShoppingCartSharpIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Purchases" />
      </ListItemButton>

      <ListItemButton component="a" href="#">
        <ListItemIcon>
          <ShoppingCartCheckoutIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Sales" />
      </ListItemButton>

      <ListItemButton component="a" href="#">
        <ListItemIcon>
          <BusinessTwoToneIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Firms" />
      </ListItemButton>

      <ListItemButton component="a" href="#">
        <ListItemIcon>
          <StoreTwoToneIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Brands" />
      </ListItemButton>

      <ListItemButton component="a" href="#">
        <ListItemIcon>
          <Inventory2TwoToneIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItemButton>
      {/* <Divider /> */}
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Stock Management App
          </Typography>
          <Box>
            <Button color="inherit" onClick={logOut}>
              Logout
              <LogoutIcon sx={{ marginLeft: "7px" }} />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Box>
          <Typography
            variant="h4"
            component="h1"
            color="error"
            sx={{ textAlign: "center", marginBottom:"3rem" }}
          >
            Dashboard
          </Typography>

          <Box sx={{ width: "100%" }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 3 }}>
              <Grid xs={4} >
                <Item>1</Item>
              </Grid>
              <Grid xs={4}>
                <Item>2</Item>
              </Grid>
              <Grid xs={4}>
                <Item>3</Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// MyDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

export default Dashboard;
